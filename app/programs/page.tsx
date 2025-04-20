import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar, Users, Download, ArrowRight } from "lucide-react"

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h1>
            <p className="text-lg text-gray-700 mb-6">
              FoH offers Ph.D., B.A. English, and B.LIS programs that nurture intellect, values, and communication for
              impactful careers and research.
            </p>
            <Button asChild className="flex items-center gap-2 mx-auto">
              <Link href="#">
                <Download className="h-4 w-4" /> Download Brochure
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ACADEMIC EXCELLENCE</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our programs are designed to provide students with a strong foundation in their chosen field while
              fostering critical thinking, creativity, and ethical values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image src="/placeholder.svg?height=300&width=600" alt="PhD Program" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  Research
                </div>
              </div>
              <CardHeader>
                <CardTitle>Ph.D. Program in English, Communication and Library Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our Ph.D. program is designed for scholars who wish to contribute to the advancement of knowledge in
                  English, Communication, and Library Science through original research.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Duration: 3-5 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Limited Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Applications: Twice a year</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image src="/placeholder.svg?height=300&width=600" alt="BA Program" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  Undergraduate
                </div>
              </div>
              <CardHeader>
                <CardTitle>Bachelor of Arts (BA) in English/English with honors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our BA program offers a comprehensive study of English literature, language, and communication skills,
                  preparing students for diverse career paths.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Duration: 3/4 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-primary" />
                    <span>UGC approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Fee: ₹ 40000 / Year</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image src="/placeholder.svg?height=300&width=600" alt="BLIS Program" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  Professional
                </div>
              </div>
              <CardHeader>
                <CardTitle>Bachelor of Library and Information Science (BLIS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our BLIS program equips students with the knowledge and skills needed for careers in library science
                  and information management.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Duration: 1 Year</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-primary" />
                    <span>UGC approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Fee: ₹ 30000 / Year</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Details</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore the curriculum, learning outcomes, and career opportunities for each of our programs.
            </p>
          </div>

          <Tabs defaultValue="ba" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="phd">Ph.D. Program</TabsTrigger>
              <TabsTrigger value="ba">BA in English</TabsTrigger>
              <TabsTrigger value="blis">BLIS</TabsTrigger>
            </TabsList>
            <TabsContent value="phd" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Ph.D. Program in English, Communication and Library Science
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our Ph.D. program is designed for scholars who wish to contribute to the advancement of knowledge in
                    English, Communication, and Library Science through original research.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Areas</h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>English Literature and Literary Theory</li>
                    <li>Communication Studies</li>
                    <li>Library Science and Information Management</li>
                    <li>Cultural Studies</li>
                    <li>Linguistics and Language Teaching</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Program Structure</h4>
                  <p className="text-gray-700 mb-4">
                    The program includes coursework, comprehensive examinations, and a dissertation based on original
                    research. Students work closely with faculty advisors who are experts in their fields.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Eligibility</h4>
                  <p className="text-gray-700">
                    Master's degree in relevant discipline with at least 55% marks or equivalent grade.
                  </p>
                </div>
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Program Highlights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Expert faculty guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Access to research facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Research methodology training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Publication opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Conference participation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ba" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Bachelor of Arts (BA) in English/English with honors
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our BA program offers a comprehensive study of English literature, language, and communication
                    skills, preparing students for diverse career paths.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Program Structure</h4>
                  <p className="text-gray-700 mb-4">
                    The program includes core courses in English literature, language, and communication, as well as
                    electives in related fields. Students can opt for a 3-year BA or a 4-year BA with honors.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Courses</h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>British Literature</li>
                    <li>American Literature</li>
                    <li>Indian Writing in English</li>
                    <li>Literary Theory and Criticism</li>
                    <li>Communication Skills</li>
                    <li>Creative Writing</li>
                    <li>Cultural Studies</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Opportunities</h4>
                  <p className="text-gray-700">
                    Graduates can pursue careers in teaching, content writing, journalism, publishing, public relations,
                    corporate communication, and more.
                  </p>
                </div>
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Program Highlights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">UGC approved curriculum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Expert faculty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Modern teaching methods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Industry exposure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Personality development</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">Duration:</span>
                        <span className="text-gray-700">3/4 Years</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">Eligibility:</span>
                        <span className="text-gray-700">10+2 or equivalent</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Fee:</span>
                        <span className="text-gray-700">₹ 40000 / Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="blis" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Bachelor of Library and Information Science (BLIS)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our BLIS program equips students with the knowledge and skills needed for careers in library science
                    and information management.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Program Structure</h4>
                  <p className="text-gray-700 mb-4">
                    The program includes courses in library organization, information retrieval, digital libraries,
                    cataloging, and classification, as well as practical training in library operations.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Courses</h4>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>Library Organization and Management</li>
                    <li>Information Sources and Services</li>
                    <li>Cataloging and Classification</li>
                    <li>Digital Libraries</li>
                    <li>Information Retrieval</li>
                    <li>Library Automation</li>
                    <li>Information Literacy</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Opportunities</h4>
                  <p className="text-gray-700">
                    Graduates can pursue careers as librarians, information specialists, knowledge managers, and digital
                    content managers in academic institutions, public libraries, corporate libraries, and more.
                  </p>
                </div>
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Program Highlights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">UGC approved curriculum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Hands-on training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Modern library exposure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Digital library training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-gray-700">Industry internships</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">Duration:</span>
                        <span className="text-gray-700">1 Year</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">Eligibility:</span>
                        <span className="text-gray-700">Bachelor's degree</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Fee:</span>
                        <span className="text-gray-700">₹ 30000 / Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">COLLABORATIONS</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We collaborate with leading institutions and organizations to enhance the learning experience of our
              students.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=200"
                alt="Collaboration Partner"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=200"
                alt="Collaboration Partner"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=200"
                alt="Collaboration Partner"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=200"
                alt="Collaboration Partner"
                width={200}
                height={100}
                className="max-h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding academic journey at CILASS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
