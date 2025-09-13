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
                AS-levelカリキュラムにて、Math、Further Maths共に最高成績であるAを取得。
                A-levelカリキュラムにて、Math、Further Maths共に最高成績であるA*を取得。
                また、Year13時には全国の学生が参加するMath Competitionにおいて、学校内3名のみ獲得したGold Awardを受賞。
                （また、Year13時には40人以上が参加するMath Competitionにおいて、上位3人のみに与えられるGold Awardを獲得しました。）
              </p>
            </li>
            {/* Gap Year */}
            <li>
              <strong className="block text-lg">Gap Year (2024年8月〜2025年9月)</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                University of Nottinghamに入学するためIELTSの勉強を始める
                Overall 5.5 (Listening: 6.5, Reading: 6.0, Writing: 5.5, Speaking: 5.0)を獲得
              </p>
            </li>
            {/* University of Nottingham */}
            <li>
              <strong className="block text-lg">University of Nottingham (2025年9月〜現在)</strong>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Computer Science with Artificial Intelligence (Faculty of Science) 2年在学中。
                人工知能やWeb開発に強い関心を持ち、授業に加えて自主制作プロジェクトにも積極的に取り組んでいます。
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">開発経験</h2>
          <ul className="space-y-6">
            <li>
              <strong className="block text-lg">2025年5月～：手書き数字認識アプリ</strong>
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