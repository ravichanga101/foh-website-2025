import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "CILASS Hosts International Conference on Cultural Studies",
    date: "May 15, 2025",
    excerpt:
      "The Faculty of Humanities at CHARUSAT successfully organized a three-day international conference on Cultural Studies, featuring keynote speakers from around the world.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Events",
  },
  {
    id: 2,
    title: "New BA English with Honors Program Launched",
    date: "April 10, 2025",
    excerpt:
      "CILASS is proud to announce the launch of its new 4-year BA English with Honors program, designed to provide students with advanced knowledge and skills in English literature and language.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Academics",
  },
  {
    id: 3,
    title: "Faculty Member Publishes Research Paper in International Journal",
    date: "March 25, 2025",
    excerpt:
      "Dr. Bhaskar Pandya, Dean of the Faculty of Humanities, has published a research paper titled 'Cultural Identity in Contemporary Indian Literature' in the International Journal of Literary Studies.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Research",
  },
  {
    id: 4,
    title: "Students Win National Level Literary Competition",
    date: "February 18, 2025",
    excerpt:
      "A team of students from the BA English program won first prize in the National Level Literary Competition held at Delhi University, showcasing their creative writing and critical thinking skills.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Student Achievements",
  },
  {
    id: 5,
    title: "Workshop on Digital Humanities Conducted",
    date: "January 30, 2025",
    excerpt:
      "CILASS conducted a two-day workshop on Digital Humanities, introducing students and faculty to digital tools and methodologies for humanities research and teaching.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Workshops",
  },
  {
    id: 6,
    title: "MoU Signed with International University",
    date: "January 15, 2025",
    excerpt:
      "CILASS has signed a Memorandum of Understanding with the University of Edinburgh, UK, for academic collaboration, faculty exchange, and joint research projects.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Collaborations",
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Events</h1>
            <p className="text-lg text-gray-700">
              Stay updated with the latest news, events, and announcements from the Faculty of Humanities at CHARUSAT.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Featured News" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> May 15, 2025
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                CILASS Hosts International Conference on Cultural Studies
              </h2>
              <p className="text-gray-700">
                The Faculty of Humanities at CHARUSAT successfully organized a three-day international conference on
                Cultural Studies, featuring keynote speakers from around the world. The conference explored themes of
                cultural identity, globalization, and the role of humanities in addressing contemporary social
                challenges.
              </p>
              <p className="text-gray-700">
                Over 200 participants from 15 countries attended the conference, presenting papers and participating in
                panel discussions on various aspects of cultural studies. The event also featured cultural performances,
                book launches, and networking opportunities for researchers and academics.
              </p>
              <Button asChild className="flex items-center gap-2">
                <Link href="#">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Listing */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest News & Events</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{item.excerpt}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="#">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-8">
              Stay updated with the latest news, events, and announcements from the Faculty of Humanities at CHARUSAT.
              Subscribe to our newsletter to receive regular updates in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold text-primary">15</span>
                    <span className="block text-sm text-gray-600">Jun</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Annual Literary Festival</h3>
                    <p className="text-sm text-gray-500 mb-2">10:00 AM - 5:00 PM | Main Auditorium</p>
                    <p className="text-sm text-gray-700 mb-3">
                      A celebration of literature with book launches, author talks, and creative writing workshops.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold text-primary">22</span>
                    <span className="block text-sm text-gray-600">Jun</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Workshop on Research Methodology</h3>
                    <p className="text-sm text-gray-500 mb-2">9:30 AM - 4:30 PM | Seminar Hall</p>
                    <p className="text-sm text-gray-700 mb-3">
                      A comprehensive workshop on research methodologies for humanities and social sciences.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold text-primary">30</span>
                    <span className="block text-sm text-gray-600">Jun</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Guest Lecture on Indian Philosophy</h3>
                    <p className="text-sm text-gray-500 mb-2">2:00 PM - 4:00 PM | Conference Room</p>
                    <p className="text-sm text-gray-700 mb-3">
                      A guest lecture by Dr. Rajesh Sharma on the relevance of Indian philosophy in contemporary times.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="#">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Gallery</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore photos and videos from our recent events, workshops, and activities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gallery Image"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gallery Image"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gallery Image"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gallery Image"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="#">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
