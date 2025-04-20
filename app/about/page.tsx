import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, BookOpen, Users, Award, History, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">CILASS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              About
            </Link>
            <Link href="/#programs" className="text-sm font-medium transition-colors hover:text-primary">
              Programs
            </Link>
            <Link href="/#faculty" className="text-sm font-medium transition-colors hover:text-primary">
              Faculty
            </Link>
            <Link href="/#events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Student Login
            </Button>
            <Button size="sm">Apply Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Institute</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about the Charotar Institute of Languages, Arts and Social Studies, our history, mission,
                  and values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Tabs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Institute Overview</h2>
                        <p className="text-muted-foreground">
                          The Charotar Institute of Languages, Arts and Social Studies (CILASS) is a premier institution
                          dedicated to excellence in humanities education. Located in Anand, Gujarat, our institute
                          offers a wide range of undergraduate and postgraduate programs in languages, arts, and social
                          sciences.
                        </p>
                        <p className="text-muted-foreground">
                          At CILASS, we believe in providing a holistic education that not only imparts knowledge but
                          also fosters critical thinking, creativity, and social responsibility. Our curriculum is
                          designed to prepare students for diverse career paths and to contribute meaningfully to
                          society.
                        </p>
                        <p className="text-muted-foreground">
                          With state-of-the-art facilities, a distinguished faculty, and a vibrant campus life, CILASS
                          provides an enriching academic environment where students can explore their interests, develop
                          their talents, and prepare for successful careers in various fields.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Campus view"
                          width={600}
                          height={400}
                          className="rounded-xl object-cover w-full"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                            <Users className="h-8 w-8 text-primary mb-2" />
                            <h3 className="font-bold">1000+</h3>
                            <p className="text-sm text-muted-foreground text-center">Students</p>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                            <BookOpen className="h-8 w-8 text-primary mb-2" />
                            <h3 className="font-bold">20+</h3>
                            <p className="text-sm text-muted-foreground text-center">Programs</p>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                            <Award className="h-8 w-8 text-primary mb-2" />
                            <h3 className="font-bold">50+</h3>
                            <p className="text-sm text-muted-foreground text-center">Faculty Members</p>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                            <GraduationCap className="h-8 w-8 text-primary mb-2" />
                            <h3 className="font-bold">5000+</h3>
                            <p className="text-sm text-muted-foreground text-center">Alumni</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <History className="h-10 w-10 text-primary" />
                        <h2 className="text-2xl font-bold">Our History</h2>
                      </div>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Founded in 1995, the Charotar Institute of Languages, Arts and Social Studies began as a small
                          department within Charotar University with just three programs and a handful of dedicated
                          faculty members. Over the years, it has grown into a full-fledged institute offering a
                          comprehensive range of programs in humanities.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                          <div className="space-y-2 border-l-2 border-primary pl-4">
                            <h3 className="font-bold">1995</h3>
                            <p className="text-sm text-muted-foreground">
                              Establishment of the Department of Humanities with programs in English, Sociology, and
                              Psychology.
                            </p>
                          </div>
                          <div className="space-y-2 border-l-2 border-primary pl-4">
                            <h3 className="font-bold">2005</h3>
                            <p className="text-sm text-muted-foreground">
                              Expansion into a School of Humanities with the addition of Fine Arts, Philosophy, and
                              Foreign Languages.
                            </p>
                          </div>
                          <div className="space-y-2 border-l-2 border-primary pl-4">
                            <h3 className="font-bold">2010</h3>
                            <p className="text-sm text-muted-foreground">
                              Recognition as an autonomous institute with the ability to design its own curriculum and
                              assessment methods.
                            </p>
                          </div>
                          <div className="space-y-2 border-l-2 border-primary pl-4">
                            <h3 className="font-bold">2015</h3>
                            <p className="text-sm text-muted-foreground">
                              Establishment as the Charotar Institute of Languages, Arts and Social Studies (CILASS)
                              with full academic and administrative autonomy.
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Today, CILASS stands as a testament to the vision of its founders and the dedication of its
                          faculty, staff, and students. The institute continues to evolve, embracing new technologies
                          and pedagogical approaches while remaining true to its core values of academic excellence and
                          social responsibility.
                        </p>
                        <Image
                          src="/placeholder.svg?height=300&width=800"
                          alt="Historical timeline"
                          width={800}
                          height={300}
                          className="rounded-xl object-cover w-full mt-4"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mission" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Target className="h-10 w-10 text-primary" />
                          <h2 className="text-2xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-muted-foreground">
                          The mission of the Charotar Institute of Languages, Arts and Social Studies is to:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              1
                            </span>
                            <span>
                              Provide quality education in humanities that prepares students to address complex social
                              challenges.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              2
                            </span>
                            <span>Foster critical thinking, creativity, and ethical reasoning among students.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              3
                            </span>
                            <span>
                              Promote research and scholarship that contributes to the advancement of knowledge in
                              humanities.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              4
                            </span>
                            <span>
                              Engage with the community through cultural activities, social service, and knowledge
                              dissemination.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              5
                            </span>
                            <span>
                              Preserve and promote cultural heritage while embracing diversity and inclusivity.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <GraduationCap className="h-10 w-10 text-primary" />
                          <h2 className="text-2xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-muted-foreground">
                          To be a leading institute for humanities education, recognized nationally and internationally
                          for:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              •
                            </span>
                            <span>Academic excellence and innovative teaching methodologies.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              •
                            </span>
                            <span>Cutting-edge research that addresses contemporary social issues.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              •
                            </span>
                            <span>Cultural engagement and community outreach programs.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              •
                            </span>
                            <span>
                              Producing graduates who are critical thinkers, effective communicators, and responsible
                              citizens.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="rounded-full bg-primary h-5 w-5 flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                              •
                            </span>
                            <span>
                              Fostering a global perspective while remaining rooted in local cultural contexts.
                            </span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-muted rounded-lg">
                          <h3 className="font-bold mb-2">Our Core Values</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                              <span>Academic Integrity</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                              <span>Cultural Diversity</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                              <span>Critical Inquiry</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                              <span>Social Responsibility</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                              <span>Lifelong Learning</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary"></span>
                              <span>Ethical Conduct</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="leadership" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">Institute Leadership</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex gap-4">
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Director"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-bold text-lg">Prof. Anil Kumar Sharma, PhD</h3>
                            <p className="text-sm text-muted-foreground">Director</p>
                            <p className="text-sm text-muted-foreground">
                              Professor of Philosophy with over 25 years of experience in academia. Specializes in
                              Ethics and Indian Philosophy.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Deputy Director"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-bold text-lg">Dr. Meera Patel, PhD</h3>
                            <p className="text-sm text-muted-foreground">Deputy Director</p>
                            <p className="text-sm text-muted-foreground">
                              Associate Professor of Sociology with expertise in Gender Studies and Social Movements.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mt-6">Department Heads</h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold">Department of Languages</h4>
                          <p className="text-sm text-muted-foreground">Dr. Rajiv Singh, PhD</p>
                          <p className="text-xs text-muted-foreground">Professor of Linguistics</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold">Department of Fine Arts</h4>
                          <p className="text-sm text-muted-foreground">Prof. Anita Desai, MFA</p>
                          <p className="text-xs text-muted-foreground">Professor of Contemporary Art</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold">Department of Performing Arts</h4>
                          <p className="text-sm text-muted-foreground">Dr. Sanjay Mehta, PhD</p>
                          <p className="text-xs text-muted-foreground">Professor of Theater Studies</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold">Department of Psychology</h4>
                          <p className="text-sm text-muted-foreground">Dr. Priya Sharma, PhD</p>
                          <p className="text-xs text-muted-foreground">Professor of Clinical Psychology</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold">Department of Sociology</h4>
                          <p className="text-sm text-muted-foreground">Dr. Vikram Patel, PhD</p>
                          <p className="text-xs text-muted-foreground">Professor of Urban Sociology</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-bold">Department of Philosophy</h4>
                          <p className="text-sm text-muted-foreground">Dr. Neha Gupta, PhD</p>
                          <p className="text-xs text-muted-foreground">Professor of Eastern Philosophy</p>
                        </div>
                      </div>
                      <div className="flex justify-center mt-4">
                        <Button>View Full Organization Chart</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Charotar Institute of Languages, Arts and Social Studies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
