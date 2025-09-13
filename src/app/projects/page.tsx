'use client'; // <-- この行をファイルの先頭に追加してください

import portfolioData from "@/data/content";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'; // useEffectをインポート

const ProjectsPage = () => {
  // デバッグ用: ページが読み込まれた時に全プロジェクトのデータをコンソールに表示
  /*
  useEffect(() => {
    console.log("--- 全プロジェクトデータ ---");
    portfolioData.projects.forEach((p, index) => {
      console.log(`[${index}] title: ${p.title}, image: "${p.image}"`);
    });
    console.log("--------------------------");
  }, []);
  */

  return (
    <section className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">My Projects</h1>
        <div id="project-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => {
            
            // 画像パスが文字列であり、'/'で始まることを確認する、より安全なチェック
            const isValidImage = typeof project.image === 'string' && project.image.startsWith('/');

            return (
              <div key={index} className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                
                {isValidImage ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4" 
                    // エラー発生時にどの画像が問題か特定しやすくする
                    onError={(e) => console.error(`画像の読み込みに失敗しました: ${project.image}`, e)}
                  />
                ) : (
                  // 画像がない、またはパスが不正な場合の代替表示
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-md mb-4">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}

                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link href={project.link} target="_blank" className="text-blue-500 hover:underline">
                  See Detail
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;