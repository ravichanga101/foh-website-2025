import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileText } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function BestPractices() {
  return (
    <section id="best-practices" className="py-16 bg-foh-peach/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Best Practices"
          subtitle="Cultivating critical thinking, cultural insight, and human values to shape well-rounded individuals"
          theme="accent"
          icon={<Award className="h-6 w-6 text-foh-beige" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/images/best-practices/LiberalArts.jpg"
                  alt="Liberal Arts"
                  fill
                  className="object-contain"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-foh-navy/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  A course on Liberal Arts
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Integrate critical thinking, cultural awareness, and artistic
                practice. In addition to cultivating artistic senses, these
                classes foster confidence, teamwork, and emotional intelligence.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4 text-foh-navy hover:text-foh-green"
              >
                <Link
                  href="/files/A master report on Liberal Arts - 2023-24.pdf"
                  target="_blank"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Get details
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/images/best-practices/B.A..JPG"
                  alt="Problem Solving"
                  fill
                  className="object-contain"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-foh-brown/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  A course on Creativity Problem Solving and Innovation
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Hands-on activities that foster creative ideas, workable
                solutions, and a problem-solving mindset can help you develop
                critical thinking and innovative abilities.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-4 text-foh-brown hover:text-foh-green"
              >
                <Link
                  href="/files/A master report on CPI - 2023-24.pdf"
                  target="_blank"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Get details
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
