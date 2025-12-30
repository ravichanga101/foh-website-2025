import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Book, Download } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Charotar Institute of Languages, Arts and Social Studies (CLASS)"
          subtitle="Nurturing well-rounded individuals through academic excellence and human values"
          align="center"
          icon={<Book className="h-6 w-6 text-foh-brown" />}
        />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4 text-justify">
              The evolution of Charotar Institute of Languages, Arts and Social Studies (CLASS) at CHARUSAT began with the establishment of the Department of Communication Skills in 2002, expanded into the Department of Humanities and Social Sciences in 2014, and ultimately led to the formation of the Faculty of Humanities (FoH) in the Academic Year 2023–24, followed by the establishment of Charotar Institute of Languages, Arts and Social Studies (CLASS) in 2025.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              CLASS is committed to nurturing well-rounded individuals by blending academic excellence with human values. Grounded in liberal education, CLASS encourages students to explore language, culture, ethics, and communication, while embracing India's rich heritage and traditions. Through community engagement, value-based learning, and personality development, CLASS empowers students to become confident, ethical, and compassionate individuals.  The institute now offers PhD, Bachelor of Arts (BA) in English, Bachelor of Library & Information Science, Master of Arts (MA) in English, and Master of Library & Information Science (MLIS) programs; credit courses as per NEP 2020; certificate courses; training programs in various allied areas aimed at fostering intellectual, creative, and professional excellence on the CHARUSAT campus. The Department of Humanities and Social Sciences has proposed and introduced a variety of impactful courses across all institutes of the university, enriching the academic journey of students from every discipline. 
            </p>
            
            <Button
              variant="brown"
              asChild
              className="flex items-center gap-2 my-4"
            >
              <Link href="./files/MA_Leaflet.jpg" target="_blank">
                <Download className="h-4 w-4" /> Download Brochure
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 ">
            <Image
              src="/images/foh-about.png"
              alt="Faculty of Humanities"
              width={500}
              height={400}
              className="rounded-lg shadow-lg  h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
