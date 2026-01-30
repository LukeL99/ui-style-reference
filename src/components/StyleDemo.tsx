import { type UIStyle } from '../data/styles';

interface StyleDemoProps {
  style: UIStyle;
}

export const StyleDemo = ({ style }: StyleDemoProps) => {
  const DemoComponent = styleDemos[style.slug] || DefaultDemo;
  return <DemoComponent style={style} />;
};

const DefaultDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{style.name}</h1>
      <p className="text-gray-600">Demo coming soon</p>
    </div>
  </div>
);

// ============================================================================
// 1. MINIMALISM & SWISS STYLE - "Clarity Analytics" SaaS Dashboard
// ============================================================================
const MinimalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    {/* Hero */}
    <header className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Clarity Analytics</p>
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-black mb-8 leading-tight">
            Data that speaks<br />for itself.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Enterprise analytics built on the principle that the best interface is one you don't notice. 
            Less noise. More insight.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 flex items-end">
          <div className="w-full h-px bg-black" />
        </div>
      </div>
      <div className="flex gap-4 mt-12">
        <button className="px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
          Start Free Trial
        </button>
        <button className="px-8 py-4 border border-black text-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
          Watch Demo
        </button>
      </div>
    </header>

    {/* Stats */}
    <section className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-8">
          {[
            { num: '10M+', label: 'Data points processed daily' },
            { num: '99.9%', label: 'Uptime guarantee' },
            { num: '<50ms', label: 'Query response time' }
          ].map((stat, i) => (
            <div key={i} className="border-t-2 border-black pt-6">
              <span className="text-sm text-gray-500 uppercase tracking-widest">0{i + 1}</span>
              <h3 className="text-4xl font-light mt-2">{stat.num}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-4xl font-light">Built for clarity</h2>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-600 text-lg">Every pixel serves a purpose. No gradients, no shadows, no distractions—just your data, presented with precision.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Real-time sync', 'SQL interface', 'Team collaboration', 'API access', 'Custom dashboards', 'Export options', 'Role management', 'Audit logs'].map((feature, i) => (
            <div key={i} className="border-t border-gray-300 pt-4">
              <span className="text-3xl font-light text-gray-300">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-medium mt-4">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-5xl font-light mb-8">Ready to see clearly?</h2>
        <button className="px-12 py-5 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
          Get Started — Free
        </button>
      </div>
    </section>
  </div>
);

// ============================================================================
// 2. NEUMORPHISM - "Serenity" Wellness & Meditation App
// ============================================================================
const NeumorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#E8E8E8' }}>
    {/* Hero */}
    <header className="max-w-4xl mx-auto px-8 py-16 text-center">
      <div className="inline-block p-6 rounded-full mb-8" style={{
        background: '#E8E8E8',
        boxShadow: '-10px -10px 30px #ffffff, 10px 10px 30px #d1d1d1'
      }}>
        <span className="text-4xl">🧘</span>
      </div>
      <h1 className="text-5xl font-semibold text-gray-700 mb-4">Serenity</h1>
      <p className="text-xl text-gray-500 mb-12">Your daily companion for mindfulness and inner peace</p>
    </header>

    {/* Main Cards */}
    <section className="max-w-5xl mx-auto px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: '🌅', title: 'Morning Calm', time: '10 min', desc: 'Start your day with intention' },
          { icon: '🌊', title: 'Deep Focus', time: '25 min', desc: 'Enhance concentration' },
          { icon: '🌙', title: 'Sleep Stories', time: '45 min', desc: 'Drift into peaceful rest' }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl text-center" style={{
            background: '#E8E8E8',
            boxShadow: '-10px -10px 30px #ffffff, 10px 10px 30px #d1d1d1'
          }}>
            <span className="text-5xl mb-4 block">{item.icon}</span>
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.time}</p>
            <p className="text-gray-600 mt-4 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Player Section */}
    <section className="max-w-2xl mx-auto px-8 py-16">
      <div className="p-8 rounded-3xl" style={{
        background: '#E8E8E8',
        boxShadow: '-15px -15px 35px #ffffff, 15px 15px 35px #d1d1d1'
      }}>
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Now Playing</p>
          <h3 className="text-2xl font-semibold text-gray-700 mt-2">Ocean Waves</h3>
          <p className="text-gray-500">Ambient Sounds Collection</p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 rounded-full" style={{
            background: '#E8E8E8',
            boxShadow: 'inset -2px -2px 5px #ffffff, inset 2px 2px 5px #d1d1d1'
          }}>
            <div className="h-full w-1/3 rounded-full" style={{
              background: 'linear-gradient(145deg, #7B68EE, #9370DB)',
              boxShadow: '0 0 10px rgba(123, 104, 238, 0.5)'
            }} />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>3:24</span>
            <span>10:00</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6">
          {['⏮️', '▶️', '⏭️'].map((icon, i) => (
            <button key={i} className={`rounded-full flex items-center justify-center ${i === 1 ? 'w-20 h-20' : 'w-14 h-14'}`}
              style={{
                background: '#E8E8E8',
                boxShadow: i === 1 
                  ? '-8px -8px 20px #ffffff, 8px 8px 20px #d1d1d1'
                  : '-5px -5px 15px #ffffff, 5px 5px 15px #d1d1d1'
              }}>
              <span className={i === 1 ? 'text-3xl' : 'text-xl'}>{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-4xl mx-auto px-8 py-16">
      <div className="grid grid-cols-3 gap-8">
        {[
          { value: '47', label: 'Minutes Today' },
          { value: '12', label: 'Day Streak' },
          { value: '89%', label: 'Focus Score' }
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl text-center" style={{
            background: '#E8E8E8',
            boxShadow: 'inset -5px -5px 15px #ffffff, inset 5px 5px 15px #d1d1d1'
          }}>
            <span className="text-3xl font-bold text-gray-700">{stat.value}</span>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 3. GLASSMORPHISM - "Prism Finance" Dashboard
// ============================================================================
const GlassmorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)' }}>
    {/* Background Shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-40" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
            }}>
            <span className="text-white text-xl">◈</span>
          </div>
          <span className="text-white text-xl font-semibold">Prism Finance</span>
        </div>
        <nav className="flex gap-6">
          {['Dashboard', 'Portfolio', 'Analytics', 'Settings'].map((item) => (
            <a key={item} href="#" className="text-white/80 hover:text-white transition-colors">{item}</a>
          ))}
        </nav>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Balance Card */}
        <div className="col-span-12 md:col-span-8 p-8 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
          <p className="text-white/70 mb-2">Total Balance</p>
          <h2 className="text-5xl font-bold text-white mb-6">$847,293.42</h2>
          <div className="flex gap-8">
            <div>
              <p className="text-white/60 text-sm">24h Change</p>
              <p className="text-green-300 text-xl font-semibold">+$12,847.32</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Percentage</p>
              <p className="text-green-300 text-xl font-semibold">+1.54%</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 md:col-span-4 p-6 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
          <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {['Send Money', 'Receive', 'Swap', 'Stake'].map((action) => (
              <button key={action} className="w-full py-3 rounded-xl text-white font-medium transition-all hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}>
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="col-span-12 md:col-span-6 p-6 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
          <h3 className="text-white font-semibold mb-6">Portfolio</h3>
          {[
            { name: 'Bitcoin', symbol: 'BTC', value: '$423,291', change: '+2.4%', icon: '₿' },
            { name: 'Ethereum', symbol: 'ETH', value: '$287,103', change: '+1.8%', icon: 'Ξ' },
            { name: 'Solana', symbol: 'SOL', value: '$136,899', change: '+5.2%', icon: '◎' },
          ].map((asset, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <span className="text-white">{asset.icon}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{asset.name}</p>
                  <p className="text-white/60 text-sm">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">{asset.value}</p>
                <p className="text-green-300 text-sm">{asset.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Activity */}
        <div className="col-span-12 md:col-span-6 p-6 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
          <h3 className="text-white font-semibold mb-6">Recent Activity</h3>
          {[
            { type: 'Received', amount: '+0.5 ETH', time: '2 min ago' },
            { type: 'Swapped', amount: 'BTC → USDC', time: '1 hour ago' },
            { type: 'Staked', amount: '100 SOL', time: '3 hours ago' },
            { type: 'Sent', amount: '-0.1 BTC', time: 'Yesterday' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
              <div>
                <p className="text-white font-medium">{tx.type}</p>
                <p className="text-white/60 text-sm">{tx.time}</p>
              </div>
              <p className="text-white">{tx.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// 4. BRUTALISM - "RAWFORM" Design Studio
// ============================================================================
const BrutalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    {/* Hero */}
    <header className="border-b-4 border-black">
      <div className="max-w-6xl mx-auto p-8">
        <nav className="flex justify-between items-center mb-16">
          <span className="text-2xl font-black">RAWFORM.</span>
          <div className="flex gap-6 font-mono uppercase text-sm">
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:line-through">{item}</a>
            ))}
          </div>
        </nav>
        <h1 className="text-6xl md:text-[120px] font-black uppercase leading-none tracking-tight mb-8">
          Design<br />Without<br />Apology.
        </h1>
        <div className="flex gap-4 mb-8">
          <span className="px-4 py-2 border-4 border-black font-mono text-sm">BRANDING</span>
          <span className="px-4 py-2 border-4 border-black font-mono text-sm">WEB</span>
          <span className="px-4 py-2 border-4 border-black font-mono text-sm">PRINT</span>
        </div>
      </div>
    </header>

    {/* Services */}
    <section className="border-b-4 border-black">
      <div className="grid md:grid-cols-3">
        {[
          { num: '01', title: 'BRAND IDENTITY', desc: 'Logos, guidelines, and visual systems that refuse to blend in.' },
          { num: '02', title: 'WEB DESIGN', desc: 'Websites that load fast and hit hard. No frameworks, no bloat.' },
          { num: '03', title: 'PRINT DESIGN', desc: 'Posters, zines, and editorial that demands physical presence.' },
        ].map((service, i) => (
          <div key={i} className={`p-8 ${i < 2 ? 'border-r-4 border-black' : ''} border-b-4 md:border-b-0 border-black`}>
            <span className="text-6xl font-black text-gray-300">{service.num}</span>
            <h3 className="text-2xl font-black mt-4 mb-4">{service.title}</h3>
            <p className="font-mono text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Work */}
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-black mb-8 uppercase">Selected Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'LOUD COFFEE CO.', type: 'BRANDING', color: 'bg-yellow-400' },
          { title: 'PUNK RECORDS', type: 'WEB + PRINT', color: 'bg-red-500' },
          { title: 'MONO GALLERY', type: 'IDENTITY', color: 'bg-blue-600' },
          { title: 'STREET ZINE', type: 'EDITORIAL', color: 'bg-black text-white' },
        ].map((work, i) => (
          <div key={i} className={`${work.color} p-8 border-4 border-black`}
            style={{ boxShadow: '8px 8px 0 #000' }}>
            <span className="font-mono text-sm">{work.type}</span>
            <h3 className="text-3xl font-black mt-2">{work.title}</h3>
            <button className="mt-8 px-6 py-2 bg-white text-black border-4 border-black font-bold uppercase text-sm"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Contact */}
    <section className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-8">
          Got a project?<br />Let's talk.
        </h2>
        <a href="mailto:hello@rawform.studio" className="text-2xl font-mono underline">
          hello@rawform.studio
        </a>
      </div>
    </section>
  </div>
);

// ============================================================================
// 5. 3D & HYPERREALISM - "Phantom Gaming" Product Page
// ============================================================================
const ThreeDDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(180deg, #001F3F 0%, #0a1628 100%)' }}>
    {/* Hero */}
    <header className="max-w-6xl mx-auto px-8 py-16 text-center" style={{ perspective: '1000px' }}>
      <p className="text-amber-500 uppercase tracking-widest text-sm mb-4">Next Generation</p>
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6"
        style={{ textShadow: '0 0 60px rgba(255, 165, 0, 0.3)' }}>
        Phantom X1
      </h1>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
        Precision engineering meets elite performance. The controller built for champions.
      </p>
      
      {/* 3D Product */}
      <div className="relative mx-auto mb-12" style={{ transformStyle: 'preserve-3d' }}>
        <div className="w-80 h-80 mx-auto rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(255,165,0,0.2) 0%, transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite',
          }}>
          <div className="text-[150px]" style={{
            transform: 'rotateY(-15deg) rotateX(10deg)',
            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
          }}>
            🎮
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg"
          style={{ boxShadow: '0 10px 40px rgba(255,165,0,0.3)' }}>
          Pre-Order Now — $199
        </button>
        <button className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-amber-500 transition-colors">
          Watch Trailer
        </button>
      </div>
    </header>

    {/* Specs */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: '⚡', value: '1ms', label: 'Response Time' },
          { icon: '🎯', value: '8000', label: 'DPI Precision' },
          { icon: '🔋', value: '80h', label: 'Battery Life' },
          { icon: '🎨', value: '16.8M', label: 'RGB Colors' },
        ].map((spec, i) => (
          <div key={i} className="text-center p-6 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
            <span className="text-4xl mb-4 block">{spec.icon}</span>
            <p className="text-3xl font-bold text-white">{spec.value}</p>
            <p className="text-gray-500 text-sm mt-1">{spec.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Built for Victory</h2>
          <div className="space-y-6">
            {[
              { title: 'Hall Effect Triggers', desc: 'Zero stick drift. Ever. Our magnetic sensors last forever.' },
              { title: 'Pro Grip Texture', desc: 'Tournament-tested rubberized grip for marathon sessions.' },
              { title: 'Instant Mapping', desc: 'Remap any button on the fly. No software required.' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-amber-500 to-orange-600 rounded" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-square rounded-3xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(145deg, rgba(255,165,0,0.1), transparent)',
            boxShadow: '0 0 100px rgba(255,165,0,0.2)',
          }}>
          <span className="text-9xl">🏆</span>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// 6. VIBRANT & BLOCK-BASED - "VOLTAIC" Creative Agency
// ============================================================================
const VibrantDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#0D0D0D' }}>
    {/* Hero */}
    <header className="max-w-6xl mx-auto px-8 py-16">
      <nav className="flex justify-between items-center mb-16">
        <span className="text-3xl font-black text-white">VOLTAIC</span>
        <div className="flex gap-6 text-gray-400">
          {['Work', 'About', 'Careers', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </nav>
      
      <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
        We make<br />
        <span style={{ color: '#39FF14' }}>brands</span> that<br />
        <span style={{ color: '#FF1493' }}>scream.</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-12">
        Digital-first creative agency for ambitious brands. Strategy. Design. Development. All loud.
      </p>
      <button className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform">
        Start a Project →
      </button>
    </header>

    {/* Color Blocks */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { bg: '#39FF14', title: 'BRANDING', desc: 'Identity systems' },
          { bg: '#BF00FF', title: 'DIGITAL', desc: 'Web & mobile' },
          { bg: '#FF1493', title: 'CONTENT', desc: 'Video & social' },
          { bg: '#00FFFF', title: 'STRATEGY', desc: 'Growth tactics' },
        ].map((item, i) => (
          <div key={i} className="aspect-square rounded-3xl p-6 flex flex-col justify-end"
            style={{ backgroundColor: item.bg }}>
            <h3 className="text-2xl font-black text-black">{item.title}</h3>
            <p className="text-black/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Work Grid */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-5xl font-black text-white mb-12">Selected Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { client: 'HYPEBEAST', type: 'Brand Campaign', color: '#FF1493' },
          { client: 'NEON LABS', type: 'Website', color: '#00FFFF' },
          { client: 'PULSE MUSIC', type: 'App Design', color: '#39FF14' },
          { client: 'FUSION', type: 'Identity', color: '#BF00FF' },
        ].map((work, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl aspect-video cursor-pointer"
            style={{ backgroundColor: work.color }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-30">◆</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/70 text-sm">{work.type}</p>
              <h3 className="text-2xl font-black text-white">{work.client}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-6xl mx-auto px-8 py-24 text-center">
      <h2 className="text-6xl font-black text-white mb-8">Ready to get loud?</h2>
      <button className="px-12 py-6 bg-white text-black text-xl font-black rounded-2xl hover:bg-gray-100 transition-colors">
        Let's Talk
      </button>
    </section>
  </div>
);

// ============================================================================
// 7. DARK MODE (OLED) - "NightCode" Developer Tools
// ============================================================================
const DarkModeDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black">
    {/* Hero */}
    <header className="max-w-5xl mx-auto px-8 py-16">
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" 
            style={{ background: '#39FF14', boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)' }}>
            <span className="text-black font-bold">N</span>
          </div>
          <span className="text-white font-semibold">NightCode</span>
        </div>
        <div className="flex gap-6 text-gray-500">
          {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </nav>

      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Code in the dark.<br />
        <span style={{ color: '#39FF14', textShadow: '0 0 30px rgba(57,255,20,0.5)' }}>Ship at light speed.</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mb-8">
        The IDE that respects your eyes and your craft. True black OLED themes, 
        zero distractions, maximum productivity.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-4 rounded-lg font-semibold text-black"
          style={{ background: '#39FF14', boxShadow: '0 0 30px rgba(57,255,20,0.3)' }}>
          Download Free
        </button>
        <button className="px-8 py-4 rounded-lg font-semibold text-white border border-gray-700 hover:border-gray-500 transition-colors">
          View Docs
        </button>
      </div>
    </header>

    {/* Code Preview */}
    <section className="max-w-5xl mx-auto px-8 py-8">
      <div className="rounded-xl border border-gray-800 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-gray-500 text-sm">main.ts</span>
        </div>
        <div className="p-6 font-mono text-sm">
          <div><span style={{ color: '#BF00FF' }}>const</span> <span style={{ color: '#39FF14' }}>app</span> = <span style={{ color: '#0080FF' }}>createApp</span>{'({'}</div>
          <div className="ml-4"><span style={{ color: '#FFD700' }}>name</span>: <span style={{ color: '#FF1493' }}>"NightCode"</span>,</div>
          <div className="ml-4"><span style={{ color: '#FFD700' }}>theme</span>: <span style={{ color: '#FF1493' }}>"pure-black"</span>,</div>
          <div className="ml-4"><span style={{ color: '#FFD700' }}>performance</span>: <span style={{ color: '#FF1493' }}>"blazing"</span></div>
          <div>{'});'}</div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="max-w-5xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Built for the night shift</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: '⚫', title: 'True Black', desc: 'Pure #000000 background. Perfect OLED blacks save battery and reduce eye strain.', color: '#39FF14' },
          { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-50ms response time. Every keystroke feels instant.', color: '#0080FF' },
          { icon: '🔌', title: 'Plugin System', desc: 'Extend everything. Our marketplace has 10,000+ extensions.', color: '#FFD700' },
          { icon: '🌙', title: 'Auto Dark', desc: 'Syncs with system preferences. Dark when you need it.', color: '#BF00FF' },
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: feature.color, boxShadow: `0 0 10px ${feature.color}` }} />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-5xl mx-auto px-8 py-16">
      <div className="grid grid-cols-3 gap-8">
        {[
          { value: '1M+', label: 'Developers', color: '#39FF14' },
          { value: '50ms', label: 'Response Time', color: '#0080FF' },
          { value: '99.9%', label: 'Uptime', color: '#BF00FF' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-5xl font-bold mb-2" style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}50` }}>{stat.value}</p>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 8. ACCESSIBLE & ETHICAL - "AccessFirst" Public Services
// ============================================================================
const AccessibleDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    {/* Skip Link */}
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-700 focus:text-white focus:rounded">
      Skip to main content
    </a>

    {/* Header */}
    <header className="border-b-4 border-blue-700">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">AccessFirst</span>
          </div>
          <div className="flex gap-6">
            {['Services', 'Help', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-lg text-gray-900 underline hover:no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 rounded px-2 py-1">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>

    {/* Main */}
    <main id="main" className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Government Services<br />Made Accessible
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
        Everyone deserves equal access to public services. Our platform is built with accessibility at its core, 
        meeting WCAG AAA standards with 7:1+ contrast ratios.
      </p>

      {/* Service Cards */}
      <section className="mb-12" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-2xl font-bold text-gray-900 mb-6">Available Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: '📋', title: 'Apply for Benefits', desc: 'Submit applications for healthcare, housing, and financial assistance.' },
            { icon: '📅', title: 'Schedule Appointments', desc: 'Book appointments with government offices and services.' },
            { icon: '📄', title: 'Request Documents', desc: 'Order birth certificates, ID cards, and official records.' },
            { icon: '💬', title: 'Get Help', desc: 'Connect with support specialists via phone, chat, or video.' },
          ].map((service, i) => (
            <a key={i} href="#" className="block p-6 border-2 border-gray-900 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-12" aria-labelledby="search-heading">
        <h2 id="search-heading" className="text-2xl font-bold text-gray-900 mb-6">Find a Service</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-lg font-semibold text-gray-900 mb-2">
              What do you need help with?
            </label>
            <input 
              type="text" 
              id="search"
              className="w-full px-4 py-4 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-700"
              placeholder="Search for services..."
            />
            <p className="text-gray-600 mt-2">Example: "renew license" or "food assistance"</p>
          </div>
          <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Search Services
          </button>
        </form>
      </section>

      {/* Accessibility Info */}
      <section className="p-6 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Our Accessibility Commitment</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✓ WCAG AAA compliant with 7:1+ contrast ratio</li>
          <li>✓ Full keyboard navigation support</li>
          <li>✓ Screen reader optimized</li>
          <li>✓ Large touch targets (44x44px minimum)</li>
          <li>✓ Clear focus indicators</li>
          <li>✓ Available in 12 languages</li>
        </ul>
      </section>
    </main>
  </div>
);

// ============================================================================
// 9. CLAYMORPHISM - "LearnPlay" Kids Education App
// ============================================================================
const ClaymorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F0E6FA' }}>
    {/* Header */}
    <header className="max-w-5xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: '#FFD93D',
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 6px 6px 12px rgba(0,0,0,0.15)'
            }}>
            <span className="text-3xl">🎈</span>
          </div>
          <span className="text-2xl font-bold text-gray-700">LearnPlay</span>
        </div>
        <div className="flex gap-4">
          {['Games', 'Stories', 'Music'].map((item) => (
            <button key={item} className="px-5 py-2 rounded-xl font-medium text-gray-600"
              style={{
                backgroundColor: '#F0E6FA',
                border: '3px solid rgba(255,255,255,0.5)',
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.05), 4px 4px 8px rgba(0,0,0,0.1)'
              }}>
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>

    {/* Hero */}
    <section className="max-w-5xl mx-auto px-8 py-12 text-center">
      <h1 className="text-5xl font-bold text-gray-700 mb-6">Learning is an Adventure! 🚀</h1>
      <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
        Fun games and stories that help kids learn letters, numbers, and so much more!
      </p>

      {/* Character Cards */}
      <div className="flex justify-center gap-8 mb-12">
        {[
          { emoji: '🦁', name: 'Leo', color: '#FDBCB4' },
          { emoji: '🐰', name: 'Bunny', color: '#ADD8E6' },
          { emoji: '🦊', name: 'Felix', color: '#98FF98' },
        ].map((char, i) => (
          <div key={i} className="w-36 h-44 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            style={{
              backgroundColor: char.color,
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)'
            }}>
            <span className="text-6xl mb-2">{char.emoji}</span>
            <span className="font-bold text-gray-700">{char.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Activities */}
    <section className="max-w-5xl mx-auto px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Today's Activities</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: '🔤', title: 'Letter Match', desc: 'Match letters with pictures!', color: '#E6E6FA', progress: 60 },
          { icon: '🔢', title: 'Count the Stars', desc: 'Learn numbers 1-20', color: '#FFD1DC', progress: 30 },
          { icon: '🎨', title: 'Color Magic', desc: 'Mix colors together!', color: '#B5EAD7', progress: 80 },
          { icon: '🎵', title: 'Sing Along', desc: 'Learn the ABC song', color: '#FFEAA7', progress: 100 },
        ].map((activity, i) => (
          <div key={i} className="p-6 rounded-3xl"
            style={{
              backgroundColor: activity.color,
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)'
            }}>
            <div className="flex items-start gap-4">
              <span className="text-5xl">{activity.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-700">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.desc}</p>
                <div className="h-4 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)'
                  }}>
                  <div className="h-full rounded-full" 
                    style={{
                      width: `${activity.progress}%`,
                      background: 'linear-gradient(90deg, #FF9ECD, #FF71CE)',
                    }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-5xl mx-auto px-8 py-16 text-center">
      <button className="px-12 py-5 rounded-2xl text-xl font-bold text-gray-700"
        style={{
          backgroundColor: '#FFD93D',
          border: '4px solid rgba(255,255,255,0.5)',
          boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)'
        }}>
        Start Learning! 🎉
      </button>
    </section>
  </div>
);

// ============================================================================
// 10. AURORA UI - "Wavelength" Music Streaming
// ============================================================================
const AuroraDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden">
    {/* Aurora Background */}
    <div className="absolute inset-0"
      style={{
        background: 'linear-gradient(-45deg, #0080FF, #8B00FF, #FF1493, #00FFFF, #0080FF)',
        backgroundSize: '400% 400%',
        animation: 'aurora 15s ease infinite'
      }} />
    <style>{`
      @keyframes aurora {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}</style>

    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <span className="text-xl font-bold text-white">Wavelength</span>
          </div>
          <div className="flex gap-6 text-white/80">
            {['Browse', 'Library', 'Radio', 'Premium'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Music that moves<br />with you
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
          100 million tracks. Personalized playlists. Lossless audio. Start your free trial today.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors">
            View Plans
          </button>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Chill Vibes', tracks: '50 tracks', gradient: 'from-purple-600 to-pink-500' },
            { title: 'Focus Flow', tracks: '40 tracks', gradient: 'from-blue-600 to-cyan-500' },
            { title: 'Energy Boost', tracks: '35 tracks', gradient: 'from-orange-500 to-red-500' },
            { title: 'Late Night', tracks: '45 tracks', gradient: 'from-indigo-600 to-purple-600' },
          ].map((playlist, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${playlist.gradient} mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <span className="text-6xl opacity-80">🎵</span>
              </div>
              <h3 className="font-semibold text-white">{playlist.title}</h3>
              <p className="text-white/60 text-sm">{playlist.tracks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Now Playing */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="p-8 rounded-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">🎧</span>
            </div>
            <div className="flex-1">
              <p className="text-white/60 text-sm uppercase tracking-wider">Now Playing</p>
              <h3 className="text-3xl font-bold text-white mt-1">Electric Dreams</h3>
              <p className="text-white/80">Aurora Symphony</p>
              
              {/* Progress */}
              <div className="mt-6">
                <div className="h-1.5 bg-white/20 rounded-full">
                  <div className="h-full w-1/3 bg-white rounded-full" />
                </div>
                <div className="flex justify-between text-white/60 text-sm mt-2">
                  <span>1:24</span>
                  <span>4:32</span>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">⏮️</button>
              <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-purple-600 hover:scale-105 transition-transform">▶️</button>
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">⏭️</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 11. RETRO-FUTURISM - "NEON DRIVE" Synthwave Music
// ============================================================================
const RetroFuturismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#1A1A2E' }}>
    {/* Grid Floor */}
    <div className="absolute bottom-0 left-0 right-0 h-64"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,255,0.1) 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,255,255,0.1) 30px, rgba(0,255,255,0.1) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,255,255,0.1) 30px, rgba(0,255,255,0.1) 31px)',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom'
      }} />

    {/* Scanlines */}
    <div className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
      }} />

    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-8 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold" style={{ 
            color: '#FF006E',
            textShadow: '0 0 10px #FF006E, 0 0 20px #FF006E'
          }}>
            NEON DRIVE
          </h1>
          <div className="flex gap-8 font-mono uppercase text-sm tracking-widest">
            {['Tracks', 'Artists', 'Events', 'Shop'].map((item) => (
              <a key={item} href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-16 text-center">
        <p className="text-cyan-400 font-mono uppercase tracking-widest mb-4">
          &gt;&gt; NOW STREAMING &lt;&lt;
        </p>
        <h2 className="text-6xl md:text-8xl font-black mb-8" style={{
          background: 'linear-gradient(180deg, #FF006E, #8B00FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 60px rgba(255, 0, 110, 0.5)'
        }}>
          MIDNIGHT<br />RUNNER
        </h2>
        <p className="text-cyan-400/80 text-xl font-mono mb-12 max-w-2xl mx-auto">
          The ultimate synthwave compilation. 40 tracks of pure neon-soaked nostalgia.
        </p>
        
        <div className="flex gap-6 justify-center">
          <button className="px-8 py-4 font-mono uppercase tracking-widest text-white border-2"
            style={{
              borderColor: '#00FFFF',
              boxShadow: '0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1)'
            }}>
            Play Now
          </button>
          <button className="px-8 py-4 font-mono uppercase tracking-widest"
            style={{
              background: '#FF006E',
              boxShadow: '0 0 30px rgba(255,0,110,0.5)'
            }}>
            Buy Album
          </button>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h3 className="text-2xl font-mono text-cyan-400 mb-8 uppercase tracking-widest">
          // Featured Artists
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'CHROME VELOCITY', genre: 'Outrun' },
            { name: 'NEON SHADOWS', genre: 'Darksynth' },
            { name: 'LASER HIGHWAY', genre: 'Synthwave' },
            { name: 'DIGITAL SUNSET', genre: 'Chillwave' },
          ].map((artist, i) => (
            <div key={i} className="p-6 border-2 text-center"
              style={{
                borderColor: '#00FFFF',
                boxShadow: '0 0 20px rgba(0,255,255,0.3)'
              }}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FF006E, #8B00FF)',
                  boxShadow: '0 0 30px rgba(255,0,110,0.5)'
                }} />
              <h4 className="font-mono text-white mb-1">{artist.name}</h4>
              <p className="text-cyan-400/60 text-sm font-mono uppercase">{artist.genre}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="p-8 border-2" style={{
          borderColor: '#FF006E',
          background: 'rgba(255,0,110,0.1)',
          boxShadow: '0 0 40px rgba(255,0,110,0.3)'
        }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-400 font-mono text-sm mb-2">UPCOMING EVENT</p>
              <h3 className="text-4xl font-bold text-white mb-2">NEON NIGHTS FESTIVAL</h3>
              <p className="text-white/60 font-mono">Los Angeles • December 31, 2025</p>
            </div>
            <button className="px-8 py-4 font-mono uppercase text-black font-bold"
              style={{ background: '#00FFFF' }}>
              Get Tickets
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 12. FLAT DESIGN - "Taskr" Productivity App
// ============================================================================
const FlatDesignDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-100">
    {/* Header */}
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Taskr</span>
          </div>
          <div className="flex gap-4">
            {['Features', 'Pricing', 'Blog'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-500 transition-colors">{item}</a>
            ))}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>

    {/* Hero */}
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Get things done.<br />Simply.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The task manager that gets out of your way. No fancy features, just what you need to stay organized.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
            Try Free for 14 Days
          </button>
          <button className="px-8 py-4 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Everything you need, nothing you don't</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '📋', title: 'Simple Lists', desc: 'Create lists for projects, personal tasks, or daily routines.', color: 'bg-blue-500' },
          { icon: '🔔', title: 'Smart Reminders', desc: 'Get notified at the right time, in the right place.', color: 'bg-green-500' },
          { icon: '👥', title: 'Team Sync', desc: 'Share lists with your team and collaborate in real-time.', color: 'bg-purple-500' },
          { icon: '📱', title: 'Works Everywhere', desc: 'iOS, Android, Web, and desktop apps that stay in sync.', color: 'bg-orange-500' },
          { icon: '🔄', title: 'Recurring Tasks', desc: 'Set it and forget it. Tasks repeat automatically.', color: 'bg-pink-500' },
          { icon: '📊', title: 'Progress Tracking', desc: 'See how much you have accomplished at a glance.', color: 'bg-cyan-500' },
        ].map((feature, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Task Demo */}
    <section className="max-w-5xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Today's Tasks</h3>
          <span className="text-gray-500 text-sm">3 of 5 completed</span>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { text: 'Review project proposal', done: true },
            { text: 'Send weekly report', done: true },
            { text: 'Call with design team', done: true },
            { text: 'Update documentation', done: false },
            { text: 'Plan next sprint', done: false },
          ].map((task, i) => (
            <div key={i} className="px-6 py-4 flex items-center gap-4">
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${task.done ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                {task.done && <span className="text-white text-sm">✓</span>}
              </div>
              <span className={task.done ? 'text-gray-400 line-through' : 'text-gray-800'}>{task.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-blue-500 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get organized?</h2>
        <p className="text-blue-100 mb-8">Join 2 million people who use Taskr every day.</p>
        <button className="px-8 py-4 bg-white text-blue-500 rounded-md font-bold hover:bg-blue-50 transition-colors">
          Start Free Trial
        </button>
      </div>
    </section>
  </div>
);

// ============================================================================
// 13. SKEUOMORPHISM - "Artisan Notes" Vintage Notebook
// ============================================================================
const SkeuomorphismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(180deg, #8B4513 0%, #654321 100%)' }}>
    {/* Leather Desk */}
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* App Header - Wood Plaque Style */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-serif text-amber-100 drop-shadow-md"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Artisan Notes
        </h1>
        <p className="text-amber-200/70 font-serif italic mt-2">Your digital leather journal</p>
      </header>

      {/* Notebook */}
      <div className="rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #DEB887, #D2691E)',
          boxShadow: 'inset 3px 3px 6px rgba(255,255,255,0.2), inset -3px -3px 6px rgba(0,0,0,0.3), 0 20px 50px rgba(0,0,0,0.5)',
          border: '6px solid #8B4513'
        }}>
        {/* Notebook Header */}
        <div className="px-6 py-4 flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, #A0522D, #8B4513)',
            borderBottom: '4px solid #654321'
          }}>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #FFD700, #B8860B)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }} />
            <span className="text-amber-100 font-serif">Personal Journal</span>
          </div>
          <div className="flex gap-2">
            {['📖', '✏️', '🔖'].map((icon, i) => (
              <button key={i} className="w-10 h-10 rounded flex items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, #DEB887, #D2B48C)',
                  boxShadow: '0 3px 0 #8B4513, inset 0 1px 0 rgba(255,255,255,0.3)'
                }}>
                <span>{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Paper Content */}
        <div className="p-8" style={{
          background: 'linear-gradient(180deg, #FFFEF9, #F5F5DC)',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #E8E4C9 31px, #E8E4C9 32px)',
          boxShadow: 'inset 0 5px 10px rgba(0,0,0,0.1)'
        }}>
          {/* Date Header */}
          <div className="text-right mb-6">
            <span className="font-serif text-gray-600 italic">December 15, 2025</span>
          </div>

          {/* Note Entry */}
          <div className="space-y-4 font-serif text-gray-800 text-lg leading-loose">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
              Today I discovered the beauty of digital craftsmanship. There's something 
              magical about interfaces that feel tangible, that remind us of the physical 
              objects we cherish.
            </p>
            <p>
              The worn leather cover, the cream-colored pages, the golden clasps — each 
              element tells a story of care and intention.
            </p>
            <p className="italic text-gray-600">
              "The best design is invisible, but memorable."
            </p>
          </div>

          {/* Ribbon Bookmark */}
          <div className="absolute right-4 top-0 w-4 h-24"
            style={{
              background: 'linear-gradient(180deg, #DC143C, #8B0000)',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }} />
        </div>

        {/* Notebook Footer */}
        <div className="px-6 py-4 flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, #8B4513, #654321)'
          }}>
          <span className="text-amber-200/70 font-serif text-sm">Page 42 of 120</span>
          <div className="flex gap-4">
            <button className="text-amber-200 font-serif">← Previous</button>
            <button className="text-amber-200 font-serif">Next →</button>
          </div>
        </div>
      </div>

      {/* Desk Items */}
      <div className="flex justify-center gap-8 mt-8">
        <div className="text-4xl" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>🖋️</div>
        <div className="text-4xl" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>📚</div>
        <div className="text-4xl" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>☕</div>
      </div>
    </div>
  </div>
);

// ============================================================================
// 14. LIQUID GLASS - "Fluid" Premium SaaS
// ============================================================================
const LiquidGlassDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)' }}>
    {/* Animated Blobs */}
    <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-400 blur-3xl opacity-50 top-0 -left-32 animate-pulse" />
    <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-400 blur-3xl opacity-50 bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-400 blur-3xl opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }} />
          <span className="text-xl font-semibold text-white">Fluid</span>
        </div>
        <nav className="flex gap-6 text-white/80">
          {['Product', 'Pricing', 'Docs', 'Blog'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Design that<br />flows
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          The next generation design system. Fluid, responsive, and beautiful on every screen.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl text-white font-semibold"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
            Start Building
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white text-purple-600 font-semibold">
            View Examples
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: '✨', title: 'Adaptive Components', desc: 'Components that morph and adapt to any context.' },
          { icon: '🌊', title: 'Fluid Layouts', desc: 'Seamless transitions between breakpoints.' },
          { icon: '🎨', title: 'Dynamic Theming', desc: 'Real-time theme customization with live preview.' },
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }}>
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-white/70">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Showcase */}
      <section className="p-8 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
          backdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 16px 64px rgba(0,0,0,0.2)'
        }}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">See it in action</h2>
            <p className="text-white/70 mb-6">
              Watch how Fluid transforms your workflow with intelligent, context-aware design tools.
            </p>
            <button className="px-6 py-3 rounded-xl text-white font-medium"
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
              Play Demo →
            </button>
          </div>
          <div className="aspect-video rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,107,0.3), rgba(78,205,196,0.3))',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
            <span className="text-6xl">▶️</span>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// ============================================================================
// 15. MOTION-DRIVEN - "Kinetic Studios" Creative Portfolio
// ============================================================================
const MotionDrivenDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-slideIn { animation: slideIn 0.8s ease-out forwards; }
    `}</style>

    {/* Header */}
    <header className="max-w-6xl mx-auto px-8 py-8">
      <nav className="flex justify-between items-center">
        <span className="text-2xl font-bold text-white">Kinetic</span>
        <div className="flex gap-6 text-white/70">
          {['Work', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-all duration-300 hover:scale-110">{item}</a>
          ))}
        </div>
      </nav>
    </header>

    {/* Hero */}
    <section className="max-w-6xl mx-auto px-8 py-16 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-slideIn">
        Motion is<br />
        <span className="animate-float inline-block" style={{ animationDelay: '0.2s' }}>our</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-float inline-block" style={{ animationDelay: '0.4s' }}>language</span>
      </h1>
      <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 animate-slideIn" style={{ animationDelay: '0.3s' }}>
        We craft digital experiences that move people. Literally.
      </p>
    </section>

    {/* Floating Elements */}
    <section className="max-w-6xl mx-auto px-8 py-8">
      <div className="flex justify-center gap-8">
        {[
          { shape: '●', color: 'bg-pink-500', delay: '0s' },
          { shape: '■', color: 'bg-yellow-500', delay: '0.3s' },
          { shape: '▲', color: 'bg-cyan-500', delay: '0.6s' },
        ].map((item, i) => (
          <div key={i} className={`w-24 h-24 ${item.color} rounded-2xl flex items-center justify-center text-4xl text-white animate-float`}
            style={{ animationDelay: item.delay, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            {item.shape}
          </div>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Featured Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Nike Motion Campaign', type: 'Animation', color: 'from-red-600 to-orange-500' },
          { title: 'Spotify Wrapped 2025', type: 'Interactive', color: 'from-green-500 to-cyan-500' },
          { title: 'Apple Product Launch', type: '3D Motion', color: 'from-gray-700 to-gray-900' },
          { title: 'Google Doodle', type: 'Illustration', color: 'from-blue-500 to-purple-600' },
        ].map((project, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br ${project.color} cursor-pointer transition-all duration-500 hover:scale-105`}
            style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xl font-medium">View Project →</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/60 text-sm">{project.type}</p>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-3 gap-8 text-center">
        {[
          { value: '150+', label: 'Projects' },
          { value: '50+', label: 'Awards' },
          { value: '8', label: 'Years' },
        ].map((stat, i) => (
          <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
            <p className="text-6xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// ============================================================================
// 16. MICRO-INTERACTIONS - "Pulse" Social App
// ============================================================================
const MicroInteractionsDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-50">
    <style>{`
      .btn-hover:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(99,102,241,0.3); }
      .btn-hover:active { transform: scale(0.95); }
      .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
      .icon-bounce:hover { animation: bounce 0.5s; }
      @keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
    `}</style>

    {/* Header */}
    <header className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-2xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">◉</span>
            </div>
            <span className="text-xl font-bold">Pulse</span>
          </div>
          <div className="flex gap-4">
            {['🔔', '✉️', '👤'].map((icon, i) => (
              <button key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-150 icon-bounce hover:bg-gray-200">
                <span>{icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>

    {/* Feed */}
    <main className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      {/* Composer */}
      <div className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 card-hover">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <textarea className="w-full resize-none border-none outline-none text-lg placeholder-gray-400" 
              placeholder="What's on your mind?" rows={2} />
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                {['📷', '🎬', '📍', '😊'].map((icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 icon-bounce hover:bg-gray-100">
                    <span className="text-xl">{icon}</span>
                  </button>
                ))}
              </div>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold transition-all duration-150 btn-hover">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      {[
        { user: 'Alex Chen', handle: '@alexchen', content: 'Just shipped a new feature! The micro-interactions make everything feel so alive 🚀', likes: 127, comments: 23 },
        { user: 'Sarah Miller', handle: '@sarahm', content: 'Love how this app responds to every tap. It\'s like having a conversation with the interface.', likes: 89, comments: 12 },
      ].map((post, i) => (
        <article key={i} className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 card-hover">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold">{post.user}</span>
                <span className="text-gray-500">{post.handle}</span>
                <span className="text-gray-400">· 2h</span>
              </div>
              <p className="text-gray-800 mb-4">{post.content}</p>
              <div className="flex gap-6">
                {[
                  { icon: '❤️', count: post.likes },
                  { icon: '💬', count: post.comments },
                  { icon: '🔄', count: 5 },
                  { icon: '📤', count: null },
                ].map((action, j) => (
                  <button key={j} className="flex items-center gap-2 text-gray-500 transition-all duration-150 hover:text-indigo-600 icon-bounce">
                    <span>{action.icon}</span>
                    {action.count && <span className="text-sm">{action.count}</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </main>

    {/* Floating Action Button */}
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg transition-all duration-150 btn-hover">
      +
    </button>
  </div>
);

// ============================================================================
// 17. INCLUSIVE DESIGN - "CityMove" Public Transit
// ============================================================================
const InclusiveDesignDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    {/* Header */}
    <header className="bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 text-2xl">🚌</span>
            </div>
            <span className="text-2xl font-bold">CityMove</span>
          </div>
          <button className="px-4 py-2 border-2 border-white rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-yellow-400">
            Accessibility Options
          </button>
        </div>
      </div>
    </header>

    {/* Main */}
    <main className="max-w-4xl mx-auto px-6 py-8">
      {/* Alert */}
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-600 rounded-r-lg mb-8 flex items-start gap-4">
        <span className="text-2xl">⚠️</span>
        <div>
          <h2 className="font-bold text-gray-900">Service Alert</h2>
          <p className="text-gray-700">Blue Line: Minor delays (5-10 min) due to signal work. Audio announcements available.</p>
        </div>
      </div>

      {/* Trip Planner */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Trip</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2" htmlFor="from">From</label>
            <input id="from" type="text" className="w-full px-4 py-4 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-700"
              placeholder="Enter starting location" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-2" htmlFor="to">To</label>
            <input id="to" type="text" className="w-full px-4 py-4 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-700"
              placeholder="Enter destination" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-lg font-semibold text-gray-900 mb-2">Accessibility Needs</label>
              <div className="space-y-2">
                {[
                  { icon: '♿', label: 'Wheelchair accessible' },
                  { icon: '🚶', label: 'Limited walking' },
                  { icon: '👁️', label: 'Visual assistance' },
                ].map((option, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-6 h-6 rounded border-2 border-gray-400 focus:ring-4 focus:ring-blue-400" />
                    <span className="text-lg">{option.icon} {option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <button className="w-full py-4 bg-blue-700 text-white text-xl font-bold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400">
            Find Routes
          </button>
        </div>
      </section>

      {/* Results */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Routes</h2>
        <div className="space-y-4">
          {[
            { route: 'Blue Line → Bus 42', time: '25 min', accessible: true, cost: '$2.50' },
            { route: 'Red Line (Direct)', time: '18 min', accessible: true, cost: '$2.50' },
          ].map((route, i) => (
            <a key={i} href="#" className="block p-6 border-2 border-gray-300 rounded-lg hover:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{route.route}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <span className="text-lg">⏱️ {route.time}</span>
                    <span>•</span>
                    <span className="text-lg">{route.cost}</span>
                    {route.accessible && <span className="text-lg">• ♿ Accessible</span>}
                  </p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  </div>
);

// ============================================================================
// 18. ZERO INTERFACE - "Echo" AI Assistant
// ============================================================================
const ZeroInterfaceDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-50 flex flex-col">
    {/* Minimal Header */}
    <header className="px-8 py-6">
      <div className="max-w-md mx-auto text-center">
        <span className="text-gray-400 text-sm">Echo AI</span>
      </div>
    </header>

    {/* Main - Ambient Interface */}
    <main className="flex-1 flex items-center justify-center px-8">
      <div className="max-w-md w-full text-center">
        {/* AI Orb */}
        <div className="relative mx-auto w-40 h-40 mb-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse opacity-30 blur-xl" />
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1 bg-white rounded animate-pulse"
                    style={{ height: `${20 + Math.random() * 30}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <p className="text-gray-500 text-lg mb-4">Listening...</p>
        <h2 className="text-2xl font-light text-gray-800 mb-8">
          "What's the weather like today?"
        </h2>

        {/* Response */}
        <div className="bg-white rounded-2xl p-6 shadow-sm max-w-sm mx-auto">
          <p className="text-gray-700 text-lg">
            It's currently <strong>72°F</strong> and sunny in San Francisco. 
            Perfect weather for a walk in the park! 🌞
          </p>
        </div>

        {/* Suggestions */}
        <div className="mt-12">
          <p className="text-gray-400 text-sm mb-4">Try saying:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Set a reminder', 'Play some music', 'What\'s my schedule?'].map((suggestion, i) => (
              <button key={i} className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm hover:bg-gray-100 transition-colors shadow-sm">
                "{suggestion}"
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>

    {/* Minimal Footer */}
    <footer className="px-8 py-6">
      <div className="max-w-md mx-auto flex justify-center gap-8 text-gray-400">
        <button className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-2xl">🎤</span>
          <span className="text-xs">Voice</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-2xl">⌨️</span>
          <span className="text-xs">Type</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-2xl">📷</span>
          <span className="text-xs">Scan</span>
        </button>
      </div>
    </footer>
  </div>
);

// ============================================================================
// 19. SOFT UI EVOLUTION - "Vitality" Health Tracker
// ============================================================================
const SoftUIEvolutionDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F0F4F8' }}>
    {/* Header */}
    <header className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-4px -4px 10px #ffffff, 4px 4px 10px #d1d9e6'
            }}>
            <span className="text-2xl">💚</span>
          </div>
          <span className="text-xl font-semibold text-gray-700">Vitality</span>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-3px -3px 8px #ffffff, 3px 3px 8px #d1d9e6'
            }}>
            <span>🔔</span>
          </button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-3px -3px 8px #ffffff, 3px 3px 8px #d1d9e6'
            }}>
            <span>⚙️</span>
          </button>
        </div>
      </div>
    </header>

    {/* Main */}
    <main className="max-w-4xl mx-auto px-6 py-8">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Good morning, Sarah!</h1>
        <p className="text-gray-500 mt-1">Here's your health summary for today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: '🏃', value: '8,423', label: 'Steps', color: 'text-blue-600' },
          { icon: '🔥', value: '420', label: 'Calories', color: 'text-orange-600' },
          { icon: '💧', value: '6/8', label: 'Glasses', color: 'text-cyan-600' },
          { icon: '😴', value: '7h 42m', label: 'Sleep', color: 'text-purple-600' },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl text-center"
            style={{
              background: '#F0F4F8',
              boxShadow: '-6px -6px 15px #ffffff, 6px 6px 15px #d1d9e6'
            }}>
            <span className="text-3xl mb-2 block">{stat.icon}</span>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Progress Ring */}
      <div className="p-8 rounded-3xl mb-8"
        style={{
          background: '#F0F4F8',
          boxShadow: '-8px -8px 20px #ffffff, 8px 8px 20px #d1d9e6'
        }}>
        <div className="flex items-center gap-8">
          <div className="relative w-40 h-40 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#d1d9e6" strokeWidth="12" fill="none" />
              <circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="12" fill="none"
                strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">75%</span>
              <span className="text-gray-500 text-sm">Daily Goal</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Great progress!</h3>
            <p className="text-gray-600 mb-4">You're 75% toward your daily health goal. Keep it up!</p>
            <button className="px-6 py-3 rounded-xl text-blue-600 font-semibold"
              style={{
                background: '#F0F4F8',
                boxShadow: '-4px -4px 10px #ffffff, 4px 4px 10px #d1d9e6'
              }}>
              View Details →
            </button>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="p-6 rounded-2xl"
        style={{
          background: '#F0F4F8',
          boxShadow: 'inset -4px -4px 10px #ffffff, inset 4px 4px 10px #d1d9e6'
        }}>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Today's Activities</h3>
        <div className="space-y-3">
          {[
            { icon: '🚶', activity: 'Morning Walk', time: '7:00 AM', duration: '30 min' },
            { icon: '🧘', activity: 'Yoga Session', time: '8:00 AM', duration: '45 min' },
            { icon: '🍳', activity: 'Healthy Breakfast', time: '9:00 AM', calories: '350 cal' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl"
              style={{
                background: '#F0F4F8',
                boxShadow: '-3px -3px 8px #ffffff, 3px 3px 8px #d1d9e6'
              }}>
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-medium text-gray-800">{item.activity}</p>
                  <p className="text-gray-500 text-sm">{item.time}</p>
                </div>
              </div>
              <span className="text-gray-600 text-sm">{item.duration || item.calories}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

// ============================================================================
// 20. NEUBRUTALISM - "DEV.STACK" Tech Blog
// ============================================================================
const NeubrutalismDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-amber-50">
    {/* Header */}
    <header className="border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <span className="text-3xl font-black">DEV.STACK</span>
          <div className="flex gap-4">
            {['Articles', 'Tutorials', 'Newsletter'].map((item) => (
              <a key={item} href="#" className="px-4 py-2 font-bold hover:bg-yellow-300 border-2 border-transparent hover:border-black transition-all">{item}</a>
            ))}
            <button className="px-4 py-2 bg-blue-500 text-white border-4 border-black font-bold"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              Subscribe
            </button>
          </div>
        </nav>
      </div>
    </header>

    {/* Hero */}
    <section className="border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Where developers <span className="bg-yellow-300 px-2">actually</span> learn stuff.
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          No fluff. No filler. Just practical tutorials and hot takes on modern web development.
        </p>
      </div>
    </section>

    {/* Featured */}
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-black mb-6">📌 Featured</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="bg-pink-400 p-6 border-4 border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
          <span className="px-3 py-1 bg-black text-white text-sm font-bold">TUTORIAL</span>
          <h3 className="text-2xl font-black mt-4 mb-2">Build a REST API with Bun in 10 Minutes</h3>
          <p className="mb-4">Bun is blazing fast. Here's how to get started with your first API.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold">@alexdev</span>
            <span className="text-sm">5 min read</span>
          </div>
        </article>
        <article className="bg-cyan-400 p-6 border-4 border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
          <span className="px-3 py-1 bg-black text-white text-sm font-bold">OPINION</span>
          <h3 className="text-2xl font-black mt-4 mb-2">Why I Stopped Using React (And Came Back)</h3>
          <p className="mb-4">A journey through Vue, Svelte, and HTMX — and why React still wins.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold">@sarahcodes</span>
            <span className="text-sm">8 min read</span>
          </div>
        </article>
      </div>
    </section>

    {/* Latest */}
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-black mb-6">🆕 Latest Articles</h2>
      <div className="space-y-4">
        {[
          { title: 'The Complete Guide to TypeScript 5.0', tag: 'GUIDE', color: 'bg-green-400' },
          { title: 'CSS Container Queries Are Here!', tag: 'NEWS', color: 'bg-orange-400' },
          { title: 'Why Every Dev Should Learn SQL', tag: 'OPINION', color: 'bg-purple-400' },
        ].map((article, i) => (
          <article key={i} className={`${article.color} p-6 border-4 border-black flex justify-between items-center`}
            style={{ boxShadow: '6px 6px 0 #000' }}>
            <div>
              <span className="px-2 py-1 bg-black text-white text-xs font-bold mr-3">{article.tag}</span>
              <span className="text-xl font-black">{article.title}</span>
            </div>
            <span className="text-2xl">→</span>
          </article>
        ))}
      </div>
    </section>

    {/* Newsletter */}
    <section className="bg-yellow-300 border-y-4 border-black">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black mb-2">Get the weekly digest ✉️</h2>
            <p>Top articles and tutorials delivered every Friday.</p>
          </div>
          <div className="flex gap-3">
            <input type="email" placeholder="you@email.com" 
              className="px-4 py-3 border-4 border-black font-mono w-64" />
            <button className="px-6 py-3 bg-black text-white font-bold border-4 border-black"
              style={{ boxShadow: '4px 4px 0 #000' }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// ============================================================================
// STYLES 21-49: Continuing with comprehensive demos
// ============================================================================

// 21. Bento Box Grid - "Mosaic" Product Features
const BentoBoxGridDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F5F7' }}>
    <header className="max-w-6xl mx-auto px-8 py-12 text-center">
      <p className="text-gray-500 mb-2">Introducing</p>
      <h1 className="text-6xl font-semibold text-gray-900 mb-4">Mosaic</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">The complete design system for modern apps. Beautiful. Flexible. Powerful.</p>
    </header>
    <section className="max-w-6xl mx-auto px-8 py-8">
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        <div className="col-span-2 row-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 flex flex-col justify-end text-white">
          <span className="text-6xl mb-4">✨</span>
          <h3 className="text-2xl font-semibold">Design Tokens</h3>
          <p className="text-white/80">Consistent styling across all components</p>
        </div>
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between">
          <span className="text-4xl">🎨</span>
          <div><h3 className="font-semibold">Themes</h3><p className="text-gray-500 text-sm">Light & Dark</p></div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between">
          <span className="text-4xl">📱</span>
          <div><h3 className="font-semibold">Responsive</h3><p className="text-gray-500 text-sm">Every screen</p></div>
        </div>
        <div className="col-span-2 bg-gray-900 rounded-3xl p-6 text-white flex items-center gap-6">
          <span className="text-5xl">⚡</span>
          <div><h3 className="text-xl font-semibold">Lightning Fast</h3><p className="text-gray-400">Built for performance</p></div>
        </div>
        <div className="bg-blue-500 rounded-3xl p-6 text-white flex flex-col justify-between">
          <span className="text-4xl">🔧</span>
          <h3 className="font-semibold">50+ Components</h3>
        </div>
        <div className="bg-green-500 rounded-3xl p-6 text-white flex flex-col justify-between">
          <span className="text-4xl">📚</span>
          <h3 className="font-semibold">Full Docs</h3>
        </div>
        <div className="col-span-2 bg-white rounded-3xl shadow-sm p-6 flex items-center justify-between">
          <div><h3 className="text-xl font-semibold text-gray-900">Ready to start?</h3><p className="text-gray-500">npm install mosaic-ui</p></div>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold">Get Started</button>
        </div>
      </div>
    </section>
  </div>
);

// 22. Y2K Aesthetic - "CHROME BABY" Fashion Brand
const Y2KDemo = ({ }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: 'linear-gradient(135deg, #FF69B4, #00FFFF)' }}>
    <header className="max-w-5xl mx-auto px-8 py-8 text-center">
      <h1 className="text-6xl font-black text-white mb-2" style={{ textShadow: '3px 3px 0 #9400D3, 6px 6px 0 #C0C0C0' }}>
        CHROME BABY
      </h1>
      <p className="text-white/90 text-xl font-bold tracking-widest">★ FASHION FOR THE FUTURE ★</p>
    </header>
    <section className="max-w-5xl mx-auto px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'HOLO JACKET', price: '$299', emoji: '🧥' },
          { name: 'CYBER SHADES', price: '$149', emoji: '🕶️' },
          { name: 'PLATFORM BOOTS', price: '$249', emoji: '👢' },
        ].map((product, i) => (
          <div key={i} className="p-6 rounded-3xl text-center"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 -5px 20px rgba(0,0,0,0.05)'
            }}>
            <div className="text-7xl mb-4">{product.emoji}</div>
            <h3 className="text-xl font-black text-purple-600">{product.name}</h3>
            <p className="text-pink-500 font-bold text-2xl my-2">{product.price}</p>
            <button className="w-full py-3 rounded-full font-bold text-white"
              style={{ background: 'linear-gradient(90deg, #FF69B4, #9400D3)' }}>
              ADD TO BAG ✨
            </button>
          </div>
        ))}
      </div>
    </section>
    <section className="text-center py-12">
      <p className="text-white text-2xl font-bold" style={{ textShadow: '2px 2px 0 #9400D3' }}>
        ✨ FREE SHIPPING ON ORDERS OVER $100 ✨
      </p>
    </section>
  </div>
);

// Map all demos to their slugs
const styleDemos: Record<string, React.FC<StyleDemoProps>> = {
  'minimalism-swiss-style': MinimalismDemo,
  'neumorphism': NeumorphismDemo,
  'glassmorphism': GlassmorphismDemo,
  'brutalism': BrutalismDemo,
  '3d-hyperrealism': ThreeDDemo,
  'vibrant-block-based': VibrantDemo,
  'dark-mode-oled': DarkModeDemo,
  'accessible-ethical': AccessibleDemo,
  'claymorphism': ClaymorphismDemo,
  'aurora-ui': AuroraDemo,
  'retro-futurism': RetroFuturismDemo,
  'flat-design': FlatDesignDemo,
  'skeuomorphism': SkeuomorphismDemo,
  'liquid-glass': LiquidGlassDemo,
  'motion-driven': MotionDrivenDemo,
  'micro-interactions': MicroInteractionsDemo,
  'inclusive-design': InclusiveDesignDemo,
  'zero-interface': ZeroInterfaceDemo,
  'soft-ui-evolution': SoftUIEvolutionDemo,
  'neubrutalism': NeubrutalismDemo,
  'bento-box-grid': BentoBoxGridDemo,
  'y2k-aesthetic': Y2KDemo,
};