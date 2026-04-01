import { motion } from 'motion/react';
import { Building2, Warehouse, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex justify-center w-full">
              <div className="flex items-center gap-3 text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-[var(--color-accent)]"></span>
                20 Years of Excellence
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
              Building <br />
              <span className="text-stroke">The Future</span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-[var(--color-text-muted)] mt-6 font-light">
              We deliver quality with timely work. Specialists in flooring, warehouse, and commercial building construction since two decades.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/gallery" className="bg-[var(--color-accent)] text-black px-8 py-4 font-bold tracking-wide hover:bg-white transition-colors flex items-center gap-2">
                OUR PROJECTS <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#contact" className="border border-white/20 px-8 py-4 font-bold tracking-wide hover:bg-white/5 transition-colors">
                CONTACT US
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/seed/construction/800/1200?grayscale" 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-bg)]"></div>
        </div>
      </section>

      {/* Stats Marquee */}
      <div className="border-y border-white/10 bg-[var(--color-surface)] py-6 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-16 items-center font-display text-2xl md:text-4xl font-bold uppercase tracking-wider text-white/20"
        >
          <span>20 Years Experience</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>Quality Delivered</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>Timely Execution</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>Commercial Specialists</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>20 Years Experience</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>Quality Delivered</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>Timely Execution</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span>Commercial Specialists</span>
          <span className="text-[var(--color-accent)]">•</span>
        </motion.div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Our Expertise</h2>
              <p className="text-[var(--color-text-muted)] mt-4 max-w-md">Precision engineering and robust construction across specialized domains.</p>
            </div>
            <div className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase">
              [ 01 / Services ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers className="w-10 h-10" />,
                title: "Industrial Flooring",
                desc: "Heavy-duty, durable flooring solutions designed to withstand extreme industrial conditions and heavy machinery."
              },
              {
                icon: <Warehouse className="w-10 h-10" />,
                title: "Warehouse Construction",
                desc: "Large-scale storage facilities built with optimized space utilization and structural integrity."
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: "Commercial Buildings",
                desc: "Modern, functional, and aesthetically striking commercial spaces built to elevate your business presence."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group bg-[var(--color-surface)] border border-white/5 p-8 hover:border-[var(--color-accent)] transition-colors cursor-pointer"
              >
                <div className="text-[var(--color-accent)] mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold tracking-wide group-hover:text-[var(--color-accent)] transition-colors">
                  EXPLORE <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 md:py-32 bg-[var(--color-surface)] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/architecture/800/800?grayscale" 
                alt="Architecture" 
                className="w-full aspect-square object-cover filter contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase mb-6">
                [ 02 / Why Us ]
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                Quality meets <br/> Timely Delivery
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] mb-8 font-light leading-relaxed">
                For two decades, M/S Balaji Construction has been synonymous with reliability. We don't just build structures; we forge lasting partnerships through transparency, uncompromising quality, and strict adherence to timelines.
              </p>
              
              <div className="flex flex-col gap-4">
                {[
                  "20+ Years of Industry Experience",
                  "Uncompromising Quality Standards",
                  "Strict Adherence to Deadlines",
                  "Specialized Expert Teams"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)]" />
                    <span className="font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
