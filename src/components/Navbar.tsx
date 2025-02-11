import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-50 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl">
          Bendigo Breville
        </Link>
        
        <div className="flex items-center space-x-8"><Link href="/about" className="text-gray-800">About</Link>
          <a href="tel:+61468385315" className="text-gray-800">
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 