
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

// Baby images
const CAROUSEL_IMAGES = [
  "/images/baby1.png",
  "/images/baby2.png",
  "/images/baby3.png",
  "/images/baby4.png",
  "/images/baby5.png",
];

const PlanA: React.FC = () => {
  const navigate = useNavigate();

  // Carousel State
  const [currAngle, setCurrAngle] = useState(0); // in radians
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Configuration
  // User specified dimensions: Radius 420, Width 450, Height 300
  const radius = 420; 
  const imageWidth = 450; 
  const imageHeight = 300; 

  // Rotate Logic
  const rotateCarousel = (direction: 'left' | 'right') => {
    const angleStep = (2 * Math.PI) / CAROUSEL_IMAGES.length;
    const newAngle = direction === 'left' ? currAngle + angleStep : currAngle - angleStep;
    setCurrAngle(newAngle);
    resetAutoRotate();
  };

  const resetAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    // 6 seconds interval
    autoRotateRef.current = setInterval(() => {
      setCurrAngle(prev => prev - (2 * Math.PI) / CAROUSEL_IMAGES.length);
    }, 4000);
  };

  useEffect(() => {
    resetAutoRotate();
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden font-body">
      
      {/* SECTION 1: HERO & CAROUSEL */}
      <section className="relative w-full py-20 px-4 md:px-0 overflow-hidden bg-[#051628]">
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          
          {/* HEADER TEXT: Absolute Positioned */}
          {/* Y aligned with Plan A top (-mt-10), X aligned with page content end (right-12) */}
          {/* Restored font size to text-3xl based on user request */}
          <h2 className="hidden lg:block absolute -top-10 right-12 z-50 text-3xl font-heading font-black text-brand-gold text-right tracking-wider pointer-events-none">
            基礎生育 × 教育輔助 × 健康守護
          </h2>

          {/* Left Text: Vertical Plan A */}
          {/* z-index 50 ensures it is visually ON TOP of the carousel images */}
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-start items-center h-full z-50 relative pointer-events-none pl-6 -mt-10">
            <h1 className="text-brand-gold font-heading font-black text-[10rem] tracking-tighter opacity-90 leading-none drop-shadow-xl" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              Plan A
            </h1>
          </div>

          {/* Mobile Title & Text */}
          <div className="lg:hidden text-center mb-8 px-6">
            <h1 className="text-brand-gold font-heading font-black text-6xl mb-4">Plan A</h1>
            <h2 className="text-brand-gold font-heading font-bold text-xl mb-6 tracking-wider">
              基礎生育 × 教育輔助 × 健康守護
            </h2>
            <div className="text-white font-body font-light text-sm leading-relaxed space-y-4 text-left">
               <p>
                  A方案為您的家庭提供最完整且可負擔的入門級生育訂閱體驗。無論您選擇瑕疵寶寶、福利寶寶或退貨寶寶，所有寶寶皆享有同等的基礎照護與成長支持。我們以「安全、透明、完整保障」為核心，為您整合教育補強與醫療健康兩大服務系統，使每位寶寶都能在完善環境中穩定成長。
                </p>
                <p>
                  在教育方面，A方案提供課後才藝班、大班制安親班等基礎學習支援，協助孩子完成作業、建立良好才能啟蒙。在健康管理方面，則包含最基本的全民健康保障，讓每位寶寶自訂閱日起，即享有醫療安全網的持續守護。
                </p>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-10 flex flex-col relative z-10 lg:-ml-12 pt-12">
            
            {/* BODY TEXT: Desktop Only */}
            {/* 
                Changes:
                1. Moved Left: ml-10
                2. Moved Down: -mt-6 (was mt-0)
                3. Width: max-w-6xl
                4. Font Size: text-[14px]
                5. Font: Libre Caslon Text (via font-body)
            */}
            <div className="hidden lg:block relative z-40 pointer-events-none text-left ml-10 -mt-6 max-w-6xl">
              <div className="text-white font-body font-light text-[14px] leading-relaxed space-y-6">
                <p>
                  A方案為您的家庭提供最完整且可負擔的入門級生育訂閱體驗。無論您選擇瑕疵寶寶、福利寶寶或退貨寶寶，所有寶寶皆享有同等的基礎照護與成長支持。我們以「安全、透明、完整保障」為核心，為您整合教育補強與醫療健康兩大服務系統。
                </p>
                <p>
                  在教育方面，A方案提供課後才藝班、大班制安親班等基礎學習支援，協助孩子完成作業、建立良好才能啟蒙。在健康管理方面，則包含最基本的全民健康保障，讓每位寶寶自訂閱日起，即享有醫療安全網的持續守護。
                </p>
              </div>
            </div>

            {/* 3D Carousel Container */}
            {/* Moved to mt-[3.75rem] (approx mt-15) as requested to move image down individually but less than mt-20 */}
            <div 
              className="relative w-full h-[500px] flex justify-center items-center mt-2 lg:-ml-20 perspective-[1200px] group"
            >
              
              {/* Click Areas for Control */}
              <div className="absolute left-0 top-0 bottom-0 w-1/4 z-40 cursor-pointer" onClick={() => rotateCarousel('left')} title="Previous"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1/4 z-40 cursor-pointer" onClick={() => rotateCarousel('right')} title="Next"></div>

              {/* Carousel Center Point */}
              <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
                {CAROUSEL_IMAGES.map((src, index) => {
                  // Calculate position
                  const itemAngle = (index * (2 * Math.PI)) / CAROUSEL_IMAGES.length + currAngle;
                  
                  // Position Calculation
                  const x = radius * Math.sin(itemAngle);
                  // z determines depth.
                  const z = radius * Math.cos(itemAngle); 
                  
                  // Tilt Logic:
                  // Positive Z (Front) -> Positive Y (Lower)
                  // Negative Z (Back) -> Negative Y (Higher)
                  // This creates a forward tilt (top is further back)
                  const y = z * 0.12;

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-1000 ease-in-out shadow-2xl bg-transparent"
                      style={{
                        width: `${imageWidth}px`,
                        height: `${imageHeight}px`,
                        // Apply Translation without Rotation
                        transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                        // Z-Index: Text is z-50.
                        // Images range from roughly z=-500 to z=500.
                        // Map -500..500 to 0..20 to stay well below 50.
                        zIndex: Math.floor((z + 600) / 50), 
                        opacity: z < -100 ? 0.8 : 1, // Slight fade for back items
                        filter: z < -100 ? 'brightness(0.7)' : 'brightness(1)',
                      }}
                    >
                      <img src={src} alt={`Baby ${index}`} className="w-full h-full object-cover" />
                      {/* Gradient for depth feeling */}
                      {z < -100 && <div className="absolute inset-0 bg-brand-dark/40" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DETAILS (Cream Background) */}
      <section className="bg-[#FFFDE7] py-24 px-4 md:px-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#051628] font-heading font-black text-5xl md:text-6xl text-center mb-20">
            方案內容
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-heading font-black text-[#051628] mb-6">
                課後才藝團班
              </h3>
              <p className="text-gray-600 font-body font-light max-w-xs mx-auto text-lg">
                扯鈴、直笛（附贈）
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-heading font-black text-[#051628] mb-6">
                大班制安親班
              </h3>
              <p className="text-gray-600 font-body font-light max-w-xs mx-auto text-lg">
                以課業輔導、完成在校作業為主的安親班，含寒暑期
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-heading font-black text-[#051628] mb-6">
                基本全民健保
              </h3>
              <p className="text-gray-600 font-body font-light max-w-xs mx-auto text-lg">
                為每位寶寶提供最必備的健康保障，涵蓋一般門診、住院與基礎醫療服務，確保在日常照護與緊急情況下皆能獲得即時且合規的醫療協助
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUBSCRIPTION CARDS (Dark Background) */}
      <section className="bg-brand-dark pt-24 pd-10 px-4 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Card 1: Defective Baby */}
          <div className="bg-white p-10 flex flex-col items-center text-center shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-3xl font-heading font-black text-gray-800 mb-6 tracking-wide">
              瑕疵寶寶
            </h3>
            <div className="mb-2 font-body">
              <span className="text-xl align-top">$</span>
              <span className="text-6xl font-medium text-gray-800">100,000</span>
            </div>
            <p className="text-gray-500 font-body text-sm mb-8">
              本公司唯一買斷制方案<br/>
              寶寶有孵育不完全、身心障礙寶寶、<br/>
              有天身疾病等無法出貨的因素
            </p>
            <button 
              onClick={() => navigate('/subscribe/A/defective')}
              className="mt-auto w-full bg-brand-dark text-white py-4 px-8 text-lg font-heading tracking-widest hover:bg-black transition-colors"
            >
              Subscribe
            </button>
            <div className="mt-6 flex items-center text-sm text-gray-600 font-body">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              公司免費提供所有A方案基本配套
            </div>
          </div>

          {/* Card 2: Welfare Baby */}
          <div className="bg-white p-10 flex flex-col items-center text-center shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-3xl font-heading font-black text-gray-800 mb-6 tracking-wide">
              福利寶寶
            </h3>
            <div className="mb-2 font-body">
              <span className="text-xl align-top">$</span>
              <span className="text-6xl font-medium text-gray-800">30,000</span>
            </div>
            <p className="text-gray-500 font-body text-sm mb-8">
              每 1 個月<br/><br/>
              孵育成果未滿足客戶需求，<br/>
              但身體機能無缺陷之寶寶
            </p>
            <button 
              onClick={() => navigate('/subscribe/A/welfare')}
              className="mt-auto w-full bg-brand-dark text-white py-4 px-8 text-lg font-heading tracking-widest hover:bg-black transition-colors"
            >
              Subscribe
            </button>
            <div className="mt-6 flex items-center text-sm text-gray-600 font-body">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              搭配A方案基本配套
            </div>
          </div>

           {/* Card 3: Returned Baby */}
           <div className="bg-white p-10 flex flex-col items-center text-center shadow-2xl transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-3xl font-heading font-black text-gray-800 mb-6 tracking-wide">
              退貨寶寶
            </h3>
            <div className="mb-2 font-body">
              <span className="text-xl align-top">$</span>
              <span className="text-6xl font-medium text-gray-800">15,000</span>
            </div>
            <p className="text-gray-500 font-body text-sm mb-8">
              每 1 個月<br/><br/>
              一歲以前被退訂的寶寶可以原方案<br/>
              之5折訂閱<br/>
              A方案：15000/月<br/>
              B方案：25000/月<br/>
              C方案：35000/月<br/>
              D方案：50000/月
            </p>
            <button 
              onClick={() => navigate('/subscribe/A/returned')}
              className="mt-auto w-full bg-brand-dark text-white py-4 px-8 text-lg font-heading tracking-widest hover:bg-black transition-colors"
            >
              Subscribe
            </button>
            <div className="mt-6 flex items-center text-sm text-gray-600 font-body">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              搭配A方案基本配套
            </div>
          </div>

        </div>
      </section>

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

      {/* Back Link up */}
            <div className="absolute top-20 left-8 z-50">
              <Link 
                to="/#plans-section" 
                className="inline-flex items-center text-white/50 hover:text-white transition-colors uppercase tracking-widest text-sm font-body"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back
              </Link>
            </div>

    </div>
  );
};

export default PlanA;
