
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronDown, CreditCard, Banknote, X, Loader2, CheckCircle, TestTube, Zap, Baby, Brain, ShieldCheck, FileText, AlertTriangle,ArrowLeft } from 'lucide-react';

// Updated Google Apps Script Web App URL provided by user
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const SubscriptionForm: React.FC = () => {
  const { planId, type } = useParams<{ planId: string; type: string }>();
  const navigate = useNavigate();
  
  // Form States
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'cash'>('credit_card');
  const [globalQuantity, setGlobalQuantity] = useState<number>(1);
  const [planQuantities, setPlanQuantities] = useState<Record<string, number>>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false); // New state for T&C
  const [honeypot, setHoneypot] = useState('');

  // PLAN B & C Specific State (Shared config)
  const [planConfig, setPlanConfig] = useState({
    gender: '男',
    bloodType: 'A',
    geneOptions: {
      personality: false,
      height: false,
      skin: false,
      hair: false,
      synthesis: false,
      iq: false,        // Plan C only
      noAllergy: false  // Plan C only
    },
    geneValues: {
      personality: '',
      height: '170~180',
      skin: '黃',
      hair: '黑',
      iq: '110~120'     // Plan C only
    },
    multiples: '1', // '1', '2', '3' (string for select value)
    acceleration: 0 // 0, 5, 10, 15, 20 (weeks)
  });

  // User Info State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardName: ''
  });

  // UI States
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Plan B/C Handlers
  const toggleGeneOption = (key: keyof typeof planConfig.geneOptions) => {
    setPlanConfig(prev => ({
      ...prev,
      geneOptions: {
        ...prev.geneOptions,
        [key]: !prev.geneOptions[key]
      }
    }));
  };

  const updateGeneValue = (key: keyof typeof planConfig.geneValues, value: string) => {
    setPlanConfig(prev => ({
      ...prev,
      geneValues: {
        ...prev.geneValues,
        [key]: value
      }
    }));
  };

  // Data mapping based on type/planId
  const getContent = () => {
    // PLAN C Logic
    if (planId === 'C') {
        return {
          title: 'Plan C 寶寶',
          priceDisplay: '$70,000',
          unit: '/月',
          basePrice: 70000,
          desc: [
            '給孩子最好的起點。全方位的菁英培育與健康守護，從基因到環境的完美佈局。',
            '* 可於右側表單加購基因與孵育選項',
            '* 教育方案細項選擇將於小孩三歲時寄送選單'
          ]
        };
    }

    // PLAN B Logic
    if (planId === 'B') {
      return {
        title: 'Plan B 寶寶',
        priceDisplay: '$50,000',
        unit: '/月',
        basePrice: 50000,
        desc: [
          '專為追求精準與彈性的家庭設計。',
          '在預算內實現基因優化，打造理想未來。',
          '適合想客製化基因但預算有限的客戶。',
          '* 可於右側表單加購基因與孵育選項',
          '* 校內進度加強班科目與才藝選擇將於小孩三歲時寄送選單'
        ]
      };
    }

    // PLAN A Logic
    switch (type) {
      case 'defective':
        return {
          title: '瑕疵寶寶',
          priceDisplay: '$100,000',
          unit: '', // One-time purchase
          basePrice: 100000,
          desc: [
            '本公司唯一買斷制方案',
            '寶寶有孵育不完全、身心障礙寶寶、有天身',
            '疾病等無法出貨的因素',
            '*免費贈送本公司A方案服務'
          ]
        };
      case 'returned':
         return {
          title: '退貨寶寶',
          priceDisplay: '$15,000',
          unit: '/月起',
          basePrice: 0, // Dynamic based on plan
          desc: [
            '一歲以前被退訂的寶寶可以原方案之5折訂閱',
            '寶寶為隨機出貨，無法挑選寶寶特質',
            'A方案：15000/月',
            'B方案：25000/月',
            'C方案：35000/月',
            'D方案：50000/月',
            '* 本訂閱搭配A方案之服務'
          ]
        };
      case 'welfare':
      default:
        return {
          title: '福利寶寶',
          priceDisplay: '$30,000',
          unit: '/月',
          basePrice: 30000,
          desc: [
            '未滿足客戶需求，但無缺陷之寶寶',
            '寶寶為隨機出貨，無法挑選寶寶特質',
            '* 本訂閱搭配A方案之服務'
          ]
        };
    }
  };

  const content = getContent();

  // Price Calculation Logic
  const calculateOrder = () => {
    let items: { name: string; qty: number; unitPrice: number; subtotal: number; type?: 'monthly' | 'onetime' }[] = [];
    let totalQty = 0; // Number of babies
    let oneTimeTotal = 0; // One-time fees
    let monthlyRawTotal = 0; // Recurring monthly fee (before discount)
    let monthlyDiscounted = 0; // Recurring monthly fee (after discount)

    if (planId === 'B' || planId === 'C') {
      // --- PLAN B & C CALCULATION ---
      const babyCount = parseInt(planConfig.multiples);
      totalQty = babyCount;

      // 1. Base Plan Price (Monthly)
      const baseMonthly = content.basePrice; // 50000 for B, 70000 for C
      const baseSubtotal = baseMonthly * babyCount;
      items.push({
        name: `${content.title} 基本月費 (${babyCount}位)`,
        qty: babyCount, 
        unitPrice: baseMonthly,
        subtotal: baseSubtotal,
        type: 'monthly'
      });
      monthlyRawTotal += baseSubtotal;

      // 2. Gene Add-ons (Monthly) - Itemized
      
      // Helper for $15,000 items (B & C)
      const addGeneItem = (name: string, value: string | boolean, price: number) => {
         const sub = price * babyCount;
         const displayVal = typeof value === 'string' && value ? `: ${value}` : '';
         items.push({
            name: `[基因選購] ${name}${displayVal}`,
            qty: babyCount,
            unitPrice: price,
            subtotal: sub,
            type: 'monthly'
         });
         monthlyRawTotal += sub;
      };
      
      // Basic Genes ($15k)
      if (planConfig.geneOptions.personality) addGeneItem('性格指定', planConfig.geneValues.personality, 15000);
      if (planConfig.geneOptions.height) addGeneItem('身高區間', planConfig.geneValues.height, 15000);
      if (planConfig.geneOptions.skin) addGeneItem('膚色', planConfig.geneValues.skin, 15000);
      if (planConfig.geneOptions.hair) addGeneItem('髮色', planConfig.geneValues.hair, 15000);
      if (planConfig.geneOptions.synthesis) addGeneItem('融入自己基因', true, 15000);

      // Advanced Genes ($30k) - Plan C Only
      if (planId === 'C') {
         if (planConfig.geneOptions.iq) addGeneItem('智商指定', planConfig.geneValues.iq, 30000);
         if (planConfig.geneOptions.noAllergy) addGeneItem('保證無過敏體質', true, 30000);
      }

      // 3. One-time Fees
      // Multiples Fee
      if (babyCount > 1) {
        const extraBabies = babyCount - 1;
        const multiplesFee = extraBabies * 100000;
        items.push({
          name: `[一次性] 多胞胎加價 (${extraBabies}位)`,
          qty: extraBabies,
          unitPrice: 100000,
          subtotal: multiplesFee,
          type: 'onetime'
        });
        oneTimeTotal += multiplesFee;
      }

      // Acceleration Fee
      if (planConfig.acceleration > 0) {
        const tiers = planConfig.acceleration / 5;
        const accelerationFee = tiers * 50000;
        items.push({
          name: `[一次性] 加速孵育 (${planConfig.acceleration}週)`,
          qty: 1,
          unitPrice: accelerationFee,
          subtotal: accelerationFee,
          type: 'onetime'
        });
        oneTimeTotal += accelerationFee;
      }

      // Discount Logic for Plan B/C (Applies to Monthly Fee only)
      let discountRate = 1;
      let discountText = '無折扣';
      if (babyCount === 2) {
        discountRate = 0.9;
        discountText = '手足折扣 (兩胎9折)';
      } else if (babyCount >= 3) {
        discountRate = 0.8;
        discountText = '手足折扣 (三胎8折)';
      }

      monthlyDiscounted = Math.round(monthlyRawTotal * discountRate);
      const discountAmount = monthlyRawTotal - monthlyDiscounted;
      
      // Totals
      // "Total Price" in UI usually means Subtotal before discount
      const uiTotalPrice = oneTimeTotal + monthlyRawTotal;
      // "Final Price" means Pay Now
      const finalPrice = oneTimeTotal + monthlyDiscounted;

      return { 
        items, 
        totalQty, 
        totalPrice: uiTotalPrice, 
        discountText, 
        discountAmount, 
        finalPrice,
        monthlyTotal: monthlyDiscounted // This is what recurs
      };

    } else if (type === 'returned') {
        // ... (Existing logic for Returned)
        const planPrices: Record<string, number> = { 'A': 15000, 'B': 25000, 'C': 35000, 'D': 50000 };
        selectedPlans.forEach(pid => {
            const qty = planQuantities[pid] || 1;
            const price = planPrices[pid] || 0;
            const subtotal = price * qty;
            items.push({ name: `${content.title} - ${pid}方案`, qty: qty, unitPrice: price, subtotal: subtotal });
            totalQty += qty;
            monthlyRawTotal += subtotal;
        });
    } else {
        // ... (Existing logic for Welfare/Defective)
        const qty = globalQuantity;
        const subtotal = content.basePrice * qty;
        items.push({ name: content.title, qty: qty, unitPrice: content.basePrice, subtotal: subtotal });
        totalQty += qty;
        
        if (type === 'defective') {
            oneTimeTotal += subtotal; // One time
        } else {
            monthlyRawTotal += subtotal; // Monthly
        }
    }

    // Common Discount Logic for Plan A Types
    let discountRate = 1;
    let discountText = '無折扣';
    if (totalQty === 2) { discountRate = 0.9; discountText = '兩胎 9 折'; } 
    else if (totalQty >= 3) { discountRate = 0.8; discountText = '三胎 8 折'; }

    // Logic for A plans: if defective (onetime), apply discount to onetime. if monthly, apply to monthly.
    if (type === 'defective') {
         const final = Math.round(oneTimeTotal * discountRate);
         return { items, totalQty, totalPrice: oneTimeTotal, discountText, discountAmount: oneTimeTotal - final, finalPrice: final, monthlyTotal: 0 };
    } else {
         const final = Math.round(monthlyRawTotal * discountRate);
         return { items, totalQty, totalPrice: monthlyRawTotal, discountText, discountAmount: monthlyRawTotal - final, finalPrice: final, monthlyTotal: final };
    }
  };

  const orderSummary = calculateOrder();

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'returned' && selectedPlans.length === 0) {
        alert('請至少選擇一個方案');
        return;
    }
    
    // T&C Validation
    if (!agreedToTerms) {
        alert('請閱讀並同意服務條款 (Terms & Conditions) 方可繼續。');
        // Optional: scroll to terms
        const termsElement = document.getElementById('terms-agreement-section');
        if (termsElement) termsElement.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    setShowConfirmation(true);
  };

  const confirmAndPay = async () => {
    if (honeypot) {
        console.log("Bot detected via honeypot.");
        setShowConfirmation(false);
        setShowSuccess(true); // 騙機器人已經成功了
        return; // 重要：直接結束，不執行後面的 fetch
    }

    if (!GOOGLE_SCRIPT_URL) {
        alert("尚未設定後端 API URL，請聯絡管理員。");
        return;
    }

    setIsSubmitting(true);

    // Build the formatted order detail string for Email (Invoice Style)
    let orderDetailString = "";
    
    // 1. Basic configuration info header
    if (planId === 'B' || planId === 'C') {
        orderDetailString += `[基本配置]\n性別: ${planConfig.gender} | 血型: ${planConfig.bloodType} | 多胞胎: ${planConfig.multiples}位\n\n`;
    }

    // 2. Detailed Item List (Invoice Style)
    orderDetailString += `[訂單明細]\n`;
    orderSummary.items.forEach((item, index) => {
        orderDetailString += `${index + 1}. ${item.name} x ${item.qty} -- $${item.subtotal.toLocaleString()}\n`;
    });

    // 3. Financial Summary
    orderDetailString += `\n----------------------------\n`;
    orderDetailString += `小計: $${orderSummary.totalPrice.toLocaleString()}\n`;
    if (orderSummary.discountAmount > 0) {
        orderDetailString += `折扣 (${orderSummary.discountText}): -$${orderSummary.discountAmount.toLocaleString()}\n`;
    }
    orderDetailString += `首期應付總額: $${orderSummary.finalPrice.toLocaleString()}\n`;

    // 4. Recurring Info
    if (orderSummary.monthlyTotal > 0) {
        orderDetailString += `\n*** 之後每月自動扣款: $${orderSummary.monthlyTotal.toLocaleString()} ***`;
    }

    // Construct Email Body for App Script
    const emailBody = `親愛的 ${formData.lastName} ${formData.firstName} 您好：\n\n感謝您的訂閱，我們已收到您的【${content.title}】訂單。\n\n以下是您的詳細訂購內容：\n\n${orderDetailString}\n\n我們會盡快為您安排後續服務流程。\n\nbirthplan+subscrybebe 團隊 敬上`;


    const payload = {
        formType: 'order', // Explicitly identify this as a subscription order (A/B/C)
        timestamp: new Date().toISOString(),
        productType: content.title,
        customerName: `${formData.lastName} ${formData.firstName}`,
        email: formData.email.trim(), // Ensure no spaces
        phone: formData.phone,
        address: formData.address,
        paymentMethod: paymentMethod === 'credit_card' ? '信用卡' : '現金',
        // Send the granular items to the script as well
        items: orderSummary.items,
        totalQuantity: orderSummary.totalQty,
        originalPrice: orderSummary.totalPrice,
        discount: orderSummary.discountText,
        finalPrice: orderSummary.finalPrice,
        // The pre-formatted string for sheet
        orderDetailString: orderDetailString,
        // Email fields for App Script
        emailSubject: `【birthplan+subscrybebe】訂單確認通知 - ${content.title}`,
        emailBody: emailBody
    };

    console.log("Submitting Payload:", payload);

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "text/plain;charset=utf-8", 
            },
        });
        setShowConfirmation(false);
        setShowSuccess(true);
    } catch (error) {
        console.error("Error submitting form", error);
        alert("訂單發送失敗，請稍後再試。");
        setIsSubmitting(false);
    }
  };

  const handleSuccessClick = () => {
      navigate('/');
      window.scrollTo(0, 0);
  };

  const handleMorePlans = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('plans-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); 
  };

  const togglePlan = (id: string) => {
    if (selectedPlans.includes(id)) {
        setSelectedPlans(prev => prev.filter(p => p !== id));
        setPlanQuantities(prev => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
    } else {
        setSelectedPlans(prev => [...prev, id]);
        setPlanQuantities(prev => ({ ...prev, [id]: 1 }));
    }
  };

  const handlePlanQuantityChange = (id: string, value: number) => {
      setPlanQuantities(prev => ({ ...prev, [id]: value }));
  };

  // SUCCESS SCREEN RENDER
  if (showSuccess) {
      return (
          <div 
            onClick={handleSuccessClick}
            className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center cursor-pointer animate-fadeIn px-6 text-center"
          >
              <div className="bg-brand-gold/10 p-6 rounded-full mb-8 animate-bounce">
                  <CheckCircle size={80} className="text-brand-gold" />
              </div>
              <h2 className="text-5xl md:text-6xl text-brand-gold font-heading font-black mb-6 tracking-wide">
                  訂單完成
              </h2>
              <p className="text-2xl md:text-3xl text-white font-body font-light tracking-wider">
                  感謝您的訂閱！<br/>
                  <span className="text-base text-gray-400 mt-2 block">確認信已發送至您的信箱</span>
              </p>
              <p className="text-sm text-gray-400 mt-12 font-body tracking-widest animate-pulse">
                  ( 點擊畫面任一處返回首頁 )
              </p>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white font-body flex items-center justify-center py-20 px-6 lg:px-12 relative">
      
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link 
          to={`/plan/${planId}`} 
          className="inline-flex items-center text-white/50 hover:text-white transition-colors uppercase tracking-widest text-sm font-body"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back
        </Link>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowConfirmation(false)}></div>
              <div className="relative bg-white text-brand-dark w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
                  
                  {/* Header */}
                  <div className="bg-brand-blue text-white p-6 flex justify-between items-center">
                      <h3 className="text-2xl font-heading font-bold">訂單確認</h3>
                      <button onClick={() => setShowConfirmation(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                          <X size={24} />
                      </button>
                  </div>

                  {/* Body */}
                  <div className="p-6 max-h-[70vh] overflow-y-auto">
                      
                      {/* Customer Info */}
                      <div className="mb-6 border-b border-gray-200 pb-4">
                          <h4 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-2">客戶資訊</h4>
                          <p className="font-bold text-lg">{formData.lastName} {formData.firstName}</p>
                          <p className="text-gray-600">{formData.email}</p>
                          <p className="text-gray-600">{formData.address}</p>
                      </div>

                      {/* Order Items */}
                      <div className="mb-6">
                          <h4 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-2">商品明細</h4>
                          <table className="w-full text-sm">
                              <thead>
                                  <tr className="border-b border-gray-200 text-left">
                                      <th className="py-2 text-gray-600">項目</th>
                                      <th className="py-2 text-gray-600 text-center"></th>
                                      <th className="py-2 text-gray-600 text-right">小計</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {orderSummary.items.map((item, idx) => (
                                      <tr key={idx} className="border-b border-gray-100">
                                          <td className="py-2 font-medium">
                                            {item.name}
                                            {item.type === 'onetime' && <span className="text-xs text-brand-gold bg-brand-dark px-1 ml-2 rounded">一次性</span>}
                                          </td>
                                          <td className="py-2 text-center"></td>
                                          <td className="py-2 text-right">${item.subtotal.toLocaleString()}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>

                      {/* Totals */}
                      <div className="flex flex-col items-end space-y-2">
                          <div className="flex justify-between w-full max-w-[250px] text-gray-600">
                              <span>總額 (未折扣):</span>
                              <span>${orderSummary.totalPrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between w-full max-w-[250px] text-green-600">
                              <span>{orderSummary.discountText}:</span>
                              <span>-${orderSummary.discountAmount.toLocaleString()}</span>
                          </div>
                          
                          {/* Special Note for Recurring */}
                          {(orderSummary.monthlyTotal > 0) && (
                             <div className="w-full max-w-[250px] text-xs text-right text-gray-400 mb-2">
                               * 之後每月扣款: ${orderSummary.monthlyTotal.toLocaleString()}
                             </div>
                          )}

                          <div className="flex justify-between w-full max-w-[250px] text-xl font-bold text-brand-dark pt-2 border-t border-gray-200">
                              <span>首期應付:</span>
                              <span>${orderSummary.finalPrice.toLocaleString()}</span>
                          </div>
                      </div>

                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-gray-50 flex gap-4">
                      <button 
                        onClick={() => setShowConfirmation(false)}
                        className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                          返回修改
                      </button>
                      <button 
                        onClick={confirmAndPay}
                        disabled={isSubmitting}
                        className="flex-1 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors flex justify-center items-center shadow-md"
                      >
                          {isSubmitting ? (
                              <>
                                <Loader2 className="animate-spin mr-2" size={20} />
                                處理中...
                              </>
                          ) : (
                              '確認並送出'
                          )}
                      </button>
                  </div>
              </div>
          </div>
      )}


      {/* Content Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Product Info */}
        <div className="flex flex-col items-start sticky top-24">
          <h1 className="text-6xl lg:text-7xl font-heading font-black text-white mb-4 tracking-wide">
            {content.title}
          </h1>
          
          <div className="flex items-baseline mb-8 font-heading">
            <span className="text-4xl lg:text-5xl font-bold text-white tracking-widest">
              {content.priceDisplay}
            </span>
            <span className="text-2xl lg:text-3xl font-bold text-white ml-2">
              {content.unit}
            </span>
          </div>

          {/* White Divider Line */}
          <div className="w-16 h-1 bg-white mb-10"></div>

          <div className="space-y-6 mb-16">
            {content.desc.map((line, index) => (
              <p key={index} className="text-lg font-heading text-gray-200 tracking-wide leading-relaxed whitespace-pre-line">
                {line}
              </p>
            ))}
          </div>

          <button 
            onClick={handleMorePlans}
            className="border border-white text-white px-10 py-3 text-lg hover:bg-white hover:text-brand-dark transition-colors duration-300 font-heading tracking-widest"
          >
            More Plans
          </button>
        </div>

        {/* Right Column: Form */}
        <div className="w-full">
          <form onSubmit={handleInitialSubmit} className="space-y-10">
            
            {/* [新增] 蜜罐陷阱欄位 - 真人看不到，機器人會填寫 */}
            <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}>
                <label htmlFor="website_field">Website</label>
                <input
                    type="text"
                    id="website_field"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {/* Personal Info Section (Common) */}
            <div className="space-y-10">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-sm mb-2 text-white font-light tracking-wide">First name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm mb-2 text-white font-light tracking-wide">Last name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm mb-2 text-white font-light tracking-wide">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* Address */}
                <div className="relative">
                  <label className="block text-sm mb-2 text-white font-light tracking-wide">Address *</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-sm mb-2 text-white font-light tracking-wide">Phone *</label>
                  <div className="flex items-end border-b-2 border-white pb-2">
                    <div className="flex items-center mr-4 cursor-pointer">
                      <span className="text-2xl mr-1">🇹🇼</span>
                      <ChevronDown size={16} className="text-white" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent text-white focus:outline-none p-0 border-none"
                    />
                  </div>
                </div>
            </div>

            {/* -------------------------- PLAN B & C SPECIFIC FIELDS -------------------------- */}
            {(planId === 'B' || planId === 'C') && (
              <div className="space-y-8 pt-4 border-t border-white/20">
                <h3 className="text-brand-gold font-heading font-bold text-xl tracking-widest flex items-center">
                   <TestTube className="mr-2" /> 基因與孵育配置
                </h3>

                {/* Basic Options: Gender & Blood Type */}
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <label className="block text-sm mb-2 text-gray-300 font-light">性別</label>
                      <div className="relative">
                        <select 
                            value={planConfig.gender}
                            onChange={(e) => setPlanConfig({...planConfig, gender: e.target.value})}
                            className="w-full bg-white/5 border border-white/30 rounded px-4 py-2 text-white appearance-none focus:border-brand-gold focus:outline-none"
                        >
                            <option value="男" className="bg-brand-dark">男</option>
                            <option value="女" className="bg-brand-dark">女</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm mb-2 text-gray-300 font-light">血型</label>
                      <div className="relative">
                        <select 
                            value={planConfig.bloodType}
                            onChange={(e) => setPlanConfig({...planConfig, bloodType: e.target.value})}
                            className="w-full bg-white/5 border border-white/30 rounded px-4 py-2 text-white appearance-none focus:border-brand-gold focus:outline-none"
                        >
                            <option value="A" className="bg-brand-dark">A</option>
                            <option value="B" className="bg-brand-dark">B</option>
                            <option value="O" className="bg-brand-dark">O</option>
                            <option value="AB" className="bg-brand-dark">AB</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                      </div>
                   </div>
                </div>

                {/* BASIC Genes ($15k) - Available for B and C */}
                <div>
                    <label className="block text-sm mb-4 text-gray-300 font-light">
                        基礎基因選購 (每項 +$15,000/月，可累加)
                    </label>
                    <div className="space-y-4">
                        
                        {/* Personality */}
                        <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                           <label className="flex items-center cursor-pointer mb-2">
                              <input type="checkbox" checked={planConfig.geneOptions.personality} onChange={() => toggleGeneOption('personality')} className="w-5 h-5 mr-3 accent-brand-gold" />
                              <span className="text-white">性格指定</span>
                           </label>
                           {planConfig.geneOptions.personality && (
                               <input 
                                 type="text" 
                                 placeholder="請輸入一個形容詞 (例: 樂觀)" 
                                 value={planConfig.geneValues.personality}
                                 onChange={(e) => updateGeneValue('personality', e.target.value)}
                                 className="w-full mt-2 bg-transparent border-b border-white/30 py-1 text-sm text-white focus:border-brand-gold focus:outline-none"
                               />
                           )}
                        </div>

                        {/* Height */}
                        <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                           <label className="flex items-center cursor-pointer mb-2">
                              <input type="checkbox" checked={planConfig.geneOptions.height} onChange={() => toggleGeneOption('height')} className="w-5 h-5 mr-3 accent-brand-gold" />
                              <span className="text-white">身高區間</span>
                           </label>
                           {planConfig.geneOptions.height && (
                               <select 
                                    value={planConfig.geneValues.height}
                                    onChange={(e) => updateGeneValue('height', e.target.value)}
                                    className="w-full mt-2 bg-brand-dark border border-white/30 rounded px-3 py-2 text-sm text-white focus:border-brand-gold focus:outline-none"
                               >
                                   <option value="150~160">150 ~ 160 cm</option>
                                   <option value="160~170">160 ~ 170 cm</option>
                                   <option value="170~180">170 ~ 180 cm</option>
                                   <option value="180~190">180 ~ 190 cm</option>
                                   <option value="其他">其他</option>
                               </select>
                           )}
                        </div>

                        {/* Skin Color */}
                        <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                           <label className="flex items-center cursor-pointer mb-2">
                              <input type="checkbox" checked={planConfig.geneOptions.skin} onChange={() => toggleGeneOption('skin')} className="w-5 h-5 mr-3 accent-brand-gold" />
                              <span className="text-white">膚色</span>
                           </label>
                           {planConfig.geneOptions.skin && (
                               <select 
                                    value={planConfig.geneValues.skin}
                                    onChange={(e) => updateGeneValue('skin', e.target.value)}
                                    className="w-full mt-2 bg-brand-dark border border-white/30 rounded px-3 py-2 text-sm text-white focus:border-brand-gold focus:outline-none"
                               >
                                   <option value="白">白</option>
                                   <option value="黃">黃</option>
                                   <option value="黑">黑</option>
                               </select>
                           )}
                        </div>

                         {/* Hair Color */}
                         <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                           <label className="flex items-center cursor-pointer mb-2">
                              <input type="checkbox" checked={planConfig.geneOptions.hair} onChange={() => toggleGeneOption('hair')} className="w-5 h-5 mr-3 accent-brand-gold" />
                              <span className="text-white">髮色</span>
                           </label>
                           {planConfig.geneOptions.hair && (
                               <select 
                                    value={planConfig.geneValues.hair}
                                    onChange={(e) => updateGeneValue('hair', e.target.value)}
                                    className="w-full mt-2 bg-brand-dark border border-white/30 rounded px-3 py-2 text-sm text-white focus:border-brand-gold focus:outline-none"
                               >
                                   <option value="黑">黑</option>
                                   <option value="金">金</option>
                                   <option value="棕">棕</option>
                                   <option value="紅">紅</option>
                               </select>
                           )}
                        </div>

                         {/* Synthesis */}
                         <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                           <label className="flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                checked={planConfig.geneOptions.synthesis} 
                                onChange={() => toggleGeneOption('synthesis')} 
                                className="w-5 h-5 mr-3 accent-brand-gold" 
                              />
                              <span className="text-white">要融入自己基因</span>
                           </label>
                        </div>
                    </div>
                </div>

                {/* ADVANCED Genes ($30k) - Available ONLY for C */}
                {planId === 'C' && (
                    <div className="pt-4 border-t border-white/10">
                        <label className="block text-sm mb-4 text-brand-gold font-bold flex items-center gap-2">
                            <Brain size={16} /> 高階基因選購 (每項 +$30,000/月，可累加)
                        </label>
                        <div className="space-y-4">
                             {/* IQ */}
                            <div className="border border-brand-gold/30 rounded-lg p-4 bg-brand-gold/5">
                                <label className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" checked={planConfig.geneOptions.iq} onChange={() => toggleGeneOption('iq')} className="w-5 h-5 mr-3 accent-brand-gold" />
                                    <span className="text-white font-bold">智商指定</span>
                                </label>
                                {planConfig.geneOptions.iq && (
                                    <select 
                                            value={planConfig.geneValues.iq}
                                            onChange={(e) => updateGeneValue('iq', e.target.value)}
                                            className="w-full mt-2 bg-brand-dark border border-brand-gold/30 rounded px-3 py-2 text-sm text-white focus:border-brand-gold focus:outline-none"
                                    >
                                        <option value="110~120">110 ~ 120</option>
                                        <option value="120~130">120 ~ 130</option>
                                        <option value="130~140">130 ~ 140</option>
                                        <option value="140~150">140 ~ 150</option>
                                    </select>
                                )}
                            </div>

                            {/* No Allergy */}
                            <div className="border border-brand-gold/30 rounded-lg p-4 bg-brand-gold/5">
                                <label className="flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={planConfig.geneOptions.noAllergy} 
                                        onChange={() => toggleGeneOption('noAllergy')} 
                                        className="w-5 h-5 mr-3 accent-brand-gold" 
                                    />
                                    <span className="text-white font-bold flex items-center gap-2">
                                        <ShieldCheck size={16} /> 保證無過敏體質
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* Incubation Customization (Buyout) */}
                <div>
                    <label className="block text-sm mb-4 text-gray-300 font-light">孵育客製 (買斷制)</label>
                    <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
                        
                        {/* Multiples */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-white font-bold flex items-center gap-2">
                                    <Baby size={18} /> 多胞胎配置
                                </label>
                                <span className="text-xs text-brand-gold border border-brand-gold px-2 py-0.5 rounded">享有手足月費折扣</span>
                            </div>
                            <p className="text-xs text-gray-400 mb-3">多一胎加收 $100,000 (一次性)，月費依人數倍增</p>
                            <div className="flex gap-4">
                                {['1', '2', '3'].map(num => (
                                    <label key={num} className={`flex-1 border rounded-lg p-3 text-center cursor-pointer transition-all ${planConfig.multiples === num ? 'bg-white text-brand-dark border-white font-bold' : 'border-white/30 text-white hover:bg-white/10'}`}>
                                        <input 
                                            type="radio" 
                                            name="multiples" 
                                            value={num} 
                                            checked={planConfig.multiples === num} 
                                            onChange={(e) => setPlanConfig({...planConfig, multiples: e.target.value})}
                                            className="hidden"
                                        />
                                        {num === '1' ? '單胞胎' : num === '2' ? '雙胞胎' : '三胞胎'}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Acceleration */}
                        <div className="pt-4 border-t border-white/10">
                             <div className="flex justify-between items-center mb-2">
                                <label className="text-white font-bold flex items-center gap-2">
                                    <Zap size={18} /> 加速孵育
                                </label>
                                <span className="text-brand-gold font-heading">{planConfig.acceleration > 0 ? `+ $${(planConfig.acceleration / 5 * 50000).toLocaleString()}` : '$0'}</span>
                            </div>
                            <p className="text-xs text-gray-400 mb-4">從40週倒扣，每5週為一級距 (+$50,000)</p>
                            
                            <div className="relative w-full h-16">
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="20" 
                                    step="5" 
                                    value={planConfig.acceleration} 
                                    onChange={(e) => setPlanConfig({...planConfig, acceleration: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-gold relative z-10"
                                />
                                <div className="h-6 relative text-xs text-gray-400 mt-2 font-mono select-none">
                                    <span className="absolute left-0 transform -translate-x-0">0週 (標準)</span>
                                    <span className="absolute left-[25%] transform -translate-x-1/2">-5週</span>
                                    <span className="absolute left-[50%] transform -translate-x-1/2">-10週</span>
                                    <span className="absolute left-[75%] transform -translate-x-1/2">-15週</span>
                                    <span className="absolute right-0 transform translate-x-0">-20週 (極速)</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

              </div>
            )}
            {/* -------------------------- END PLAN B & C FIELDS -------------------------- */}


            {/* Checkboxes for Returned Baby (Plan A specific) */}
            {type === 'returned' && (
              <div className="pt-4">
                <label className="block text-sm mb-6 text-white font-light tracking-wide">選擇方案 *</label>
                <div className="space-y-6">
                    {[
                        { id: 'A', price: '$15,000', label: 'A方案' },
                        { id: 'B', price: '$25,000', label: 'B方案' },
                        { id: 'C', price: '$35,000', label: 'C方案' },
                        { id: 'D', price: '$50,000', label: 'D方案' },
                    ].map((plan) => (
                        <div key={plan.id} className="flex items-center justify-between">
                            <label className="flex items-start cursor-pointer group select-none flex-grow">
                                {/* Custom Checkbox */}
                                <div className="relative flex items-center justify-center w-6 h-6 border-2 border-white mr-4 flex-shrink-0 transition-colors group-hover:bg-white/10 mt-1">
                                    <input 
                                        type="checkbox" 
                                        className="absolute opacity-0 w-full h-full cursor-pointer"
                                        checked={selectedPlans.includes(plan.id)}
                                        onChange={() => togglePlan(plan.id)}
                                    />
                                    {selectedPlans.includes(plan.id) && (
                                        <div className="w-3 h-3 bg-white" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white text-lg font-heading leading-none mb-1">{plan.label}</span>
                                    <span className="text-gray-300 font-body text-sm font-light">{plan.price}</span>
                                </div>
                            </label>

                            {/* Quantity Selector for Plan (Appears when checked) */}
                            {selectedPlans.includes(plan.id) && (
                                <div className="flex items-center animate-fadeIn ml-4">
                                    <span className="text-xs text-gray-300 mr-2 font-light">數量</span>
                                    <div className="relative">
                                        <select 
                                            value={planQuantities[plan.id] || 1}
                                            onChange={(e) => handlePlanQuantityChange(plan.id, parseInt(e.target.value))}
                                            className="appearance-none bg-transparent border border-white text-white py-1 pl-2 pr-6 text-sm focus:outline-none cursor-pointer hover:bg-white/10 transition-colors"
                                        >
                                            <option value={1} className="bg-brand-dark text-white">1</option>
                                            <option value={2} className="bg-brand-dark text-white">2</option>
                                            <option value={3} className="bg-brand-dark text-white">3</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-1 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
              </div>
            )}

            {/* Global Quantity for Welfare/Defective (Plan A specific) */}
            {(type !== 'returned' && planId !== 'B' && planId !== 'C') && (
                <div className="pt-4">
                    <label className="block text-sm mb-2 text-white font-light tracking-wide">數量 *</label>
                    <div className="relative w-full md:w-1/3">
                        <select 
                            value={globalQuantity}
                            onChange={(e) => setGlobalQuantity(parseInt(e.target.value))}
                            className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                        >
                            <option value={1} className="bg-brand-dark text-white">1</option>
                            <option value={2} className="bg-brand-dark text-white">2</option>
                            <option value={3} className="bg-brand-dark text-white">3</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                    </div>
                </div>
            )}

            {/* Payment Method Section */}
            <div className="pt-4">
              <label className="block text-sm mb-4 text-white font-light tracking-wide">付款方式 *</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                
                {/* Credit Card Option */}
                <label className="flex items-center cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 border border-white rounded-full mr-3 flex-shrink-0">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="credit_card"
                      checked={paymentMethod === 'credit_card'}
                      onChange={() => setPaymentMethod('credit_card')}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    {paymentMethod === 'credit_card' && <div className="w-3 h-3 bg-white rounded-full" />}
                  </div>
                  <div className="flex items-center text-white font-light group-hover:text-gray-200 transition-colors">
                    <CreditCard size={20} strokeWidth={1.5} className="mr-2" />
                    信用卡付款
                  </div>
                </label>

                {/* Cash Option */}
                <label className="flex items-center cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 border border-white rounded-full mr-3 flex-shrink-0">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={() => setPaymentMethod('cash')}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    {paymentMethod === 'cash' && <div className="w-3 h-3 bg-white rounded-full" />}
                  </div>
                  <div className="flex items-center text-white font-light group-hover:text-gray-200 transition-colors">
                    <Banknote size={20} strokeWidth={1.5} className="mr-2" />
                    現金支付
                  </div>
                </label>
              </div>

              {/* Credit Card Fields - Expandable */}
              <div 
                className={`grid gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
                  paymentMethod === 'credit_card' 
                    ? 'max-h-[400px] opacity-100 mt-6' 
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                {/* Card Number */}
                <div className="relative">
                  <label className="block text-sm mb-2 text-white font-light tracking-wide">Card Number</label>
                  <input 
                    type="text" 
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="0000 0000 0000 0000"
                    required={paymentMethod === 'credit_card'}
                    className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {/* Expiry Date */}
                  <div className="relative">
                    <label className="block text-sm mb-2 text-white font-light tracking-wide">Expiry Date</label>
                    <input 
                      type="text" 
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required={paymentMethod === 'credit_card'}
                      className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-500"
                    />
                  </div>
                  {/* CVC */}
                  <div className="relative">
                    <label className="block text-sm mb-2 text-white font-light tracking-wide">CVC/CVV</label>
                    <input 
                      type="text" 
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      placeholder="123"
                      required={paymentMethod === 'credit_card'}
                      className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="relative">
                  <label className="block text-sm mb-2 text-white font-light tracking-wide">Name on Card</label>
                  <input 
                    type="text" 
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="YOUR NAME"
                    required={paymentMethod === 'credit_card'}
                    className="w-full bg-transparent border-b-2 border-white text-white py-2 focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* --------------------- TERMS & CONDITIONS SECTION --------------------- */}
            <div id="terms-agreement-section" className="border-t border-white/20 pt-8 mt-8">
                <div className="flex items-center gap-2 mb-4">
                    <FileText className="text-brand-gold" size={20} />
                    <h3 className="font-heading font-bold text-white tracking-wider">服務條款同意書 (Terms & Conditions)</h3>
                </div>
                
                {/* Scrollable Terms Box */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 max-h-64 overflow-y-auto mb-6 text-sm text-gray-300 leading-relaxed custom-scrollbar">
                    <div className="space-y-6">
                        <div>
                            <p className="text-white font-bold mb-1">1. 訂閱週期與計費機制</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>計費起始：帳單週期自基因合成第一天開始計算。</li>
                                <li>合約終止：帳單週期截止日為寶寶成長至 18 歲的第 12 個月。期滿後，寶寶將脫離本公司訂閱制度。</li>
                            </ul>
                        </div>
                        
                        <div>
                            <p className="text-white font-bold mb-1">2. 退訂與回收機制 (Cancellation)</p>
                            <div className="flex items-start gap-2 bg-red-900/20 p-2 rounded border border-red-500/20 mb-2">
                                <AlertTriangle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-red-200">
                                    注意：取消訂閱後需持續扶養寶寶直到該期帳單週期結束。週期結束隔日將有專員到府回收小孩。退訂後不可再重新訂閱。
                                </p>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong className="text-gray-200">孵育期 (&lt; 0歲)：</strong> <br/>小於 24 週將以墮胎處理；大於 24 週由專員評估回收價值。</li>
                                <li><strong className="text-gray-200">嬰兒期 (0-1歲)：</strong> <br/>退訂後寶寶將被歸類為「退訂寶寶」供 A 方案選購。</li>
                                <li><strong className="text-gray-200">成長期 (1-18歲)：</strong> <br/>0-12歲將成為基因研究對象；12-18歲將進行強制職訓計畫賺取生活費。</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-white font-bold mb-1">3. 退貨與保固 (Returns)</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>若發現寶寶在一歲以前有品質缺漏、不符合預期，經專員驗證確實後，可無條件退貨，並獲得一次重新訂閱服務之權利。</li>
                                <li>一歲後發現問題，請聯絡專員進行個案補償評估。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Checkbox */}
                <label className="flex items-start cursor-pointer group">
                    <div className="relative flex items-center justify-center w-6 h-6 border-2 border-white mr-4 flex-shrink-0 transition-colors group-hover:border-brand-gold mt-0.5">
                        <input 
                            type="checkbox" 
                            required
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="absolute opacity-0 w-full h-full cursor-pointer"
                        />
                        {agreedToTerms && <div className="w-3 h-3 bg-brand-gold" />}
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                        我已詳閱並同意上述服務條款，充分理解訂閱週期、退訂懲罰條款以及退貨機制。我明白退訂後將不可恢復，且寶寶將由公司進行回收處置。
                    </span>
                </label>
            </div>


            {/* Submit Button */}
            <div className="flex justify-end pt-8">
              <button 
                type="submit"
                className={`border-2 rounded-full px-16 py-3 text-lg font-heading tracking-wider transition-all duration-300 ${
                    agreedToTerms 
                    ? 'border-white text-white hover:bg-white hover:text-brand-dark cursor-pointer' 
                    : 'border-gray-600 text-gray-600 cursor-not-allowed opacity-50'
                }`}
              >
                Order Now
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionForm;
