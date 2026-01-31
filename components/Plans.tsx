
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isBestValue?: boolean;
}

const plansData: Plan[] = [
  {
    id: 'A',
    name: 'A方案',
    price: '30,000',
    description: '多種福利寶寶可供選擇 點入可查看詳細介紹 最低30000/月起',
    features: ['課後才藝團班', '大班制安親班', '基本全民健保'],
  },
  {
    id: 'B',
    name: 'B方案',
    price: '50,000',
    description: '適合想客製化基因但預算有限的客戶',
    features: ['$15000基因選擇', '小班制', '英檢班', '校內進度加強班', '進階合作保險'],
    isBestValue: true,
  },
  {
    id: 'C',
    name: 'C方案',
    price: '70,000',
    description: '推薦給想客製多樣基因及對孩子教育環境有所要求的客戶',
    features: ['$30000基因選擇', '超前學習輔導', '一對一家教', '全美教育環境', '個人健康控管'],
  },
  {
    id: 'D',
    name: 'D方案',
    price: '100,000',
    description: '無敵方案 內含競標超能力基因 並提供最高規格的教育方案及醫療保健',
    features: ['超能力基因競標資格', '應有盡有的教育資源', '全方位無微不至照護'],
  },
];

const Plans: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-12 pb-24 px-4 md:px-8 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto bg-white shadow-2xl p-8 md:p-16">
        <div className="container mx-auto">
          <h2 className="text-center font-heading font-black text-6xl text-brand-text mb-12">
            Plans
          </h2>
          
          <div className="text-center mb-16 text-gray-600 text-sm space-y-2 max-w-3xl mx-auto font-body font-light">
            <p>我們提供多種月費與買斷制方案，滿足不同層級的客製化需求</p>
            <p>從基礎健康寶寶、到外觀基因微調、都能依您的期望靈活訂製。</p>
            <p>每個方案皆以月費為主，並可搭配進階的加購項目，如多胞胎方案、加速孵育、專屬競標基因等。</p>
            <p>顧客可以自由組合、加購，打造屬於自己的理想家庭藍圖。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {plansData.map((plan) => (
              <div 
                key={plan.id} 
                className="relative bg-white border border-gray-200 p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                {plan.isBestValue && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white text-xs px-4 py-1 uppercase tracking-widest font-body z-10">
                    最超值
                  </div>
                )}

                <h3 className="text-xl font-heading font-black mb-2 text-gray-800">{plan.name}</h3>
                <div className="flex items-baseline md:text-right mb-4 font-body">
                  <span className="text-lg align-top">$</span>
                  <span className="text-5xl font-medium text-gray-800 ">{plan.price}</span>
                  <p className="text-xs text-gray-500 mb-0 font-body">起</p>
                </div>
                <p className="text-xs text-gray-500 mb-4 font-body">每 1 個月</p>
                
                <p className="text-sm text-gray-600 mb-8 min-h-[60px] font-body">
                  {plan.description}
                </p>

                <button 
                  onClick={() => navigate(`/plan/${plan.id}`)}
                  className="w-full bg-brand-blue text-white py-3 text-sm rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors mb-8 font-body"
                >
                  Learn more
                </button>

                <div className="border-t border-gray-300 pt-6 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-brand-blue mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-light font-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
