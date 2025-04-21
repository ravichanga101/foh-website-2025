import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foh-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foh-beige">
              About CILASS
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              The Faculty of Humanities (FoH) at CHARUSAT is committed to
              nurturing well-rounded individuals by blending academic excellence
              with human values.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foh-beige hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foh-beige hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foh-beige hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foh-beige hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foh-beige">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-foh-peach">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foh-beige">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  e-Governance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  Transcript
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-foh-peach">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-lg font-semibold mb-4 text-foh-beige">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <MapPin className="h-5 w-5 text-foh-beige mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  CHARUSAT Campus, Highway, Changa, Anand, Gujarat 388421, India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-foh-beige mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  +91-9824269101 / Ext. 5184
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-foh-beige mr-2 flex-shrink-0" />
                <span className="text-gray-300">dean.foh@charusat.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foh-beige/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Charotar Institute of Languages, Arts
            and Social Studies. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-foh-peach"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-foh-peach"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
