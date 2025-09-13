import Link from 'next/link';



// ヒーローセクション
export default function Home() {
  return(
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, It's Nenneko</h1>
        <p className="text-xl md:text-2xl mb-6">AI Engineer | Practically exploring ML, Web Apps & AI×Healthcare</p>
        <Link href="/projects" className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
          See Projects
        </Link>
      </div>
    </section>
  );
}