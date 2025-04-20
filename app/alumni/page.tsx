import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Briefcase, MapPin, Calendar, Quote } from "lucide-react"

const alumniProfiles = [
  {
    id: 1,
    name: "Priya Sharma",
    batch: "2018",
    program: "BA English",
    position: "Content Manager",
    company: "Global Media Inc.",
    location: "Mumbai, India",
    image: "/placeholder.svg?height=300&width=300",
    testimonial:
      "My time at CILASS provided me with a strong foundation in English literature and communication skills, which has been invaluable in my career in content management.",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    batch: "2017",
    program: "BA English",
    position: "Assistant Professor",
    company: "Delhi University",
    location: "Delhi, India",
    image: "/placeholder.svg?height=300&width=300",
    testimonial:
      "The research skills and critical thinking abilities I developed at CILASS have been crucial in my academic career. The faculty's guidance and mentorship inspired me to pursue a career in academia.",
  },
  {
    id: 3,
    name: "Anita Desai",
    batch: "2019",
    program: "BLIS",
    position: "Digital Librarian",
    company: "National Library",
    location: "Kolkata, India",
    image: "/placeholder.svg?height=300&width=300",
    testimonial:
      "The BLIS program at CILASS equipped me with both traditional library science knowledge and digital information management skills, which are essential in today's rapidly evolving library landscape.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    batch: "2016",
    program: "BA English",
    position: "Content Writer",
    company: "Tech Solutions Ltd.",
    location: "Bangalore, India",
    image: "/placeholder.svg?height=300&width=300",
    testimonial:
      "The communication and writing skills I gained at CILASS have been the foundation of my success as a content writer in the tech industry. The program's emphasis on clarity and creativity has served me well.",
  },
  {
    id: 5,
    name: "Meera Nair",
    batch: "2018",
    program: "BLIS",
    position: "Information Specialist",
    company: "Research Institute",
    location: "Hyderabad, India",
    image: "/placeholder.svg?height=300&width=300",
    testimonial:
      "CILASS provided me with a comprehensive understanding of information management and research methodologies, which has been crucial in my role as an information specialist.",
  },
  {
    id: 6,
    name: "Sanjay Kumar",
    batch: "2015",
    program: "BA English",
    position: "Public Relations Manager",
    company: "Corporate Communications Inc.",
    location: "Ahmedabad, India",
    image: "/placeholder.svg?height=300&width=300",
    testimonial:
      "The interpersonal and communication skills I developed at CILASS have been invaluable in my career in public relations. The program's focus on effective communication has been a key factor in my success.",
  },
]

export default function AlumniPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Network</h1>
            <p className="text-lg text-gray-700">
              Connect with our alumni community and discover how CILASS graduates are making an impact in various
              fields.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Spotlight</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Meet some of our distinguished alumni who are making significant contributions in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniProfiles.map((alumni) => (
              <Card key={alumni.id} className="overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{alumni.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4 text-primary" />
                      <span>
                        {alumni.program}, Batch of {alumni.batch}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>
                        {alumni.position} at {alumni.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{alumni.location}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700 italic">{alumni.testimonial}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Association */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alumni Association</h2>
              <p className="text-gray-700 mb-4">
                The CILASS Alumni Association is a vibrant community of graduates who stay connected with their alma
                mater and with each other. The association organizes various events, networking opportunities, and
                professional development programs for its members.
              </p>
              <p className="text-gray-700 mb-6">By joining the Alumni Association, you can:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Stay connected with your classmates and faculty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Participate in alumni events and reunions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Access professional development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Mentor current students and recent graduates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Contribute to the growth and development of CILASS</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="#">Join Alumni Association</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Alumni Association"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Events</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Stay updated with upcoming alumni events and reunions. These events provide excellent opportunities for
              networking and reconnecting with your classmates and faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold text-primary">25</span>
                    <span className="block text-sm text-gray-600">Jun</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Annual Alumni Meet</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      6:00 PM - 9:00 PM | Main Auditorium
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      Join us for an evening of networking, reminiscing, and celebrating the achievements of our alumni.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">Register</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold text-primary">15</span>
                    <span className="block text-sm text-gray-600">Jul</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Alumni Career Workshop</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      10:00 AM - 1:00 PM | Seminar Hall
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      A workshop on career advancement strategies, conducted by successful alumni from various fields.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">Register</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold text-primary">10</span>
                    <span className="block text-sm text-gray-600">Aug</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Batch of 2015 Reunion</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      5:00 PM - 8:00 PM | Conference Room
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      A special reunion for the batch of 2015 to celebrate 10 years since graduation.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">Register</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Resources */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Resources</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Access resources and services available exclusively for CILASS alumni.
            </p>
          </div>

          <Tabs defaultValue="career" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="career">Career Services</TabsTrigger>
              <TabsTrigger value="library">Library Access</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship Program</TabsTrigger>
              <TabsTrigger value="giving">Giving Back</TabsTrigger>
            </TabsList>
            <TabsContent value="career" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Services</h3>
              <p className="text-gray-700 mb-4">CILASS alumni have access to a range of career services, including:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Job postings and career opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Resume and cover letter review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Interview preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Career counseling and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="#">Access Career Services</Link>
              </Button>
            </TabsContent>
            <TabsContent value="library" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Library Access</h3>
              <p className="text-gray-700 mb-4">
                As a CILASS alumnus, you continue to have access to our library resources, including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Physical library access during designated hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Digital library resources and databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>E-journals and e-books</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Research assistance from library staff</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="#">Access Library Resources</Link>
              </Button>
            </TabsContent>
            <TabsContent value="mentorship" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship Program</h3>
              <p className="text-gray-700 mb-4">
                Our alumni mentorship program connects experienced alumni with current students and recent graduates,
                providing guidance and support in their academic and professional journeys.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Become a Mentor</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Share your knowledge and experience with current students and recent graduates. Help them navigate
                    their academic and professional paths.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">Sign Up as Mentor</Link>
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Find a Mentor</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Connect with experienced alumni who can provide guidance and support in your academic and
                    professional journey.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">Find a Mentor</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="giving" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Giving Back</h3>
              <p className="text-gray-700 mb-4">
                There are many ways for alumni to give back to CILASS and support the next generation of students:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Financial contributions to scholarships and development funds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Guest lectures and workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Internship and job opportunities for current students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Participation in alumni-student networking events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Volunteering for alumni association activities</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="#">Contribute Now</Link>
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Update Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Keep your contact information updated to stay connected with CILASS and receive updates about alumni events
            and opportunities.
          </p>
          <Button asChild size="lg">
            <Link href="#">Update Your Information</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
