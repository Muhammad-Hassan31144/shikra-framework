import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Brain, 
  Database, 
  FileText, 
  Settings, 
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('automation');

  const mainFeatures = [
    {
      icon: Shield,
      title: "Anti-VM Evasion Technology",
      description: "Advanced VM environment that resists anti-analysis techniques used by modern ransomware",
      details: [
        "QEMU-KVM with libvirtd for hardware-level virtualization",
        "Dynamic SMBIOS modification to mimic real systems",
        "VM artifact removal and stealth configuration",
        "Time bomb and user activity simulation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Complete Automation Pipeline",
      description: "End-to-end automation from sample submission to actionable intelligence reports",
      details: [
        "Automated VM provisioning and configuration",
        "Dynamic malware execution and monitoring",
        "Real-time behavioral analysis and logging",
        "Automated report generation with YARA rules"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Intelligent Analysis Engine",
      description: "AI-powered analysis that understands ransomware behavior patterns and evasion techniques",
      details: [
        "Machine learning-based behavior classification",
        "Pattern recognition for new ransomware families",
        "Automated IOC extraction and correlation",
        "Threat intelligence integration and enrichment"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Memory Forensics Integration",
      description: "Deep memory analysis using Volatility 3 for comprehensive malware investigation",
      details: [
        "Automated memory dump capture at peak activity",
        "Volatility 3 integration for memory analysis",
        "Process injection and hollowing detection",
        "Encrypted payload extraction and analysis"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const analysisSteps = [
    {
      step: 1,
      title: "Sample Submission",
      description: "Upload ransomware samples through secure API or web interface",
      icon: FileText,
      duration: "< 1 min"
    },
    {
      step: 2,
      title: "Environment Setup",
      description: "Automated VM provisioning with anti-detection measures",
      icon: Settings,
      duration: "2-3 mins"
    },
    {
      step: 3,
      title: "Dynamic Execution",
      description: "Controlled malware execution with comprehensive monitoring",
      icon: Play,
      duration: "5-15 mins"
    },
    {
      step: 4,
      title: "Data Collection",
      description: "Process monitoring, network capture, and memory dumping",
      icon: Database,
      duration: "Real-time"
    },
    {
      step: 5,
      title: "Analysis & Correlation",
      description: "AI-powered analysis and MITRE ATT&CK mapping",
      icon: Brain,
      duration: "2-5 mins"
    },
    {
      step: 6,
      title: "Report Generation",
      description: "Actionable intelligence with IOCs and YARA rules",
      icon: FileText,
      duration: "< 1 min"
    }
  ];

  const stats = [
    { label: "Analysis Time", value: "< 20 min", description: "Average complete analysis" },
    { label: "Detection Rate", value: "99.7%", description: "Ransomware family identification" },
    { label: "False Positives", value: "< 0.1%", description: "Industry-leading accuracy" },
    { label: "MITRE Coverage", value: "85%", description: "ATT&CK technique coverage" }
  ];

  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Ransomware Analysis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SHIKRA transforms ransomware analysis from a manual, time-consuming process 
            into an automated, intelligent workflow that delivers actionable results in minutes.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="feature-card p-8 rounded-lg"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Analysis Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Automated Analysis Workflow
            </span>
          </h3>
          
          <div className="relative">
            {/* Workflow Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {analysisSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center relative"
                  >
                    {/* Step Number */}
                    <div className="relative mx-auto mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
                        {step.step}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{step.description}</p>
                    <div className="text-xs text-blue-400 font-semibold">{step.duration}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Ransomware Analysis?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading cybersecurity teams who trust SHIKRA to automate their 
            ransomware analysis and accelerate threat response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;

