import React from 'react';
import { ClipboardList, Settings, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading font-black text-6xl text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-500 text-lg font-body font-light mb-20">簡單三步驟即完成訂閱手續</p>

        <div className="flex flex-col md:flex-row justify-center items-start max-w-5xl mx-auto relative">
            {/* Line connector - positioned to cut through the center of the 32-unit (8rem) circles */}
            <div className="hidden md:block absolute top-[4rem] left-0 w-full h-[1.5px] bg-gray-600 -z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-1/3 px-4 mb-12 md:mb-0 bg-transparent">
                <div className="w-32 h-32 rounded-full bg-brand-blue flex items-center justify-center mb-8 border-4 border-white shadow-lg">
                    <ClipboardList className="text-white w-12 h-12" />
                </div>
                <h3 className="text-3xl font-heading font-black text-gray-800 mb-4">Select Plan</h3>
                <p className="text-gray-500 font-body font-light text-sm">選擇一種最適合您的方案</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-1/3 px-4 mb-12 md:mb-0 bg-transparent">
                <div className="w-32 h-32 rounded-full bg-brand-blue flex items-center justify-center mb-8 border-4 border-white shadow-lg">
                    <Settings className="text-white w-12 h-12" />
                </div>
                <h3 className="text-3xl font-heading font-black text-gray-800 mb-4">Customize</h3>
                <p className="text-gray-500 font-body font-light text-sm">與我們的專業團隊合作，為你量身訂製專屬的基因偏好</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-1/3 px-4 bg-transparent">
                <div className="w-32 h-32 rounded-full bg-brand-blue flex items-center justify-center mb-8 border-4 border-white shadow-lg">
                    <CheckCircle2 className="text-white w-12 h-12" />
                </div>
                <h3 className="text-3xl font-heading font-black text-gray-800 mb-4">subscribe</h3>
                <p className="text-gray-500 font-body font-light text-sm">訂閱後將以全方位的支援與專屬照護團隊，開啟您的育兒旅程</p>
            </div>
        </div>
        
        <div className="mt-20 text-right text-xs text-gray-500 font-body">
            *訂閱D方案者除外，詳情請見方案介紹
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;