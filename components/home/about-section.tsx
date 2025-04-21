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
          title="About Faculty of Humanities"
          subtitle="Nurturing well-rounded individuals through academic excellence and human values"
          align="center"
          icon={<Book className="h-6 w-6 text-foh-brown" />}
        />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              The Faculty of Humanities (FoH) at CHARUSAT is committed to
              nurturing well-rounded individuals by blending academic excellence
              with human values. Grounded in liberal education, FoH encourages
              students to explore language, culture, ethics, and communication,
              while embracing India's rich heritage and traditions.
            </p>
            <p className="text-gray-700 mb-4">
              Through community engagement, value-based learning, and
              personality development, FoH empowers students to become
              confident, ethical, and compassionate individuals.
            </p>
            <p className="text-gray-700 mb-6">
              The Department of Humanities and Social Sciences has proposed and
              introduced a variety of impactful courses across all institutes of
              the university, enriching the academic journey of students from
              every discipline.
            </p>
            <Button
              variant="brown"
              asChild
              className="flex items-center gap-2 my-4"
            >
              <Link href="./files/FoH-brochure.pdf" target="_blank">
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
