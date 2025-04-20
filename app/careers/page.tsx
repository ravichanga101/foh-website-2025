import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Assistant Professor - English Literature",
    department: "Department of Humanities and Social Sciences",
    location: "Changa, Anand",
    type: "Full-time",
    posted: "May 15, 2025",
    deadline: "June 30, 2025",
  },
  {
    id: 2,
    title: "Assistant Professor - Library Science",
    department: "Department of Humanities and Social Sciences",
    location: "Changa, Anand",
    type: "Full-time",
    posted: "May 10, 2025",
    deadline: "June 25, 2025",
  },
  {
    id: 3,
    title: "Research Associate",
    department: "Department of Humanities and Social Sciences",
    location: "Changa, Anand",
    type: "Contract (2 years)",
    posted: "May 5, 2025",
    deadline: "June 15, 2025",
  },
  {
    id: 4,
    title: "Administrative Assistant",
    department: "Faculty of Humanities",
    location: "Changa, Anand",
    type: "Full-time",
    posted: "May 1, 2025",
    deadline: "June 10, 2025",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Careers at CHARUSAT
            </h1>
            <p className="text-lg text-gray-700">
              Join our dynamic and diverse academic community at Charotar
              University of Science and Technology (CHARUSAT) where we foster
              innovation, excellence, and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Join Us
              </h2>
              <p className="text-gray-700 mb-6">
                We are looking for passionate educators, researchers, and
                professionals who are committed to shaping the future of
                education. At CHARUSAT, you'll find:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      A collaborative and inclusive work environment
                    </h3>
                    <p className="text-gray-700">
                      Work alongside dedicated professionals in a supportive and
                      inclusive community that values diverse perspectives and
                      ideas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Opportunities for professional growth and development
                    </h3>
                    <p className="text-gray-700">
                      Access to resources, training, and support for continuous
                      learning and career advancement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Competitive compensation and benefits
                    </h3>
                    <p className="text-gray-700">
                      Attractive salary packages, health benefits, retirement
                      plans, and other perks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      State-of-the-art facilities and resources
                    </h3>
                    <p className="text-gray-700">
                      Modern classrooms, well-equipped laboratories, extensive
                      library resources, and advanced technology infrastructure.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="CHARUSAT Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore our current job openings and find opportunities that match
              your skills and interests.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{job.department}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4 text-primary" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          Posted: {job.posted}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          Apply by: {job.deadline}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="md:self-start">
                      <Link href={`/careers/${job.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Learn about our application process and what to expect when
              applying for a position at CHARUSAT.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Browse Job Openings
                  </h3>
                  <p className="text-gray-700">
                    Explore our current job openings and find positions that
                    match your qualifications and career goals. Read the job
                    descriptions carefully to understand the requirements and
                    responsibilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Prepare Your Application
                  </h3>
                  <p className="text-gray-700">
                    Prepare your application materials, including your
                    resume/CV, cover letter, and any other required documents.
                    Tailor your application to highlight your relevant skills
                    and experiences for the specific position.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Submit Your Application
                  </h3>
                  <p className="text-gray-700">
                    Submit your application through our online portal or as
                    instructed in the job posting. Ensure that all required
                    fields are completed and all necessary documents are
                    attached.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Application Review
                  </h3>
                  <p className="text-gray-700">
                    Our hiring team will review your application to assess your
                    qualifications and fit for the position. This process
                    typically takes 2-3 weeks, depending on the volume of
                    applications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Interview Process
                  </h3>
                  <p className="text-gray-700">
                    If your application is shortlisted, you will be invited for
                    an interview. Depending on the position, this may include
                    multiple rounds of interviews, presentations, or teaching
                    demonstrations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Offer and Onboarding
                  </h3>
                  <p className="text-gray-700">
                    If you are selected for the position, you will receive an
                    offer letter. Upon acceptance, our HR team will guide you
                    through the onboarding process to help you transition
                    smoothly into your new role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Development */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Faculty Development
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At CHARUSAT, we are committed to the continuous professional
              development of our faculty members.
            </p>
          </div>

          <Tabs defaultValue="programs" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="programs">Development Programs</TabsTrigger>
              <TabsTrigger value="research">Research Support</TabsTrigger>
              <TabsTrigger value="benefits">Benefits & Perks</TabsTrigger>
            </TabsList>
            <TabsContent
              value="programs"
              className="mt-6 p-6 bg-white rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Faculty Development Programs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We offer a range of programs and workshops to enhance
                    teaching effectiveness, research skills, and professional
                    growth of our faculty members.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Orientation programs for new faculty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Pedagogical workshops and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Research methodology workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Technology integration in teaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Leadership development programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Mentoring and coaching</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Faculty Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="research"
              className="mt-6 p-6 bg-white rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Research Support
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We provide support and resources for faculty members to
                    engage in cutting-edge research and scholarly activities.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Research grants and funding opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>State-of-the-art research facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Collaboration with national and international
                        institutions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Support for conference participation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Publication support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Research leave and sabbaticals</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Research Support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="benefits"
              className="mt-6 p-6 bg-white rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Benefits & Perks
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We offer a comprehensive benefits package to support our
                    faculty members' well-being and work-life balance.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Competitive salary packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Health insurance and medical benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Retirement benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Housing facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Transportation assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Childcare support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Educational benefits for family members</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Benefits & Perks"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-700 mb-8">
              If you have any questions about career opportunities at CHARUSAT,
              please contact our Human Resources department.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact HR Department</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
