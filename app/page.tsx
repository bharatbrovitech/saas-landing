"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Zap, Shield, Brain, BarChart3, Check, ChevronRight, 
  Star, Menu, X, Twitter, Github, Linkedin, Mail 
} from "lucide-react";

// Navbar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg shadow-purple-500/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text">
          Nova AI
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-medium"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_70%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8">
            🚀 Now in Public Beta — Join 10,000+ teams
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          The Future of Work is{" "}
          <span className="gradient-text">Intelligent</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          Nova AI transforms how your team works — automate workflows, 
          generate insights, and ship faster than ever before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2"
          >
            Start Free Trial <ChevronRight size={20} />
          </a>
          <a
            href="#demo"
            className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold"
          >
            See Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 text-slate-500"
        >
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-400" /> No credit card
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-400" /> 14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-400" /> Cancel anytime
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Let our advanced AI analyze your data and surface actionable insights automatically.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built on edge infrastructure for sub-100ms response times worldwide.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and granular access controls.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards with custom metrics, segments, and export capabilities.",
    },
    {
      icon: Check,
      title: "Workflow Automation",
      description: "Connect 500+ apps and automate repetitive tasks with our visual builder.",
    },
    {
      icon: Star,
      title: "24/7 Support",
      description: "Dedicated success managers and round-the-clock technical assistance.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">scale</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Powerful features designed for modern teams. No compromises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Demo Section
function Demo() {
  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Nova AI in <span className="gradient-text">action</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Experience the power of intelligent automation firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden glow-purple"
        >
          {/* Mock Dashboard Header */}
          <div className="border-b border-white/10 p-4 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 glass rounded-lg px-4 py-2 text-sm text-slate-400">
              nova.ai/dashboard
            </div>
          </div>

          {/* Mock Dashboard Content */}
          <div className="p-6 grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="hidden lg:block space-y-2">
              <div className="glass rounded-lg p-3 text-sm text-slate-300">Dashboard</div>
              <div className="glass rounded-lg p-3 text-sm text-slate-400">Analytics</div>
              <div className="glass rounded-lg p-3 text-sm text-slate-400">Automation</div>
              <div className="glass rounded-lg p-3 text-sm text-slate-400">Settings</div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: "Total Users", value: "12,847", change: "+12.5%" },
                  { label: "Revenue", value: "$284,392", change: "+8.2%" },
                  { label: "Active Sessions", value: "3,421", change: "+23.1%" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <span className="text-green-400 text-sm">{stat.change}</span>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="glass rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 size={48} className="text-purple-500 mx-auto mb-4" />
                  <p className="text-slate-400">Interactive analytics dashboard</p>
                  <p className="text-slate-500 text-sm">Real-time data visualization</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "Nova AI transformed our development workflow. We're shipping 3x faster with better quality.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "Founder, ScaleUp",
      content: "The automation capabilities are incredible. We've saved 40+ hours per week on manual tasks.",
      avatar: "MJ",
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataCo",
      content: "Best investment we've made. The AI insights alone paid for the subscription 10x over.",
      avatar: "ER",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See what our customers have to say about Nova AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 team members",
        "1,000 AI credits/month",
        "Basic analytics",
        "Community support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Best for growing teams and businesses",
      features: [
        "Unlimited team members",
        "50,000 AI credits/month",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Pro",
        "Unlimited AI credits",
        "Dedicated success manager",
        "Custom SLA",
        "On-premise deployment",
        "Advanced security",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Start free, scale as you grow. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 ${
                plan.popular ? "ring-2 ring-purple-500 relative" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-slate-400">{plan.period}</span>
                )}
              </div>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Demo", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Help Center", "Community", "Webinars", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Cookies", "Licenses"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text block mb-4">
              Nova AI
            </a>
            <p className="text-slate-400 mb-6">
              Empowering teams with intelligent automation. Join thousands of companies already transforming their workflow.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2024 Nova AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
