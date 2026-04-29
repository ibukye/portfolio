import portfolioData from "@/data/content";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
};

const ui = {
  ja: {
    back: "← プロジェクト一覧へ",
    overview: "プロジェクト概要",
    liveDemo: "🚀 ライブデモ",
    github: "💻 GitHub",
    readNote: "📝 Note記事を読む",
  },
  en: {
    back: "← Back to Projects",
    overview: "Project Overview",
    liveDemo: "🚀 Live Demo",
    github: "💻 GitHub",
    readNote: "📝 Read Story on Note",
  },
};

const ProjectDetail = async ({ params, searchParams }: Props) => {
  const { id } = await params;
  const { lang: langParam } = await searchParams;
  const lang = langParam === 'en' ? 'en' : 'ja';
  const t = ui[lang];

  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return notFound();

  const description = lang === 'en'
    ? (project.longDescription_en || project.longDescription || project.description_en || project.description)
    : (project.longDescription || project.description);

  return (
    <section className="min-h-screen pt-24 pb-10 px-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link href={`/projects?lang=${lang}`} className="text-blue-500 hover:underline">
          {t.back}
        </Link>
        {/* 言語切り替え */}
        <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 inline-flex">
          <Link
            href={`/projects/${id}?lang=ja`}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${lang === 'ja' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            日本語
          </Link>
          <Link
            href={`/projects/${id}?lang=en`}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            English
          </Link>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      {/* 技術スタック */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack?.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* 画像 */}
      {project.image && project.image.startsWith('/') && project.image.length > 1 && (
        <div className="mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* 説明 */}
      {description && (
        <div className="prose dark:prose-invert max-w-none mb-10">
          <h3 className="text-2xl font-bold mb-2">{t.overview}</h3>
          <p className="whitespace-pre-wrap text-lg leading-relaxed">{description}</p>
        </div>
      )}

      {/* リンクボタン */}
      <div className="flex flex-col sm:flex-row gap-4">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition">
            {t.liveDemo}
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center hover:bg-gray-900 transition">
            {t.github}
          </a>
        )}
        {project.noteUrl && (
          <a href={project.noteUrl} target="_blank" rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-center hover:bg-green-700 transition">
            {t.readNote}
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;