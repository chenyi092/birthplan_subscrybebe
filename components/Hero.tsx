import React from 'react';


const Hero: React.FC = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 blur-sm"
        style={{
          backgroundImage: `url('/images/hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decreased overlay opacity to 40% so the image is more visible */}
        <div className="absolute inset-0 bg-[#051628]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto mt-16 w-full flex flex-col">
        {/* Staggered Headers */}
        <h1 className="text-white font-heading font-black text-6xl md:text-8xl mb-2 text-left self-start">
          Subscribe to life
        </h1>
        <h1 className="text-brand-gold font-heading font-black text-6xl md:text-8xl mb-12 text-right self-end">
          Made to order
        </h1>

        {/* Centered Subtext & Button */}
        <div className="text-center mx-auto max-w-2xl">
          <p className="text-white text-lg md:text-xl tracking-wider font-body font-light mb-12 ">
            Where creation meets technology, and dreams take form.
          </p>
          
          <button 
            onClick={scrollToPlans}
            className="border-2 border-white text-white px-10 py-3 rounded-full hover:bg-white hover:text-brand-blue transition-all duration-300 uppercase tracking-widest text-sm font-medium font-body"
          >
            Explore plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;