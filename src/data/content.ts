export type Project = {
  id: string;
  title: string;
  description: string;
  description_en: string;
  longDescription: string;
  longDescription_en: string;
  image: string;
  link: string;
  github: string;
  noteUrl: string;
  category: string;
  techStack: string[];
};

const portfolioData = {
  about: {
    name: "Nenneko",
    bio: "AIエンジニア志望。機械学習・深層学習やWebアプリ開発を通じて、AI×医療などの社会課題解決に挑戦していきたいです。実践志向で、常に探求心旺盛に学び続けます。",
    interests: ["機械学習", "深層学習", "Webアプリ開発", "AI×医療", "社会課題解決"]
  },
  projects: [
    {
      id: "emotigift",
      title: "EmotiGift",
      description: "SNS投稿、会話履歴を分析して最適なギフトを提案するWebアプリ　技育CAMPハッカソン 2025年度 Vol.9 優秀賞受賞",
      description_en: "A web app that analyzes SNS posts and chat history to suggest the perfect gift. 2nd Place at Gijuku CAMP Hackathon 2025 Vol.9.",
      longDescription: `ハッカソンで開発した、相手の好みを分析してギフトを提案するAIアプリケーションです。Gemini APIを活用してテキスト分析を行い、楽天市場などのAPIと連携して具体的な商品を提案します。
      担当領域
      フロントエンド構築（React/Tailwind）、Gemini APIとの連携プロンプト設計、プレゼン資料作成を担当しました。
      
      学んだこと
      1. チーム開発におけるコミュニケーション
        どんな小さなことでも共有する必要があると感じたものは報告することによるチーム内の円滑なコミュニケーションが大切だと学んだ。
        ただひとりの意見を完全に反映するのではなく全員がどう思うか話し合い妥協し、様々な視点からプロダクトの仕様を定義することが大切だと分かった`,
      longDescription_en: `An AI application developed at a hackathon that analyzes a recipient's preferences to suggest ideal gifts. It uses the Gemini API for text analysis and integrates with the Rakuten API to recommend specific products.

My Role
I handled frontend development (React/Tailwind), prompt engineering for the Gemini API integration, and presentation materials.

What I Learned
1. Communication in team development
  I learned the importance of sharing even small updates to keep the team aligned.
  Rather than pushing one person's opinion, discussing and finding compromise while defining product specs from multiple perspectives is key.`,
      image: "/images/emotigift.png",
      link: "https://emoti-gift.vercel.app/",
      github: "",
      noteUrl: "",
      category: "Web Development",
      techStack: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"]
    },
    {
      id: "verde-via",
      title: "Verde Via",
      description: "Genting Nature Adventures向け、AI×自然探索アプリ。画像認識やクエスト機能で若者の環境意識向上を目指す。",
      description_en: "An AI-powered nature exploration app for Genting Nature Adventures. Aims to reconnect youth with nature through image recognition and location-based quests.",
      longDescription: "「Emerging Technologiesを使って若者を自然と再接続させる」をテーマにした、Genting Nature Adventuresのクライアントワーク・プロジェクトです。\n\nGemini APIを用いた植物の画像認識・解説機能や、Google Mapsを活用した探索クエスト機能を実装。ただ歩くだけではなく、能動的に自然について学べる「探索家のノート」のような体験を提供します。",
      longDescription_en: "A client project for Genting Nature Adventures built around the theme of 'reconnecting youth with nature using Emerging Technologies.'\n\nFeatures include AI plant recognition and descriptions powered by the Gemini API, and location-based exploration quests using Google Maps. Rather than just walking around, it gives users an active, 'explorer's notebook'-like experience to learn about nature.",
      image: "/images/verde_via.png",
      link: "",
      github: "",
      noteUrl: "",
      category: "Mobile App",
      techStack: ["Flutter", "Firebase", "Gemini API", "Google Maps"]
    },
    {
      id: "replink",
      title: "RepLink",
      description: "トレーニーのためのフィットネスSNS。日々のトレーニング記録とユーザー間の交流機能を提供。",
      description_en: "A fitness SNS for trainees. Provides daily workout logging and a social feed to keep users motivated together.",
      longDescription: "「RepLink」は、日々のトレーニング記録（種目、重量、回数、セット数）を投稿し、ユーザー同士で励まし合うことができるフィットネス特化型SNSです。\n\nFlutterによるクロスプラットフォーム開発を行い、バックエンドにはFastAPIを採用。JWT認証によるセキュアなログイン、フォロー/フォロワー機能、タイムライン表示などを実装しています。",
      longDescription_en: "RepLink is a fitness-focused SNS where users can post their daily workout logs (exercise, weight, reps, sets) and cheer each other on.\n\nBuilt with Flutter for cross-platform support, with a FastAPI backend. Implemented features include secure login via JWT authentication, a follow/follower system, and a personalized timeline feed.",
      image: "/images/replink_placeholder.png",
      link: "https://replink-484702.web.app/",
      github: "",
      noteUrl: "",
      category: "Mobile App",
      techStack: ["Flutter", "Dart", "FastAPI", "Python", "SQLAlchemy"]
    },
    {
      id: "virtual-chemical-reactor",
      title: "Virtual Chemical Reactor",
      description: "化学反応器を安全かつ主体的に操作して学べるシミュレーションゲーム。University of Nottingham Malaysia向けプロジェクト。",
      description_en: "A simulation game for safely learning to operate a chemical reactor. A client project for the University of Nottingham Malaysia.",
      longDescription: "University of Nottingham Malaysiaをクライアントとしたプロジェクトです。\n\n現実では操作が難しく危険も伴う「化学反応器」を、ゲームエンジン（Unity）上で再現。学生がパラメータを自由に操作し、失敗（爆発など）も含めて安全に結果を学ぶことができるシミュレーション教材を開発しています。3Dモデルの作成にはSolidworksを使用しています。",
      longDescription_en: "A client project for the University of Nottingham Malaysia.\n\nReproduces a chemical reactor — which is difficult and dangerous to operate in real life — inside the Unity game engine. Students can freely adjust parameters and learn from the outcomes, including failures like explosions, in a completely safe environment. 3D models were created using Solidworks.",
      image: "/images/chemical_reactor.png",
      link: "",
      github: "",
      noteUrl: "",
      category: "Game Dev",
      techStack: ["Unity", "C#", "Solidworks"]
    },
    {
      id: "workout-tracker",
      title: "Workout Tracker",
      description: "日々のトレーニングを手軽に記録し、成長を可視化するためのシンプルな筋力トレーニング記録アプリです。",
      description_en: "A simple workout logging app to easily track daily training and visualize your progress over time.",
      longDescription: "",
      longDescription_en: "",
      image: "/images/workout_tracker.png",
      link: "",
      github: "https://github.com/ibukye/workout_tracker",
      noteUrl: "",
      category: "モバイルアプリ開発",
      techStack: []
    },
    {
      id: "number-recognition-cnn",
      title: "Number Recognition CNN",
      description: "手書きの数字を認識するConvolutional Neural Network",
      description_en: "A Convolutional Neural Network that recognizes handwritten digits.",
      longDescription: "",
      longDescription_en: "",
      image: "/images/number_recognition_cnn2.png",
      link: "https://number-recognition-cnn.onrender.com/",
      github: "",
      noteUrl: "",
      category: "Machine Learning/Deep Learning",
      techStack: ["Python", "CNN", "TensorFlow/PyTorch"]
    },
    {
      id: "number-recognition-resnet",
      title: "Number Recognition ResNet",
      description: "手書きの数字を認識するResidual Neural Network",
      description_en: "A Residual Neural Network (ResNet) that recognizes handwritten digits.",
      longDescription: "",
      longDescription_en: "",
      image: "/images/number_recognition_resnet2.png",
      link: "https://number-recognition-resnet.onrender.com/",
      github: "",
      noteUrl: "",
      category: "Machine Learning/Deep Learning",
      techStack: ["Python", "ResNet", "Deep Learning"]
    },
    {
      id: "next-anime",
      title: "Next Anime",
      description: "",
      description_en: "",
      longDescription: "",
      longDescription_en: "",
      image: "/images/",
      link: "https://next-anime-hazel.vercel.app/",
      github: "",
      noteUrl: "",
      category: "",
      techStack: ["Next.js"]
    },
    {
      id: "reverse1999-team-builder",
      title: "Reverse1999 Team Builder v3",
      description: "ゲーム「リバース:1999」のチーム編成をシミュレーションできるウェブアプリケーションです。キャラクターのドラッグ＆ドロップによる直感的な操作、フィルタリング機能、編成したチームの保存・共有機能を実装しました。",
      description_en: "A web app to simulate team compositions for the game 'Reverse: 1999'. Features intuitive drag-and-drop character placement, filtering, and the ability to save and share your team builds.",
      longDescription: "",
      longDescription_en: "",
      image: "/images/r1999_characters.png",
      link: "https://null-pointar.github.io/reverse1999-team-builder-v3/",
      github: "",
      noteUrl: "",
      category: "Web Development",
      techStack: ["HTML/CSS", "JavaScript"]
    },
    {
      id: "vocabulary-study-app",
      title: "Vocabulary Study App",
      description: "自分だけのオリジナル単語帳を作成して、効率的に英単語を学習するためのWebアプリケーションです。フラッシュカード形式での学習や、苦手な単語の管理機能などを通じて、記憶の定着をサポートします。",
      description_en: "A web app for building your own custom vocabulary lists. Supports efficient English word learning through flashcard-style review and weak-word tracking to help retention.",
      longDescription: "",
      longDescription_en: "",
      image: "/images/vocabulalry_app.png",
      link: "https://english-vocabulary-app-alpha.vercel.app/",
      github: "",
      noteUrl: "",
      category: "Web Development",
      techStack: ["React", "Next.js"]
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description: "ReactとFirebaseで作ったリアルタイムToDoアプリケーション。",
      description_en: "A real-time ToDo application built with React and Firebase.",
      longDescription: "",
      longDescription_en: "",
      image: "",
      link: "https://to-do-app-react-two-tau.vercel.app/",
      github: "",
      noteUrl: "",
      category: "アプリ開発",
      techStack: ["React", "Firebase"]
    },
    {
      id: "simplest-todo-list",
      title: "Simplest Todo List",
      description: "TypeScriptの学習のために作ったシンプルなToDoリストアプリ。",
      description_en: "A simple todo list app built with TypeScript for study purposes.",
      longDescription: "",
      longDescription_en: "",
      image: "",
      link: "https://todo-app-type-script-phi.vercel.app/",
      github: "",
      noteUrl: "",
      category: "Web Development",
      techStack: ["TypeScript"]
    },
    {
      id: "portfolio-site",
      title: "Portfolio Site",
      description: "自分自身のスキルを紹介するレスポンシブなポートフォリオ。(作成途中)",
      description_en: "A responsive portfolio site to showcase my skills and projects. (Work in progress)",
      longDescription: "",
      longDescription_en: "",
      image: "",
      link: "https://portfolio-beta-six-y04ws1488b.vercel.app/",
      github: "https://github.com/ibukye/portfolio",
      noteUrl: "",
      category: "デザイン",
      techStack: ["Next.js", "Tailwind CSS"]
    },
  ],
  contact: {
    email: "ramnjn0112mk@gmail.com",
    github: "https://github.com/ibukye",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/in/"
  }
};

export default portfolioData;