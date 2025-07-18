import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Crown, 
  Check, 
  X, 
  ArrowRight, 
  Star
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'researcher',
      name: 'Researcher',
      description: 'Perfect for security researchers and individual analysts',
      icon: Shield,
      price: {
        monthly: 99,
        yearly: 990
      },
      color: 'from-blue-500 to-cyan-500',
      features: [
        { name: '50 samples/month', included: true },
        { name: 'Basic VM environments', included: true },
        { name: 'Standard analysis reports', included: true },
        { name: 'MITRE ATT&CK mapping', included: true },
        { name: 'Email support', included: true },
        { name: 'API access', included: false },
        { name: 'Custom YARA rules', included: false },
        { name: 'Priority analysis queue', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Enterprise integrations', included: false }
      ],
      cta: 'Start Research',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for SOC teams and cybersecurity professionals',
      icon: Zap,
      price: {
        monthly: 299,
        yearly: 2990
      },
      color: 'from-purple-500 to-pink-500',
      features: [
        { name: '500 samples/month', included: true },
        { name: 'Advanced VM environments', included: true },
        { name: 'Detailed analysis reports', included: true },
        { name: 'MITRE ATT&CK mapping', included: true },
        { name: 'Priority email support', included: true },
        { name: 'Full API access', included: true },
        { name: 'Custom YARA rules', included: true },
        { name: 'Priority analysis queue', included: true },
        { name: 'Team collaboration (5 users)', included: true },
        { name: 'Enterprise integrations', included: false }
      ],
      cta: 'Go Professional',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations and MSSPs',
      icon: Crown,
      price: {
        monthly: 'Custom',
        yearly: 'Custom'
      },
      color: 'from-yellow-500 to-orange-500',
      features: [
        { name: 'Unlimited samples', included: true },
        { name: 'Custom VM environments', included: true },
        { name: 'Executive analysis reports', included: true },
        { name: 'Advanced MITRE mapping', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Full API access', included: true },
        { name: 'Custom YARA rules', included: true },
        { name: 'Dedicated analysis queue', included: true },
        { name: 'Unlimited team collaboration', included: true },
        { name: 'Full enterprise integrations', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const getPrice = (plan) => {
    if (plan.price[billingCycle] === 'Custom') return 'Custom';
    return `$${plan.price[billingCycle]}`;
  };

  const getSavings = (plan) => {
    if (plan.price.monthly === 'Custom') return null;
    const monthlyCost = plan.price.monthly * 12;
    const yearlyCost = plan.price.yearly;
    const savings = Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
    return savings;
  };

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
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
              Simple, Transparent
            </span>
            <br />
            <span className="text-white">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your ransomware analysis needs. 
            Scale from individual research to enterprise-wide deployment.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <motion.div
                animate={{ x: billingCycle === 'yearly' ? 32 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full"
              />
            </motion.button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-semibold"
              >
                Save up to 17%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            const savings = getSavings(plan);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`pricing-card relative p-8 rounded-lg ${
                  isPopular ? 'featured' : ''
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-semibold text-sm flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${plan.color} mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">{getPrice(plan)}</span>
                      {plan.price[billingCycle] !== 'Custom' && (
                        <span className="text-gray-400">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && savings && (
                      <div className="text-green-400 text-sm font-semibold">
                        Save {savings}% annually
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      className="flex items-center space-x-3"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                      : 'border border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Questions?
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the right plan and get started with SHIKRA. 
            Contact us for a personalized demo and pricing discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

