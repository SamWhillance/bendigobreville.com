import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold">
              Bendigo Breville
            </Link>
            <div className="mt-4">
              <p className="text-gray-400">
                Fast, reliable repairs and maintenance for most Breville coffee
                machines in the Greater Bendigo region.
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="uppercase text-sm font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/repair" className="text-gray-400 hover:text-white">
                  Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="text-gray-400 hover:text-white"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/recycling"
                  className="text-gray-400 hover:text-white"
                >
                  Recycling
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="uppercase text-sm font-medium mb-4">
              Business Hours
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 9:30am - 5:30pm</li>
              <li>Saturday - Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 w-full md:w-auto">
          <WhatsAppButton />
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bendigo Breville. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
