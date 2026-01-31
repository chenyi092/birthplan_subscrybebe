
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Gavel, Gem, Star, GraduationCap, Stethoscope, CalendarCheck } from 'lucide-react';

const PlanD: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black font-body relative overflow-x-hidden text-white">
      
      {/* ---------------- SECTION 1: HERO (The Portal) ---------------- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-black px-6 py-20">
        
        {/* Dynamic Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        
        {/* Diamond/Gem Geometric Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-20 text-center max-w-5xl mx-auto">

            <h1 className="text-white font-heading font-black text-8xl md:text-[10rem] leading-none mb-6 tracking-tight relative drop-shadow-[0_0_15px_rgba(238,220,91,0.3)]">
                Plan <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-gold to-[#9e8c18]">D</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl text-brand-gold font-heading font-bold tracking-widest mb-10 opacity-0 animate-[slideInUp_1s_ease-out_0.3s_forwards]">
                極致奢華 × 絕對特權 × 無限潛能
            </h2>

            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 opacity-50"></div>

            <p className="text-gray-300 text-lg md:text-xl leading-loose font-light max-w-4xl mx-auto text-justify md:text-center opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                Plan D 是我們為金字塔頂端家庭獻上的極致傑作，象徵著「超級無敵」的全方位服務。
                這不僅是一個培育方案，更是通往未來的特權通行證。
                我們提供市場上唯一的「超能力基因競標」資格，並結合全球頂尖的貴族教育與皇家級醫療資源。
                透過私人管家式的服務，我們為您的孩子打造無人能及的至尊起點，讓卓越成為一種與生俱來的本能。
            </p>
        </div>
      </section>


      {/* ---------------- SECTION 2: THE AUCTION (The Unique Selling Point) ---------------- */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
             <div className="relative bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111] border border-brand-gold/30 p-1 md:p-12 rounded-3xl overflow-hidden group">
                
                {/* Gold Glow Effect on Hover */}
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 p-8 md:p-0">
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <div className="p-4 bg-brand-gold rounded-full text-black shadow-[0_0_20px_rgba(238,220,91,0.4)]">
                                <Gavel size={40} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-heading font-black text-white">
                                超能力基因競標
                            </h3>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 font-light">
                            Plan D 會員獨享權益。您可以參與每季舉行的特殊基因競標會，獲得包括但不限於：
                            超強記憶力、絕對音感、極致體能或其他稀有天賦。
                        </p>
                        <div className="inline-block border border-brand-gold text-brand-gold px-8 py-4 text-xl font-heading font-bold tracking-widest rounded-lg bg-black/50">
                            競標底價 <span className="text-3xl ml-2">$300,000</span>
                        </div>
                    </div>
                    
                    {/* Visual Decor */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Gem size={180} strokeWidth={0.5} className="text-brand-gold/20 animate-[pulse_4s_ease-in-out_infinite]" />
                    </div>
                </div>
             </div>
        </div>
      </section>


      {/* ---------------- SECTION 3: FEATURES (Dark Cards) ---------------- */}
      <section className="bg-black py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-20">
                <h2 className="text-white font-heading font-black text-5xl md:text-6xl mb-4">
                    全方位無微不至照護
                </h2>
                <div className="flex justify-center items-center gap-4 text-brand-gold/60">
                    <div className="h-[1px] w-12 bg-brand-gold/60"></div>
                    <span className="tracking-widest uppercase font-bold text-sm">Royal Treatment</span>
                    <div className="h-[1px] w-12 bg-brand-gold/60"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Card 1: Education */}
                <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-10 hover:border-brand-gold/40 transition-colors duration-500 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <GraduationCap size={36} className="text-brand-gold" />
                        <h3 className="text-3xl font-heading font-black text-white">超級無敵・菁英教育</h3>
                    </div>

                    <div className="space-y-8">
                        {/* Sub-section */}
                        <div>
                            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">學術與升學</h4>
                            <ul className="space-y-3">
                                <ListItem text="課後：國際學校制課程" />
                                <ListItem text="補習：專屬家教團隊、外師辯論教練" />
                                <ListItem text="升學：履歷與作品集顧問團" />
                                <ListItem text="語言：多國語言環境" />
                            </ul>
                        </div>

                        {/* Sub-section */}
                        <div>
                            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">才藝與國際視野</h4>
                            <ul className="space-y-3">
                                <ListItem text="貴族才藝：馬術、擊劍、小提琴、雕塑、高爾夫球" />
                                <ListItem text="營隊：海外夏季學校、冬季國際論壇與志工計畫" />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 2: Medical */}
                <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-10 hover:border-brand-gold/40 transition-colors duration-500 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <Stethoscope size={36} className="text-brand-gold" />
                        <h3 className="text-3xl font-heading font-black text-white">皇家級・醫療照護</h3>
                    </div>

                    <div className="space-y-8">
                         {/* Sub-section */}
                         <div>
                            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">專屬醫療設施</h4>
                            <ul className="space-y-3">
                                <ListItem text="全球 24 小時醫師即時支援" />
                                <ListItem text="私人醫療中心，含小型手術設施" />
                                <ListItem text="私人病房入住權 (不受名額限制)" />
                                <ListItem text="每月一次專業人員到府檢查 (健康/營養/心理)" />
                            </ul>
                        </div>

                        {/* Sub-section */}
                         <div>
                            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">預防與全球保障</h4>
                            <ul className="space-y-3">
                                <ListItem text="每半年一次「全面成長報告」 (含基因潛能/神經發展)" />
                                <ListItem text="醫療團隊與學校協作 (量身打造飲食與運動)" />
                                <ListItem text="海外旅行國際醫療保險 & 外國醫院直掛" />
                                <ListItem text="疫苗優先取得" />
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>


      {/* ---------------- SECTION 4: CONSULTATION CTA ---------------- */}
      <section className="bg-black py-32 px-4 md:px-12 relative border-t border-brand-gold/20">
         
         <div className="max-w-6xl mx-auto bg-[#0a0a0a] relative z-10 shadow-[0_0_50px_rgba(238,220,91,0.1)] flex flex-col md:flex-row overflow-hidden rounded-sm border border-brand-gold/20">
            
            {/* Left: Brand Visual Area (Black & Gold) */}
            <div className="w-full md:w-2/5 bg-black p-12 flex flex-col justify-between text-white relative overflow-hidden border-r border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                
                <div>
                    <h3 className="text-4xl font-heading font-black mb-2 text-brand-gold">D 方案</h3>
                    <div className="h-1 w-12 bg-white mb-6"></div>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">
                        無敵方案。包含競標超能力基因資格，以及最高規格的教育與醫療保健。
                    </p>
                </div>

                <div className="mt-12">
                     <div className="flex items-baseline text-white">
                        <span className="text-2xl font-bold text-brand-gold mr-1">$</span>
                        <span className="text-7xl font-heading font-black text-brand-gold tracking-tighter">100,000</span>
                    </div>
                    <p className="text-brand-gold/70 font-body text-xs mt-2 uppercase tracking-widest">Base Per Month</p>
                </div>
            </div>

            {/* Right: Content & Action (White/Light for contrast) */}
            <div className="w-full md:w-3/5 p-12 md:p-16 flex flex-col justify-between bg-[#111] relative text-white">
                {/* Background Decor */}
                <div className="absolute top-4 right-4 text-9xl text-white/5 font-heading font-black select-none pointer-events-none -z-0">D</div>

                <div className="space-y-6 relative z-10">
                    <p className="text-gray-300 font-light text-lg">
                        由於 Plan D 涉及高度客製化與競標資格審核，本方案不開放直接線上訂閱。
                    </p>
                    <p className="text-gray-300 font-light text-lg">
                        請預約專屬時段，我們的資深顧問將與您進行一對一的面談諮詢，為您詳細說明權益並規劃專屬合約。
                    </p>
                    
                    <div className="flex flex-col gap-2 pt-4">
                        <div className="flex items-center text-brand-gold gap-3">
                            <Star size={16} fill="#EEDC5B" />
                            <span className="text-sm font-bold tracking-wider">需進行資產與背景審核</span>
                        </div>
                        <div className="flex items-center text-brand-gold gap-3">
                            <Star size={16} fill="#EEDC5B" />
                            <span className="text-sm font-bold tracking-wider">每日僅開放 3 組預約</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 relative z-10">
                    <button 
                        onClick={() => navigate('/subscribe/D/consultation')}
                        className="w-full group relative overflow-hidden bg-brand-gold text-black text-lg py-5 transition-all duration-300 font-heading font-bold tracking-widest uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <CalendarCheck size={20} className="group-hover:translate-x-1 transition-transform" />
                            Book Consultation
                        </span>
                    </button>
                    <p className="text-center text-gray-500 text-xs mt-4">預約成功後將有專人與您聯繫確認地點</p>
                </div>
            </div>
         </div>
      </section>

      {/* Back Link */}
      <div className="absolute top-8 left-8 z-50">
        <Link 
          to="/#plans-section" 
          className="inline-flex items-center text-white/40 hover:text-brand-gold transition-colors uppercase tracking-widest text-sm font-body"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back
        </Link>
      </div>

    </div>
  );
};

// Helper List Item Component
const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start text-gray-300 text-sm font-light">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 mr-3 flex-shrink-0 shadow-[0_0_5px_rgba(238,220,91,0.8)]"></div>
        <span className="leading-relaxed">{text}</span>
    </li>
);

export default PlanD;
