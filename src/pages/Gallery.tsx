import { motion } from 'motion/react';

export default function Gallery() {
  const projects = [
    { id: 1, title: 'Industrial Warehouse', category: 'Warehouse' },
    { id: 2, title: 'Commercial Complex', category: 'Commercial' },
    { id: 3, title: 'Epoxy Flooring Project', category: 'Flooring' },
    { id: 4, title: 'Logistics Hub', category: 'Warehouse' },
    { id: 5, title: 'Office Building', category: 'Commercial' },
    { id: 6, title: 'Retail Flooring', category: 'Flooring' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase mb-6">
            [ Our Projects ]
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Project Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[var(--color-surface)] border border-white/5 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${project.id}/600/400`} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="text-[var(--color-accent)] text-xs font-mono mb-2 uppercase">{project.category}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
