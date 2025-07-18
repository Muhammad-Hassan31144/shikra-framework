import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Plus, 
  X, 
  Edit3, 
  Check, 
  Calendar,
  Target,
  Zap,
  Shield,
  Brain,
  Database,
  FileText,
  Settings
} from 'lucide-react';

const JourneyMap = () => {
  const [journeySteps, setJourneySteps] = useState([
    {
      id: 1,
      title: "Project Inception",
      description: "Initial research and concept development for automated ransomware analysis",
      date: "Q1 2024",
      status: "completed",
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "VM Environment Setup",
      description: "Development of anti-VM detection and QEMU-KVM integration",
      date: "Q2 2024",
      status: "completed",
      icon: Settings,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Analysis Engine",
      description: "Core automation engine with ProcMon integration and memory dumping",
      date: "Q3 2024",
      status: "completed",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "MITRE ATT&CK Integration",
      description: "Mapping analysis results to MITRE ATT&CK framework",
      date: "Q4 2024",
      status: "current",
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Report Generation",
      description: "Automated actionable report generation with YARA rules",
      date: "Q1 2025",
      status: "upcoming",
      icon: FileText,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Enterprise Features",
      description: "Multi-tenant support and enterprise integrations",
      date: "Q2 2025",
      status: "upcoming",
      icon: Database,
      color: "from-teal-500 to-green-500"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [newStep, setNewStep] = useState({
    title: '',
    description: '',
    date: '',
    status: 'upcoming'
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const statusColors = {
    completed: 'bg-green-500',
    current: 'bg-blue-500 animate-pulse',
    upcoming: 'bg-gray-500'
  };

  const statusLabels = {
    completed: 'Completed',
    current: 'In Progress',
    upcoming: 'Planned'
  };

  const addStep = () => {
    if (newStep.title && newStep.description && newStep.date) {
      const step = {
        id: Date.now(),
        ...newStep,
        icon: Shield,
        color: "from-blue-500 to-cyan-500"
      };
      setJourneySteps([...journeySteps, step]);
      setNewStep({ title: '', description: '', date: '', status: 'upcoming' });
      setShowAddForm(false);
    }
  };

  const removeStep = (id) => {
    setJourneySteps(journeySteps.filter(step => step.id !== id));
  };

  return (
    <section id="journey" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
              Our Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Track our progress in revolutionizing ransomware analysis. 
            From concept to enterprise-ready solution.
          </p>
          
          {/* Control Buttons */}
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                isEditing 
                  ? 'bg-red-600 hover:bg-red-500' 
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
            >
              {isEditing ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
              <span>{isEditing ? 'Done Editing' : 'Edit Journey'}</span>
            </motion.button>
            
            {isEditing && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Step</span>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Add Step Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mb-12 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Add New Journey Step</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Step Title"
                  value={newStep.title}
                  onChange={(e) => setNewStep({...newStep, title: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Step Description"
                  value={newStep.description}
                  onChange={(e) => setNewStep({...newStep, description: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 h-24 resize-none"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Date (e.g., Q1 2025)"
                    value={newStep.date}
                    onChange={(e) => setNewStep({...newStep, date: e.target.value})}
                    className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <select
                    value={newStep.status}
                    onChange={(e) => setNewStep({...newStep, status: e.target.value})}
                    className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="upcoming">Planned</option>
                    <option value="current">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={addStep}
                    className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Add Step
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 opacity-30"></div>
          
          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full ${statusColors[step.status]} border-4 border-gray-900`}
                    />
                  </div>
                  
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full max-w-md ${
                      isLeft ? 'mr-auto pr-12' : 'ml-auto pl-12'
                    }`}
                  >
                    <div className="feature-card p-6 rounded-lg relative">
                      {/* Edit/Delete Controls */}
                      {isEditing && (
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeStep(step.id)}
                            className="p-1 bg-red-600 hover:bg-red-500 rounded text-white"
                          >
                            <X className="w-4 h-4" />
                          </motion.button>
                        </div>
                      )}
                      
                      {/* Step Icon */}
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${step.color} mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[step.status]} text-white`}>
                          {statusLabels[step.status]}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{step.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Journey Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              label: "Completed Milestones",
              value: journeySteps.filter(s => s.status === 'completed').length,
              color: "text-green-400"
            },
            {
              label: "In Progress",
              value: journeySteps.filter(s => s.status === 'current').length,
              color: "text-blue-400"
            },
            {
              label: "Planned Features",
              value: journeySteps.filter(s => s.status === 'upcoming').length,
              color: "text-purple-400"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyMap;

