
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Crown, CalendarCheck, Loader2, ArrowLeft, Shield, Lock } from 'lucide-react';

// Same Google Script URL as SubscriptionForm (The script handles logic branching)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const ConsultationForm: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    assetRange: '',
    preferredDate: '', // Simple text input for date preference
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // [新增] 蜜罐檢查
    if (honeypot) {
        console.log("Bot detected via honeypot.");
        setShowSuccess(true); // 騙機器人成功
        return;
    }
    setIsSubmitting(true);

    // Construct Email Body for Plan D
    const emailBody = `親愛的 ${formData.lastName} ${formData.firstName} 您好：\n\n我們已收到您的 Plan D 頂級方案諮詢預約申請。\n\n--------------------------------\n預約時段意向：${formData.preferredDate}\n資產級距：${formData.assetRange}\n備註事項：${formData.notes || "無"}\n--------------------------------\n\n我們的資深顧問將會在 24 小時內審核您的資格，並透過加密專線或 Email 與您聯繫確認詳細面談地點。\n\n感謝您的耐心等候。\n\nbirthplan+subscrybebe 團隊 敬上`;

    const payload = {
      formType: 'consultation', // Crucial: Tells the backend this is a D plan inquiry
      name: `${formData.lastName} ${formData.firstName}`,
      email: formData.email.trim(), // Trim to ensure valid email format
      phone: formData.phone,
      assetRange: formData.assetRange,
      preferredDate: formData.preferredDate,
      notes: formData.notes,
      // Email fields for App Script
      emailSubject: `【birthplan+subscrybebe】Plan D 諮詢預約確認通知`,
      emailBody: emailBody
    };

    console.log("Submitting Consultation Payload:", payload);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "text/plain;charset=utf-8", 
        },
      });
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("預約請求發送失敗，請致電 0909-770-718。");
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate('/plan/D');
  };

  const handleSuccessClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  if (showSuccess) {
    return (
      <div 
        onClick={handleSuccessClick}
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center cursor-pointer animate-fadeIn px-6 text-center"
      >
        <div className="bg-brand-gold/10 p-6 rounded-full mb-8 animate-[pulse_3s_infinite]">
          <Crown size={80} className="text-brand-gold" />
        </div>
        <h2 className="text-5xl md:text-6xl text-brand-gold font-heading font-black mb-6 tracking-wide">
          預約已送出
        </h2>
        <p className="text-xl md:text-2xl text-white font-body font-light tracking-wider max-w-2xl leading-relaxed">
          您的至尊諮詢請求已進入審核流程。<br/>
          專屬顧問將於 24 小時內透過加密線路與您聯繫。
        </p>
        <div className="w-32 h-[1px] bg-brand-gold/50 my-10"></div>
        <p className="text-sm text-gray-500 font-body tracking-[0.2em] uppercase">
          Click anywhere to return
        </p>
        <p className="text-xs text-gray-600 mt-4 font-body">
          確認信已發送至您的信箱
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-body flex items-center justify-center py-20 px-4 relative">
            
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-gold/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#1a1a1a] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left: Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
            <button onClick={handleBack} className="self-start flex items-center text-gray-500 hover:text-brand-gold mb-12 transition-colors text-sm tracking-widest uppercase">
                <ArrowLeft size={16} className="mr-2" /> Back to Plan D
            </button>

            <h1 className="text-5xl font-heading font-black text-white mb-6 leading-tight">
                Book Your<br/>
                <span className="text-brand-gold">Private</span><br/>
                Consultation
            </h1>
            
            <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                Plan D 方案採邀請制與審核制。
                <br/><br/>
                為了確保基因競標與頂級資源的排他性，我們需要先了解您的基本背景。通過初步審核後，將由總監級顧問為您安排面對面會談。
            </p>

            <div className="space-y-6">
                <div className="flex items-center text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 text-brand-gold">
                        <Shield size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-white">高度隱私保護</p>
                        <p className="text-xs text-gray-500">您的資料將透過軍規加密傳輸</p>
                    </div>
                </div>
                <div className="flex items-center text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 text-brand-gold">
                        <Lock size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-white">資產資格審核</p>
                        <p className="text-xs text-gray-500">需具備參與基因競標之財務能力</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7 bg-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Form Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-10 -mt-10"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

              {/* [新增] 蜜罐陷阱欄位 */}
                <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}>
                    <label htmlFor="website_hp">Website</label>
                    <input
                        type="text"
                        id="website_hp"
                        name="website_hp"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                        <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-black border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-black border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-black border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-black border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2 font-bold flex items-center gap-2">
                        <Crown size={14} /> Asset Verification (USD)
                    </label>
                    <div className="relative">
                        <select 
                            name="assetRange"
                            value={formData.assetRange}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-black border border-brand-gold/30 text-white py-3 px-4 appearance-none focus:outline-none focus:border-brand-gold focus:shadow-[0_0_10px_rgba(238,220,91,0.2)] transition-all rounded-md"
                        >
                            <option value="" className="text-gray-500">Select Asset Range...</option>
                            <option value="1m-5m">$1M - $5M</option>
                            <option value="5m-10m">$5M - $10M</option>
                            <option value="10m-50m">$10M - $50M</option>
                            <option value="50m+">$50M+</option>
                        </select>
                        {/* Custom Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-t-brand-gold border-x-transparent"></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">* 此資訊僅用於資格初審，我們不會進行信用聯徵。</p>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Preferred Date & Time</label>
                    <input 
                        type="text" 
                        name="preferredDate"
                        placeholder="e.g., Weekday afternoons / Next Tuesday"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full bg-black border-b border-white/30 text-white py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder-gray-700"
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Additional Requests</label>
                    <textarea 
                        name="notes"
                        rows={3}
                        placeholder="Any specific gene requirements or questions..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full bg-black border border-white/20 text-white p-3 focus:outline-none focus:border-brand-gold transition-colors rounded-md resize-none placeholder-gray-700"
                    />
                </div>

                <div className="pt-6">
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-gold text-black py-4 font-heading font-bold text-lg uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                         {isSubmitting ? (
                              <>
                                <Loader2 className="animate-spin" size={20} />
                                Processing...
                              </>
                          ) : (
                              <>
                                <CalendarCheck size={20} />
                                Submit Request
                              </>
                          )}
                    </button>
                </div>

            </form>
        </div>

      </div>
    </div>
  );
};

export default ConsultationForm;
