import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            My Shop
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/shop" className="hover:text-gray-300 transition-colors">
              Shop
            </Link>
            <Link href="/photos" className="hover:text-gray-300 transition-colors">
              Photos
            </Link>
            <Link href="/videos" className="hover:text-gray-300 transition-colors">
              Videos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
