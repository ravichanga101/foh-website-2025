"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";

// Define types for navigation items
type SubItem = {
  title: string;
  href: string;
  target?: string;
  id: string;
};

type NavigationItem = {
  title: string;
  href: string;
  target?: string;
  subItems: SubItem[];
  id: string;
};

// Navigation items data structure
const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    subItems: [],
    id: "home",
  },
  {
    title: "Programs",
    href: "./#programs",
    subItems: [],
    id: "programs",
  },
  {
    title: "Faculty & Staff",
    href: "/faculty",
    subItems: [],
    id: "faculty",
  },
  {
    title: "Student Corner",
    href: "#",
    subItems: [
      // {
      //   title: "Academic Calendar",
      //   href: "#",
      //   id: "calendar",
      // },
      { title: "Syllabus", href: "#", id: "syllabus" },
      {
        title: "Transcripts",
        href: "https://charusat.edu.in:912/OthPaymentApp/",
        target: "_blank",
        id: "transcripts",
      },
      {
        title: "E-Governance",
        href: "https://charusat.edu.in:912/eGovernance/",
        target: "_blank",
        id: "e-governance",
      },
      {
        title: "Pay Fees",
        href: "https://support.charusat.edu.in/FeesPaymentApp/",
        target: "_blank",
        id: "pay-fees",
      },
      {
        title: "Downloads",
        href: "https://www.charusat.ac.in/Downloads/",
        target: "_blank",
        id: "downloads",
      },
    ],
    id: "student-corner",
  },

  {
    title: "Alumni",
    href: "https://alumni.charusat.ac.in/",
    target: "_blank",
    subItems: [],
    id: "alumni",
  },
  {
    title: "Careers",
    href: "https://www.charusat.ac.in/careers",
    target: "_blank",
    subItems: [],
    id: "careers",
  },
  {
    title: "Admissions",
    href: "https://admission.charusat.ac.in",
    target: "_blank",
    subItems: [],
    id: "admissions",
  },
  {
    title: "News",
    href: "/news",

    subItems: [],
    id: "news",
  },
  {
    title: "Contact",
    href: "./#contact",
    subItems: [],
    id: "contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Main Header */}
      <div
        className={`bg-foh-peach ${
          isScrolled ? "shadow-md" : ""
        } transition-all duration-300 sticky top-0 z-50`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/class-logo.png?height=60&width=60"
                alt="CLASS Logo"
                width={120}
                height={120}
                className="mr-3"
              />
              {/* <div>
                <h1 className="text-lg font-bold text-deepblue-700 leading-tight">
                  CLASS
                </h1>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex space-x-1">
                {navigationItems.map((item) => (
                  <li key={item.id} className="nav-item relative group">
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-sm font-medium text-foh-navy hover:text-foh-brown hover:bg-foh-peach/80 rounded"
                      target={item.target}
                    >
                      {item.title}
                      {item.subItems.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </Link>
                    {item.subItems.length > 0 && (
                      <div className="dropdown-menu absolute invisible group-hover:visible bg-white border border-foh-beige rounded-md shadow-lg mt-0 py-0 w-48 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foh-navy hover:bg-foh-peach/50 hover:text-foh-brown"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Apply Now Button (Desktop) */}
            <div className="hidden lg:block">
              <Button variant="brown" size="lg">
                <Link href="https://admission.charusat.ac.in" target="_blank">
                  Apply Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foh-navy" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-foh-peach"
              >
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/images/class-logo.png?height=40&width=40"
                      alt="CLASS Logo"
                      width={40}
                      height={40}
                      className="mr-2"
                    />
                    {/* <span className="text-lg font-bold text-foh-navy">
                      CLASS
                    </span> */}
                  </Link>
                  {/* Removed redundant close button as SheetContent already provides one */}
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-1">
                  {navigationItems.map((item) => (
                    <MobileNavItem
                      key={item.id}
                      title={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      subItems={item.subItems}
                      target={item.target}
                    />
                  ))}
                  <Button variant="brown" className="mt-4">
                    Apply Now
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

// Mobile Navigation Item Component
const MobileNavItem = ({
  title,
  href,
  onClick,
  subItems = [],
  target,
}: {
  title: string;
  href: string;
  onClick: () => void;
  subItems?: SubItem[];
  target?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className="px-3 py-2 text-base font-medium text-foh-navy hover:text-foh-brown hover:bg-white/30 rounded-md w-full"
          onClick={subItems.length === 0 ? onClick : undefined}
          target={target}
        >
          {title}
        </Link>
        {subItems.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foh-navy hover:text-foh-brown"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
      {isOpen && subItems.length > 0 && (
        <div className="ml-4 pl-2 border-l border-foh-beige space-y-1">
          {subItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block px-3 py-2 text-sm text-foh-navy hover:text-foh-brown hover:bg-white/30 rounded-md"
              onClick={onClick}
              target={item.target}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
