
import React from 'react';
import { Dna, GraduationCap, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'gene',
      icon: <Dna size={32} strokeWidth={1.5} />,
      title: '基因客製',
      description: '先進的基因篩檢與客製化服務，為您的孩子確保最健康、最理想的結果。',
      image: "/images/service1.avif"
    },
    {
      id: 'education',
      icon: <GraduationCap size={32} strokeWidth={1.5} />, // This icon is for Education
      title: '教育服務', // Swapped based on screenshot order (Middle one is reading book)
      description: '從課後照護到國際級菁英培育，提供全方位教育與成長方案，啟發每一位孩子的潛能。',
      image: "/images/service2.avif"
    },
    {
      id: 'medical',
      icon: <HeartPulse size={32} strokeWidth={1.5} />,
      title: '醫療保健',
      description: '從基礎健保到專屬健康監控，提供全方位的醫療與照護方案，讓關懷伴隨家庭每一個階段。',
      image: "/images/service3.avif"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-6xl text-brand-blue mb-6">Our Service</h2>
          <p className="font-body font-bold text-sm tracking-widest uppercase">
            本公司訂閱方案提供客製基因、教育服務以及醫療保健三大項目供客戶選擇
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link to={`/service/${service.id}`} key={index} className="flex flex-col group cursor-pointer">
              <div className="rounded-2xl overflow-hidden h-64 mb-6 shadow-md relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/90 p-3 rounded-full text-brand-blue">
                      <ArrowRight size={24} />
                   </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                 <div className="bg-brand-blue text-white p-3 rounded-xl flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                    {service.icon}
                 </div>
                 <h3 className="text-2xl font-heading font-black text-gray-800 group-hover:text-brand-blue transition-colors">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm font-body font-light text-justify">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
