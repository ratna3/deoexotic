'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    description: 'Sourced from the finest natural ingredients, our attars contain no synthetic compounds or artificial additives.',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  {
    icon: Shield,
    title: 'No Chemicals or Parabens',
    description: 'Completely free from harmful chemicals, parabens, and preservatives. Safe for all skin types.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  {
    icon: Clock,
    title: 'Long-lasting Fragrance',
    description: 'Our oil-based formulations provide exceptional longevity, lasting 8-12 hours on your skin.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800'
  },
  {
    icon: Heart,
    title: 'Eco-friendly Packaging',
    description: 'Sustainably packaged in recyclable materials, reflecting our commitment to environmental responsibility.',
    color: 'text-forest',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800'
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream/30 dark:to-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-amber-deep dark:text-gold">Natural Luxury?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to purity and quality ensures that every drop of our attar 
            is a testament to nature's finest offerings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                className={`group relative p-8 rounded-2xl ${feature.bgColor} ${feature.borderColor} border-2 transition-all duration-300 hover:shadow-luxury hover:scale-105 cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <IconComponent className="w-16 h-16" />
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} ${feature.borderColor} border mb-6 relative z-10`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-deep/5 to-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-cream dark:bg-gray-800 rounded-full">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
                <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-white text-xs font-bold">✓</div>
              </div>
              <span className="font-medium">Certified by leading quality organizations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;