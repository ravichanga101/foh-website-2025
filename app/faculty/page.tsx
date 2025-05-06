import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, BookOpen } from "lucide-react";
import { GraduationCap } from "lucide-react";

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
    image: "/images/faculties/new/1. Bhaskar_Sir.4b8d187e.png",
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
    image: "/images/faculties/new/2. Kaushik Rohitkumar Trivedi_2027.png",
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
      <section className="relative bg-gray-100 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 mix-blend-multiply pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Esteemed Faculty & Staff
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Dedicated mentors, researchers, and educators guiding the future
              with expertise and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {facultyMembers.map((faculty) => (
              <Card
                key={faculty.id}
                className="hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center pt-6">
                    <div className="w-32 h-32 relative">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        className="object-cover rounded-full border-4 border-white shadow-md"
                        fill
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {faculty.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {faculty.position}
                  </p>
                  {faculty.titles.length > 0 && (
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      {faculty.titles.map((title, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full"
                        >
                          {title}
                        </span>
                      ))}
                    </div>
                  )}
                  <CardContent className="mt-4 text-sm text-gray-700 w-full flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div>{faculty.qualifications}</div>
                    </div>

                    {faculty.specialization && (
                      <div className="flex items-center justify-center gap-2 text-center">
                        <div>
                          <span className="font-medium">Specialization:</span>{" "}
                          {faculty.specialization}
                        </div>
                      </div>
                    )}

                    {faculty.email && (
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={`mailto:${faculty.email}`}
                          className="text-blue-600 hover:underline text-center"
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
    </>
  );
}
