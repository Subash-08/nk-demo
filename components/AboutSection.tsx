import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Animation Variants ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Sub-components for Clarity ---

// Part 1: Who We Are Section
const WhoWeAre = () => {
    const stats = [
        { value: "100+", label: "Clients" },
        { value: "400+", label: "Projects" },
        { value: "10+", label: "Countries" },
    ];

    const FeatureIcon = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
        <div className="flex items-center gap-3 text-gray-700">
            {icon}
            <span className="font-medium">{text}</span>
        </div>
    );
    
    return (
        <motion.div
            className="bg-blue-100/50 rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            {/* Left Visual Panel */}
            <motion.div className="relative h-[450px] flex items-center justify-center order-2 lg:order-1" variants={itemVariants}>
                <motion.div 
                    className="absolute top-0 left-0 w-full h-[85%] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 transform -rotate-3"
                    initial={{ x: -20, rotate: -5 }}
                    whileInView={{ x: 0, rotate: -3 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                     <div className="h-6 w-full rounded-md bg-gray-100 flex items-center px-2 mb-4 text-sm text-gray-500">Todo</div>
                     <div className="space-y-2">
                        <p>◻️ Perfect Bread Recipe</p>
                        <p>◻️ Feed Starter</p>
                        <p>◻️ Book Tickets to Barcelona</p>
                     </div>
                </motion.div>
                <motion.div 
                    className="relative w-[95%] bg-[#F9E9D8] rounded-2xl shadow-2xl p-6 transform rotate-1"
                    initial={{ x: 20, rotate: 5 }}
                    whileInView={{ x: 0, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                >
                    <div className="h-6 w-full rounded-md bg-white/50 flex items-center px-2 mb-4 text-sm text-gray-600 font-medium">My Sourdough Bread</div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Our Core Philosophy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We believe in crafting digital solutions that are truly transformative. Our approach blends innovative technology with deep market understanding to build lasting value.
                    </p>
                </motion.div>
            </motion.div>

            {/* Right Text Panel */}
            <motion.div className="order-1 lg:order-2" variants={containerVariants}>
                <motion.p className="font-bold tracking-widest uppercase text-blue-800/80 mb-4" variants={itemVariants}>WHO WE ARE</motion.p>
                <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'serif' }} variants={itemVariants}>
                    From Vision to Digital Triumph
                </motion.h2>
                <motion.p className="text-blue-900/80 text-lg mb-8" variants={itemVariants}>
                    At NK Solutions, we're your dedicated digital growth partner. With a passion for innovation and a commitment to measurable results, we empower businesses to thrive in the complex digital landscape.
                </motion.p>
                <motion.div className="grid grid-cols-3 gap-4 mb-10" variants={itemVariants}>
                    {stats.map(stat => (
                        <div key={stat.label}>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
                <motion.button
                    className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full text-base shadow-lg transition-all hover:shadow-xl hover:scale-105"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn more
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

// Part 2: Why Choose Us
const WhyChooseUs = () => {
    // This section's content is now integrated here.
    return (
        <div className="text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
                 <motion.p className="font-bold tracking-widest uppercase text-gray-500 mb-4" variants={itemVariants}>YOUR ADVANTAGE</motion.p>
                 <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'serif' }} variants={itemVariants}>Partnership That Adapts to Your Ambition</motion.h2>
                 <motion.p className="text-gray-600 text-lg max-w-3xl mx-auto" variants={itemVariants}>Don't settle for one-size-fits-all. We tailor our expertise across Web, Data, AI, and Marketing to fit your unique goals, ensuring growth that's truly yours.</motion.p>
            </motion.div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
            >
                {/* Card 1: Integrated Expertise */}
                <motion.div className="bg-blue-100/50 rounded-2xl p-8" variants={itemVariants}>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Integrated Expertise</h3>
                    <p className="text-gray-600 mb-6">Seamless solutions across disciplines.</p>
                     <div className="relative h-48">
                        <div className="absolute top-4 right-4 w-[80%] bg-white p-3 rounded-lg shadow-md text-left text-sm">
                            <p className="font-semibold">Tech & Data Core</p>
                            <p className="text-gray-500">▪️ Web Dev Projects</p>
                            <p className="text-gray-500">▪️ AI / Data Science</p>
                        </div>
                        <div className="absolute top-0 left-0 w-[80%] bg-white p-3 rounded-lg shadow-lg text-left text-sm">
                             <p className="font-semibold">Digital Marketing Hub</p>
                            <p className="text-gray-500">▪️ SEO & Content</p>
                            <p className="text-gray-500">▪️ Paid Media Strategy</p>
                        </div>
                    </div>
                </motion.div>
                {/* Card 2: Transparent Process */}
                <motion.div className="bg-teal-100/50 rounded-2xl p-8" variants={itemVariants}>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Transparent Process</h3>
                    <p className="text-gray-600 mb-6">Clear communication, flexible steps.</p>
                     <div className="relative h-48">
                         <div className="absolute top-0 left-0 w-[70%] bg-white p-3 rounded-lg shadow-lg text-left text-sm">
                            <p className="font-semibold">Project Phases</p>
                            <p className="text-gray-500">{'>'} Discovery</p>
                            <p className="text-gray-500">{'>'} Strategy</p>
                            <p className="text-gray-500">{'>'} Development</p>
                         </div>
                         <div className="absolute top-8 right-0 w-[50%] bg-white p-3 rounded-lg shadow-md text-left text-sm">
                            <p className="font-semibold">Key Focus</p>
                            <p className="text-gray-500">#ROI</p>
                            <p className="text-gray-500">#Scalability</p>
                         </div>
                    </div>
                </motion.div>
                {/* Card 3: Measurable Impact */}
                <motion.div className="bg-green-100/50 rounded-2xl p-8" variants={itemVariants}>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Measurable Impact</h3>
                    <p className="text-gray-600 mb-6">Data-driven results & ROI tracking.</p>
                     <div className="bg-white p-3 rounded-lg shadow-lg text-left text-sm h-48 overflow-hidden">
                        <div className="grid grid-cols-3 gap-2 font-semibold text-gray-500 border-b pb-1 mb-1">
                            <span>Project</span><span>Metric</span><span>Impact</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <span>E-commerce</span><span>Conversion</span><span className="font-semibold text-green-600">+35%</span>
                            <span>AI Leads</span><span>Cost/Lead</span><span className="font-semibold text-green-600">-50%</span>
                             <span>Content SEO</span><span>Traffic</span><span className="font-semibold text-green-600">+70%</span>
                        </div>
                     </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Part 3: Awards Section
const Awards = () => {
    const awards = [
        { icon: "🏆", name: "Top Agency Award", desc: "Digital Agency of the Year" },
        { icon: "🍎", name: "Design Excellence", desc: "Finalist for UX/UI" },
        { icon: "🌐", name: "Webby", desc: "Honoree in Tech" },
        { icon: "💡", name: "Innovation Award", desc: "For AI Automation" },
    ];
    return (
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}
        >
            {awards.map((award) => (
                <motion.div key={award.name} variants={itemVariants}>
                    <div className="text-5xl mb-3 flex justify-center items-center h-16 w-16 mx-auto bg-white rounded-full shadow-md">{award.icon}</div>
                    <h4 className="font-semibold text-gray-800 mt-4">{award.name}</h4>
                    <p className="text-sm text-gray-500">{award.desc}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};


// --- Main Component ---
const AboutSection: React.FC = () => {
    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8 space-y-24 sm:space-y-32">
                <WhoWeAre />
                <WhyChooseUs />
                <Awards />
            </div>
        </div>
    );
};

export default AboutSection;
