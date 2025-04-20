import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Calendar, FileText, CreditCard, ExternalLink } from "lucide-react"

export default function StudentCornerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Corner</h1>
            <p className="text-lg text-gray-700">
              Access important resources, information, and services for your academic journey at CILASS.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
              <TabsTrigger value="e-governance">E-Governance</TabsTrigger>
              <TabsTrigger value="pay-fees">Pay Fees</TabsTrigger>
            </TabsList>

            {/* Academic Calendar Tab */}
            <TabsContent value="calendar" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Academic Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      The academic calendar provides important dates for the academic year, including class schedules,
                      examination dates, holidays, and other important events.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Odd Semester (July - December)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">
                              <span>Semester Begins</span>
                              <span className="font-medium">July 15, 2025</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Mid-Semester Examination</span>
                              <span className="font-medium">September 10-15, 2025</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Diwali Vacation</span>
                              <span className="font-medium">October 20-30, 2025</span>
                            </li>
                            <li className="flex justify-between">
                              <span>End-Semester Examination</span>
                              <span className="font-medium">November 25-December 10, 2025</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Result Declaration</span>
                              <span className="font-medium">December 25, 2025</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Even Semester (January - June)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">
                              <span>Semester Begins</span>
                              <span className="font-medium">January 2, 2026</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Mid-Semester Examination</span>
                              <span className="font-medium">February 25-March 2, 2026</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Holi Vacation</span>
                              <span className="font-medium">March 20-25, 2026</span>
                            </li>
                            <li className="flex justify-between">
                              <span>End-Semester Examination</span>
                              <span className="font-medium">May 15-30, 2026</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Result Declaration</span>
                              <span className="font-medium">June 15, 2026</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-center">
                      <Button className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download Complete Calendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Syllabus Tab */}
            <TabsContent value="syllabus" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Syllabus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Access the syllabus for all programs offered by the Faculty of Humanities. The syllabus provides
                      detailed information about course content, learning outcomes, assessment methods, and recommended
                      readings.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Ph.D. Program</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">
                            Syllabus for Ph.D. Program in English, Communication and Library Science.
                          </p>
                          <Button asChild variant="outline" className="w-full flex items-center gap-2">
                            <Link href="#">
                              <Download className="h-4 w-4" />
                              Download Syllabus
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">BA in English</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">
                            Syllabus for Bachelor of Arts (BA) in English/English with honors.
                          </p>
                          <Button asChild variant="outline" className="w-full flex items-center gap-2">
                            <Link href="#">
                              <Download className="h-4 w-4" />
                              Download Syllabus
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">BLIS</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">
                            Syllabus for Bachelor of Library and Information Science (BLIS).
                          </p>
                          <Button asChild variant="outline" className="w-full flex items-center gap-2">
                            <Link href="#">
                              <Download className="h-4 w-4" />
                              Download Syllabus
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Transcripts Tab */}
            <TabsContent value="transcripts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Transcripts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Learn how to request official transcripts for your academic records at CILASS. Transcripts are
                      official copies of your academic record and include all courses taken, grades received, and
                      degrees awarded.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Transcript Request Process</h3>
                      <ol className="space-y-4 text-gray-700">
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium">Submit Application</h4>
                            <p className="text-sm">
                              Fill out the transcript request form available on the e-governance portal or at the
                              administrative office.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium">Pay the Fee</h4>
                            <p className="text-sm">
                              Pay the transcript fee as per the current rates. The fee varies based on the number of
                              copies requested and the mode of delivery.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium">Verification</h4>
                            <p className="text-sm">
                              The administrative office will verify your records and prepare the transcripts.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            4
                          </div>
                          <div>
                            <h4 className="font-medium">Collection/Delivery</h4>
                            <p className="text-sm">
                              Collect the transcripts in person or opt for delivery by post/courier as per your request.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="flex justify-center">
                      <Button asChild className="flex items-center gap-2">
                        <Link href="#">Request Transcript Online</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* E-Governance Tab */}
            <TabsContent value="e-governance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    E-Governance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      The E-Governance portal provides online access to various administrative and academic services for
                      students, faculty, and staff. It streamlines processes and enhances efficiency in service
                      delivery.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Student Portal</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li>View academic records</li>
                            <li>Check attendance</li>
                            <li>Access course materials</li>
                            <li>View examination results</li>
                            <li>Submit assignments</li>
                          </ul>
                          <Button asChild className="w-full mt-4">
                            <Link href="#">Login to Student Portal</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Online Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li>Fee payment</li>
                            <li>Transcript requests</li>
                            <li>Certificate requests</li>
                            <li>Grievance submission</li>
                            <li>Feedback submission</li>
                          </ul>
                          <Button asChild className="w-full mt-4">
                            <Link href="#">Access Online Services</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Digital Library</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li>Access e-books</li>
                            <li>Access journals</li>
                            <li>Access research papers</li>
                            <li>Online databases</li>
                            <li>Repository of past projects</li>
                          </ul>
                          <Button asChild className="w-full mt-4">
                            <Link href="#">Access Digital Library</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">First-time Users</h3>
                      <p className="text-gray-700 mb-4">
                        If you are a first-time user, follow these steps to access the E-Governance portal:
                      </p>
                      <ol className="space-y-2 text-gray-700">
                        <li>1. Visit the portal login page</li>
                        <li>2. Click on "New User Registration"</li>
                        <li>3. Enter your enrollment number and date of birth</li>
                        <li>4. Create a username and password</li>
                        <li>5. Complete the registration process</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pay Fees Tab */}
            <TabsContent value="pay-fees" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Pay Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Pay your academic fees online through our secure payment gateway. The online fee payment system
                      provides a convenient and secure way to pay your fees from anywhere, anytime.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Fee Payment Process</h3>
                      <ol className="space-y-4 text-gray-700">
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium">Login to the Portal</h4>
                            <p className="text-sm">Login to the student portal using your credentials.</p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium">Navigate to Fee Payment</h4>
                            <p className="text-sm">Go to the "Fee Payment" section in the portal.</p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium">Select Fee Type</h4>
                            <p className="text-sm">
                              Select the type of fee you want to pay (e.g., tuition fee, examination fee, etc.).
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            4
                          </div>
                          <div>
                            <h4 className="font-medium">Make Payment</h4>
                            <p className="text-sm">
                              Choose your preferred payment method (credit card, debit card, net banking) and complete
                              the payment.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            5
                          </div>
                          <div>
                            <h4 className="font-medium">Download Receipt</h4>
                            <p className="text-sm">
                              After successful payment, download and save the payment receipt for your records.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Fee Structure</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">
                              <span>BA in English (per year)</span>
                              <span className="font-medium">₹ 40,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>BLIS (per year)</span>
                              <span className="font-medium">₹ 30,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Ph.D. Program (per semester)</span>
                              <span className="font-medium">₹ 25,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Examination Fee</span>
                              <span className="font-medium">₹ 2,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Late Fee</span>
                              <span className="font-medium">₹ 500 per week</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Payment Methods</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-700">
                            <li>Credit Card (Visa, MasterCard, RuPay)</li>
                            <li>Debit Card</li>
                            <li>Net Banking</li>
                            <li>UPI (Google Pay, PhonePe, Paytm)</li>
                            <li>Demand Draft (in person at the accounts office)</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-center">
                      <Button asChild className="flex items-center gap-2">
                        <Link href="#">Pay Fees Online</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloads</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Access and download important forms, templates, and documents for your academic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold">Admission Forms</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">Application forms for admission to various programs.</p>
                <Button asChild variant="outline" className="w-full flex items-center gap-2">
                  <Link href="#">
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold">Scholarship Forms</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Application forms for various scholarships and financial aid.
                </p>
                <Button asChild variant="outline" className="w-full flex items-center gap-2">
                  <Link href="#">
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold">Leave Application</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">Forms for applying for leave of absence from classes.</p>
                <Button asChild variant="outline" className="w-full flex items-center gap-2">
                  <Link href="#">
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold">Assignment Templates</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Standard templates for submitting assignments and projects.
                </p>
                <Button asChild variant="outline" className="w-full flex items-center gap-2">
                  <Link href="#">
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Support</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are committed to providing comprehensive support to our students throughout their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Mentoring by faculty members</li>
                  <li>Remedial classes for slow learners</li>
                  <li>Academic counseling</li>
                  <li>Library resources and assistance</li>
                  <li>Study materials and resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Career counseling</li>
                  <li>Resume building workshops</li>
                  <li>Interview preparation</li>
                  <li>Internship opportunities</li>
                  <li>Campus placement assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Soft skills training</li>
                  <li>Personality development workshops</li>
                  <li>Communication skills enhancement</li>
                  <li>Leadership development programs</li>
                  <li>Cultural and extracurricular activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you have any questions or need assistance, our student support team is here to help you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="#">FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
