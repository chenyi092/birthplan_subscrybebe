
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Dna, Baby, Clock, GraduationCap, Music, ShieldPlus, Sparkles } from 'lucide-react';

// Placeholder images for the marquee
const MARQUEE_IMAGES = [
  "/images/planb1.avif", 
  "/images/planb2.avif", 
  "/images/planb3.png", 
  "/images/planb4.png", 
];

const PlanB: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden font-body relative">
      
      {/* CSS for Continuous Marquee Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>

      {/* SECTION 1: HERO (Dark Blue) */}
      <section className="relative w-full pt-20 pb-48 bg-[#051628] overflow-visible">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-20">
            
            {/* Header Content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
                <div className="relative">
                    <h1 className="text-brand-gold font-heading font-black text-8xl md:text-9xl leading-none relative z-10">
                        Plan B
                    </h1>
                </div>
                
                <div className="md:text-right mt-8 md:mt-0 md:mb-4">
                    <div className="text-brand-gold text-2xl md:text-3xl font-heading font-bold tracking-widest flex items-center gap-3">
                         <Sparkles size={24} className="text-white animate-pulse" />
                         <span>標準升級 × 選配強化 × 全面照護</span>
                    </div>
                </div>
            </div>

            {/* Description Text */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                <div className="md:col-span-12 md:col-start-1">
                    <p className="text-gray-300 text-lg leading-loose tracking-wide font-light border-l-2 border-brand-gold pl-6">
                        B 方案為品牌的進階核心訂閱服務，提供穩定的孵育品質與基礎優化配置。用戶可依需求搭配彈性升級選項，包含外觀特徵調整、身體條件細化設定，以及孵育流程效率提升模組。此方案支援多胞胎配置與孵育速度升級，可依人生節奏自由調整規格，打造更符合個人需求的生育規劃體驗。設計理念在於將生育過程模組化、服務化，使每一次選擇都更精準且可控。
                    </p>
                </div>
            </div>
        </div>

        {/* OVERLAPPING MARQUEE SECTION */}
        {/* positioned absolutely at the bottom, translating down 50% to overlap the next section */}
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-30">
            <div className="w-full overflow-hidden relative py-4">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#051628] to-transparent z-40 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#051628] to-transparent z-40 pointer-events-none"></div>

                {/* Scrolling Track */}
                <div className="flex w-max animate-scroll gap-8 items-center pl-12">
                    {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, idx) => (
                        <div key={idx} className="relative group">
                             {/* Gold Border Ring */}
                            <div className="absolute inset-0 rounded-full border border-brand-gold/30 scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                            {/* Image Container */}
                            <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex-shrink-0 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-brand-dark">
                                <img src={src} alt="Plan Feature" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: DETAILS GRID (White Background with Texture) */}
      <section className="bg-white pt-56 pb-32 px-6 md:px-12 relative z-10">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#0B213E 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-[1400px] mx-auto relative">
            
            <div className="text-center mb-20">
                <h2 className="text-[#0B213E] font-heading font-black text-6xl mb-4 relative inline-block">
                    方案內容
                    {/* Decorative underline */}
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold"></span>
                </h2>
                <p className="text-gray-500 mt-8 tracking-widest uppercase font-bold text-sm">Features & Customization</p>
            </div>

            {/* Grid Layout with Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Card 1: 基因保證 */}
                <FeatureCard 
                    icon={<ShieldPlus size={32} />}
                    title="基因保證"
                    items={["一胞胎", "智商100-110", "身體健康寶寶", "性別 / 血型"]}
                />

                {/* Card 2: 基因選購 */}
                <FeatureCard 
                    icon={<Dna size={32} />}
                    title="基因選購"
                    items={["性格 / 身高", "膚色 / 髮色", "是否從自己的基因合成", "*逐項累加"]}
                    highlightLast
                />

                {/* Card 3: 孵育客製 */}
                <FeatureCard 
                    icon={<Baby size={32} />}
                    title="孵育客製"
                    items={["*需加購", "多胞胎", "加速孵育"]}
                    highlightFirst
                />

                {/* Card 4: 校內進度 */}
                <FeatureCard 
                    icon={<GraduationCap size={32} />}
                    title="校內進度加強班"
                    customContent={
                        <ul className="space-y-3 text-left">
                            <li className="text-gray-600 text-sm border-b border-gray-100 pb-2">
                                <span className="font-bold text-[#0B213E] block mb-1">課後</span>
                                協助英語檢定
                            </li>
                            <li className="text-gray-600 text-sm">
                                <span className="font-bold text-[#0B213E] block mb-1">補習</span>
                                英語、數學、作文、自然<br/>
                                <span className="text-xs text-gray-400">（每科一週3小時，擇二，可加價全選）</span>
                            </li>
                        </ul>
                    }
                />

                {/* Card 5: 課外活動 */}
                <FeatureCard 
                    icon={<Music size={32} />}
                    title="課外活動"
                    customContent={
                        <ul className="space-y-3 text-left">
                            <li className="text-gray-600 text-sm border-b border-gray-100 pb-2">
                                <span className="font-bold text-[#0B213E] block mb-1">才藝</span>
                                +鋼琴、繪畫、直排輪<br/>
                                <span className="text-xs text-gray-400">（附一門，可加價多選）</span>
                            </li>
                            <li className="text-gray-600 text-sm">
                                <span className="font-bold text-[#0B213E] block mb-1">營隊</span>
                                寒暑假各營隊擇一
                            </li>
                        </ul>
                    }
                />

                {/* Card 6: 進階合作保險 */}
                <FeatureCard 
                    icon={<Clock size={32} />} 
                    title="進階合作保險"
                    items={[
                        "合作民間醫療保險",
                        "部分進口藥可報銷",
                        "每年一次基本全身健檢",
                        "緊急醫療接送每年一次免自費",
                        "心理諮商與物理治療享折扣",
                        "每月1次線上醫師問診"
                    ]}
                />

            </div>
        </div>
      </section>

      {/* SECTION 3: SUBSCRIPTION CARD (Dark Blue) */}
      <section className="bg-[#051628] pt-20 pd-15 px-4 md:px-12 relative border-t border-brand-gold/20">
         
         <div className="max-w-6xl mx-auto bg-white relative z-10 shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm">
            
            {/* Left: Brand Visual Area */}
            <div className="w-full md:w-2/5 bg-[#0B213E] p-12 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                
                <div>
                    <h3 className="text-4xl font-heading font-black mb-2">B方案</h3>
                    <div className="h-1 w-12 bg-brand-gold mb-6"></div>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">
                        專為追求精準與彈性的家庭設計。在預算內實現基因優化，打造理想未來。
                    </p>
                </div>

                <div className="mt-12">
                     <div className="flex items-baseline text-brand-gold">
                        <span className="text-2xl font-bold text-white mr-1">$</span>
                        <span className="text-7xl font-heading font-black tracking-tighter text-white">50,000</span>
                    </div>
                    <p className="text-gray-500 font-body text-xs mt-2 uppercase tracking-widest">Per Month</p>
                </div>
            </div>

            {/* Right: Content & Action */}
            <div className="w-full md:w-3/5 p-12 md:p-16 flex flex-col justify-between bg-white relative">
                {/* Background Decor */}
                <div className="absolute top-4 right-4 text-9xl text-gray-50 font-heading font-black select-none pointer-events-none -z-0">B</div>

                <div className="space-y-5 relative z-10">
                    <CheckItem text="$15000 基因選擇額度" />
                    <CheckItem text="小班制教學環境" />
                    <CheckItem text="英檢班與課後輔導" />
                    <CheckItem text="校內進度加強班" />
                    <CheckItem text="進階合作保險涵蓋" />
                </div>

                <div className="mt-12 relative z-10">
                    <button 
                        onClick={() => navigate('/subscribe/B/standard')}
                        className="w-full group relative overflow-hidden bg-[#0B213E] text-white text-lg py-5 transition-all duration-300 font-heading font-bold tracking-widest uppercase hover:shadow-lg"
                    >
                        <span className="relative z-10 group-hover:text-brand-gold transition-colors">Subscribe Now</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-[#0f2d55]"></div>
                    </button>
                    <p className="text-center text-gray-400 text-xs mt-4">至小孩年滿18歲</p>
                </div>
            </div>
         </div>
      </section>

      {/* Back Link */}
      <div className="absolute top-8 left-8 z-50">
        <Link 
          to="/#plans-section" 
          className="inline-flex items-center text-white/50 hover:text-white transition-colors uppercase tracking-widest text-sm font-body"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back
        </Link>
      </div>

      {/* Back to Plans Link */}
            <div className="bg-brand-dark py-12 flex justify-center">
              <Link 
                to="/#plans-section" 
                className="inline-flex items-center text-white hover:text-brand-gold transition-colors uppercase tracking-widest text-sm font-body"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Plans
              </Link>
            </div>

    </div>
  );
};

// Helper Component for Feature Cards
const FeatureCard: React.FC<{ 
    icon: React.ReactNode, 
    title: string, 
    items?: string[], 
    customContent?: React.ReactNode,
    highlightFirst?: boolean,
    highlightLast?: boolean
}> = ({ icon, title, items, customContent, highlightFirst, highlightLast }) => (
    <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <div className="w-16 h-16 bg-[#0B213E]/5 rounded-full flex items-center justify-center text-[#0B213E] mb-6 group-hover:bg-[#0B213E] group-hover:text-brand-gold transition-colors">
            {icon}
        </div>
        <h3 className="text-2xl font-heading font-black text-[#0B213E] mb-6 group-hover:text-[#051628]">
            {title}
        </h3>
        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
        
        {customContent ? customContent : (
            <ul className="space-y-3">
                {items?.map((item, idx) => {
                    const isHighlighted = (highlightFirst && idx === 0) || (highlightLast && idx === items.length - 1);
                    return (
                        <li key={idx} className={`text-sm flex items-start ${isHighlighted ? 'text-gray-400 italic text-xs' : 'text-gray-600'}`}>
                            {!isHighlighted && <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 mr-2 flex-shrink-0"></span>}
                            {item}
                        </li>
                    );
                })}
            </ul>
        )}
    </div>
);

// Helper for Checklist
const CheckItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center text-gray-700 font-body">
        <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-[#0B213E]">
            <CheckCircle2 size={14} strokeWidth={3} />
        </div>
        <span className="text-lg">{text}</span>
    </div>
);

export default PlanB;
