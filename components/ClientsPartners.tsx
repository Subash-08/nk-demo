import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Client {
  id: number;
  name: string;
  logo: string;
  category: string;
}

const clients: Client[] = [
  { id: 1, name: "TechFlow", logo: `https://placehold.co/150x60/E9E9E9/949494?text=TechFlow`, category: "Technology" },
  { id: 2, name: "DataViz Pro", logo: `https://placehold.co/150x60/E9E9E9/949494?text=DataViz+Pro`, category: "Analytics" },
  { id: 3, name: "InnovateCorp", logo: `https://placehold.co/150x60/E9E9E9/949494?text=InnovateCorp`, category: "Innovation" },
  { id: 4, name: "GrowthLab", logo: `https://placehold.co/150x60/E9E9E9/949494?text=GrowthLab`, category: "Marketing" },
  { id: 5, name: "CloudSync", logo: `https://placehold.co/150x60/E9E9E9/949494?text=CloudSync`, category: "Cloud Services" },
  { id: 6, name: "DigitalEdge", logo: `https://placehold.co/150x60/E9E9E9/949494?text=DigitalEdge`, category: "Digital" },
  { id: 7, name: "FutureScale", logo: `https://placehold.co/150x60/E9E9E9/949494?text=FutureScale`, category: "Scaling" },
  { id: 8, name: "SmartSolutions", logo: `https://placehold.co/150x60/E9E9E9/949494?text=SmartSolutions`, category: "Solutions" },
  { id: 9, name: "NextGen", logo: `https://placehold.co/150x60/E9E9E9/949494?text=NextGen`, category: "Technology" },
  { id: 10, name: "TechPioneer", logo: `https://placehold.co/150x60/E9E9E9/949494?text=TechPioneer`, category: "Innovation" },
];

const ClientsPartners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various industries
          </p>
        </motion.div>

        {/* Scrolling Logo Carousel - Hidden on small screens */}
        <div className="relative hidden md:block">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                ease: 'linear',
                duration: 40,
                repeat: Infinity,
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-6">
                  <ClientLogo client={client} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Logo Grid for Mobile */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12">
          {clients.slice(0, 6).map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <ClientLogo client={client} />
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-sky-500/5 to-cyan-500/5 border border-sky-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create exceptional digital experiences that drive your business forward.
          </p>
          <motion.button
            className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-sky-500/30"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ClientLogo = ({ client }: { client: Client }) => {
  return (
    <div className="relative group">
      <div className="w-40 h-20 bg-white border border-slate-200 hover:border-sky-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 group-hover:bg-white/80">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-32 max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
        {client.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
      </div>
    </div>
  );
};

export default ClientsPartners;