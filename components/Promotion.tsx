
import React from 'react';
import { ArrowLeft, Sparkles, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Promotion: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-body">
      
      {/* Header Section */}
      <div className="bg-brand-dark pt-32 pb-20 px-6 text-center rounded-b-[3rem] shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-brand-gold/20 rounded-full mb-6 border border-brand-gold/30">
             <Sparkles className="text-brand-gold mr-2" size={20} />
             <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Legacy Benefits</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
            後代優惠
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
            專屬回饋給出生於 birthplan+subscrybebe 孵育服務的寶寶。
            <br/>
            我們重視每一份血脈的傳承，讓您的下一代享有更優越的起跑點。
          </p>

          {/* Important Notice Box */}
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-xl">
             <div className="flex items-center justify-center gap-3 text-brand-gold mb-2">
                <UserCheck size={24} />
                <h3 className="font-bold text-lg tracking-wide">自動升級通知</h3>
             </div>
             <p className="text-white text-sm md:text-base">
               此優惠 <span className="font-bold text-brand-gold underline underline-offset-4">不需要額外申請</span>。
               <br/>
               本公司系統將自動識別顧客身份，並為您直接進行升級。
             </p>
          </div>
        </div>
      </div>

      {/* Promotion Cards Section */}
      <div className="max-w-3xl mx-auto px-6 py-20 -mt-10">
        <div className="space-y-8">

          {/* Plan A Promotion */}
          <div className="rounded-lg overflow-hidden shadow-xl animate-[fadeIn_0.6s_ease-out]">
            {/* Header Label */}
            <div className="bg-white px-6 py-3 border-b border-gray-100">
              <span className="text-[#051628] font-heading font-black text-3xl">A</span>
            </div>
            {/* Content Body */}
            <div className="bg-[#051628] p-8 md:p-10 border-l-4 border-white">
              <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
                B 方案學習補助申請
              </p>
              <p className="text-gray-400 text-sm mt-2">
                選擇 A 方案之客戶，即可免費獲得 B 方案同等級之學習補助資格。
              </p>
            </div>
          </div>

          {/* Plan B Promotion */}
          <div className="rounded-lg overflow-hidden shadow-xl animate-[fadeIn_0.8s_ease-out]">
            {/* Header Label */}
            <div className="bg-white px-6 py-3 border-b border-gray-100">
              <span className="text-[#051628] font-heading font-black text-3xl">B</span>
            </div>
            {/* Content Body */}
            <div className="bg-[#051628] p-8 md:p-10 border-l-4 border-white">
              <div className="space-y-4">
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
                        免費贈送一項 $33,000 基因選擇
                    </p>
                </div>
                <div className="w-12 h-[1px] bg-white/20"></div>
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
                        C 方案教育實驗班考取資格
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                        擁有越級挑戰菁英教育資源的入場券。
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan C Promotion */}
          <div className="rounded-lg overflow-hidden shadow-xl animate-[fadeIn_1.0s_ease-out]">
            {/* Header Label */}
            <div className="bg-white px-6 py-3 border-b border-gray-100">
              <span className="text-[#051628] font-heading font-black text-3xl">C</span>
            </div>
            {/* Content Body */}
            <div className="bg-[#051628] p-8 md:p-10 border-l-4 border-white relative overflow-hidden">
              {/* Subtle gold glow for C */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <p className="text-white text-xl md:text-2xl font-bold tracking-wide leading-relaxed">
                超能力基因抽籤資格，一年抽出三位<br/>
                擁有進入最高階層的機會
              </p>
              <p className="text-brand-gold text-sm mt-4 font-bold tracking-wider uppercase">
                ★ Limited Access
              </p>
            </div>
          </div>

          {/* Plan D Promotion */}
          <div className="rounded-lg overflow-hidden shadow-xl animate-[fadeIn_1.2s_ease-out]">
            {/* Header Label */}
            <div className="bg-white px-6 py-3 border-b border-gray-100 flex justify-between items-center">
              <span className="text-[#051628] font-heading font-black text-3xl">D</span>
            </div>
            {/* Content Body */}
            <div className="bg-[#051628] p-8 md:p-10 border-l-4 border-brand-gold relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <p className="text-brand-gold text-xl md:text-2xl font-bold tracking-wide flex items-center gap-3">
                最新基因第一優先權
              </p>
              <p className="text-gray-400 text-sm mt-2">
                無論未來科技如何演進，您永遠享有最優先的使用權與升級服務。
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
            <Link 
            to="/#plans-section" 
            className="inline-flex items-center text-[#051628] hover:text-brand-blue transition-colors uppercase tracking-widest text-sm font-body font-bold"
            >
            <ArrowLeft className="mr-2" size={20} />
            Back to Plans
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
