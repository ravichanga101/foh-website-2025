import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export function ProgramsSection() {
  return (
    <section className="py-16 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Academic Programs"
          subtitle="FoH offers Ph.D., B.A. English, and B.LIS programs that nurture intellect, values, and communication for impactful careers and research"
          theme="secondary"
          icon={<BookOpen className="h-6 w-6 text-foh-navy" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-foh-navy shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-foh-peach p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-foh-navy" />
                </div>
                <h3 className="text-lg font-bold text-foh-navy">
                  Ph.D. Program
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ph.D. Program in English, Communication and Library Science
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-foh-brown shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-foh-peach p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-foh-brown" />
                </div>
                <h3 className="text-lg font-bold text-foh-navy">
                  Bachelor of Arts (BA)
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bachelor of Arts (BA) in English/English with honors
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  3/4 Years
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  UGC approved
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  ₹ 40000 / Year
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-foh-beige shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-foh-peach p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-foh-beige" />
                </div>
                <h3 className="text-lg font-bold text-foh-navy">
                  Bachelor of Library and Information Science
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bachelor of Library and Information Science (BLIS)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  1 Year
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  UGC approved
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  ₹ 30000 / Year
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="navy" asChild>
            <Link href="#">Get Details of Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
