import React from 'react';
import { MapPin, Phone, Mail, ThumbsUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <section className="border-t border-black bg-white font-body font-light">
        <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x divide-brand-dark border-b border-b-1 border-brand-dark">
            
            {/* Address */}
            <div className="p-12 flex flex-col items-center text-center h-64 justify-center">
                <MapPin className="w-8 h-8 mb-4 text-gray-800" strokeWidth={1.5} />
                <h3 className="text-xl text-gray-800 mb-4 font-heading font-black">Address</h3>
                <p className="text-gray-600 leading-loose font-body">
                    300新竹市東區<br/>
                    南大路521號
                </p>
            </div>

            {/* Phone */}
            <div className="p-12 flex flex-col items-center text-center h-64 justify-center">
                <Phone className="w-8 h-8 mb-4 text-gray-800" strokeWidth={1.5} />
                <h3 className="text-xl text-gray-800 mb-4 font-heading font-black">Phone</h3>
                <p className="text-gray-600 font-body">
                    0909-770-710
                </p>
            </div>

            {/* Email */}
            <div className="p-12 flex flex-col items-center text-center h-64 justify-center">
                <Mail className="w-8 h-8 mb-4 text-gray-800" strokeWidth={1.5} />
                <h3 className="text-xl text-gray-800 mb-4 font-heading font-black">Email</h3>
                <p className="text-gray-600 font-body">
                    subscrybebe@gmail.com
                </p>
            </div>

            {/* Connect */}
            <div className="p-12 flex flex-col items-center text-center h-64 justify-center">
                <ThumbsUp className="w-8 h-8 mb-4 text-gray-800" strokeWidth={1.5} />
                <h3 className="text-xl text-gray-800 mb-4 font-heading font-black">Connect</h3>
                <div className="flex space-x-3 mt-2">
                    {/* Icons only, removed anchor tags and hover effects */}
                    <div className="bg-black text-white rounded-full p-1"><Facebook size={18} fill="white" /></div>
                    <div className="bg-black text-white rounded-full p-1"><Twitter size={18} fill="white" /></div>
                    <div className="bg-black text-white rounded-full p-1"><Linkedin size={18} fill="white" /></div>
                    <div className="bg-black text-white rounded-full p-1"><Instagram size={18} /></div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default ContactFooter;