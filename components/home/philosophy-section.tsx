import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, GraduationCap, Award } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export function PhilosophySection() {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Philosophy"
          subtitle="Guiding principles that shape our educational approach and institutional goals"
          theme="secondary"
          icon={<Target className="h-6 w-6 text-foh-navy" />}
        />
        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger
              value="vision"
              className="data-[state=active]:bg-foh-navy data-[state=active]:text-white"
            >
              Vision
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="data-[state=active]:bg-foh-brown data-[state=active]:text-white"
            >
              Mission
            </TabsTrigger>
            <TabsTrigger
              value="quality"
              className="data-[state=active]:bg-foh-beige data-[state=active]:text-foh-navy"
            >
              Quality Policy
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="vision"
            className="mt-6 p-6 bg-foh-peach/30 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="bg-foh-navy/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-foh-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foh-navy mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To become a leading inclusive academic institution supporting
                  a community engaged in teaching, research and social
                  contribution across a broad range of Professional Programs to
                  Languages, Arts and Social Studies.
                </p>
                <div className="mt-4 bg-foh-navy/5 p-4 rounded-md border border-foh-navy/10">
                  <h4 className="font-medium text-foh-navy mb-2">Note:</h4>
                  <p className="text-sm text-gray-700">
                    1) Inclusive institutions are systems that promote equal
                    opportunities, participation, and access to resources. They
                    are based on principles of non-discrimination, universality,
                    and targeted action.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="mission"
            className="mt-6 p-6 bg-foh-peach/30 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="bg-foh-brown/10 p-3 rounded-full">
                <Target className="h-6 w-6 text-foh-brown" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foh-navy mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To nurture an inclusive community of inquisitive, intrepid,
                  compassionate, and socially engaged citizens through
                  multidisciplinary education in languages, arts and social
                  studies.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="quality"
            className="mt-6 p-6 bg-foh-peach/30 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="bg-foh-beige/20 p-3 rounded-full">
                <Award className="h-6 w-6 text-foh-beige" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foh-navy mb-3">
                  Quality Policy
                </h3>
                <p className="text-gray-700">
                  CHARUSAT is committed to quality in all its endeavors like
                  teaching-learning, research and extension; to foster an
                  intellectual culture; and develop graduates for a life of
                  purpose, service and leadership.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
