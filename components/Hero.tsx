import React, { useRef } from 'react';
// FIX: Import `Variants` from `framer-motion` to correctly type the animation variants.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// --- Placeholder Icons ---
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.704 4.122a2 2 0 012.364 0l1.18 1.18a2 2 0 002.828 0l1.18-1.18a2 2 0 012.364 0M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>;
const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const MegaphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.118 2.034 18 3.32 18 4.622v7.755A3.75 3.75 0 0114.25 16h-2.43l-3.36-9.183z" /></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
const AnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>;

// --- Card Data ---
const serviceCards = [
    { id: 1, icon: <RocketIcon />, title: 'AI-Powered Automation', text: 'Streamline workflows.', position: 'top-[15%] left-[10%]' },
    { id: 2, icon: <GlobeIcon />, title: 'Web Development', text: 'Modern, converting websites.', position: 'top-[45%] left-[5%]' },
    { id: 3, icon: <ChartIcon />, title: 'Data Science', text: 'Turn data into decisions.', position: 'top-[75%] left-[12%]' },
    { id: 4, icon: <MegaphoneIcon />, title: 'Digital Marketing', text: 'Performance strategies.', position: 'top-[15%] right-[10%]' },
    { id: 5, icon: <BotIcon />, title: 'Smart Chatbots', text: '24/7 customer engagement.', position: 'top-[45%] right-[5%]' },
    { id: 6, icon: <AnalyticsIcon />, title: 'Instant Analytics', text: 'Real-time business insights.', position: 'top-[75%] right-[12%]' },
];

// --- Animation Variants ---
// FIX: Explicitly type `containerVariants` for type safety.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// FIX: Explicitly typing `itemVariants` with `Variants` resolves the error. It ensures TypeScript
// correctly validates the `transition` object, preventing the `type: 'spring'` from being
// inferred as a generic `string`.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const FloatingCard = ({ card, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, index < 3 ? -200 : 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
    const yFloat = (index % 3) * 10 - 10;
    
    return (
        <motion.div
            ref={ref}
            style={{ x, opacity }}
            className={`absolute ${card.position}`}
            variants={itemVariants}
        >
            <motion.div
              animate={{ y: [yFloat, -yFloat, yFloat] }}
              transition={{ duration: 3 + index * 0.5, ease: 'easeInOut', repeat: Infinity }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-900/5 w-64">
                  <div className="flex items-center gap-4">
                      {card.icon}
                      <div>
                          <h3 className="text-gray-900 font-semibold">{card.title}</h3>
                          <p className="text-gray-500 text-sm">{card.text}</p>
                      </div>
                  </div>
              </div>
            </motion.div>
        </motion.div>
    )
}

const Hero: React.FC = () => {
    const heroRef = useRef(null);
  
  return (
    <section ref={heroRef} className="relative overflow-hidden bg-slate-50 py-24 sm:py-32 lg:py-48">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
            <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-gray-600">
                <span className="text-amber-400">★★★★★</span>
                <span>Trusted by 500,000+ professionals</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tighter max-w-4xl">
                Build, Automate & Grow Your Digital Future
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                We empower your business with digital marketing, AI automation, and modern web solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 204, 0, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all"
                >
                    Start Your Journey
                </motion.button>
            </motion.div>
        </motion.div>
      </div>

       {/* --- Floating Cards for Desktop --- */}
      <motion.div 
        className="hidden lg:block absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
       >
        {serviceCards.map((card, index) => (
          <FloatingCard key={card.id} card={card} index={index} />
        ))}
      </motion.div>

       {/* --- Stacked Cards for Mobile --- */}
       <div className="lg:hidden container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceCards.map(card => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-900/5"
              >
                  <div className="flex items-center gap-4">
                      {card.icon}
                      <div>
                          <h3 className="text-gray-900 font-semibold">{card.title}</h3>
                          <p className="text-gray-500 text-sm">{card.text}</p>
                      </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Hero;