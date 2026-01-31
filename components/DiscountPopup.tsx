
import React, { useState, useEffect } from 'react';
import { X, Users, Sparkles, Baby } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DiscountPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Timer to open popup after 5 seconds
    const timer = setTimeout(() => {
      // Optional: Check sessionStorage if you only want it to show once per session
      // const hasShown = sessionStorage.getItem('hasShownDiscountPopup');
      // if (!hasShown) {
         setIsOpen(true);
         // sessionStorage.setItem('hasShownDiscountPopup', 'true');
      // }
      
      // For now, based on request, it just shows after 5 seconds
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGoToPlans = () => {
    setIsOpen(false);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('plans-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-brand-dark border-2 border-brand-gold w-full max-w-md p-8 rounded-xl shadow-2xl transform transition-all duration-500 scale-100 animate-[fadeIn_0.5s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-brand-gold/20 p-4 rounded-full border border-brand-gold/50">
            <Users size={48} className="text-brand-gold" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white tracking-wide">
            手足折扣
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto my-4"></div>
          
          <div className="space-y-6 py-4">
            <div className="flex items-center justify-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <Baby className="text-brand-gold" size={28} />
              <div className="text-left">
                <p className="text-white text-xl font-heading font-bold tracking-wider">兩胎九折</p>
                <p className="text-gray-400 text-xs font-body uppercase tracking-widest">Buy 2 get 10% off</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex">
                <Baby className="text-brand-gold" size={24} />
                <Baby className="text-brand-gold -ml-2" size={24} />
              </div>
              <div className="text-left">
                <p className="text-white text-xl font-heading font-bold tracking-wider">三胎八折</p>
                <p className="text-gray-400 text-xs font-body uppercase tracking-widest">Buy 3 get 20% off</p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 font-body font-light text-sm leading-relaxed px-4">
            讓家庭更圓滿，我們為您的多胎計畫提供專屬優惠支持。
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button 
            onClick={handleGoToPlans}
            className="w-full bg-brand-gold text-brand-dark font-heading font-bold py-3 rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles size={18} />
            立即查看方案
          </button>
        </div>

      </div>
    </div>
  );
};

export default DiscountPopup;
