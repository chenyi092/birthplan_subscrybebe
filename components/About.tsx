import React from 'react';

const About: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-brand-dark pt-24 pb-6 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto bg-white shadow-2xl">
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 px-8 py-20 md:p-24 flex flex-col justify-center items-start">
            <h2 className="text-6xl md:text-7xl font-heading font-black text-gray-800 mb-10 w-full">
              ABOUT
            </h2>
            
            <div className="space-y-6 text-gray-600 font-body font-light leading-relaxed text-justify tracking-wide text-sm md:text-base max-w-xl">
              <p>
                birthplan+subscrybebe是一家專注於基因訂製與人工孵育技術的生物科技公司，並推出訂閱製服務，讓您的生育及養育變得更有保障。
              </p>
              <p>
                透過先進的基因設計與人工孵育艙系統，我們為每一位客戶提供從胚胎生成、成長照護到教育規劃的一站式方案。
                我們的使命，是讓生育不再受性別、身體條件或身份所限，讓每個人都能自由選擇想要的家庭樣貌。
              </p>
              <p>
                生命，不再只是誕生，而是一場被精心設計的創造。
              </p>
            </div>

            <button 
              onClick={scrollToContact}
              className="mt-12 px-12 py-3 border border-gray-800 text-gray-800 text-sm uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body"
            >
              Contact
            </button>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 h-[500px] lg:h-auto bg-gray-100 relative">
              <img 
                src="/images/about.avif" 
                alt="about baby" 
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;