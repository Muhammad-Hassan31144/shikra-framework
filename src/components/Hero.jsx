import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-cyan-500/20 rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center relative z-10"
      >
        {/* Announcement Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 mb-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full"
        >
          <Zap className="w-4 h-4 text-yellow-500 mr-2" />
          <span className="text-sm text-gray-300">Revolutionary Ransomware Analysis Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Specialized in Hunting
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent glow-text">
            Intelligent Ransomware
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          SHIKRA automates every critical step of ransomware analysis - from VM setup to actionable reports. 
          Combat the #1 threat after social engineering with enterprise-grade automation.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Shield, text: "Anti-VM Evasion" },
            { icon: Target, text: "MITRE ATT&CK Mapping" },
            { icon: Zap, text: "Automated Analysis" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg"
            >
              <feature.icon className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' 
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-xl flex items-center space-x-2"
          >
            <span>Start Analysis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-6">Trusted by cybersecurity teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Enterprise Security', 'SOC Teams', 'Threat Hunters', 'Incident Response'].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ opacity: 1 }}
                className="text-gray-500 font-semibold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

