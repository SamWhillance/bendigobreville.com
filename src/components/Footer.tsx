import Link from "next/link";
import SubmitFormButton from "@/components/SubmitForm";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
          {/* <div>
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
          </div> */}

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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <SubmitFormButton />
            </div>
            <div className="w-full md:w-1/2">
              <WhatsAppButton />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8 mt-8">
          <img
            src="https://imgproxy.attic.sh/fD2Zlf-JK3L6F3HGNJf4vMw2hYDil5AWqa9JGkArQEM/rs:fit:128:128:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRp/Yy5zaC9sd2huMmFr/Z2ZsZjU1OXB1ZXBl/YTNsajEwNGJs.png"
            alt="Breville espresso machine emoji"
            width="40"
            height="40"
          />
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
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
