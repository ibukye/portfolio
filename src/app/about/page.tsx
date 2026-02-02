import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nenneko",
  description: "Nenneko's profile and skills.",
};

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-24 pb-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">学歴</h2>
          <ul className="space-y-4">
            {/* The International School@Park City */}
            <li>
              <strong className="block text-lg">The International School@Park City (2023年1月〜2024年8月)</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                AS-levelカリキュラム(Year12)にて、Math、Further Maths共に最高評価であるAを取得。<br />
                A-levelカリキュラム(Year13)にて、Math、Further Maths共に最高評価であるA*を取得。<br />
                また、Year13時には全国規模のMath Competitionにて、学校内で3名のみが受賞したGold Awardを獲得。<br />
              </p>
            </li>
            {/* Gap Year */}
            <li>
              <strong className="block text-lg">Gap Year (2024年8月〜2025年9月)</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                University of Nottingham入学に向けてIELTSの学習を開始<br />
                IELTS Overall 5.5 (Listening: 6.5, Reading: 6.0, Writing: 5.5, Speaking: 5.0)を獲得<br />
              </p>
            </li>
            {/* University of Nottingham */}
            <li>
              <strong className="block text-lg">University of Nottingham (2025年9月〜現在)</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Computer Science with Artificial Intelligence (Faculty of Science) 2年次に在学中。<br />
                1年時の成績平均は約88％ (Math: 97%) <br />
                人工知能やWeb開発に強い関心を持ち、授業に加え、自主制作プロジェクトにも積極的に取り組んでいます。<br />
              </p>
            </li>
            
            {/* 松尾岩澤研究所 大規模言語モデル講座 2025 基礎編 終了 */}
            <li>
              <strong>松尾岩澤研究所 LLM基礎講座 2025 修了</strong>
              <p>修了書を受け取りました。</p>
            </li>

            {/* 松尾岩澤研究所 DL基礎講座 2025 Autumn 修了 */}
            <li>
              <strong>松尾岩澤研究所 DL基礎講座 2025 Autumn 修了 (2026/1/27)</strong>
              <p>
                修了書を受け取りました。 <br/>
              </p>
            </li>




          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">開発経験</h2>
          <ul className="space-y-6">
            <li>
              <strong className="block text-lg">2025年5月～9月：手書き数字認識アプリ</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <span className="font-semibold">使用技術：</span>Python, MLP, CNN, ResNet, FastAPI  
                <br />
                機械学習モデルを比較しながら精度改善を行い、Web APIとして提供できるようにしました。
              </p>
            </li>
            <li>
              <strong className="block text-lg">2025年8月：ハッカソン参加「EmotiGift」</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <span className="font-semibold">使用技術：</span>React, FastAPI, Gemini API  
                <br />
                チャット履歴から感情分析を行い、ユーザーに合ったプレゼントを提案するWebアプリをチームで開発しました。
              </p>
            </li>

            <li>
              <strong className="block text-lg">2025年9月～：Virtual Chemical Reactor</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <span className="font-semibold">使用技術：</span>Unity, C#, Solidwork 
                <br />
                University of Nottingham Malaysiaをクライエントとした、現実で学生全員が使用することが難しい化学反応器を受動的に動画を見て学ぶのではなく主体的に自分でコントロールをしながら学ぶことができるようなシミュレーションゲームを開発しています。
              </p>
            </li>

          
          
          
          
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">スキル</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Python', 'JavaScript (React, TypeScript)', 'SQL', 'Dart (Flutter)', 'HTML/CSS', 'Java', 'C', 'Haskell', 'PHP'].map(skill => (
              <div key={skill} className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">今後の目標</h2>
          <p className="text-lg leading-relaxed">
            AI分野での実務経験を通じて技術を磨き、ユーザーに寄り添ったプロダクトを作れるエンジニアを目指しています。
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;