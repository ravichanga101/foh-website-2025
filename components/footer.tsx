import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foh-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col items-start space-y-4 mb-6">
              <Image
                src="/images/logos/class-logo.png"
                alt="CLASS Logo"
                width={150}
                height={50}
                className="mb-2 bg-white rounded-md p-2"
              />

              <Image
                src="/images/logos/charusat-logo.png"
                alt="CHARUSAT Logo"
                width={180}
                height={60}
                className="mb-2 bg-white rounded-md p-2"
              />
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/IIIM.CHARUSAT/"
                className="text-foh-beige hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href="https://www.instagram.com/iiim.charusat/"
                className="text-foh-beige hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/school/iiim-charusat/"
                className="text-foh-beige hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/@iiimcharusat"
                className="text-foh-beige hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foh-beige">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="./#about"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="./#programs"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="https://admission.charusat.ac.in/"
                  target="_blank"
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
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foh-beige">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://charusat.edu.in:912/eGovernance/"
                  target="_blank"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  e-Governance
                </Link>
              </li>
              <li>
                <Link
                  href="https://charusat.edu.in:912/OthPaymentApp/"
                  target="_blank"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  Transcript
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.charusat.ac.in/Downloads/Syllabus/"
                  target="_blank"
                  className="text-gray-300 hover:text-foh-peach"
                >
                  Syllabus
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.charusat.ac.in/Downloads/"
                  target="_blank"
                  className="text-gray-300 hover:text-foh-peach"
                >
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
        </div>
      </div>
    </footer>
  );
}
