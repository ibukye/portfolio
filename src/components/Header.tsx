

import Link from 'next/link';





export default function Header() {
    
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">Nenneko</Link>
                    </div>
                    {/* ハンバーガーメニューのロジックは後で追加 */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                        <Link href="/about" className="hover:text-blue-500">About</Link>
                        <Link href="/projects" className="hover:text-blue-500">Projects</Link>
                        {/* 連絡先ページはまだないのでコメントアウト */}
                        {/* <Link href="/contact" className="hover:text-blue-500">Contact</Link> */}
                        {/* テーマ切り替えボタンのロジックは後で追加 */}
                    </div>
                </div>
            </div>
        </nav>
    );
}