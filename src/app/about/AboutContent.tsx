// src/app/about/AboutContent.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// カテゴリ別のスキル定義（元のリストにある要素を分類）
const skillsData = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "PHP", "Haskell", "Dart", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "FastAPI", "Flutter", "Tailwind CSS"],
  tools: ["Git", "Docker", "Unity", "Solidworks", "Figma", "Vercel"] // 開発経験から補完
};

// 翻訳データの定義
const translations = {
  ja: {
    title: "About Me",
    
    // 学歴
    education_title: "学歴",
    education_school1_title: "The International School@Park City",
    education_school1_period: "2023年1月 〜 2024年8月",
    education_school1_desc: <>
      AS-levelカリキュラム(Year12)にて、Math、Further Maths共に最高評価であるAを取得。<br />
      A-levelカリキュラム(Year13)にて、Math、Further Maths共に最高評価であるA*を取得。<br />
      また、Year13時には全国規模のMath Competitionにて、学校内で3名のみが受賞したGold Awardを獲得。
    </>,
    
    education_gapyear_title: "Gap Year",
    education_gapyear_period: "2024年8月 〜 2025年9月",
    education_gapyear_desc: <>
      University of Nottingham入学に向けてIELTSの学習を開始<br />
      IELTS Overall 5.5 (Listening: 6.5, Reading: 6.0, Writing: 5.5, Speaking: 5.0)を獲得
    </>,
    
    education_uni_title: "University of Nottingham",
    education_uni_period: "2025年9月 〜 現在",
    education_uni_desc: <>
      Computer Science with Artificial Intelligence (Faculty of Science) 2年次に在学中。<br />
      1年時の成績平均は約88％ (Math: 97%) <br />
      人工知能やWeb開発に強い関心を持ち、授業に加え、自主制作プロジェクトにも積極的に取り組んでいます。
    </>,
    
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
    exp_3_desc: "University of Nottingham Malaysiaをクライエントとした、現実で学生全員が使用することが難しい化学反応器を受動的に動画を見て学ぶのではなく主体的に自分でコントロールをしながら学ぶことができるようなシミュレーションゲームを開発しています。",

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
    education_school1_desc: <>
      Achieved grade A (highest) in both Math and Further Maths in AS-level (Year 12).<br />
      Achieved grade A* (highest) in both Math and Further Maths in A-level (Year 13).<br />
      Received the Gold Award in a national Math Competition during Year 13 (awarded to only 3 students in the school).
    </>,
    
    education_gapyear_title: "Gap Year",
    education_gapyear_period: "Aug 2024 - Sep 2025",
    education_gapyear_desc: <>
      Started studying for IELTS to enter the University of Nottingham.<br />
      Achieved IELTS Overall 5.5 (Listening: 6.5, Reading: 6.0, Writing: 5.5, Speaking: 5.0).
    </>,
    
    education_uni_title: "University of Nottingham",
    education_uni_period: "Sep 2025 - Present",
    education_uni_desc: <>
      Currently a 2nd-year student in Computer Science with Artificial Intelligence (Faculty of Science).<br />
      First-year average grade was approx. 88% (Math: 97%).<br />
      Deeply interested in AI and Web Development, actively working on personal projects in addition to coursework.
    </>,
    
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
    exp_2_desc: "Developed a Web App in a team that analyzes chat history to recommend gifts based on sentiment analysis. 2nd Place",

    exp_3_title: "Virtual Chemical Reactor",
    exp_3_period: "Sep 2025 - Present",
    exp_3_tech: ["Unity", "C#", "Solidworks"],
    exp_3_desc: "Developing a simulation game for the University of Nottingham Malaysia. The project allows students to actively control and learn from a virtual chemical reactor, addressing the difficulty of accessing real equipment.",

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

const AboutContent = () => {
  const [lang, setLang] = useState<'ja' | 'en'>('ja');
  const t = translations[lang];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* 言語切り替え & タイトル */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            {t.title}
          </h1>
          <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <button 
                onClick={() => setLang('ja')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${lang === 'ja' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
                日本語
            </button>
            <button 
                onClick={() => setLang('en')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
                English
            </button>
          </div>
        </div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 左カラム: メインコンテンツ (Experience & Education) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Development Experience セクション */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white mb-8">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                {t.experience_title}
              </h2>
              
              <div className="space-y-12 relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
                
                {/* Project 1: Digit Recognition */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-1 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600"></span>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                      {/* 画像 */}
                      <div className="w-full md:w-32 h-20 relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <Image 
                          src="/images/number_recognition_resnet2.png" 
                          alt="Digit Recognition" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.exp_1_title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{t.exp_1_period}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t.exp_1_desc}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {t.exp_1_tech.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project 2: EmotiGift */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-1 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-purple-600"></span>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                      <div className="w-full md:w-32 h-20 relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                         <Image 
                          src="/images/emotigift.png" 
                          alt="EmotiGift" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.exp_2_title}</h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{t.exp_2_period}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t.exp_2_desc}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {t.exp_2_tech.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project 3: Virtual Chemical Reactor */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-1 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-emerald-600"></span>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                      {/* 画像がない場合はアイコンを表示 */}
                      <div className="w-full md:w-32 h-20 relative flex-shrink-0 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.exp_3_title}</h3>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-2">{t.exp_3_period}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t.exp_3_desc}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {t.exp_3_tech.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Education セクション */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white mb-8">
                <span className="w-2 h-8 bg-gray-400 rounded-full mr-3"></span>
                {t.education_title}
              </h2>
              <div className="grid gap-6">
                
                 {/* Nottingham */}
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.education_uni_title}</h3>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">{t.education_uni_period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education_uni_desc}</p>
                </div>

                 {/* Gap Year */}
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.education_gapyear_title}</h3>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">{t.education_gapyear_period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education_gapyear_desc}</p>
                </div>

                 {/* International School */}
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.education_school1_title}</h3>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">{t.education_school1_period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{t.education_school1_desc}</p>
                </div>

                 {/* Matsuo Lab */}
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Certificates</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{t.education_matsuo_llm} <span className="text-gray-400 text-xs ml-1">({t.education_completed})</span></span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{t.education_matsuo_dl} <span className="text-gray-400 text-xs ml-1">({t.education_completed})</span></span>
                        </li>
                    </ul>
                </div>
              </div>
            </section>
          </div>

          {/* 右カラム: Skills & Goals */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* Skills セクション */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                    {t.skills_title}
                </h2>
                
                <div className="space-y-6">
                    {/* Languages */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.skill_cat_lang}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.languages.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.skill_cat_fw}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.frameworks.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.skill_cat_tools}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.tools.map(skill => (
                                <span key={skill} className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals セクション */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    {t.goals_title}
                </h2>
                <p className="text-blue-50 text-sm leading-relaxed opacity-90">
                    {t.goals_desc}
                </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;