import { Phone, Mail, MapPin } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--color-accent)] text-black flex items-center justify-center font-black">B</div>
            BALAJI <span className="text-white/50">CONSTRUCTION</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-[var(--color-text-muted)]">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <Link to="/gallery" className="hover:text-white transition-colors">GALLERY</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="contact" className="pt-24 md:pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
            <div className="md:col-span-2">
              <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[var(--color-accent)] text-black flex items-center justify-center font-black">B</div>
                BALAJI <span className="text-white/50">CONSTRUCTION</span>
              </div>
              <p className="text-[var(--color-text-muted)] max-w-sm">
                Delivering quality and timely construction services for over 20 years.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-[var(--color-text-muted)]">
                <li className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" /> +91 9982217616
                </li>
                <li className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" /> info@balajiconstruction.com
                </li>
                <li className="flex items-start gap-3 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" /> 
                  Suraj Nagar Jhalamand Bypass,<br/>Jodhpur, Rajasthan 342005
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-[var(--color-text-muted)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} M/S Balaji Construction. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
