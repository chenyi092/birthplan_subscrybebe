
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Globe, HeartPulse, ShieldPlus, Sparkles, CheckCircle2, Crown, Star } from 'lucide-react';

const PlanC: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden font-body relative">
      
      {/* SECTION 1: HERO - Centered "Elite" Layout */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-[#051628] px-6 md:px-12 py-20 overflow-hidden">
        
        {/* Abstract Background - Gold Glow for Premium Feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

        <div className="relative z-20 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-gold/30 rounded-full text-brand-gold text-xs tracking-[0.2em] uppercase mb-8 bg-brand-dark/50 backdrop-blur-md">
                <Crown size={14} />
                <span>The Ultimate Choice</span>
            </div>

            <h1 className="text-white font-heading font-black text-8xl md:text-9xl mb-6 tracking-tight relative">
                Plan <span className="text-brand-gold text-shadow-glow">C</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl text-brand-gold font-heading font-bold tracking-wider mb-8">
                菁英培育 × 卓越基因 × 頂級醫療
            </h2>

            <div className="w-24 h-1 bg-brand-gold mx-auto mb-10"></div>

            <p className="text-gray-300 text-lg md:text-xl leading-loose font-light max-w-3xl mx-auto text-justify md:text-center">
                C 方案專為追求卓越的家庭打造，是本公司最高規格的訂閱服務（除競標方案外）。
                <br className="hidden md:block" />
                我們整合了 Plan B 的所有優點，並大幅升級基因精準度與後天資源。從 IQ 鎖定到海外頂級醫療，從全美語環境到領袖營隊，這是一場從基因到環境的完美佈局，為孩子預約一個領袖級的未來。
            </p>
        </div>

        {/* Floating Icons visual */}
        <div className="absolute top-1/4 left-10 md:left-20 opacity-20 hover:opacity-50 transition-opacity duration-1000">
             <Brain size={80} className="text-white" />
        </div>
        <div className="absolute bottom-1/4 right-10 md:right-20 opacity-20 hover:opacity-50 transition-opacity duration-1000">
             <HeartPulse size={80} className="text-white" />
        </div>
      </section>


      {/* SECTION 2: DETAILS GRID - Unified White Cards */}
      <section className="bg-white py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
            
            <div className="text-center mb-20">
                <h2 className="text-[#051628] font-heading font-black text-5xl md:text-6xl mb-4">
                    全方位菁英配置
                </h2>
                <p className="text-gray-500 tracking-widest uppercase font-bold text-sm">
                    包含 Plan B 所有功能並全面升級
                </p>
            </div>

            {/* Grid Layout - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1: Gene */}
                <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-[#051628] rounded-full flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                        <Brain size={32} />
                    </div>
                    <h3 className="text-3xl font-heading font-black text-[#051628] mb-2">卓越基因</h3>
                    <p className="text-brand-gold font-bold text-sm mb-6">$30,000 / 項</p>
                    
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Plan C 獨享升級</span>
                            <ul className="space-y-3">
                                <ListItem text="IQ 110 - 150 (高智商區間)" highlight />
                                <ListItem text="保證無過敏體質" highlight />
                            </ul>
                        </div>
                        <div className="border-t border-gray-100 pt-6">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">包含 Plan B 基礎選購($15,000)</span>
                            <ul className="space-y-2 text-gray-600">
                                <ListItem text="性格 / 身高區間" />
                                <ListItem text="膚色 / 髮色" />
                                <ListItem text="融入父母基因合成" />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Column 2: Education */}
                <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-[#051628] rounded-full flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                        <Globe size={32} />
                    </div>
                    <h3 className="text-3xl font-heading font-black text-[#051628] mb-2">菁英教育</h3>
                    <p className="text-brand-gold font-bold text-sm mb-6">全美語 × 領袖培育</p>
                    
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Plan C 獨享升級</span>
                            <ul className="space-y-3">
                                <ListItem text="外師全美語環境" highlight />
                                <ListItem text="STEAM 創客課程" highlight />
                                <ListItem text="兩科超前學習 (每科3hr/週)" highlight noStar/>
                                <ListItem text="一對一家教輔導" highlight />
                                <ListItem text="定期成果發表、國內展覽比賽培育" highlight noStar/>
                                <ListItem text="國際冬、夏令營" highlight />
                                <ListItem text="基礎才藝 (小提琴、芭蕾、程式設計)" highlight noStar />
                            </ul>
                        </div>
                        <div className="border-t border-gray-100 pt-6">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">包含 Plan B 基礎資源</span>
                            <ul className="space-y-2 text-gray-600">
                                <ListItem text="小班制與英檢班" />
                                <ListItem text="校內進度加強" />
                                <ListItem text="基礎才藝 (鋼琴、繪畫、直排輪)" />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Column 3: Medical */}
                <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-[#051628] rounded-full flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                        <ShieldPlus size={32} />
                    </div>
                    <h3 className="text-3xl font-heading font-black text-[#051628] mb-2">頂級醫療</h3>
                    <p className="text-brand-gold font-bold text-sm mb-6">全人照護 × 海外轉送</p>
                    
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Plan C 獨享升級</span>
                            <ul className="space-y-3">
                                <ListItem text="海外醫療轉送 (亞洲全額)" highlight />
                                <ListItem text="熱門醫師優先看診權" highlight />
                                <ListItem text="年度高階健康檢查" highlight noStar/>
                                <ListItem text="專屬團隊 (營養師/教練/心理師)" highlight />
                                <ListItem text="個人健康控管" highlight />
                            </ul>
                        </div>
                        <div className="border-t border-gray-100 pt-6">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">包含 Plan B 基礎保障</span>
                            <ul className="space-y-2 text-gray-600">
                                <ListItem text="進階合作保險" />
                                <ListItem text="線上醫師問診" />
                                <ListItem text="緊急醫療接送" />
                            </ul>
                        </div>
                    </div>
                </div>

                 {/* Buyout Section (Full Width) */}
                 <div className="md:col-span-3 mt-8 bg-gray-50 border border-gray-200 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-brand-dark rounded-full text-brand-gold">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 text-lg">加購與買斷選項</h3>
                            <p className="text-sm text-gray-500">多胞胎配置 ($100,000/胎) 與 加速孵育 ($50,000/級距)</p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-sm font-medium text-gray-600">
                        <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">至多三胞胎</span>
                        <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">至多加速20週</span>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* SECTION 3: SUBSCRIPTION CTA - Replicating Plan B Style */}
      <section className="bg-[#051628] pt-32 pd-24 px-4 md:px-12 relative border-t border-brand-gold/20">
         
         <div className="max-w-6xl mx-auto bg-white relative z-10 shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm">
            
            {/* Left: Brand Visual Area (Dark Blue) */}
            <div className="w-full md:w-2/5 bg-[#0B213E] p-12 flex flex-col justify-between text-white relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                
                <div>
                    <h3 className="text-4xl font-heading font-black mb-2 text-white">C方案</h3>
                    <div className="h-1 w-12 bg-brand-gold mb-6"></div>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">
                        給孩子最好的起點。全方位的菁英培育與健康守護，從基因到環境的完美佈局。
                    </p>
                </div>

                <div className="mt-12">
                     <div className="flex items-baseline text-brand-gold">
                        <span className="text-2xl font-bold mr-1">$</span>
                        <span className="text-7xl font-heading font-black tracking-tighter">70,000</span>
                    </div>
                    <p className="text-gray-500 font-body text-xs mt-2 uppercase tracking-widest">Per Month</p>
                </div>
            </div>

            {/* Right: Content & Action (White) */}
            <div className="w-full md:w-3/5 p-12 md:p-16 flex flex-col justify-between bg-white relative">
                {/* Background Decor */}
                <div className="absolute top-4 right-4 text-9xl text-gray-50 font-heading font-black select-none pointer-events-none -z-0 opacity-10">C</div>

                <div className="space-y-5 relative z-10">
                    <CheckItem text="可於右側表單加購基因與孵育選項" />
                    <CheckItem text="教育方案細項選擇將於小孩三歲時寄送選單" />
                    <CheckItem text="包含所有 B 方案基礎福利" />
                </div>

                <div className="mt-12 relative z-10">
                    <button 
                        onClick={() => navigate('/subscribe/C/standard')}
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

// Helper List Item Component
const ListItem: React.FC<{ text: string, highlight?: boolean, noStar?: boolean }> = ({ text, highlight, noStar }) => (
    <li className={`flex items-start text-sm ${highlight ? 'text-[#051628] font-bold' : 'text-gray-500'}`}>
        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0 ${highlight ? 'bg-brand-gold' : 'bg-gray-300'}`}></div>
        {text}
        {/* 只有在 highlight 為真，且 noStar 為假 (或未定義) 時才顯示星星 */}
        {highlight && !noStar && <Star size={12} className="ml-2 text-brand-gold fill-brand-gold mt-1" />}
    </li>
);

// Helper for Checklist in CTA
const CheckItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center text-gray-700 font-body">
        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center mr-4 flex-shrink-0 text-[#0B213E]">
            <CheckCircle2 size={14} strokeWidth={3} />
        </div>
        <span className="text-lg">{text}</span>
    </div>
);

export default PlanC;
