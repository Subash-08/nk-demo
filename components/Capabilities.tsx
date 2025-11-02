import React from 'react';
import { motion } from 'framer-motion';

const capabilities = {
    "Digital Marketing": [
      { name: "Paid Advertising", icon: "📊", description: "Google Ads, Meta, LinkedIn campaigns" },
      { name: "Funnel Strategy", icon: "🎯", description: "Conversion optimization & user journeys" },
      { name: "Email Automation", icon: "📧", description: "Drip campaigns & behavioral triggers" },
      { name: "Social Growth", icon: "📱", description: "Organic & paid social media strategies" }
    ],
    "Web Development": [
      { name: "React & Next.js", icon: "⚛️", description: "Modern JavaScript frameworks" },
      { name: "Headless CMS", icon: "🔧", description: "Flexible content management systems" },
      { name: "Performance", icon: "⚡", description: "Core Web Vitals optimization" },
      { name: "Accessibility", icon: "♿", description: "WCAG 2.1 compliance & inclusive design" }
    ],
    "Data Analysis": [
      { name: "Dashboards", icon: "📈", description: "Custom analytics & KPI tracking" },
      { name: "Attribution", icon: "🔗", description: "Multi-touch attribution modeling" },
      { name: "Cohort Analysis", icon: "👥", description: "User behavior & retention metrics" },
      { name: "CDP Integration", icon: "🗄️", description: "Customer data platform setup" }
    ],
    "SEO": [
      { name: "Technical SEO", icon: "🔍", description: "Site speed, crawlability & indexing" },
      { name: "Content Strategy", icon: "✍️", description: "Keyword research & content planning" },
      { name: "Link Building", icon: "🔗", description: "Digital PR & authority building" },
      { name: "Local SEO", icon: "📍", description: "Google Business & local search optimization" }
    ]
  };

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Capabilities: React.FC = () => {
  return (
    <section 
      className="bg-white text-gray-900 py-16 sm:py-20 lg:py-24"
      aria-labelledby="capabilities-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h2 
            id="capabilities-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
            variants={itemVariants}
          >
            Full-Stack
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"> Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            From frontend frameworks to backend infrastructure, analytics to automation. We cover every aspect of modern digital growth.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          {Object.entries(capabilities).map(([category, items]) => (
            <motion.div 
              key={category}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item) => (
                  <div 
                    key={item.name}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 group hover:shadow-lg hover:border-sky-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl pt-1 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
