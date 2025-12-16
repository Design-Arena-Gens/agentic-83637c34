'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-void overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }} />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-prism/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400 tracking-wide">AI-POWERED PHOTO INTELLIGENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
            Share smarter.
            <br />
            <span className="text-prism">Organize</span> effortlessly.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your photos, powered by AI. Prism automatically organizes, enhances, and shares your moments with intelligent precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-prism text-void font-semibold rounded-full hover:bg-prism/90 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-prism to-neon-pink border-2 border-void" />
                ))}
              </div>
              <span>10K+ users</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span>✦ 4.9/5 rating</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-pink/20 bg-neon-pink/5 backdrop-blur-sm mb-6">
              <span className="text-sm text-neon-pink tracking-wide">INTELLIGENT FEATURES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Built for the way
              <br />
              you <span className="text-prism">live</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Next-gen photo management with AI that understands context, recognizes faces, and automates the boring stuff.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm hover:border-neon-pink/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/0 to-neon-pink/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Face Recognition</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Automatically identify and group photos by people. Create smart albums that update themselves.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-cyan/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Enhancement</h3>
                <p className="text-zinc-400 leading-relaxed">
                  One-tap photo perfection. Smart filters that adapt to lighting, subject, and composition.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm hover:border-prism/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-prism/0 to-prism/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-prism/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-prism" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Smart Privacy</h3>
                <p className="text-zinc-400 leading-relaxed">
                  End-to-end encryption. You control who sees what. AI processing happens on-device first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-sm p-2 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-prism/20 via-neon-cyan/20 to-neon-pink/20 blur-xl opacity-50" />

            {/* Mock App Interface */}
            <div className="relative bg-void rounded-2xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse delay-100" />
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse delay-200" />
                    </div>
                    <span className="text-sm text-zinc-400">AI Processing</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                      const delay = `${i * 100}ms`;
                      return (
                        <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 animate-pulse" style={{ animationDelay: delay }} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Photos Organized', value: '2.5M+' },
              { label: 'AI Processing Speed', value: '<1s' },
              { label: 'Accuracy Rate', value: '99.7%' },
              { label: 'Storage Saved', value: '40%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-prism mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Three steps to <span className="text-prism">organized</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Getting started takes seconds. Organizing your entire library? That's automatic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Upload', desc: 'Drag, drop, or sync from any device. Bulk import supported.' },
              { num: '02', title: 'AI Scans', desc: 'Our AI identifies faces, objects, scenes, and even emotions in seconds.' },
              { num: '03', title: 'Smart Organize', desc: 'Photos auto-categorize. Search by anything. Beach sunset 2023 just works.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-bold text-white/5 mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-prism/20 bg-prism/5 backdrop-blur-sm mb-6">
              <span className="text-sm text-prism tracking-wide">LOVED BY CREATORS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Don't just take our word
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Alex Chen', role: 'Travel Photographer', text: 'Prism cut my photo organization time by 80 percent. The face recognition is scary accurate.' },
              { name: 'Maya Rodriguez', role: 'Content Creator', text: 'Finally, a photo app that understands context. Search actually works like magic.' },
              { name: 'Jordan Kim', role: 'Design Director', text: 'Dark mode done right. The UI feels like it is from 2030, in the best way possible.' },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm hover:border-white/20 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-prism" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-16 rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-prism/10 via-transparent to-neon-cyan/10" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Ready to transform
                <br />
                your photo library?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Join thousands of photographers, creators, and everyday people using Prism to stay organized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-prism text-void font-semibold rounded-full hover:bg-prism/90 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm text-zinc-500 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4 text-prism">Prism</div>
              <p className="text-sm text-zinc-400">Intelligent AI photo sharing for the modern era.</p>
            </div>
            <div>
              <div className="font-semibold mb-4">Product</div>
              <div className="space-y-2 text-sm text-zinc-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
                <div>Roadmap</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Company</div>
              <div className="space-y-2 text-sm text-zinc-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Press</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Support</div>
              <div className="space-y-2 text-sm text-zinc-400">
                <div>Help Center</div>
                <div>Community</div>
                <div>Contact</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-500">© 2024 Prism. All rights reserved.</div>
            <div className="flex gap-6 text-sm text-zinc-400">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Security</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
