import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Building, 
  Users,
  Award,
  TrendingUp,
  Clock
} from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Lead Threat Researcher",
      company: "CyberDefense Labs",
      avatar: "SC",
      rating: 5,
      content: "SHIKRA has revolutionized our ransomware analysis workflow. What used to take our team hours now completes in minutes with far more comprehensive results. The anti-VM evasion capabilities are particularly impressive.",
      metrics: {
        timeSaved: "85%",
        accuracyImproved: "40%",
        label: "Analysis Time Reduction"
      },
      companySize: "Enterprise",
      industry: "Cybersecurity Research"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "SOC Manager",
      company: "SecureBank Financial",
      avatar: "MR",
      rating: 5,
      content: "The automated MITRE ATT&CK mapping and YARA rule generation have been game-changers for our incident response team. SHIKRA's intelligence feeds directly into our SIEM, creating a seamless threat hunting workflow.",
      metrics: {
        timeSaved: "70%",
        accuracyImproved: "60%",
        label: "Incident Response Speed"
      },
      companySize: "Large Enterprise",
      industry: "Financial Services"
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      role: "Principal Security Analyst",
      company: "TechCorp Industries",
      avatar: "JW",
      rating: 5,
      content: "As someone who's analyzed thousands of ransomware samples manually, I can't overstate how much SHIKRA has improved our capabilities. The memory forensics integration catches evasive techniques we would have missed.",
      metrics: {
        timeSaved: "90%",
        accuracyImproved: "55%",
        label: "Detection Rate Improvement"
      },
      companySize: "Mid-Market",
      industry: "Technology"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Security Teams",
      description: "Trust SHIKRA worldwide"
    },
    {
      icon: TrendingUp,
      value: "99.7%",
      label: "Detection Rate",
      description: "Industry-leading accuracy"
    },
    {
      icon: Clock,
      value: "< 20min",
      label: "Average Analysis",
      description: "From sample to report"
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Customer Rating",
      description: "Based on 200+ reviews"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Trusted by Security
            </span>
            <br />
            <span className="text-white">Professionals Worldwide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading cybersecurity teams are transforming their ransomware analysis 
            capabilities with SHIKRA's automated intelligence platform.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTest.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card p-8 md:p-12 rounded-lg relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 opacity-20">
                  <Quote className="w-16 h-16 text-blue-400" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(currentTest.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8">
                    "{currentTest.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {currentTest.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{currentTest.name}</div>
                        <div className="text-blue-400">{currentTest.role}</div>
                        <div className="text-gray-400">{currentTest.company}</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="hidden md:block text-right">
                      <div className="text-3xl font-bold text-green-400">
                        {currentTest.metrics.timeSaved}
                      </div>
                      <div className="text-sm text-gray-400">
                        {currentTest.metrics.label}
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="mt-6 pt-6 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>{currentTest.companySize}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>{currentTest.industry}</span>
                      </div>
                    </div>
                    <div className="md:hidden">
                      <div className="text-lg font-bold text-green-400">
                        {currentTest.metrics.timeSaved}
                      </div>
                      <div className="text-xs">
                        {currentTest.metrics.label}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation */}
            <div className="flex justify-center space-x-4 mt-8 lg:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-4">
            Join the Security Leaders
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the same transformation in your ransomware analysis workflow. 
            Start your free trial today and see the difference SHIKRA makes.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

