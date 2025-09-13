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
          <p className="text-lg leading-relaxed">
            University of Nottingham, Computer Science with Artificial Intelligence (Faculty of Science) 2年（2025年9月現在）
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            人工知能やWeb開発に強い関心を持ち、授業に加えて自主制作プロジェクトにも積極的に取り組んでいます。
          </p>
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