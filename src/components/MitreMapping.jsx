import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Shield, 
  Eye, 
  Zap, 
  Database, 
  Lock, 
  AlertTriangle,
  Info
} from 'lucide-react';

const MitreMapping = () => {
  const [selectedTactic, setSelectedTactic] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const mitreTactics = [
    {
      id: 'initial-access',
      name: 'Initial Access',
      description: 'Techniques used to gain initial foothold',
      icon: Target,
      color: 'from-red-500 to-pink-500',
      techniques: [
        {
          id: 'T1566',
          name: 'Phishing',
          description: 'Email-based social engineering attacks',
          shikraDetection: 'Email attachment analysis and behavioral monitoring',
          coverage: 'high'
        },
        {
          id: 'T1190',
          name: 'Exploit Public-Facing Application',
          description: 'Exploitation of internet-facing services',
          shikraDetection: 'Network traffic analysis and exploit detection',
          coverage: 'medium'
        }
      ]
    },
    {
      id: 'execution',
      name: 'Execution',
      description: 'Techniques for running malicious code',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      techniques: [
        {
          id: 'T1059',
          name: 'Command and Scripting Interpreter',
          description: 'Abuse of command-line interfaces',
          shikraDetection: 'Process monitoring and command-line analysis',
          coverage: 'high'
        },
        {
          id: 'T1053',
          name: 'Scheduled Task/Job',
          description: 'Abuse of task scheduling functionality',
          shikraDetection: 'Registry and file system monitoring',
          coverage: 'high'
        }
      ]
    },
    {
      id: 'persistence',
      name: 'Persistence',
      description: 'Techniques to maintain access',
      icon: Lock,
      color: 'from-yellow-500 to-orange-500',
      techniques: [
        {
          id: 'T1547',
          name: 'Boot or Logon Autostart Execution',
          description: 'Automatic execution during system startup',
          shikraDetection: 'Registry monitoring and startup analysis',
          coverage: 'high'
        },
        {
          id: 'T1543',
          name: 'Create or Modify System Process',
          description: 'Creation of malicious system services',
          shikraDetection: 'Service creation monitoring',
          coverage: 'medium'
        }
      ]
    },
    {
      id: 'defense-evasion',
      name: 'Defense Evasion',
      description: 'Techniques to avoid detection',
      icon: Eye,
      color: 'from-green-500 to-teal-500',
      techniques: [
        {
          id: 'T1055',
          name: 'Process Injection',
          description: 'Injection of code into legitimate processes',
          shikraDetection: 'Memory analysis and process behavior monitoring',
          coverage: 'high'
        },
        {
          id: 'T1027',
          name: 'Obfuscated Files or Information',
          description: 'Making files difficult to analyze',
          shikraDetection: 'Static and dynamic analysis techniques',
          coverage: 'medium'
        }
      ]
    },
    {
      id: 'discovery',
      name: 'Discovery',
      description: 'Techniques for system reconnaissance',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      techniques: [
        {
          id: 'T1083',
          name: 'File and Directory Discovery',
          description: 'Enumeration of files and directories',
          shikraDetection: 'File system access monitoring',
          coverage: 'high'
        },
        {
          id: 'T1057',
          name: 'Process Discovery',
          description: 'Enumeration of running processes',
          shikraDetection: 'Process enumeration detection',
          coverage: 'high'
        }
      ]
    },
    {
      id: 'impact',
      name: 'Impact',
      description: 'Techniques for data destruction/encryption',
      icon: AlertTriangle,
      color: 'from-purple-500 to-pink-500',
      techniques: [
        {
          id: 'T1486',
          name: 'Data Encrypted for Impact',
          description: 'Encryption of data for ransom',
          shikraDetection: 'File encryption monitoring and behavioral analysis',
          coverage: 'high'
        },
        {
          id: 'T1490',
          name: 'Inhibit System Recovery',
          description: 'Deletion of backup and recovery data',
          shikraDetection: 'System recovery mechanism monitoring',
          coverage: 'high'
        }
      ]
    }
  ];

  const coverageColors = {
    high: 'bg-green-500',
    medium: 'bg-yellow-500',
    low: 'bg-red-500'
  };

  const coverageLabels = {
    high: 'High Coverage',
    medium: 'Medium Coverage',
    low: 'Low Coverage'
  };

  const getCoverageStats = () => {
    const allTechniques = mitreTactics.flatMap(tactic => tactic.techniques);
    const high = allTechniques.filter(t => t.coverage === 'high').length;
    const medium = allTechniques.filter(t => t.coverage === 'medium').length;
    const low = allTechniques.filter(t => t.coverage === 'low').length;
    return { high, medium, low, total: allTechniques.length };
  };

  const stats = getCoverageStats();

  return (
    <section id="mitre" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MITRE ATT&CK
            </span>
            <br />
            <span className="text-white">Coverage Mapping</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See how SHIKRA maps to the MITRE ATT&CK framework, providing comprehensive 
            coverage across tactics and techniques used by ransomware operators.
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Grid View
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('matrix')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                viewMode === 'matrix' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Matrix View
            </motion.button>
          </div>
        </motion.div>

        {/* Coverage Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">{mitreTactics.length}</div>
            <div className="text-gray-300">Tactics Covered</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.total}</div>
            <div className="text-gray-300">Techniques Mapped</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">{stats.high}</div>
            <div className="text-gray-300">High Coverage</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {Math.round((stats.high / stats.total) * 100)}%
            </div>
            <div className="text-gray-300">Detection Rate</div>
          </div>
        </motion.div>

        {/* MITRE Tactics Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mitreTactics.map((tactic, index) => {
              const IconComponent = tactic.icon;
              return (
                <motion.div
                  key={tactic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedTactic(selectedTactic === tactic.id ? null : tactic.id)}
                  className="feature-card p-6 rounded-lg cursor-pointer"
                >
                  {/* Tactic Header */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tactic.color} mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{tactic.name}</h3>
                  <p className="text-gray-300 mb-4">{tactic.description}</p>
                  
                  {/* Technique Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {tactic.techniques.length} techniques
                    </span>
                    <div className="flex space-x-1">
                      {tactic.techniques.map((technique) => (
                        <div
                          key={technique.id}
                          className={`w-3 h-3 rounded-full ${coverageColors[technique.coverage]}`}
                          title={`${technique.name} - ${coverageLabels[technique.coverage]}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Expanded Techniques */}
                  <AnimatePresence>
                    {selectedTactic === tactic.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="space-y-3">
                          {tactic.techniques.map((technique) => (
                            <div key={technique.id} className="p-3 bg-gray-800/50 rounded-lg">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-sm">{technique.name}</h4>
                                  <p className="text-xs text-gray-400">{technique.id}</p>
                                </div>
                                <div className={`px-2 py-1 text-xs rounded-full ${coverageColors[technique.coverage]} text-white`}>
                                  {technique.coverage.toUpperCase()}
                                </div>
                              </div>
                              <p className="text-sm text-gray-300 mb-2">{technique.description}</p>
                              <div className="text-xs text-blue-400">
                                <strong>SHIKRA Detection:</strong> {technique.shikraDetection}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* MITRE Matrix View */}
        {viewMode === 'matrix' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-16"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-300">Tactic</th>
                    <th className="text-left py-3 px-4 text-gray-300">Techniques</th>
                    <th className="text-left py-3 px-4 text-gray-300">Coverage</th>
                    <th className="text-left py-3 px-4 text-gray-300">SHIKRA Detection</th>
                  </tr>
                </thead>
                <tbody>
                  {mitreTactics.map((tactic) => (
                    tactic.techniques.map((technique, techIndex) => (
                      <motion.tr
                        key={`${tactic.id}-${technique.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="border-b border-gray-800 hover:bg-gray-800/30"
                      >
                        {techIndex === 0 && (
                          <td rowSpan={tactic.techniques.length} className="py-3 px-4 border-r border-gray-700">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded bg-gradient-to-r ${tactic.color}`}>
                                <tactic.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-semibold">{tactic.name}</span>
                            </div>
                          </td>
                        )}
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">{technique.name}</div>
                            <div className="text-sm text-gray-400">{technique.id}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className={`inline-flex px-2 py-1 text-xs rounded-full ${coverageColors[technique.coverage]} text-white`}>
                            {technique.coverage.toUpperCase()}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-300">
                          {technique.shikraDetection}
                        </td>
                      </motion.tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Coverage Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-400" />
            Coverage Legend
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-semibold">High Coverage</div>
                <div className="text-sm text-gray-400">Comprehensive detection and analysis</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div>
                <div className="font-semibold">Medium Coverage</div>
                <div className="text-sm text-gray-400">Partial detection capabilities</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div>
                <div className="font-semibold">Low Coverage</div>
                <div className="text-sm text-gray-400">Limited or planned detection</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MitreMapping;

