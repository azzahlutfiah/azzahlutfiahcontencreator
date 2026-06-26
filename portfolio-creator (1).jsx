import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

export default function CreatorPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: 'TikTok',
      handle: '@hacking_____',
      url: 'https://tiktok.com/@hacking_____',
      icon: '🎵',
      color: 'from-black to-gray-800',
      followers: '100K+'
    },
    {
      name: 'Instagram',
      handle: '@alfinita_dev',
      url: 'https://instagram.com/alfinita_dev',
      icon: '📷',
      color: 'from-pink-500 to-purple-600',
      followers: '50K+'
    },
    {
      name: 'Instagram',
      handle: '@pusatinfokerja',
      url: 'https://instagram.com/pusatinfokerja',
      icon: '💼',
      color: 'from-purple-500 to-pink-500',
      followers: '30K+'
    },
    {
      name: 'Shopee',
      handle: '@modisapasajaoffical',
      url: 'https://shopee.co.id/modisapasajaoffical',
      icon: '🛍️',
      color: 'from-red-500 to-orange-400',
      followers: 'Verified'
    },
    {
      name: 'LinkedIn',
      handle: 'azzahlutfiyahku',
      url: 'https://linkedin.com/in/azzahlutfiyahku',
      icon: '💼',
      color: 'from-blue-600 to-blue-800',
      followers: 'Professional'
    },
    {
      name: 'Lynk.id',
      handle: 'azzahlutfiah',
      url: 'https://lynk.id/azzahlutfiah',
      icon: '🔗',
      color: 'from-indigo-500 to-blue-600',
      followers: 'Bio Link'
    }
  ];

  const portfolio = [
    {
      title: 'Konten Kreatif & Lifestyle',
      description: 'Konten daily life yang engaging dan relatable untuk audience di semua platform',
      icon: '✨',
      stats: '1.2M Impressions'
    },
    {
      title: 'Digital Marketing',
      description: 'Campaign marketing yang terukur dan conversion-focused untuk brand partners',
      icon: '📊',
      stats: '300% ROI Average'
    },
    {
      title: 'E-Commerce Content',
      description: 'Product photography dan videography profesional untuk Shopee dan platform lainnya',
      icon: '📸',
      stats: '50K+ Products'
    },
    {
      title: 'Community Building',
      description: 'Engagement strategi yang membangun komunitas loyal dan interaktif',
      icon: '👥',
      stats: '180K+ Community'
    }
  ];

  const stats = [
    { label: 'Total Followers', value: '180K+', icon: '👥' },
    { label: 'Monthly Reach', value: '1.2M+', icon: '📈' },
    { label: 'Avg Engagement', value: '12.5%', icon: '💬' },
    { label: 'Years Active', value: '5+', icon: '⭐' }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Azzah Lutfiah
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a>
            <a href="#social" className="hover:text-purple-400 transition">Connect</a>
            <a href="#stats" className="hover:text-purple-400 transition">Stats</a>
            <a href="https://myazzahlutfiah.netlify.app" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
              Portfolio Site
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#portfolio" className="block hover:text-purple-400 transition py-2">Portfolio</a>
              <a href="#social" className="block hover:text-purple-400 transition py-2">Connect</a>
              <a href="#stats" className="block hover:text-purple-400 transition py-2">Stats</a>
              <a href="https://myazzahlutfiah.netlify.app" className="block w-full text-center px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold">
                Portfolio Site
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl">
                ✨
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Azzah Lutfiah
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Content Creator | Digital Marketer | Community Builder
          </p>
          
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Menciptakan konten berkualitas tinggi dan engaging di berbagai platform. Membangun komunitas loyal dan menghasilkan ROI yang terukur untuk setiap campaign.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#social" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              Hubungi Saya
            </a>
            <a href="https://myazzahlutfiah.netlify.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition transform hover:scale-105 flex items-center justify-center gap-2">
              Lihat Portfolio <ExternalLink size={20} />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/50 transition">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-bold text-purple-400">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Layanan & Keahlian
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition hover:shadow-lg hover:shadow-purple-500/10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300">
                  {item.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terhubung Dengan Saya
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Follow saya di berbagai platform untuk konten terbaru, tips, dan update eksklusif
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition hover:shadow-lg hover:shadow-purple-500/10 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{link.icon}</div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-purple-400 transition" />
                </div>
                
                <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition">{link.name}</h3>
                <p className="text-gray-400 text-sm mb-3">@{link.handle}</p>
                
                <div className="flex items-center gap-2 text-sm text-purple-300 bg-purple-500/10 px-3 py-2 rounded-lg w-fit">
                  <span>{link.followers}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Tertarik Berkolaborasi?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Saya terbuka untuk partnership, brand collaboration, dan project kreatif lainnya. Mari ciptakan sesuatu yang luar biasa bersama!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://lynk.id/azzahlutfiah" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                Hubungi Sekarang
              </a>
              <a href="https://myazzahlutfiah.netlify.app" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition">
                Lihat Portfolio Lengkap
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dampak & Pencapaian
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-4xl font-bold text-purple-400 mb-2">180K+</div>
              <div className="text-gray-400">Total Followers</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-4xl font-bold text-pink-400 mb-2">1.2M+</div>
              <div className="text-gray-400">Monthly Reach</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition">
              <div className="text-4xl mb-2">💬</div>
              <div className="text-4xl font-bold text-blue-400 mb-2">12.5%</div>
              <div className="text-gray-400">Avg Engagement</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-4">© 2026 Azzah Lutfiah. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
            <a href="https://myazzahlutfiah.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Full Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
