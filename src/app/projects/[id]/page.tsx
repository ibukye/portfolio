import portfolioData from "@/data/content";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// このページは /projects/emotigift のようなURLでアクセスされます
const ProjectDetail = ({ params }: { params: { id: string } }) => {
  // URLのidと一致するプロジェクトを探す
  const project = portfolioData.projects.find((p) => p.id === params.id);

  // 見つからない場合は404
  if (!project) {
    return notFound();
  }

  return (
    <section className="min-h-screen pt-24 pb-10 px-4 max-w-4xl mx-auto">
      <Link href="/projects" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      {/* 技術スタックの表示 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack?.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-8">
        {project.image && (
          <Image 
            src={project.image} 
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        )}
      </div>

      <div className="prose dark:prose-invert max-w-none mb-10">
        <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
        <p className="whitespace-pre-wrap text-lg leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </div>

      {/* リンク集ボタンエリア */}
      <div className="flex flex-col sm:flex-row gap-4">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" 
             className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition">
             🚀 Live Demo
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" 
             className="bg-gray-800 text-white px-6 py-3 rounded-lg text-center hover:bg-gray-900 transition">
             💻 GitHub
          </a>
        )}
        {project.noteUrl && (
          <a href={project.noteUrl} target="_blank" rel="noopener noreferrer" 
             className="bg-green-600 text-white px-6 py-3 rounded-lg text-center hover:bg-green-700 transition">
             📝 Read Story on Note
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;