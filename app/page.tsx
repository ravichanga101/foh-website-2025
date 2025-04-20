import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Award,
  ArrowRight,
  Download,
  GraduationCap,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 flex items-end justify-center bg-dark-800/50">
          <div className="px-6 py-6 bg-deepblue-700/70 backdrop-blur-sm rounded-lg max-w-5xl">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center tracking-wide leading-tight">
              CHAROTAR INSTITUTE OF LANGUAGES, ARTS AND SOCIAL STUDIES
            </h1>
          </div>
        </div>
        <Image
          src="images/programs/B.A..JPG?height=600&width=1600"
          alt="CLASS Campus"
          width={1600}
          height={600}
          className="w-full h-[500px] object-cover"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-deepblue-800 mb-6">
                About Faculty of Humanities
              </h2>
              <p className="text-gray-700 mb-4">
                The Faculty of Humanities (FoH) at CHARUSAT is committed to
                nurturing well-rounded individuals by blending academic
                excellence with human values. Grounded in liberal education, FoH
                encourages students to explore language, culture, ethics, and
                communication, while embracing India's rich heritage and
                traditions.
              </p>
              <p className="text-gray-700 mb-4">
                Through community engagement, value-based learning, and
                personality development, FoH empowers students to become
                confident, ethical, and compassionate individuals.
              </p>
              <p className="text-gray-700 mb-6">
                The Department of Humanities and Social Sciences has proposed
                and introduced a variety of impactful courses across all
                institutes of the university, enriching the academic journey of
                students from every discipline.
              </p>
              <Button
                asChild
                className="flex items-center gap-2 bg-deepblue-600 hover:bg-deepblue-700 my-4"
              >
                <Link href="./files/FoH-brochure.pdf" target="_blank">
                  <Download className="h-4 w-4" /> Download Brochure
                </Link>
              </Button>
              {/* Collaborations Section within About */}
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/foh-about.png"
                alt="Faculty of Humanities"
                width={500}
                height={400}
                className="rounded-lg shadow-lg  h-auto"
              />
            </div>
          </div>
          {/* <div className="mt-8 mb-6">
            <h3 className="text-2xl font-bold text-deepblue-800 mb-4">
              Collaborations
            </h3>
            <p className="text-gray-700 mb-4">
              We partner with leading institutions to enhance the learning
              experience and provide global opportunities to our students.
            </p>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center justify-center">
                <Image
                  src="/images/collaborations/BritishCouncil_Logo.png"
                  alt="British Council"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center justify-center">
                <Image
                  src="/images/collaborations/IDP-Education.jpg"
                  alt="IDP Education"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center justify-center">
                <Image
                  src="/images/collaborations/Disha consultants.png"
                  alt="Disha Consultants"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
              <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center justify-center">
                <Image
                  src="/images/collaborations/ets.webp"
                  alt="ETS"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-deepblue-600 mb-2">13+</p>
              <p className="text-gray-700">Expert Faculty</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-deepblue-600 mb-2">22+</p>
              <p className="text-gray-700">Years of Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-deepblue-600 mb-2">3</p>
              <p className="text-gray-700">Programs offered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Quality Policy Section */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                  {/* <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Note:</span> Inclusive
                      institutions are systems that promote equal opportunities,
                      participation, and access to resources. They are based on
                      principles of non-discrimination, universality, and
                      targeted action.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Leading</span>, herein,
                      means to be among the top 50 at National Level.
                    </p>
                  </div> */}
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

      {/* Best Practices Section */}
      <section id="best-practices" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepblue-800 mb-4">
              Best Practices
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At FoH, we cultivate critical thinking, cultural insight, and
              human values to shape well-rounded individuals for a dynamic and
              responsible future.
            </p>
          </div>

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
      {/* Collaborations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Collaborations
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We collaborate with leading institutions and organizations to
              enhance the learning experience of our students.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/collaborations/BritishCouncil_Logo.png"
                alt="British Council"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/collaborations/IDP-Education.jpg"
                alt="IDP Education"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/collaborations/Disha consultants.png"
                alt="Disha Consultants"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/images/collaborations/ets.webp"
                alt="ETS"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Programs Preview Section */}
      <section className="py-16 bg-white" id="programs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepblue-800 mb-4">
              Academic Programs
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              FoH offers Ph.D., B.A. English, and B.LIS programs that nurture
              intellect, values, and communication for impactful careers and
              research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-deepblue-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-deepblue-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-deepblue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-deepblue-800">
                    Ph.D. Program
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Ph.D. Program in English, Communication and Library Science
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-deeppurple-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-deeppurple-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-deeppurple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-deepblue-800">
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

            <Card className="border-t-4 border-t-deepblue-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-deepblue-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-deepblue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-deepblue-800">
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
            <Button asChild className="bg-deepblue-600 hover:bg-deepblue-700">
              <Link href="#">Get Details of Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Life Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepblue-800 mb-4">
              Campus Life
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Experience a vibrant campus life at CLASS with various academic
              and cultural activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
              <Image
                src="/images/campus-life/1.png"
                alt="Campus Life"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
              <Image
                src="/images/campus-life/2.jpg"
                alt="Campus Life"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
              <Image
                src="/images/campus-life/3.jpg"
                alt="Campus Life"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
              <Image
                src="/images/campus-life/4.png"
                alt="Campus Life"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-deepblue-700 to-deeppurple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join CLASS and embark on a transformative educational experience
            that will shape your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-deepblue-700 hover:bg-gray-100"
            >
              <Link href="https://admission.charusat.ac.in" target="_blank">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
