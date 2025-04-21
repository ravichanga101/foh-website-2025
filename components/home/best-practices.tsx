import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export function BestPractices() {
  return (
    <section id="best-practices" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Best Practices"
          subtitle="Cultivating critical thinking, cultural insight, and human values to shape well-rounded individuals"
          theme="accent"
          icon={<Award className="h-6 w-6 text-amber-500" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/images/programs/B.A..JPG"
                alt="Liberal Arts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepblue-900/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  A course on Liberal Arts
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Integrate critical thinking, cultural awareness, and artistic
                practice. In addition to cultivating artistic senses, these
                classes foster confidence, teamwork, and emotional
                intelligence.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/images/programs/B.Lis.jpg"
                alt="Problem Solving"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deeppurple-900/80 to-transparent flex items-end p-6">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}