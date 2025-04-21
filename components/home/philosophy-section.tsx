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
          icon={<Target className="h-6 w-6 text-deeppurple-600" />}
        />
        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger
              value="vision"
              className="data-[state=active]:bg-deepblue-600 data-[state=active]:text-white"
            >
              Vision
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="data-[state=active]:bg-deepblue-600 data-[state=active]:text-white"
            >
              Mission
            </TabsTrigger>
            <TabsTrigger
              value="quality"
              className="data-[state=active]:bg-deepblue-600 data-[state=active]:text-white"
            >
              Quality Policy
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="vision"
            className="mt-6 p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="bg-deepblue-100 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-deepblue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepblue-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To become a leading inclusive academic institution
                  supporting a community engaged in teaching, research and
                  social contribution across a broad range of Professional
                  Programs to Languages, Arts and Social Studies.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="mission"
            className="mt-6 p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="bg-deepblue-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-deepblue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepblue-800 mb-3">
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
            className="mt-6 p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="bg-deepblue-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-deepblue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepblue-800 mb-3">
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