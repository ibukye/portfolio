export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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
        longDescription: "ハッカソンで開発した、相手の好みを分析してギフトを提案するAIアプリケーションです。Gemini APIを活用してテキスト分析を行い、楽天市場などのAPIと連携して具体的な商品を提案します。",
        image: "/images/emotigift.png",
        link: "https://emoti-gift.vercel.app/",
        github: "", // 必要であればリポジトリURLを追加
        noteUrl: "", // Note記事があれば追加
        category: "Web Development",
        techStack: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"]
    },
    {
        id: "verde-via",
        title: "Verde Via",
        description: "",
        longDescription: "",
        image: "/images/",
        link: "",
        github: "",
        noteUrl: "",
        category: "",
        techStack: []
    },
    {
        id: "replink",
        title: "RepLink",
        description: "",
        longDescription: "",
        image: "/images/",
        link: "https://replink-484702.web.app/",
        github: "",
        noteUrl: "",
        category: "",
        techStack: ["Firebase"] // ドメイン(.web.app)からFirebaseと推測
    },
    {
        id: "workout-tracker",
        title: "Workout Tracker",
        description: "日々のトレーニングを手軽に記録し、成長を可視化するためのシンプルな筋力トレーニング記録アプリです。",
        longDescription: "",
        image: "/images/workout_tracker.png",
        link: "", // アプリのストアリンクなどがなければ空欄でOK
        github: "https://github.com/ibukye/workout_tracker", // 元のlinkがGitHubだったのでこちらに移動
        noteUrl: "",
        category: "モバイルアプリ開発",
        techStack: [] 
    },
    {
        id: "number-recognition-cnn",
        title: "Number Recognition CNN",
        description: "手書きの数字を認識するConvolutional Neural Network",
        longDescription: "",
        image: "/images/number_recognition_cnn2.png",
        link: "https://number-recognition-cnn.onrender.com/",
        github: "",
        noteUrl: "",
        category: "Machine Learning/Deep Learning",
        techStack: ["Python", "CNN", "TensorFlow/PyTorch"] // 概要から推測
    },
    {
        id: "number-recognition-resnet",
        title: "Number Recognition ResNet",
        description: "手書きの数字を認識するResidual Neural Network",
        longDescription: "",
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
        longDescription: "",
        image: "/images/",
        link: "https://next-anime-hazel.vercel.app/",
        github: "",
        noteUrl: "",
        category: "",
        techStack: ["Next.js"] // タイトルから推測
    },
    {
        id: "reverse1999-team-builder",
        title: "Reverse1999 Team Builder v3",
        description: "ゲーム「リバース:1999」のチーム編成をシミュレーションできるウェブアプリケーションです。キャラクターのドラッグ＆ドロップによる直感的な操作、フィルタリング機能、編成したチームの保存・共有機能を実装しました。",
        longDescription: "",
        image: "/images/r1999_characters.png",
        link: "https://null-pointar.github.io/reverse1999-team-builder-v3/",
        github: "", //"https://github.com/null-pointar/reverse1999-team-builder-v3", // GitHub PagesのURL構造から推測
        noteUrl: "",
        category: "Web Development",
        techStack: ["HTML/CSS", "JavaScript"] // GitHub Pagesのため
    },
    {
        id: "vocabulary-study-app",
        title: "Vocabulary Study App",
        description: "自分だけのオリジナル単語帳を作成して、効率的に英単語を学習するためのWebアプリケーションです。フラッシュカード形式での学習や、苦手な単語の管理機能などを通じて、記憶の定着をサポートします。",
        longDescription: "",
        image: "/images/vocabulalry_app.png",
        link: "https://english-vocabulary-app-alpha.vercel.app/",
        github: "",
        noteUrl: "",
        category: "Web Development",
        techStack: ["React", "Next.js"] // Vercelデプロイのため推測
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description: "A Real-Time ToDo Application Built with React and Firebase (Link invalid)",
      longDescription: "",
      image: "",
      link: "https://to-do-app-react-two-tau.vercel.app/",
      github: "",
      noteUrl: "",
      category: "アプリ開発",
      techStack: ["React", "Firebase"] // 説明文より
    },
    {
      id: "simplest-todo-list",
      title: "Simplest Todo List",
      description: "A simple todo list app made by TypeScript for study",
      longDescription: "",
      image: "",
      link: "https://todo-app-type-script-phi.vercel.app/", // URLプロトコルを追加
      github: "",
      noteUrl: "",
      category: "Web Development",
      techStack: ["TypeScript"] // 説明文より
    },
    {
      id: "portfolio-site",
      title: "ポートフォリオサイト",
      description: "自分自身のスキルを紹介するレスポンシブなポートフォリオ。(作成途中)",
      longDescription: "",
      image: "",
      link: "https://portfolio-beta-six-y04ws1488b.vercel.app/",
      github: "https://github.com/ibukye/portfolio", // 推測されるリポジトリ名
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

export default portfolioData

/*

{
    title: "",
    description: "",
    image: "/images/",
    link: "",
    category: ""
},

*/