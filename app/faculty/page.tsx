import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Bhaskar Pandya",
    position: "Professor of English",
    titles: [
      "Head, Department of Humanities and Social Sciences",
      "Dean, Faculty of Humanities",
    ],
    qualifications: "Ph.D., M.Phil., M.A.",
    specialization:
      "English Studies, communication and Indian Knowledge System",
    email: "dean.foh@charusat.ac.in",
    image: "/images/faculties/1. Bhaskar_Sir.4b8d187e.webp",
  },
  {
    id: 2,
    name: "Dr. Kaushik Trivedi",
    position: "Assistant Professor",
    titles: [],
    qualifications:
      "Ph.D. (ELT), M.Phil. (ELT), M.A. (English), B.Ed. (English & SS)",
    specialization:
      "English Language Teaching, Soft Skills, Personality Development, Professional Writing, Indian Knowledge System",
    email: "kaushiktrivedi.cs@charusat.ac.in",
    image: "/images/faculties/2. Kaushik Rohitkumar Trivedi_2027.JPG",
  },
  {
    id: 3,
    name: "Dr. Robert Parmar",
    position: "Assistant Professor",
    titles: [],
    qualifications:
      "Ph.D. in English, M. Phil in ELT, M.A. in English, M.A. ELT",
    specialization:
      "English Language and Literature, Communication Skills, Cultural Studies, Translation Studies, Philosophy, Value and Ethics, Indian Knowledge System",
    email: "robertparmar.cs@charusat.ac.in",
    image: "/images/faculties/3. Robert Joseph_7029.JPG",
  },
  {
    id: 4,
    name: "Dr. Vijay Makwana",
    position: "Assistant Professor",
    titles: [],
    qualifications: "Ph.D. (E.L.T.) (Gold Medallist), B.Ed. (Advanced)",
    specialization:
      "Applied Linguistics, Language Pedagogy, English for Specific Purposes (ESP), Technology in Language Education, Language and Communication",
    email: "vijaymakwana.cs@charusat.ac.in",
    image: "/images/faculties/4. Vijay Mahendrabhai Makwana_2062.JPG",
  },
  {
    id: 5,
    name: "Dr. Kinjal Bhatia",
    position: "Assistant Professor",
    titles: [],
    qualifications: "M.A. (English), M.Phil. (Literature), Ph.D.",
    specialization:
      "Psychoanalytic Criticism, Translation Studies, Comparative Literature, Feminist and Gender Studies, Evolution of the Short Story in World Literature",
    email: "kinjalbhatia.cs@charusat.ac.in",
    image: "/images/faculties/5. Kinjal Bhatia_2114.JPG",
  },
  {
    id: 6,
    name: "Ms. Jayshree Mehta",
    position: "Assistant Professor",
    titles: [],
    qualifications: "M.A. B.ED. Ph.D. (Pursuing)",
    specialization:
      "English Literature (Novel, Drama and Poetry), Educational and Social Psychology",
    email: "jayshreemehta.cs@charusat.ac.in",
    image: "/images/faculties/6. Jayshree Chirag Mehta_2088.JPG",
  },
  {
    id: 7,
    name: "Ms. Bharati Kaknani",
    position: "Assistant Professor",
    titles: [],
    qualifications:
      "Ph.D. (Pursuing), B.Ed. (English), M.A. (English Literature)",
    specialization:
      "Gender representation in Indian epics, Communication skills and Soft skills.",
    email: "bharatikaknani.cs@charusat.ac.in",
    image: "/images/faculties/7. Bharati Harishkumar_2089.JPG",
  },
  {
    id: 8,
    name: "Ms. Celine Davla",
    position: "Assistant Professor",
    titles: [],
    qualifications: "M.A. in English Literature, B. Ed (Advanced)",
    specialization:
      "Performing Arts, Strategies for developing spoken fluency and expression, Symbolism and narrative techniques in film",
    email: "celinedavla.cs@charusat.ac.in",
    image: "/images/faculties/8. Celine Manu Davla_2090.JPG",
  },
  {
    id: 9,
    name: "Ms. Pranjal Bhatt",
    position: "Assistant Professor",
    titles: [],
    qualifications: "Ph.D. (Pursuing), M.A. English, B.A. English",
    specialization:
      "Gender Studies, Cultural Studies, Graphic Literature, Digital & Environmental Humanities, English Language and Linguistics",
    email: "pranjalbhatt.cs@charusat.ac.in",
    image: "/images/faculties/9. Pranjal paritosh_2094.JPG",
  },
  {
    id: 10,
    name: "Dr. Vikas Raval",
    position: "Assistant Professor",
    titles: [],
    qualifications:
      "M.A (English literature), M.A (English language and linguistics), M.Phil, B.Ed, Ph.D",
    specialization:
      "Contemporary literary theories, Contemporary British literature, Linguistics, English literature, English language Teaching, French, German",
    email: "vikasraval.cs@charusat.ac.in",
    image: "/images/faculties/10. Dr Vikas Raval photo.jfif",
  },
  {
    id: 11,
    name: "Dr. Hirenkumar Patel",
    position: "Assistant Professor",
    titles: [],
    qualifications: "M.A., M.Phil., Phd (English Literature)",
    specialization: "Film Studies, Adaptation from Literature to Cinema",
    email: "hirenpatel.cs@charusat.ac.in",
    image: "/images/faculties/11. Hirenkumar Dineshbhai_2107.JPG",
  },
  {
    id: 12,
    name: "Ms. Priyanka Patel",
    position: "Assistant Professor",
    titles: [],
    qualifications: "Ph.D. (Pursuing), M.A. (English Literature), B.Ed.",
    specialization:
      "Comparative Literary Studies, Cultural Identity and Indian Ethos in Literature, Indianness in Literature",
    email: "priyankapatel.cs@charusat.ac.in",
    image: "/images/faculties/12. Priyanka Patel_2118.JPG",
  },
  {
    id: 13,
    name: "Dr. Pradipsinh Zala",
    position: "Assistant Professor",
    titles: [],
    qualifications: "Ph.D. in English Language Teaching, M.A. ELT",
    specialization:
      "English Language Teaching, English Literature, Multimedia-based Education",
    email: "pradipzala.cs@charusat.ac.in",
    image: "/images/faculties/13. Dr. Pradipsinh B Zala.png",
  },
  {
    id: 14,
    name: "Mr. Maharshi Patel",
    position: "Office Assistant",
    titles: [],
    qualifications: "BCA, MCA",
    specialization: "",
    email: "",
    image: "/images/faculties/14. Maharshi Traunbhai_707514..JPG",
  },
  {
    id: 15,
    name: "Mr. Jeet Patel",
    position: "Office Attendant",
    titles: [],
    qualifications: "10th Pass",
    specialization: "",
    email: "",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function FacultyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faculty & Staff
            </h1>
            <p className="text-lg text-gray-700">
              Meet our distinguished faculty members who are experts in their
              respective fields and dedicated to providing quality education and
              guidance to our students.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.id} className="overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {faculty.position}
                    </p>
                    {faculty.titles.length > 0 && (
                      <div className="mb-3">
                        {faculty.titles.map((title, index) => (
                          <p key={index} className="text-sm text-gray-700">
                            {title}
                          </p>
                        ))}
                      </div>
                    )}
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Qualifications:
                        </p>
                        <p className="text-sm text-gray-600">
                          {faculty.qualifications}
                        </p>
                      </div>
                      {faculty.specialization && (
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            Specialization:
                          </p>
                          <p className="text-sm text-gray-600">
                            {faculty.specialization}
                          </p>
                        </div>
                      )}
                    </div>
                    {faculty.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Mail className="h-4 w-4 text-primary" />
                        <a
                          href={`mailto:${faculty.email}`}
                          className="hover:text-primary"
                        >
                          {faculty.email}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview Section 
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Department Overview
            </h2>
            <p className="text-gray-700 mb-6">
              The Department of Humanities and Social Sciences at CILASS is
              committed to providing quality education in languages, arts, and
              social studies. Our faculty members are experts in their
              respective fields and are dedicated to nurturing well-rounded
              individuals through academic excellence and human values.
            </p>
            <p className="text-gray-700 mb-6">
              The department offers a range of programs at the undergraduate and
              postgraduate levels, as well as research opportunities at the
              doctoral level. Our faculty members are actively engaged in
              research and publication in their areas of specialization.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Department Highlights
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Expert faculty with diverse specializations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Active research and publication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Innovative teaching methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Focus on holistic development of students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Emphasis on Indian knowledge systems and cultural values
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contact the Department
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            For any inquiries related to the department or faculty, please feel
            free to contact us.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700 mb-2">+91-9824269101</p>
              <p className="text-gray-700">Ext. 5184</p>
            </div>
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700 mb-2">
                <a
                  href="mailto:dean.foh@charusat.ac.in"
                  className="hover:text-primary"
                >
                  dean.foh@charusat.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
