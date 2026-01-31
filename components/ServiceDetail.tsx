
import React, { useEffect } from 'react';
import { ArrowLeft, Dna, GraduationCap, HeartPulse, CheckCircle2, Microscope, Globe, ShieldCheck, Activity, Brain, Award, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ServiceDetailProps {
  type: 'gene' | 'education' | 'medical';
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ type }) => {
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // ----------------------------------------------------------------------
  // 1. GENE CUSTOMIZATION PAGE (Dark Mode, Tech, Neon)
  // ----------------------------------------------------------------------
  if (type === 'gene') {
    return (
      <div className="min-h-screen bg-[#020a13] text-white font-body overflow-x-hidden selection:bg-cyan-500 selection:text-black">
        {/* Tech Background */}
        <div className="fixed inset-0 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a,transparent_70%)] opacity-40"></div>
           <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
           {/* Grid Line Overlay */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 pt-12 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/#service-section" className="group flex items-center text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-sm">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                Back
            </Link>
            <div className="flex items-center gap-2 text-cyan-400 border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-900/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                <Microscope size={16} />
                <span className="text-xs font-bold tracking-wider">PRECISION GENETICS</span>
            </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="animate-[fadeInLeft_1s_ease-out]">
                    <h1 className="text-6xl md:text-7xl font-heading font-black mb-6 md:leading-normal">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Design The</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Masterpiece.</span>
                    </h1>
                    <p className="text-gray-400 text-lg font-light leading-loose max-w-xl mb-10 border-l-2 border-cyan-500/50 pl-6">
                        透過最先進的 CRISPR/Cas9 基因編輯技術與 AI 演算模型，我們將生育的主導權交還給您。從基礎的外觀特徵到高階的天賦潛能，每一個鹼基對的排列，都是為了極致的卓越。
                    </p>
                    <div className="flex flex-wrap gap-8 text-sm font-bold tracking-widest text-gray-500">
                        <div className="flex items-center gap-2 text-cyan-200"><Dna size={18} className="text-cyan-500"/> 99.9% 編輯準確率</div>
                        <div className="flex items-center gap-2 text-cyan-200"><ShieldCheck size={18} className="text-cyan-500"/> 零脫靶風險保證</div>
                    </div>
                </div>
                <div className="relative flex justify-center animate-[fadeInRight_1s_ease-out]">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                         {/* Abstract DNA Circle Visuals */}
                         <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute inset-8 rounded-full border border-blue-500/30 border-b-blue-400 animate-[spin_15s_linear_infinite_reverse]"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <Dna size={140} strokeWidth={0.5} className="text-cyan-400/80 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                         </div>
                         {/* Floating particles */}
                         <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] animate-ping"></div>
                         <div className="absolute bottom-10 right-10 w-1 h-1 bg-blue-400 rounded-full blur-[1px] animate-ping delay-700"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Tiers */}
        <section className="relative z-10 bg-[#030e1a]/80 backdrop-blur-xl border-t border-cyan-900/30 py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-heading font-black mb-4 text-white">客製化層級 <span className="text-cyan-500">Levels</span></h2>
                    <p className="text-gray-500 tracking-widest text-sm uppercase">Customize your legacy</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Level 1: Basic (Plan B) */}
                    <div className="bg-[#051321] border border-cyan-900/30 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Activity size={80} />
                        </div>
                        <div className="text-cyan-400 mb-6 bg-cyan-900/20 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                            <Activity size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">基礎優化</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-gray-800 pb-4">Plan B Available</p>
                        
                        <ul className="space-y-4 text-gray-400 text-sm font-light">
                            <li className="flex items-start gap-3 group-hover:text-gray-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
                                <span><strong className="text-cyan-100 font-normal">性格傾向指定</strong><br/>可選擇如：樂觀、冷靜、外向等特質</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-gray-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
                                <span><strong className="text-cyan-100 font-normal">外觀特徵鎖定</strong><br/>精準控制身高區間、膚色、髮色</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-gray-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
                                <span><strong className="text-cyan-100 font-normal">基因融合演算</strong><br/>完美融合父母優點，修補潛在缺陷</span>
                            </li>
                        </ul>
                    </div>

                    {/* Level 2: Advanced (Plan C) */}
                    <div className="bg-[#051321] border border-blue-600/30 p-8 rounded-2xl hover:border-blue-400/60 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Brain size={80} />
                        </div>
                        <div className="text-blue-400 mb-6 bg-blue-900/20 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                            <Brain size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">高階定序</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-gray-800 pb-4">Plan C Available</p>
                        
                        <ul className="space-y-4 text-gray-400 text-sm font-light">
                            <li className="flex items-start gap-3 group-hover:text-gray-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                                <span><strong className="text-blue-100 font-normal">高智商區間鎖定</strong><br/>優化神經突觸連結，IQ 110-150</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-gray-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                                <span><strong className="text-blue-100 font-normal">免疫系統強化</strong><br/>剔除常見過敏原基因，打造無過敏體質</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-gray-300 transition-colors">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                                <span><strong className="text-blue-100 font-normal">代謝機能優化</strong><br/>提升基礎代謝率，維持理想體態</span>
                            </li>
                        </ul>
                    </div>

                    {/* Level 3: Limit Break (Plan D) */}
                    <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-brand-gold/40 p-8 rounded-2xl hover:border-brand-gold/80 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        {/* Gold lighting effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold/10 rounded-full blur-[50px] pointer-events-none"></div>
                        
                        <div className="text-brand-gold mb-6 bg-brand-gold/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(238,220,91,0.2)]">
                            <Zap size={28} fill="#EEDC5B" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-brand-gold transition-colors">極限突破</h3>
                        <p className="text-xs text-brand-gold/60 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Plan D Auction Only</p>
                        
                        <ul className="space-y-4 text-gray-300 text-sm font-light">
                            <li className="flex items-start gap-3 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shadow-[0_0_8px_rgba(238,220,91,0.8)]"></span>
                                <span><strong className="text-brand-gold font-normal">超憶症 (Hyperthymesia)</strong><br/>大腦海馬迴優化，具備照相式記憶能力</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shadow-[0_0_8px_rgba(238,220,91,0.8)]"></span>
                                <span><strong className="text-brand-gold font-normal">絕對音感 (Absolute Pitch)</strong><br/>聽覺皮層神經網路強化</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shadow-[0_0_8px_rgba(238,220,91,0.8)]"></span>
                                <span><strong className="text-brand-gold font-normal">奧運級體能</strong><br/>紅/白肌纖維黃金比例配置</span>
                            </li>
                            <li className="flex items-start gap-3 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shadow-[0_0_8px_rgba(238,220,91,0.8)]"></span>
                                <span><strong className="text-brand-gold font-normal">稀有天賦競標</strong><br/>依每季釋出的特殊基因庫而定</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // 2. EDUCATION PAGE (Academic, Clean, Navy & Gold)
  // ----------------------------------------------------------------------
  if (type === 'education') {
    return (
      <div className="min-h-screen bg-[#FDFBF7] text-brand-dark font-body overflow-x-hidden selection:bg-brand-blue selection:text-white">
         {/* Header */}
         <header className="pt-12 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/#service-section" className="group flex items-center text-gray-500 hover:text-brand-blue transition-colors uppercase tracking-widest text-sm">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                Back
            </Link>
            <div className="flex items-center gap-2 text-brand-blue border border-brand-blue/20 px-4 py-1 rounded-full bg-white shadow-sm">
                <GraduationCap size={16} />
                <span className="text-xs font-bold tracking-wider">ELITE EDUCATION</span>
            </div>
        </header>

        {/* Hero */}
        <section className="pt-16 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
            <div className="animate-[fadeInUp_1s_ease-out]">
                <h1 className="text-6xl md:text-7xl font-heading font-black mb-8 text-brand-blue">
                    Cultivating <span className="text-brand-gold drop-shadow-sm">Excellence</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-loose font-light mb-12">
                    教育不僅是知識的傳遞，更是階級的傳承。我們提供從幼兒啟蒙到領袖培育的全方位教育方案，依照訂閱層級，為您的孩子鋪設通往世界頂尖學府與社交圈的道路。
                </p>
                <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
            </div>
        </section>

        {/* Timeline / Tracks */}
        <section className="py-20 bg-white border-y border-gray-200/60">
            <div className="max-w-5xl mx-auto px-6">
                
                {/* Track 1 */}
                <div className="flex flex-col md:flex-row gap-8 items-start mb-20 group">
                    <div className="w-full md:w-1/3 text-left md:text-right md:pr-8 md:border-r border-gray-200 group-hover:border-gray-400 transition-colors">
                        <h3 className="text-3xl font-heading font-black text-gray-400 group-hover:text-gray-600 transition-colors">Foundation</h3>
                        <p className="text-sm font-bold text-brand-blue uppercase tracking-widest mt-2">基礎素養</p>
                        <p className="text-xs text-gray-400 mt-2 bg-gray-100 inline-block px-2 py-1 rounded">Plan A / B</p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                            著重於良好的學習習慣養成與基礎才藝啟蒙。透過大班制的安親輔導與團體才藝課，讓孩子在快樂中建立自信，並完成學校課業要求。
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-gray-700">
                            <div className="bg-[#F9F9F9] p-4 rounded border border-gray-100 flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-gray-400"/> 課後安親輔導
                            </div>
                            <div className="bg-[#F9F9F9] p-4 rounded border border-gray-100 flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-gray-400"/> 基礎才藝 (扯鈴/直笛)
                            </div>
                            <div className="bg-[#F9F9F9] p-4 rounded border border-gray-100 flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-gray-400"/> 校內作業指導
                            </div>
                            <div className="bg-[#F9F9F9] p-4 rounded border border-gray-100 flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-gray-400"/> 進階才藝 (鋼琴/繪畫) <span className="text-xs text-brand-gold ml-auto">*Plan B</span>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Track 2 */}
                 <div className="flex flex-col md:flex-row gap-8 items-start mb-20 group">
                    <div className="w-full md:w-1/3 text-left md:text-right md:pr-8 md:border-r border-brand-blue/20 group-hover:border-brand-blue/50 transition-colors">
                        <h3 className="text-3xl font-heading font-black text-brand-blue">Advanced</h3>
                        <p className="text-sm font-bold text-brand-gold uppercase tracking-widest mt-2">雙語菁英</p>
                        <p className="text-xs text-brand-blue/60 mt-2 bg-brand-blue/5 inline-block px-2 py-1 rounded">Plan B / C</p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                            目標接軌國際教育體系。提供全美語或雙語環境，並導入 STEAM 創客教育與一對一學科家教，強化學術競爭力與邏輯思維。
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-gray-700">
                            <div className="bg-blue-50/50 p-4 rounded border border-blue-100 flex items-center gap-3 text-brand-blue">
                                <Award size={16}/> 英檢衝刺班
                            </div>
                            <div className="bg-blue-50/50 p-4 rounded border border-blue-100 flex items-center gap-3 text-brand-blue">
                                <Award size={16}/> 學科家教 (數/理/文)
                            </div>
                            <div className="bg-blue-50/50 p-4 rounded border border-blue-100 flex items-center gap-3 text-brand-blue">
                                <Award size={16}/> STEAM 程式創客教育
                            </div>
                            <div className="bg-blue-50/50 p-4 rounded border border-blue-100 flex items-center gap-3 text-brand-blue">
                                <Award size={16}/> 超前學習 (每科3hr/週) <span className="text-xs bg-brand-blue text-white px-1 rounded ml-auto">Plan C</span>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Track 3 */}
                 <div className="flex flex-col md:flex-row gap-8 items-start group">
                    <div className="w-full md:w-1/3 text-left md:text-right md:pr-8 md:border-r border-brand-gold/30 group-hover:border-brand-gold transition-colors">
                        <h3 className="text-3xl font-heading font-black text-brand-gold text-shadow-sm">Royal & Global</h3>
                        <p className="text-sm font-bold text-black uppercase tracking-widest mt-2">領袖視野</p>
                        <p className="text-xs text-gray-500 mt-2 bg-brand-gold/10 inline-block px-2 py-1 rounded">Plan C / D</p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                            針對未來領袖設計。除了學術成就，更看重社交資本與國際移動力。包含貴族運動、國際營隊與名校升學顧問團。
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-gray-700">
                            <div className="bg-yellow-50/50 p-4 rounded border border-yellow-100 flex items-center gap-3 text-yellow-900 hover:bg-yellow-50 transition-colors">
                                <Globe size={16}/> 貴族運動 (馬術/擊劍/高爾夫)
                            </div>
                            <div className="bg-yellow-50/50 p-4 rounded border border-yellow-100 flex items-center gap-3 text-yellow-900 hover:bg-yellow-50 transition-colors">
                                <Globe size={16}/> 常春藤升學顧問團
                            </div>
                            <div className="bg-yellow-50/50 p-4 rounded border border-yellow-100 flex items-center gap-3 text-yellow-900 hover:bg-yellow-50 transition-colors">
                                <Globe size={16}/> 國際領袖營隊 (歐美)
                            </div>
                            <div className="bg-yellow-50/50 p-4 rounded border border-yellow-100 flex items-center gap-3 text-yellow-900 hover:bg-yellow-50 transition-colors">
                                <Globe size={16}/> 多國語言環境與外師辯論
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // 3. MEDICAL PAGE (Clean, Safe, White & Teal)
  // ----------------------------------------------------------------------
  if (type === 'medical') {
    return (
      <div className="min-h-screen bg-white text-gray-800 font-body overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
         {/* Header */}
         <header className="pt-12 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/#service-section" className="group flex items-center text-gray-400 hover:text-teal-600 transition-colors uppercase tracking-widest text-sm">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                Back
            </Link>
            <div className="flex items-center gap-2 text-teal-600 border border-teal-600/20 px-4 py-1 rounded-full bg-teal-50">
                <HeartPulse size={16} />
                <span className="text-xs font-bold tracking-wider">PREMIUM HEALTHCARE</span>
            </div>
        </header>

        {/* Hero */}
        <section className="pt-16 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-teal-100 shadow-sm">
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
                 
                 <div className="relative z-10 max-w-3xl animate-[fadeIn_1s_ease-out]">
                    <h1 className="text-5xl md:text-6xl font-heading font-black text-teal-900 mb-6">
                        Guardian of Life.
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-teal-600/80 mb-8 tracking-wide">
                        全天候監控 × 預防醫學 × 全球救援
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                        我們深知健康是實現所有天賦的基石。除了基本的醫療保險，我們建立了一套主動式的健康管理系統。從基因層面的疾病預防，到 24 小時的生理數值監控，以及全球範圍的緊急醫療轉送，為您的孩子織就一張滴水不漏的安全網。
                    </p>
                 </div>
            </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                
                {/* Feature 1: Basic */}
                <div className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <ShieldCheck size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-black text-gray-800 mb-2">基礎保障與保險</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-bold">Plan A / B</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light">
                            除了全民健保外，我們與頂級保險公司合作，提供涵蓋進口藥物、特殊療程的商業醫療保險。Plan B 更包含心理諮商與物理治療的費用折抵。
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> 基礎疫苗施打 & 全民健保</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> 年度基礎健檢</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> 進階合作保險 (進口藥/物理治療) <span className="text-xs bg-blue-100 text-blue-600 px-1 rounded ml-2">Plan B</span></li>
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Monitoring */}
                <div className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-500 flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                        <Activity size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-black text-gray-800 mb-2">主動式健康監控</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-bold">Plan C / D</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light">
                            透過穿戴裝置與居家檢測設備，即時上傳生理數據。專屬營養師與醫師團隊會根據數據調整飲食與運動計畫，真正做到預防勝於治療。
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400"/> 24/7 遠端數值監測</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400"/> 每月線上醫師問診</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400"/> 個人健康控管計畫 (飲食/運動)</li>
                        </ul>
                    </div>
                </div>

                 {/* Feature 3: Global Rescue */}
                 <div className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                        <Globe size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-black text-gray-800 mb-2">全球緊急醫療</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-bold">Plan C (Asia) / D (Global)</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light">
                            無論身在何處，若發生緊急狀況，我們將啟動醫療專機轉送至全球頂尖醫院。享有海外醫院直掛權與 VIP 病房優先入住資格。
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> 醫療專機轉送 (Plan C: 亞洲 / Plan D: 全球)</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> 海外頂級醫院直掛權</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500"/> 專屬醫療團隊到府服務 <span className="text-xs bg-black text-brand-gold px-1 rounded ml-2">Plan D</span></li>
                        </ul>
                    </div>
                </div>

                {/* Feature 4: Gene Prevention */}
                <div className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                        <Dna size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-black text-gray-800 mb-2">基因預防醫學</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-bold">Plan D Exclusive</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light">
                            基於全基因組定序 (WGS)，預測潛在遺傳疾病風險，並提前制定干預計畫。包含定期的成長發育評估與神經發展追蹤。
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-400"/> 全基因組健康分析 (WGS)</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-400"/> 神經發展與潛能評估</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-400"/> 私人病房優先入住權</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
      </div>
    );
  }

  return null;
};

export default ServiceDetail;
