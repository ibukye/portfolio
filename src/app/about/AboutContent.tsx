// src/app/about/AboutContent.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // アニメーション用

// カテゴリ別のスキル定義
const skillsData = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "PHP", "Haskell", "Dart", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "FastAPI", "Flutter", "Tailwind CSS"],
  tools: ["Git", "Docker", "Unity", "Solidworks", "Figma", "Vercel", "Firebase", "PostgreSQL"]
};

// 翻訳データの定義
const translations = {
  ja: {
    title: "About Me",
    
    // 学歴
    education_title: "学歴",
    education_school1_title: "The International School@Park City",
    education_school1_period: "2023年1月 〜 2024年8月",
    education_school1_desc: "AS-level(Year12)にてMath, Further MathsでA取得。A-level(Year13)にて両科目A*取得。Math CompetitionにてGold Award受賞。",
    
    education_gapyear_title: "Gap Year",
    education_gapyear_period: "2024年8月 〜 2025年9月",
    education_gapyear_desc: "Nottingham大学入学に向けIELTS学習 (Overall 6.0)。",
    
    education_uni_title: "University of Nottingham",
    education_uni_period: "2025年9月 〜 現在",
    education_uni_desc: "Computer Science with AI (Faculty of Science) 2年次在学中。1年次平均成績 約88％ (Math: 97%)。授業外でも自主開発に注力。",
    
    education_matsuo_llm: "松尾岩澤研究所 LLM基礎講座 2025",
    education_matsuo_dl: "松尾岩澤研究所 DL基礎講座 2025 Autumn",
    education_completed: "修了",

    // 開発経験
    experience_title: "開発経験",
    
    exp_1_title: "手書き数字認識アプリ",
    exp_1_period: "2025年5月 〜 9月",
    exp_1_tech: ["Python", "MLP", "CNN", "ResNet", "FastAPI"],
    exp_1_desc: "機械学習モデルを比較しながら精度改善を行い、Web APIとして提供できるようにしました。",
    
    exp_2_title: "ハッカソン参加「EmotiGift」",
    exp_2_period: "2025年8月",
    exp_2_tech: ["React", "FastAPI", "Gemini API"],
    exp_2_desc: "チャット履歴から感情分析を行い、ユーザーに合ったプレゼントを提案するWebアプリをチームで開発しました。",

    exp_3_title: "Virtual Chemical Reactor",
    exp_3_period: "2025年9月 〜 現在",
    exp_3_tech: ["Unity", "C#", "Solidworks"],
    exp_3_desc: "Nottingham大学マレーシア校向けプロジェクト。化学反応器を安全かつ主体的に操作して学べるシミュレーションゲームを開発中。",

    exp_4_title: "RepLink",
    exp_4_period: "2025年10月 〜 現在",
    exp_4_tech: ["Flutter", "Dart", "FastAPI", "Python"],
    exp_4_desc: "トレーニーのためのフィットネスSNS。トレーニング記録、JWT認証、ユーザーフォロー機能などを実装。",

    exp_5_title: "Verde Via",
    exp_5_period: "2025年11月 〜 現在",
    exp_5_tech: ["Flutter", "Firebase", "Gemini API", "Google Maps"],
    exp_5_desc: "Genting Nature Adventures向け、AI×自然探索アプリ。画像認識による植物クイズやクエスト機能を通じ、若者の環境意識向上を目指す。",

    exp_6_title: "Final Year Project (FYP)",
    exp_6_period: "開始予定 (準備中)",
    exp_6_tech: ["AI", "Machine Learning", "Research"],
    exp_6_desc: "最終学年に向けたAI・機械学習の研究テーマ選定と予備調査。医療または教育分野へのAI応用を計画中。",

    // スキル
    skills_title: "スキルセット",
    skill_cat_lang: "言語",
    skill_cat_fw: "フレームワーク & ライブラリ",
    skill_cat_tools: "ツール & その他",

    // 目標
    goals_title: "今後の目標",
    goals_desc: "AI分野での実務経験を通じて技術を磨き、ユーザーに寄り添ったプロダクトを作れるエンジニアを目指しています。",
  },

  en: {
    title: "About Me",
    // Education
    education_title: "Education",
    education_school1_title: "The International School@Park City",
    education_school1_period: "Jan 2023 - Aug 2024",
    education_school1_desc: "Achieved A in AS-level and A* in A-level (Math/Further Maths). Gold Award in National Math Competition.",
    education_gapyear_title: "Gap Year",
    education_gapyear_period: "Aug 2024 - Sep 2025",
    education_gapyear_desc: "Studied for IELTS (Overall 6.0) to enter University of Nottingham.",
    education_uni_title: "University of Nottingham",
    education_uni_period: "Sep 2025 - Present",
    education_uni_desc: "2nd-year CS with AI student. 1st-year avg grade approx. 88%. Actively working on personal projects.",
    education_matsuo_llm: "Matsuo-Iwasawa Lab LLM Basic Course 2025",
    education_matsuo_dl: "Matsuo-Iwasawa Lab DL Basic Course 2025 Autumn",
    education_completed: "Completed",

    // Experience
    experience_title: "Development Experience",
    exp_1_title: "Handwritten Digit Recognition App",
    exp_1_period: "May 2025 - Sep 2025",
    exp_1_tech: ["Python", "MLP", "CNN", "ResNet", "FastAPI"],
    exp_1_desc: "Improved accuracy by comparing ML models and deployed it as a Web API.",
    exp_2_title: "Hackathon Participation 'EmotiGift'",
    exp_2_period: "Aug 2025",
    exp_2_tech: ["React", "FastAPI", "Gemini API"],
    exp_2_desc: "Developed a Web App that recommends gifts based on sentiment analysis of chat history. Won 2nd Place.",
    exp_3_title: "Virtual Chemical Reactor",
    exp_3_period: "Sep 2025 - Present",
    exp_3_tech: ["Unity", "C#", "Solidworks"],
    exp_3_desc: "Developing a simulation game for Nottingham Malaysia to help students learn chemical reactors safely.",
    exp_4_title: "RepLink",
    exp_4_period: "Oct 2025 - Present",
    exp_4_tech: ["Flutter", "Dart", "FastAPI", "Python"],
    exp_4_desc: "A fitness SNS. Implemented training logs, JWT auth, and follow features using Flutter and FastAPI.",
    exp_5_title: "Verde Via",
    exp_5_period: "Nov 2025 - Present",
    exp_5_tech: ["Flutter", "Firebase", "Gemini API", "Google Maps"],
    exp_5_desc: "AI nature exploration app for Genting Nature Adventures. Features plant recognition, quizzes, and quests.",
    exp_6_title: "Final Year Project (FYP)",
    exp_6_period: "Upcoming (In Preparation)",
    exp_6_tech: ["AI", "Machine Learning", "Research"],
    exp_6_desc: "Preparing for final year research in AI/ML, focusing on healthcare or education applications.",

    // Skills
    skills_title: "Skills",
    skill_cat_lang: "Languages",
    skill_cat_fw: "Frameworks & Libraries",
    skill_cat_tools: "Tools & Others",
    // Goals
    goals_title: "Future Goals",
    goals_desc: "I aim to become an engineer who can create user-centric products by refining my skills through practical experience in the AI field.",
  }
};

// タイムラインの1項目を表示するコンポーネント (アニメーション付き)
const TimelineItem = ({ 
  title, period, desc, tech, imageSrc, colorClass, align = "left", delay = 0 
}: { 
  title: string, period: string, desc: React.ReactNode, tech?: string[], imageSrc?: string, colorClass: string, align?: "left" | "right", delay?: number 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-24 ${align === "right" ? "md:flex-row-reverse" : ""}`}
    >
      {/* 1. 日付・期間 (PCでは横、スマホでは上) */}
      <div className={`w-full md:w-5/12 mb-2 md:mb-0 ${align === "right" ? "md:text-left" : "md:text-right"}`}>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-white dark:bg-gray-800 border ${colorClass.replace('bg-', 'border-').replace('text-', 'text-')} shadow-sm`}>
          {period}
        </span>
      </div>

      {/* 2. 中央のラインとドット */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -ml-[1px] md:-ml-[1px] w-0.5 bg-gray-200 dark:bg-gray-700 -z-10 h-[calc(100%+3rem)] md:h-[calc(100%+6rem)]"></div>
      <div className={`absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-white dark:border-gray-900 ${colorClass} shadow-md`}></div>

      {/* 3. コンテンツカード */}
      <div className="w-full md:w-5/12 pl-10 md:pl-0">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex flex-col gap-3">
            {imageSrc && (
               <div className="w-full h-32 relative rounded-lg overflow-hidden bg-gray-100">
                 {/* 画像パスが空の場合はプレースホルダーを表示 */}
                 {imageSrc.includes('.') ? (
                   <Image src={imageSrc} alt={title} fill className="object-cover" />
                 ) : (
                   <div className="flex items-center justify-center h-full text-gray-400">
                     <span className="text-2xl">📷</span>
                   </div>
                 )}
               </div>
            )}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">{desc}</p>
            </div>
          </div>
          {tech && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tech.map(t => (
                <span key={t} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const AboutContent = () => {
  const [lang, setLang] = useState<'ja' | 'en'>('ja');
  const t = translations[lang];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-24 pb-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ヘッダーエリア */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            {t.title}
          </h1>
          {/* 言語切り替え */}
          <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <button onClick={() => setLang('ja')} className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${lang === 'ja' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>日本語</button>
            <button onClick={() => setLang('en')} className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>English</button>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. Experience Timeline (Center Layout)               */}
        {/* ---------------------------------------------------- */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
              {t.experience_title}
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </motion.div>

          <div className="relative">
             {/* FYP (Future) */}
             <TimelineItem 
               title={t.exp_6_title} period={t.exp_6_period} desc={t.exp_6_desc} tech={t.exp_6_tech} 
               colorClass="bg-indigo-500" align="right" 
             />
             {/* Verde Via */}
             <TimelineItem 
               title={t.exp_5_title} period={t.exp_5_period} desc={t.exp_5_desc} tech={t.exp_5_tech} 
               colorClass="bg-lime-500" align="left" delay={0.1}
             />
             {/* RepLink */}
             <TimelineItem 
               title={t.exp_4_title} period={t.exp_4_period} desc={t.exp_4_desc} tech={t.exp_4_tech} 
               colorClass="bg-orange-500" align="right" delay={0.1}
             />
             {/* Chemical Reactor */}
             <TimelineItem 
               title={t.exp_3_title} period={t.exp_3_period} desc={t.exp_3_desc} tech={t.exp_3_tech} 
               imageSrc="" colorClass="bg-emerald-600" align="left" delay={0.1}
             />
             {/* EmotiGift */}
             <TimelineItem 
               title={t.exp_2_title} period={t.exp_2_period} desc={t.exp_2_desc} tech={t.exp_2_tech} 
               imageSrc="/images/emotigift.png" colorClass="bg-purple-600" align="right" delay={0.1}
             />
             {/* Digit Recognition */}
             <TimelineItem 
               title={t.exp_1_title} period={t.exp_1_period} desc={t.exp_1_desc} tech={t.exp_1_tech} 
               imageSrc="/images/number_recognition_resnet2.png" colorClass="bg-blue-600" align="left" delay={0.1}
             />
          </div>
        </section>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 左カラム: Education (簡易リスト形式のまま) */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white mb-8">
                <span className="w-2 h-8 bg-gray-400 rounded-full mr-3"></span>
                {t.education_title}
              </h2>
              <div className="space-y-6 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8">
                 {/* Nottingham */}
                 <div className="relative">
                    <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full border-2 border-white bg-gray-400"></span>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.education_uni_title}</h3>
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded mt-1 sm:mt-0">{t.education_uni_period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education_uni_desc}</p>
                    </div>
                 </div>
                 {/* Gap Year */}
                 <div className="relative">
                    <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full border-2 border-white bg-gray-300"></span>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.education_gapyear_title}</h3>
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded mt-1 sm:mt-0">{t.education_gapyear_period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education_gapyear_desc}</p>
                    </div>
                 </div>
                 {/* International School */}
                 <div className="relative">
                    <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full border-2 border-white bg-gray-300"></span>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.education_school1_title}</h3>
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded mt-1 sm:mt-0">{t.education_school1_period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education_school1_desc}</p>
                    </div>
                 </div>
                 {/* Matsuo Lab */}
                 <div className="relative">
                    <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full border-2 border-white bg-gray-300"></span>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Certificates</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✔</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">{t.education_matsuo_llm}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✔</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">{t.education_matsuo_dl}</span>
                            </li>
                        </ul>
                    </div>
                 </div>
              </div>
            </section>
          </div>

          {/* 右カラム: Skills & Goals */}
          <div className="lg:col-span-1 space-y-10">
            {/* Skills セクション */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                    {t.skills_title}
                </h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.skill_cat_lang}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.languages.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.skill_cat_fw}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.frameworks.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.skill_cat_tools}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.tools.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Goals セクション (Skillsの下に配置) */}
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                   <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.goals_title}
                   </h2>
                   <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-5 text-white shadow-md">
                      <p className="text-blue-50 text-sm leading-relaxed opacity-95">
                          {t.goals_desc}
                      </p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;