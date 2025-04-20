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
    <footer className="bg-deepblue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About CILASS</h3>
            <p className="text-gray-300 text-sm mb-4">
              The Faculty of Humanities (FoH) at CHARUSAT is committed to
              nurturing well-rounded individuals by blending academic excellence
              with human values.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-white"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-gray-300 hover:text-white"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  e-Governance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Transcript
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  CHARUSAT Campus, Highway, Changa, Anand, Gujarat 388421, India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  +91-9824269101 / Ext. 5184
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                <span className="text-gray-300">dean.foh@charusat.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-deepblue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Charotar Institute of Languages, Arts
            and Social Studies. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
