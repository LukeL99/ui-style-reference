import { Link } from 'react-router-dom';
import { categories, getStylesByCategory, type UIStyle } from '../data/styles';

// Brand Logo Component - Minimalist Swiss Style
const Logo = ({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className={`${size === 'large' ? 'w-12 h-12' : 'w-8 h-8'} bg-black flex items-center justify-center`}>
      <span className={`font-bold text-white ${size === 'large' ? 'text-xl' : 'text-sm'} tracking-tight`}>UI</span>
    </div>
    <span className={`font-medium tracking-tight ${size === 'large' ? 'text-2xl' : 'text-lg'}`}>
      <span className="text-black">STYLE</span>
      <span className="text-gray-500">GUIDE</span>
    </span>
  </div>
);

const StyleCard = ({ style }: { style: UIStyle }) => {
  return (
    <Link
      to={`/style/${style.slug}`}
      className="group block bg-white border border-gray-200 overflow-hidden hover:border-black transition-colors duration-200"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
        <img 
          src={`/previews/${style.slug}.png`}
          alt={`${style.name} preview`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 flex gap-1">
          {style.primaryColors.slice(0, 4).map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 border border-white"
              style={{ backgroundColor: color.includes('rgba') ? color : color }}
            />
          ))}
        </div>
      </div>
      <div className="p-5 border-t border-gray-200">
        <h3 className="font-medium text-black group-hover:text-gray-600 transition-colors tracking-tight">
          {style.name}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {style.description.slice(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {style.keywords.slice(0, 3).map((keyword, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border border-gray-300 text-gray-600 uppercase tracking-wide"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const CategorySection = ({ categoryId, categoryName, description }: { categoryId: string; categoryName: string; description: string }) => {
  const categoryStyles = getStylesByCategory(categoryId);
  
  if (categoryStyles.length === 0) return null;
  
  return (
    <section className="mb-24">
      <div className="mb-10 border-b border-black pb-6">
        <h2 className="text-xl font-medium text-black uppercase tracking-widest">{categoryName}</h2>
        <p className="text-gray-500 mt-2 text-sm tracking-wide">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categoryStyles.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8">
            <a href="#styles" className="text-xs font-medium text-gray-600 hover:text-black transition-colors uppercase tracking-widest hidden sm:block">
              Browse Styles
            </a>
            <a
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span className="hidden sm:inline">Get the Skill</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-black mb-12">
              <span className="w-2 h-2 bg-black" />
              <span className="text-xs font-medium text-black uppercase tracking-widest">67 Interactive Design Styles</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl sm:text-8xl font-bold text-black mb-8 tracking-tight leading-none">
              The Ultimate
              <span className="block text-gray-400">
                UI Style Guide
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
              A visual showcase of the design styles available in{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 font-medium border-b border-black hover:border-gray-500 transition-colors"
              >
                UI UX Pro Max
              </a>
              . Explore 67 styles with live demos, color palettes, and implementation tips.
            </p>
            
            <p className="text-sm text-gray-500 mb-12 uppercase tracking-wide">
              Built with care by{' '}
              <a 
                href="https://www.farad.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 font-medium transition-colors"
              >
                Farad Labs
              </a>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#styles"
                className="group px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
              >
                Explore All Styles
                <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black border border-black font-medium hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm"
              >
                Get the Skill
              </a>
            </div>
          </div>
        </div>
        
        {/* Preview Strip */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="flex gap-4 overflow-hidden p-1 border border-gray-200">
            {['glassmorphism', 'neubrutalism', 'cyberpunk-ui', 'minimalism-swiss-style', 'retro-futurism'].map((slug) => (
              <Link key={slug} to={`/style/${slug}`} className="flex-shrink-0 w-48 aspect-[4/3] overflow-hidden hover:opacity-80 transition-opacity">
                <img src={`/previews/${slug}.png`} alt="" className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold text-black">67</div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Design Styles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black">10</div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black">100%</div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Free</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black">Open</div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Source</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="styles" className="max-w-7xl mx-auto px-6 py-24">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            categoryId={category.id}
            categoryName={category.name}
            description={category.description}
          />
        ))}
      </main>

      {/* About Section */}
      <section id="about" className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-bold text-black mb-6 uppercase tracking-widest">What is UI Style Guide?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            UI Style Guide is a visual showcase of the design styles available in{' '}
            <a 
              href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors"
            >
              UI UX Pro Max
            </a>
            , an AI agent skill that helps you build beautiful interfaces. Each style includes 
            a fully interactive demo, color palettes, typography suggestions, CSS implementation tips, 
            and real-world use cases. Whether you're exploring glassmorphism, brutalism, or cyberpunk 
            aesthetics — find inspiration and practical guidance here.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {['Designers', 'Developers', 'AI Agents', 'Agencies'].map((tag) => (
              <span key={tag} className="px-4 py-2 border border-gray-300 text-gray-700 text-xs font-medium uppercase tracking-wide">
                Built for {tag}
              </span>
            ))}
          </div>
          <a 
            href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors uppercase tracking-widest text-xs"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the UI UX Pro Max Skill
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="font-bold text-black text-sm">UI</span>
              </div>
              <span className="font-medium text-lg tracking-tight">
                STYLE<span className="text-gray-500">GUIDE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center tracking-wide">
              A showcase of styles from the{' '}
              <a 
                href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                UI UX Pro Max
              </a>
              {' '}agent skill
            </p>
            <div className="flex items-center gap-2 text-sm tracking-wide">
              <span className="text-gray-500">Built with care by</span>
              <a 
                href="https://www.farad.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-gray-300 transition-colors"
              >
                Farad Labs
              </a>
            </div>
            <div className="flex gap-8 pt-4 border-t border-gray-800 mt-4">
              <a
                href="https://github.com/Farad-Labs/ui-style-reference"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest"
              >
                GitHub
              </a>
              <a
                href="https://www.farad.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest"
              >
                Farad Labs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
