import React from 'react';
// FIX: Import `Variants` from `framer-motion` to explicitly type animation variants.
import { motion, Variants } from 'framer-motion';

// Data for the process steps from the user prompt
const processSteps = [
  {
    icon: "💡",
    panelTitle: "Calendar",
    processStep: "Step 1: Discover",
    contentFocus: "Deep Dive Workshops: We start with comprehensive audits and strategy sessions to define clear, measurable objectives."
  },
  {
    icon: "📐",
    panelTitle: "Tasks",
    processStep: "Step 2: Strategize",
    contentFocus: "Custom Blueprint: Deliverables include technology recommendations, execution timelines, and a prioritized action plan."
  },
  {
    icon: "🛠️",
    panelTitle: "Journal",
    processStep: "Step 3: Implement",
    contentFocus: "Agile Execution: Rapid development cycles, constant communication, and continuous A/B testing across all channels."
  },
  {
    icon: "📈",
    panelTitle: "Reminders",
    processStep: "Step 4: Optimize",
    contentFocus: "Continuous Improvement: Post-launch monitoring, data-driven adjustments, and ongoing scaling for sustained success."
  }
];

// Animation variants
// FIX: Explicitly type `containerVariants` with `Variants` for type safety.
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// FIX: Explicitly typing `itemVariants` with `Variants` resolves the error. It ensures TypeScript
// correctly validates the `transition` object, preventing `ease: "easeOut"` from being
// inferred as a generic `string`.
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Process: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div 
          className="bg-amber-100 rounded-3xl p-8 md:p-12 lg:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <p className="text-yellow-800 font-bold tracking-widest uppercase mb-4">
                PLAN
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight" style={{fontFamily: 'serif'}}>
                Planning that doesn't feel like work
              </h2>
              <p className="text-yellow-900/80 text-lg mb-8">
                Keep your ideas and tasks together where they belong. We follow a structured process to keep your best thinking connected to what needs to get done.
              </p>
              <motion.button
                className="bg-white text-yellow-900 font-bold px-8 py-3 rounded-full text-base shadow-lg transition-all hover:shadow-xl hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.button>
            </motion.div>
            
            {/* Right Column: Grid of Panels */}
            <motion.div 
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 flex flex-col min-h-[260px] sm:min-h-[280px]"
                  variants={itemVariants}
                >
                    <div className="flex-shrink-0 flex items-center gap-3 text-gray-700 font-semibold mb-4">
                        <div className="text-2xl">{step.icon}</div>
                    </div>
                    <div className="flex-grow flex flex-col justify-end">
                        <div>
                            <h3 className="text-gray-900 font-bold text-lg mb-2">{step.processStep}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.contentFocus}</p>
                        </div>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;