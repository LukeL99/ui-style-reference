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

// 1. Minimalism & Swiss Style
const MinimalismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    <div className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-6xl font-light tracking-tight text-black mb-8">
            {style.name}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Less is more. The Swiss Style emphasizes clarity, objectivity, and rational composition.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 flex items-end">
          <div className="w-full h-1 bg-black" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-24">
        {['Clarity', 'Grid', 'Function'].map((text, i) => (
          <div key={i} className="border-t-2 border-black pt-4">
            <span className="text-sm text-gray-500">0{i + 1}</span>
            <h3 className="text-2xl font-medium mt-2">{text}</h3>
          </div>
        ))}
      </div>
      <button className="mt-16 px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors">
        Explore More
      </button>
    </div>
  </div>
);

// 2. Neumorphism
const NeumorphismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center" style={{ background: '#E8E8E8' }}>
    <div className="text-center p-12">
      <h1 className="text-4xl font-semibold text-gray-700 mb-12">{style.name}</h1>
      <div className="flex gap-8 justify-center flex-wrap">
        <div className="w-48 h-48 rounded-3xl flex items-center justify-center"
          style={{
            background: '#E8E8E8',
            boxShadow: '-10px -10px 30px #ffffff, 10px 10px 30px #d1d1d1'
          }}>
          <span className="text-gray-600 font-medium">Raised</span>
        </div>
        <div className="w-48 h-48 rounded-3xl flex items-center justify-center"
          style={{
            background: '#E8E8E8',
            boxShadow: 'inset -5px -5px 15px #ffffff, inset 5px 5px 15px #d1d1d1'
          }}>
          <span className="text-gray-600 font-medium">Pressed</span>
        </div>
      </div>
      <button className="mt-12 px-8 py-4 rounded-2xl text-gray-700 font-medium transition-all"
        style={{
          background: '#E8E8E8',
          boxShadow: '-5px -5px 15px #ffffff, 5px 5px 15px #d1d1d1'
        }}>
        Soft Button
      </button>
    </div>
  </div>
);

// 3. Glassmorphism
const GlassmorphismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)' }}>
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50" />
    </div>
    <div className="relative z-10 p-12 rounded-3xl max-w-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
      <h1 className="text-4xl font-bold text-white mb-4">{style.name}</h1>
      <p className="text-white/80 mb-8">
        Frosted glass effects with vibrant backgrounds create depth and visual hierarchy.
      </p>
      <button className="px-6 py-3 rounded-xl text-white font-medium"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
        Get Started
      </button>
    </div>
  </div>
);

// 4. Brutalism
const BrutalismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tight leading-none mb-8"
        style={{ fontFamily: 'system-ui' }}>
        {style.name}
      </h1>
      <div className="border-4 border-black p-8 mb-8">
        <p className="text-xl font-mono">
          RAW. UNPOLISHED. HONEST.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white border-4 border-black font-bold uppercase"
          style={{ boxShadow: '8px 8px 0 #000' }}>
          Primary Action
        </button>
        <button className="px-8 py-4 bg-yellow-400 text-black border-4 border-black font-bold uppercase"
          style={{ boxShadow: '8px 8px 0 #000' }}>
          Secondary
        </button>
        <button className="px-8 py-4 bg-red-500 text-white border-4 border-black font-bold uppercase"
          style={{ boxShadow: '8px 8px 0 #000' }}>
          Alert
        </button>
      </div>
    </div>
  </div>
);

// 5. 3D & Hyperrealism
const ThreeDDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #001F3F 0%, #0a1628 100%)' }}>
    <div className="text-center p-12" style={{ perspective: '1000px' }}>
      <h1 className="text-5xl font-bold text-white mb-8">{style.name}</h1>
      <div className="relative inline-block"
        style={{
          transform: 'rotateY(-15deg) rotateX(10deg)',
          transformStyle: 'preserve-3d'
        }}>
        <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"
          style={{
            boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 100px rgba(255,165,0,0.3)',
            transform: 'translateZ(50px)'
          }}>
          <span className="text-white text-6xl">🎮</span>
        </div>
      </div>
      <p className="text-gray-400 mt-8 max-w-md mx-auto">
        Immersive 3D experiences with realistic lighting and depth
      </p>
    </div>
  </div>
);

// 6. Vibrant & Block-based
const VibrantDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#0D0D0D' }}>
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl md:text-7xl font-black text-white mb-12">{style.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { bg: '#39FF14', text: 'BOLD' },
          { bg: '#BF00FF', text: 'VIBRANT' },
          { bg: '#FF1493', text: 'ENERGETIC' },
          { bg: '#00FFFF', text: 'PLAYFUL' }
        ].map((item, i) => (
          <div key={i} className="aspect-square rounded-3xl flex items-center justify-center p-6"
            style={{ backgroundColor: item.bg }}>
            <span className="text-2xl font-black text-black">{item.text}</span>
          </div>
        ))}
      </div>
      <button className="mt-12 px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform">
        Get Started →
      </button>
    </div>
  </div>
);

// 7. Dark Mode (OLED)
const DarkModeDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black">
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-white mb-4">{style.name}</h1>
      <p className="text-gray-400 mb-12">Optimized for OLED displays with true black backgrounds</p>
      <div className="space-y-6">
        {[
          { color: '#39FF14', label: 'Success' },
          { color: '#0080FF', label: 'Info' },
          { color: '#FFD700', label: 'Warning' },
          { color: '#BF00FF', label: 'Accent' }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-800">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} />
            <span className="text-white">{item.label}</span>
            <span className="ml-auto font-mono text-sm" style={{ color: item.color }}>{item.color}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 8. Accessible & Ethical
const AccessibleDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{style.name}</h1>
      <p className="text-lg text-gray-700 mb-8">WCAG AAA compliant design with 7:1+ contrast ratio</p>
      <div className="space-y-6">
        <div className="p-6 bg-white border-2 border-gray-900 rounded-lg">
          <label className="block text-lg font-semibold text-gray-900 mb-2">Email Address</label>
          <input type="email" className="w-full px-4 py-3 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-600" placeholder="your@email.com" />
        </div>
        <button className="w-full px-6 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Submit Form
        </button>
        <p className="text-sm text-gray-600">
          ✓ Large touch targets (44x44px) • ✓ Clear focus states • ✓ Screen reader friendly
        </p>
      </div>
    </div>
  </div>
);

// 9. Claymorphism
const ClaymorphismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center" style={{ background: '#F0E6FA' }}>
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold text-gray-700 mb-12">{style.name}</h1>
      <div className="flex gap-8 justify-center flex-wrap">
        {['#FDBCB4', '#ADD8E6', '#98FF98'].map((color, i) => (
          <div key={i} className="w-40 h-40 rounded-3xl flex items-center justify-center"
            style={{
              backgroundColor: color,
              border: '4px solid rgba(255,255,255,0.5)',
              boxShadow: `inset -4px -4px 8px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.15)`,
            }}>
            <span className="text-4xl">{['🎨', '🎭', '🎪'][i]}</span>
          </div>
        ))}
      </div>
      <button className="mt-12 px-8 py-4 rounded-2xl text-gray-700 font-semibold"
        style={{
          backgroundColor: '#E6E6FA',
          border: '4px solid rgba(255,255,255,0.5)',
          boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.1), 6px 6px 12px rgba(0,0,0,0.15)'
        }}>
        Playful Button
      </button>
    </div>
  </div>
);

// 10. Aurora UI
const AuroraDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 animate-gradient"
      style={{
        background: 'linear-gradient(-45deg, #0080FF, #8B00FF, #FF1493, #00FFFF, #0080FF)',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 15s ease infinite'
      }} />
    <div className="relative z-10 text-center p-12">
      <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">{style.name}</h1>
      <p className="text-white/90 text-xl mb-8 max-w-lg mx-auto">
        Flowing gradients inspired by the Northern Lights
      </p>
      <button className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-colors">
        Experience the Aurora
      </button>
    </div>
  </div>
);

// 11. Retro-Futurism
const RetroFuturismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#1A1A2E' }}>
    <div className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,255,0.1) 2px, rgba(255,0,255,0.1) 4px)'
      }} />
    <div className="relative z-10 max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-6xl font-bold mb-8" style={{ 
        color: '#FF006E',
        textShadow: '0 0 10px #FF006E, 0 0 20px #FF006E, 0 0 40px #FF006E'
      }}>
        {style.name}
      </h1>
      <p className="text-cyan-400 text-xl mb-12 font-mono">
        &gt;&gt; WELCOME TO THE FUTURE &lt;&lt;
      </p>
      <div className="inline-block p-8 border-2" style={{
        borderColor: '#00FFFF',
        boxShadow: '0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1)'
      }}>
        <span className="text-cyan-400 font-mono text-2xl">SYNTHWAVE VIBES</span>
      </div>
    </div>
  </div>
);

// 12. Flat Design
const FlatDesignDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-100">
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{style.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { bg: '#FF5722', icon: '🔔' },
          { bg: '#2196F3', icon: '💬' },
          { bg: '#4CAF50', icon: '✓' },
          { bg: '#FFC107', icon: '⭐' }
        ].map((item, i) => (
          <div key={i} className="aspect-square rounded-lg flex items-center justify-center"
            style={{ backgroundColor: item.bg }}>
            <span className="text-4xl">{item.icon}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md font-medium">Primary</button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-medium">Secondary</button>
      </div>
    </div>
  </div>
);

// 13. Skeuomorphism
const SkeuomorphismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #8B4513 0%, #654321 100%)' }}>
    <div className="p-8 rounded-2xl"
      style={{
        background: 'linear-gradient(145deg, #DEB887, #D2691E)',
        boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.5)',
        border: '4px solid #8B4513'
      }}>
      <h1 className="text-3xl font-bold text-amber-900 mb-6 drop-shadow-sm">{style.name}</h1>
      <div className="w-64 h-40 rounded-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #F5DEB3, #DEB887)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.2)'
        }}>
        <span className="text-amber-800 font-serif text-lg">Realistic Textures</span>
      </div>
      <button className="mt-6 px-6 py-3 rounded-lg font-semibold text-white"
        style={{
          background: 'linear-gradient(180deg, #CD853F, #8B4513)',
          boxShadow: '0 4px 0 #654321, 0 6px 10px rgba(0,0,0,0.3)'
        }}>
        Push Me
      </button>
    </div>
  </div>
);

// 14. Liquid Glass
const LiquidGlassDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)' }}>
    <div className="absolute w-96 h-96 rounded-full bg-pink-400 blur-3xl opacity-40 top-10 left-10 animate-pulse" />
    <div className="absolute w-72 h-72 rounded-full bg-blue-400 blur-3xl opacity-40 bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="relative z-10 p-12 rounded-3xl text-center"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
        backdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
      }}>
      <h1 className="text-4xl font-bold text-white mb-4">{style.name}</h1>
      <p className="text-white/80 mb-6">Morphing, iridescent, and flowing</p>
      <div className="w-48 h-48 mx-auto rounded-full"
        style={{
          background: 'linear-gradient(45deg, rgba(255,107,107,0.5), rgba(78,205,196,0.5))',
          filter: 'blur(1px)',
          boxShadow: '0 0 60px rgba(255,107,107,0.4)'
        }} />
    </div>
  </div>
);

// 15. Motion-Driven
const MotionDrivenDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">{style.name}</h1>
      <div className="flex gap-6 justify-center mb-12">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-24 h-24 bg-white/20 rounded-2xl animate-float"
            style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      <p className="text-white/80 text-lg">Every element tells a story through motion</p>
    </div>
  </div>
);

// 16. Micro-interactions
const MicroInteractionsDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{style.name}</h1>
      <div className="space-y-6">
        <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-150 hover:scale-105 hover:shadow-lg active:scale-95">
          Hover & Click Me
        </button>
        <div className="flex justify-center gap-4">
          {['❤️', '👍', '🎉'].map((emoji, i) => (
            <button key={i} className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center text-2xl transition-all duration-150 hover:scale-125 hover:shadow-xl active:scale-90">
              {emoji}
            </button>
          ))}
        </div>
        <p className="text-gray-500 text-sm">Small animations, big impact</p>
      </div>
    </div>
  </div>
);

// 17. Inclusive Design
const InclusiveDesignDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{style.name}</h1>
      <div className="space-y-6">
        <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-lg text-gray-800">✓ Color is never the only indicator</p>
          <p className="text-lg text-gray-800">✓ All text has 7:1+ contrast</p>
          <p className="text-lg text-gray-800">✓ Touch targets are 44x44px minimum</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
            <span className="w-3 h-3 bg-green-600 rounded-full" /> Success ✓
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full font-medium">
            <span className="w-3 h-3 bg-red-600 rounded-full" /> Error ✗
          </span>
        </div>
      </div>
    </div>
  </div>
);

// 18. Zero Interface
const ZeroInterfaceDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
    <div className="max-w-md mx-auto text-center p-12">
      <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
        <span className="text-white text-4xl">🎤</span>
      </div>
      <h1 className="text-3xl font-light text-gray-800 mb-4">{style.name}</h1>
      <p className="text-gray-500 text-lg mb-8">The best interface is no interface</p>
      <div className="text-gray-400 text-sm">
        "Hey, what's the weather today?"
      </div>
    </div>
  </div>
);

// 19. Soft UI Evolution
const SoftUIEvolutionDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center" style={{ background: '#F0F4F8' }}>
    <div className="p-12 rounded-3xl"
      style={{
        background: '#F0F4F8',
        boxShadow: '-8px -8px 20px #ffffff, 8px 8px 20px #d1d9e6'
      }}>
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">{style.name}</h1>
      <div className="space-y-4">
        <div className="p-4 rounded-xl"
          style={{
            background: '#F0F4F8',
            boxShadow: 'inset -4px -4px 10px #ffffff, inset 4px 4px 10px #d1d9e6'
          }}>
          <span className="text-gray-600">Improved contrast for accessibility</span>
        </div>
        <button className="w-full px-6 py-4 rounded-xl text-blue-600 font-medium transition-all"
          style={{
            background: '#F0F4F8',
            boxShadow: '-4px -4px 10px #ffffff, 4px 4px 10px #d1d9e6'
          }}>
          WCAG AA+ Compliant
        </button>
      </div>
    </div>
  </div>
);

// 20. Neubrutalism
const NeubrutalismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-amber-50">
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-black text-black mb-8">{style.name}</h1>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-yellow-300 p-6 border-4 border-black" style={{ boxShadow: '6px 6px 0 #000' }}>
          <h3 className="text-2xl font-black">Bold</h3>
        </div>
        <div className="bg-pink-400 p-6 border-4 border-black" style={{ boxShadow: '6px 6px 0 #000' }}>
          <h3 className="text-2xl font-black">Playful</h3>
        </div>
      </div>
      <button className="px-8 py-4 bg-blue-500 text-white border-4 border-black font-black text-xl hover:-translate-y-1 transition-transform"
        style={{ boxShadow: '6px 6px 0 #000' }}>
        Click Me!
      </button>
    </div>
  </div>
);

// 21-49: Continuing with the rest...
const BentoBoxGridDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F5F7' }}>
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{style.name}</h1>
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        <div className="col-span-2 row-span-2 bg-white rounded-3xl shadow-sm p-8 flex items-center justify-center">
          <span className="text-6xl">📱</span>
        </div>
        <div className="bg-white rounded-3xl shadow-sm p-6">Feature 1</div>
        <div className="bg-white rounded-3xl shadow-sm p-6">Feature 2</div>
        <div className="col-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white">
          Highlight Card
        </div>
      </div>
    </div>
  </div>
);

const Y2KDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(135deg, #FF69B4, #00FFFF)' }}>
    <div className="text-center p-12">
      <h1 className="text-5xl font-bold text-white mb-6"
        style={{ textShadow: '2px 2px 0 #9400D3, 4px 4px 0 #C0C0C0' }}>
        {style.name}
      </h1>
      <div className="inline-block p-6 rounded-full bg-gradient-to-b from-white to-gray-200"
        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 -5px 20px rgba(0,0,0,0.1)' }}>
        <span className="text-4xl">✨</span>
      </div>
      <p className="text-white text-xl mt-6 font-bold">FUTURE IS NOW</p>
    </div>
  </div>
);

const CyberpunkDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black relative overflow-hidden">
    <div className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF00 2px, #00FF00 4px)'
      }} />
    <div className="relative z-10 max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-8 font-mono"
        style={{ color: '#00FF00', textShadow: '0 0 10px #00FF00' }}>
        {style.name}
      </h1>
      <div className="border border-cyan-500 p-6"
        style={{ boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}>
        <p className="text-cyan-400 font-mono">&gt; SYSTEM ONLINE</p>
        <p className="text-cyan-400 font-mono">&gt; NEURAL LINK ACTIVE</p>
        <p className="text-magenta-400 font-mono" style={{ color: '#FF00FF' }}>&gt; WELCOME, USER_</p>
      </div>
    </div>
  </div>
);

const OrganicBiophilicDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F5DC' }}>
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-8" style={{ color: '#228B22' }}>{style.name}</h1>
      <div className="grid grid-cols-3 gap-6">
        {['🌿', '🌸', '🍃'].map((icon, i) => (
          <div key={i} className="aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex items-center justify-center"
            style={{ backgroundColor: ['#228B22', '#87CEEB', '#8B4513'][i], opacity: 0.8 }}>
            <span className="text-5xl">{icon}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AINativeDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-50">
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">{style.name}</h1>
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-sm">AI</span>
          </div>
          <div className="flex-1 p-4 bg-gray-100 rounded-2xl rounded-tl-none">
            <p className="text-gray-700">Hello! How can I help you today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="p-4 bg-indigo-600 text-white rounded-2xl rounded-tr-none max-w-xs">
            <p>Show me a demo of AI-native UI</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-sm">AI</span>
          </div>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MemphisDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative" style={{ background: '#FFCE5C' }}>
    <div className="absolute top-32 left-20 w-40 h-40 rounded-full" style={{ background: '#FF71CE' }} />
    <div className="absolute bottom-20 right-32 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent" style={{ borderBottomColor: '#86CCCA' }} />
    <div className="relative z-10 max-w-4xl mx-auto p-8 text-center pt-24">
      <h1 className="text-6xl font-black text-black mb-8" style={{ transform: 'rotate(-3deg)' }}>{style.name}</h1>
      <p className="text-2xl font-bold">Postmodern Playfulness</p>
    </div>
  </div>
);

const VaporwaveDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #FF71CE, #01CDFE, #B967FF)' }}>
    <div className="text-center p-12">
      <h1 className="text-5xl font-bold text-white mb-6"
        style={{ textShadow: '3px 3px 0 #B967FF' }}>
        {style.name}
      </h1>
      <p className="text-white/90 text-2xl font-light tracking-widest">Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ</p>
      <div className="mt-8 text-6xl">🌴</div>
    </div>
  </div>
);

const DimensionalLayeringDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-gray-100 flex items-center justify-center">
    <div className="relative">
      <div className="absolute top-8 left-8 w-64 h-40 bg-blue-200 rounded-xl" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
      <div className="absolute top-4 left-4 w-64 h-40 bg-blue-300 rounded-xl" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
      <div className="relative w-64 h-40 bg-white rounded-xl flex items-center justify-center" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
        <h1 className="text-xl font-bold text-gray-900">{style.name}</h1>
      </div>
    </div>
  </div>
);

const ExaggeratedMinimalismDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-8">
      <h1 className="text-[12vw] font-black text-black leading-none tracking-tighter">
        BOLD.
      </h1>
      <p className="text-xl text-gray-500 mt-12">{style.name}</p>
    </div>
  </div>
);

const KineticTypographyDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">{style.name}</h1>
      <p className="text-4xl font-bold overflow-hidden">
        {'TEXT IN MOTION'.split('').map((char, i) => (
          <span key={i} className="inline-block animate-bounce text-white"
            style={{ animationDelay: `${i * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
    </div>
  </div>
);

const ParallaxStorytellingDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #1A1A2E, #16213E, #0F3460)' }}>
    <div className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(233,69,96,0.3) 0%, transparent 50%)'
      }} />
    <div className="relative z-10 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">{style.name}</h1>
        <p className="text-gray-400 text-xl">Scroll to reveal the story</p>
        <div className="mt-8 animate-bounce">
          <span className="text-white text-3xl">↓</span>
        </div>
      </div>
    </div>
  </div>
);

const SwissModernism2Demo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h1 className="text-6xl font-light tracking-tight text-black">{style.name}</h1>
        </div>
        <div className="col-span-4 flex items-end">
          <div className="w-full h-px bg-black" />
        </div>
        <div className="col-span-12 h-px bg-black mt-8" />
        <div className="col-span-4 pt-8">
          <span className="text-sm uppercase tracking-widest text-gray-500">Grid-based</span>
        </div>
        <div className="col-span-4 pt-8">
          <span className="text-sm uppercase tracking-widest text-gray-500">Mathematical</span>
        </div>
        <div className="col-span-4 pt-8">
          <span className="text-sm uppercase tracking-widest text-gray-500">Rational</span>
        </div>
      </div>
    </div>
  </div>
);

const HUDDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black relative">
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
    <div className="relative z-10 max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-mono mb-8" style={{ color: '#00FFFF', textShadow: '0 0 10px #00FFFF' }}>
        [ {style.name} ]
      </h1>
      <div className="border border-cyan-500/50 p-6 rounded"
        style={{ boxShadow: '0 0 20px rgba(0,255,255,0.2)' }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-400 font-mono text-sm">SYSTEM STATUS: ONLINE</span>
        </div>
        <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent" />
      </div>
    </div>
  </div>
);

const PixelArtDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center" style={{ background: '#1a1a2e' }}>
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'monospace', imageRendering: 'pixelated' }}>
        {style.name}
      </h1>
      <div className="grid grid-cols-8 gap-1 mx-auto w-64">
        {Array(64).fill(0).map((_, i) => (
          <div key={i} className="aspect-square"
            style={{
              backgroundColor: [
                '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'
              ][Math.floor(Math.random() * 6)]
            }} />
        ))}
      </div>
      <p className="text-gray-400 mt-8 font-mono">8-BIT VIBES</p>
    </div>
  </div>
);

const BentoGridsDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F5F7' }}>
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">{style.name}</h1>
      <div className="grid grid-cols-3 gap-4 auto-rows-[180px]">
        <div className="row-span-2 bg-white rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <span className="text-5xl">🎯</span>
          <h3 className="text-xl font-semibold mt-4">Focus</h3>
        </div>
        <div className="bg-blue-500 rounded-3xl p-6 text-white">Compact</div>
        <div className="bg-white rounded-3xl shadow-sm p-6">Clean</div>
        <div className="col-span-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 text-white">
          Wide Card
        </div>
      </div>
    </div>
  </div>
);

const SpatialUIDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #1a1a2e, #2d2d44)' }}>
    <div className="p-12 rounded-3xl text-center"
      style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
      <h1 className="text-4xl font-semibold text-white mb-4">{style.name}</h1>
      <p className="text-white/70 mb-6">Designed for spatial computing</p>
      <div className="flex gap-4 justify-center">
        {['👁️', '👆', '🎤'].map((icon, i) => (
          <div key={i} className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)'
            }}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EInkDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#FDFBF7' }}>
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-8">{style.name}</h1>
      <article className="prose prose-lg" style={{ color: '#1A1A1A' }}>
        <p className="text-xl leading-relaxed font-serif">
          In an age of constant stimulation, the e-ink aesthetic offers a respite.
          No animations, no gradients, just pure content.
        </p>
        <hr className="border-gray-300 my-8" />
        <p className="text-sm text-gray-600 font-serif">
          Optimized for reading. Distraction-free.
        </p>
      </article>
    </div>
  </div>
);

const GenZChaosDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 relative overflow-hidden"
    style={{ background: 'linear-gradient(45deg, #FF00FF, #00FF00, #FFFF00, #0000FF)' }}>
    <div className="absolute top-20 left-10 text-6xl rotate-12">⭐</div>
    <div className="absolute bottom-32 right-20 text-6xl -rotate-12">✨</div>
    <div className="absolute top-40 right-32 text-4xl rotate-45">🔥</div>
    <div className="relative z-10 text-center p-12">
      <h1 className="text-6xl font-black text-white mb-8"
        style={{ textShadow: '4px 4px 0 #000', transform: 'rotate(-3deg)' }}>
        {style.name}
      </h1>
      <p className="text-2xl font-bold text-black bg-yellow-400 inline-block px-4 py-2 rotate-2">
        MAXIMUM CHAOS !!!
      </p>
    </div>
  </div>
);

const BiomimeticDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #001E3C, #003366)' }}>
    <div className="text-center p-12">
      <h1 className="text-4xl font-semibold text-cyan-400 mb-8">{style.name}</h1>
      <div className="flex justify-center gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-24 h-24 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, #00FF41, transparent)',
              animationDuration: `${2 + i * 0.5}s`
            }} />
        ))}
      </div>
      <p className="text-cyan-300/70 mt-8">Living, breathing interfaces</p>
    </div>
  </div>
);

const AntiPolishDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#FAFAF8' }}>
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl mb-8" style={{ fontFamily: 'cursive', color: '#4A4A4A' }}>
        {style.name}
      </h1>
      <div className="border-2 border-dashed border-gray-400 p-6 rotate-1">
        <p className="text-lg" style={{ fontFamily: 'serif' }}>
          Embracing imperfection. Hand-drawn. Authentic.
        </p>
      </div>
      <div className="mt-8 p-4 bg-amber-100/50 -rotate-1 inline-block"
        style={{ boxShadow: '2px 2px 0 #C4A77D' }}>
        <span className="font-mono text-sm text-gray-600">sketch_001.png</span>
      </div>
    </div>
  </div>
);

const TactileDigitalDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #FFE4E6, #E0F2FE)' }}>
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">{style.name}</h1>
      <button className="px-12 py-6 rounded-3xl text-xl font-semibold text-gray-700 transition-all active:scale-95"
        style={{
          background: 'linear-gradient(145deg, #FFFFFF, #E0E0E0)',
          boxShadow: '10px 10px 30px #c5c5c5, -10px -10px 30px #ffffff'
        }}>
        Press Me!
      </button>
      <p className="text-gray-500 mt-8">Squishy, bouncy, tactile</p>
    </div>
  </div>
);

const NatureDistilledDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16" style={{ background: '#F5F0E1' }}>
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-8" style={{ color: '#C67B5C' }}>{style.name}</h1>
      <div className="grid grid-cols-3 gap-6">
        {['#C67B5C', '#D4C4A8', '#6B7B3C'].map((color, i) => (
          <div key={i} className="aspect-square rounded-2xl"
            style={{ backgroundColor: color, opacity: 0.8 }} />
        ))}
      </div>
      <p className="text-gray-600 mt-8">Earthy. Warm. Handmade.</p>
    </div>
  </div>
);

const InteractiveCursorDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-8">{style.name}</h1>
      <p className="text-gray-400 mb-4">Move your cursor around</p>
      <div className="w-48 h-48 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-none">
        <span className="text-white">Hover Zone</span>
      </div>
      <p className="text-gray-500 text-sm mt-8">Best experienced on desktop</p>
    </div>
  </div>
);

const VoiceFirstDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center" style={{ background: '#FAFAFA' }}>
    <div className="text-center p-12">
      <h1 className="text-3xl font-light text-gray-800 mb-8">{style.name}</h1>
      <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-8"
        style={{ background: 'linear-gradient(135deg, #6B8FAF, #9B8FBB)' }}>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1 bg-white rounded animate-pulse"
              style={{ height: `${20 + Math.random() * 30}px`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      <p className="text-gray-500">Listening...</p>
    </div>
  </div>
);

const ThreeDProductDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center" style={{ background: '#F5F5F5' }}>
    <div className="text-center p-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">{style.name}</h1>
      <div className="w-64 h-64 mx-auto rounded-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, #ffffff, #e0e0e0)',
          boxShadow: '20px 20px 60px #d0d0d0, -20px -20px 60px #ffffff'
        }}>
        <span className="text-6xl">📦</span>
      </div>
      <p className="text-gray-500 mt-8">Drag to rotate • Pinch to zoom</p>
    </div>
  </div>
);

const GradientMeshDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0"
      style={{
        background: 'conic-gradient(from 0deg at 50% 50%, #00FFFF, #FF00FF, #FFFF00, #00FF66, #00FFFF)',
        filter: 'blur(60px)',
        opacity: 0.8
      }} />
    <div className="relative z-10 text-center p-12">
      <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">{style.name}</h1>
      <p className="text-white/90 text-xl">Flowing, morphing gradients</p>
    </div>
  </div>
);

const EditorialGridDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-white">
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-6xl font-serif font-bold text-black mb-2">{style.name}</h1>
      <div className="h-1 w-24 bg-red-600 mb-8" />
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-2xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
            Editorial layouts bring the sophistication of print magazines to digital experiences, with asymmetric grids and thoughtful typography.
          </p>
        </div>
        <div className="border-l-2 border-gray-200 pl-6">
          <blockquote className="text-xl italic text-gray-600">
            "Good design is as little design as possible."
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

const ChromaticAberrationDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 bg-black flex items-center justify-center">
    <div className="text-center relative">
      <h1 className="text-6xl font-bold text-white relative">
        <span className="absolute -left-1 text-red-500 opacity-70">{style.name}</span>
        <span className="absolute left-1 text-cyan-500 opacity-70">{style.name}</span>
        <span className="relative">{style.name}</span>
      </h1>
      <p className="text-gray-400 mt-8">RGB Split Effect</p>
    </div>
  </div>
);

const VintageAnalogDemo = ({ style }: StyleDemoProps) => (
  <div className="min-h-screen pt-16 flex items-center justify-center"
    style={{ background: '#F5E6C8' }}>
    <div className="p-8 rounded-lg text-center"
      style={{
        background: '#FDFBF7',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '8px solid white'
      }}>
      <h1 className="text-3xl font-serif mb-4" style={{ color: '#4A7B7C' }}>{style.name}</h1>
      <div className="w-64 h-64 mx-auto mb-4"
        style={{
          background: 'linear-gradient(180deg, #D4A574, #E8B4B8)',
          filter: 'sepia(20%) contrast(1.1) saturate(0.8)'
        }} />
      <p className="text-sm" style={{ color: '#8B4513' }}>Film grain • Light leaks • Nostalgia</p>
    </div>
  </div>
);

// Map all demos
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
  'cyberpunk-ui': CyberpunkDemo,
  'organic-biophilic': OrganicBiophilicDemo,
  'ai-native-ui': AINativeDemo,
  'memphis-design': MemphisDemo,
  'vaporwave': VaporwaveDemo,
  'dimensional-layering': DimensionalLayeringDemo,
  'exaggerated-minimalism': ExaggeratedMinimalismDemo,
  'kinetic-typography': KineticTypographyDemo,
  'parallax-storytelling': ParallaxStorytellingDemo,
  'swiss-modernism-2': SwissModernism2Demo,
  'hud-scifi-fui': HUDDemo,
  'pixel-art': PixelArtDemo,
  'bento-grids': BentoGridsDemo,
  'spatial-ui-visionos': SpatialUIDemo,
  'e-ink-paper': EInkDemo,
  'gen-z-chaos-maximalism': GenZChaosDemo,
  'biomimetic-organic-2': BiomimeticDemo,
  'anti-polish-raw-aesthetic': AntiPolishDemo,
  'tactile-digital-deformable-ui': TactileDigitalDemo,
  'nature-distilled': NatureDistilledDemo,
  'interactive-cursor-design': InteractiveCursorDemo,
  'voice-first-multimodal': VoiceFirstDemo,
  '3d-product-preview': ThreeDProductDemo,
  'gradient-mesh-aurora-evolved': GradientMeshDemo,
  'editorial-grid-magazine': EditorialGridDemo,
  'chromatic-aberration-rgb-split': ChromaticAberrationDemo,
  'vintage-analog-retro-film': VintageAnalogDemo,
};
