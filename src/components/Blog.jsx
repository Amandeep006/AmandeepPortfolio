import React from 'react';
import { motion } from 'framer-motion';
import { blogsData } from '../data/blogs';
import SectionHeading from './SectionHeading';
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function Blog() {
  return (
    <section className="py-24 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="KNOWLEDGE SHARING"
          title="Learning & Sharing"
          subtitle="Articles and notes summarizing practical analytics insights, SQL queries, and Python data techniques."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogsData.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 sm:p-8 glass-panel rounded-3xl border border-slate-800 hover:border-purple-500/40 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Category & Meta */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800 text-xs font-mono font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>

                <a
                  href={post.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
