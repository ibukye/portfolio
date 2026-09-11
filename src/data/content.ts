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
      id: "imported-blackjack",
      title: "Imported Blackjack",
      description: "お笑いコンビ「きつね」の大津さんがさらば青春の光のYouTube番組内で考案したカードゲーム「輸入ブラックジャック」を、対戦できるWebゲームとして実装しました。",
      description_en: "A web implementation of \"Imported Blackjack,\" a two-player bluffing card game devised by Otsu of the comedy duo Kitsune on Saraba Seishun no Hikari's YouTube channel.",
      longDescription: `お笑いコンビ「きつね」の大津さんがYouTube番組「さらば青春の光」内で考案した二人対戦用カードゲームのルールを再現し、ReactとTypeScriptでWebゲーム化したものです。

ルール概要
各プレイヤーは1〜10の数字カード（各2枚ずつ）の山から中身を見ずに4枚引き、合計が21を超えないように手札を作ります。その後お互いに相手の手札を1枚ずつ公開し合い、その情報をもとに「そのまま勝負する（Check）」か「手札を1枚交換する（Trade）」かを選択。最終的に21に近い方が勝利、超えていれば失格となる心理戦ゲームです。

実装のポイント
・ゲーム進行をフェーズ（not started → initial card selection → turn order decided → reveal card → check or trade → trade → finished）としてStateで管理し、複雑な手番処理を見通しよく保つ設計にした。
・手札交換の際に「そのカードが公開済みだったか」を正しく引き継ぐロジック（revealIndexの付け替え）が最も苦労した部分。`,
      longDescription_en: `A two-player web card game that faithfully reproduces the rules of "Imported Blackjack," a game devised by Otsu of the comedy duo Kitsune, as introduced on the YouTube channel of Saraba Seishun no Hikari.

Rules
Each player secretly draws four cards (numbered 1-10, two of each) from a shared pile without exceeding a total of 21. Players then reveal exactly one of the opponent's cards to each other, and based on that partial information, choose to either "Check" (lock in their hand) or "Trade" one card with the opponent. Whoever ends closer to 21 without going over wins — a game built entirely on bluffing and inference.

Implementation notes
- Game progression is modeled as an explicit phase state machine (not started → initial card selection → turn order decided → reveal card → check or trade → trade → finished) to keep the turn logic manageable.
- The trickiest part was correctly carrying over "which cards have been revealed" when a trade happens, so revealed information stays accurate after cards swap hands.`,
      image: "",
      link: "",
      github: "",
      noteUrl: "",
      category: "Game Dev",
      techStack: ["React", "TypeScript", "Vite"]
    },
    {
      id: "otocatch",
      title: "OtoCatch",
      description: "マイクから取得した音をリアルタイムで解析し、自己相関法（オートコリレーション）を用いて音の高さ（音名）を検出・表示するWebアプリです。",
      description_en: "A web app that analyzes microphone audio in real time and detects musical pitch using an autocorrelation algorithm.",
      longDescription: `Web Audio APIでマイクからの音声を取得し、自己相関法（Autocorrelation）で基本周波数を推定、MIDIノート番号に変換して音名（ド・レ・ミ…）をリアルタイムに表示するアプリです。

実装のポイント
・振幅が一定の閾値を下回る場合は「無音」と判定し、誤検出を防止。
・直近数フレーム分の検出結果から最頻値を取ることで、単発のノイズによる音名のちらつきを抑え、安定した表示を実現。
・Canvasで波形を描画し、音の変化を視覚的にも確認できるようにした。`,
      longDescription_en: `Captures live audio from the microphone via the Web Audio API and estimates the fundamental frequency using an autocorrelation algorithm, converting it to a MIDI note number to display the detected musical note in real time.

Implementation notes
- A silence threshold filters out low-amplitude input before pitch detection runs, reducing false positives.
- Pitch results are smoothed by taking the most frequent note across a short rolling history, avoiding flicker from single-frame noise.
- The waveform is drawn live on a canvas, so the audio signal itself is also visible alongside the detected note.`,
      image: "",
      link: "",
      github: "",
      noteUrl: "",
      category: "Web Development",
      techStack: ["React", "TypeScript", "Web Audio API", "Canvas API"]
    },
    {
      id: "zoho-cliq-pod-bot",
      title: "Team Mention Assistant (Zoho Cliq Bot)",
      description: "インターンシップで開発した、社内コミュニケーションツール「Zoho Cliq」向けのAI Bot。メンションの自動ルーティングやSLAベースのエスカレーション、ドキュメントQ&A（RAG）などでチームの進行管理を自動化します。",
      description_en: "An AI bot for the internal communication tool Zoho Cliq, built during an internship. Automates mention routing, SLA-based escalation, and document Q&A (RAG) to support team workflow management.",
      longDescription: `インターンシップで開発・運用した、Zoho Cliq（社内チャットツール）向けのFlask製Webhook Botです。チャンネル内のメッセージをリアルタイムで解析し、以下のような業務を自動化しています。

・役職や部署の情報をもとにした適切な担当者への自動メンション
・一定時間返信がない場合のSLAエスカレーション（優先度ごとにタイムアウトを設定）
・チャットで交わされたタスクや約束事の自動抽出・追跡（完了検知を含む）
・過去に共有されたドキュメントをもとにした質問応答（RAG / ChromaDB）
・会話の停滞・混乱の検知、必要な担当者不在の検知
・日次・週次サマリーの自動投稿

主な技術
Google Gemini APIによる自然言語処理、ChromaDBによるベクトル検索、APSchedulerによる定期実行、MongoDBでのデータ管理を組み合わせ、AWS EKS上にDocker・GitLab CI/CDでデプロイして運用しました。
※社内システムのため、詳細な仕様やソースコードの一部は非公開としています。`,
      longDescription_en: `A Flask-based webhook bot for Zoho Cliq (an internal team chat tool), developed and operated during an internship. It processes every message posted in a channel in real time to automate:

- Mention routing to the right teammate based on job title and department
- SLA-based escalation when a message goes unanswered, with different timeouts by priority tier
- Automatic detection and tracking of action items and commitments mentioned in chat
- Document Q&A over previously shared files using retrieval-augmented generation (RAG / ChromaDB)
- Detection of stalled or confused conversations and missing-stakeholder situations
- Scheduled daily and weekly summary posts

Tech highlights
Combines the Google Gemini API for natural language understanding, ChromaDB for vector search, APScheduler for recurring jobs, and MongoDB for data storage, deployed to AWS EKS via Docker and GitLab CI/CD.
Note: as this was built for an internal company system, some implementation details and the source code are kept private.`,
      image: "",
      link: "",
      github: "",
      noteUrl: "",
      category: "Backend / AI Automation",
      techStack: ["Python", "Flask", "Google Gemini API", "ChromaDB", "MongoDB", "APScheduler", "AWS EKS", "Docker"]
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