'use client';

import { useState, useMemo } from 'react';
import portfolioData from "@/data/content";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// カテゴリの正規化（表記ゆれをまとめる）
const normalizeCategory = (cat: string) => {
  if (!cat) return "Others";
  const lower = cat.toLowerCase();
  if (lower.includes("machine learning") || lower.includes("deep learning") || lower.includes("ai")) return "AI / ML";
  if (lower.includes("web")) return "Web Dev";
  if (lower.includes("mobile") || lower.includes("アプリ")) return "Mobile App";
  if (lower.includes("game") || lower.includes("unity") || lower.includes("godot")) return "Game Dev";
  if (lower.includes("design")) return "Design";
  return "Others";
};

// 全カテゴリのリスト作成
const allCategories = ["All", "AI / ML", "Web Dev", "Mobile App", "Game Dev", "Design", "Others"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // フィルタリング処理
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      // 1. カテゴリ一致チェック
      const categoryMatch = activeCategory === "All" || normalizeCategory(project.category) === activeCategory;
      
      // 2. 検索ワード一致チェック (タイトル or 技術スタック)
      const query = searchQuery.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(query);
      const techMatch = project.techStack?.some(t => t.toLowerCase().includes(query));
      
      return categoryMatch && (titleMatch || techMatch);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* ヘッダーエリア */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            これまでに開発したWebアプリ、AIモデル、モバイルアプリなどのコレクションです。
          </motion.p>
        </div>

        {/* コントロールエリア（検索 & フィルター） */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-20 z-10 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 rounded-xl">
          
          {/* カテゴリタブ */}
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-md scale-105" 
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 検索バー */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
            />
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        {/* プロジェクトグリッド */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => {
                const isValidImage = typeof project.image === 'string' && project.image.startsWith('/');
                // リンク先: IDがあれば詳細ページ、なければ外部リンク
                const projectLink = project.id ? `/projects/${project.id}` : project.link;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.title} // ユニークなキーに変更
                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    {/* 画像エリア */}
                    <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                      {isValidImage ? (
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          <span className="text-4xl">🚀</span>
                        </div>
                      )}
                      
                      {/* カテゴリバッジ（画像の上に重ねる） */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-xs font-bold text-white bg-black/50 backdrop-blur-md rounded-full">
                          {normalizeCategory(project.category)}
                        </span>
                      </div>
                    </div>

                    {/* コンテンツエリア */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                        {project.description}
                      </p>

                      {/* 技術スタックタグ */}
                      {project.techStack && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md">
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-2 py-1 text-xs text-gray-400">+More</span>
                          )}
                        </div>
                      )}

                      {/* ボタン */}
                      <Link 
                        href={projectLink} 
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Link>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
                <button 
                  onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;