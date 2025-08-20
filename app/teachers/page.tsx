"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Star, Mail, Phone, MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeachersPage() {
  const whatsappNumber = "919455862486"

  const openWhatsApp = (type: string) => {
    let message = ""
    switch (type) {
      case "job":
        message =
          "Hello! I'm interested in teaching opportunities at BRD Public School. I would like to submit my resume and learn about current job openings. Please guide me through the application process."
        break
      case "resume":
        message =
          "Hello! I would like to submit my resume for teaching positions at BRD Public School. Please let me know the requirements and next steps in the hiring process."
        break
      default:
        message = "Hello! I'm interested in learning more about BRD Public School."
    }

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank")
    }
  }

  const teachers = [
    {
      name: "POOJA KUMARI",
      subject: "HINDI & SANSKRIT",
      designation: "PRT & TGT",
      experience: "1+ years",
      specialization: "Hindi",
      achievements: [""],
      email: "poojakumari@brdschool.com",
      photo: "/teacher-photos/teacher-1.jpg",
    },
    {
      name: "MONIKA DAS",
      subject: "MUSIC AND DANCE",
      designation: "DANCE",
      experience: "17+ years",
      specialization: "DANCE",
      achievements: [""],
      email: "MONIKA.DAS@brdschool.COM",
      photo: "/teacher-photos/teacher-2.jpeg",
    },
    {
      name: "ASHA KEDIA",
      subject: "MOTHER TEACHER",
      designation: "PRT",
      experience: "2+ year",
      specialization: "MOTHER TEACHER ",
      achievements: [""],
      email: "ASHA.KEDIA@brdschool.com",
      photo: "/teacher-photos/teacher-3.jpeg",
    },
    {
      name: "SANGEETA BHATTACHARYA",
      subject: "MOTHER TEACHER",
      designation: "PRT",
      experience: "1+ years",
      specialization: "MUSIC (VOCAL)",
      achievements: [""],
      email: "sangeeta.bhattacharya@brdschool.com",
      photo: "/teacher-photos/teacher-4.jpeg",
    },
    {
      name: "DEEPA SRIVASTAVA",
      subject: "MOTHER TEACHER",
      designation: "PRT",
      experience: "15+ years",
      specialization: "POLITICAL SCIENCE (HONS)",
      achievements: [""],
      email: "Deepa.srivastava@brdschool.com",
      photo: "/teacher-photos/teacher-5.jpeg",
    },
    {
      name: "KUMARI ANJALI",
      subject: "ENGLISH",
      designation: "PRT & TGT",
      experience: "5+ years",
      specialization: "ENGLISH",
      achievements: [""],
      email: "kumari.anjali@brdschool.com",
      photo: "/teacher-photos/teacher-6.jpeg",
    },
    {
      name: "NIKITA SINHA",
      subject: "SCIENCE",
      designation: "PRT & TGT",
      experience: "2+ years",
      specialization: "BIOLOGY",
      achievements: [""],
      email: "nikita.sinha@brdschool.com",
      photo: "/teacher-photos/teacher-7.jpg",
    },
    {
      name: "SHREYA KUMARI SHARMA",
      subject: "Social Studies ",
      designation: "PRT & TGT",
      experience: "2+ years",
      specialization: "ECONOMICS",
      achievements: [""],
      email: "shreya.kumari@brdschool.edu.in",
      photo: "/teacher-photos/teacher-8.jpeg",
    },
    {
      name: "GIRJA PRAJAPATI",
      subject: "MOTHER TEACHER",
      designation: "PRT",
      experience: "10+ years",
      specialization: "MOTHER TEACHER",
      achievements: [""],
      email: "girja.prajapati@brdschool.com",
      photo: "/teacher-photos/teacher-9.jpeg",
    },
    {
      name: "SWATI SRIVASTAVA",
      subject: "SOCIAL & EVS",
      designation: "PRT & TGT",
      experience: "18+ years",
      specialization: "SOCIAL & EVS",
      achievements: [""],
      email: "Swati.srivastava@brdschool.com",
      photo: "/teacher-photos/teacher-10.jpeg",
    },
    {
      name: "JITENDRA KUMAR ",
      subject: "MATHS & HINDI",
      designation: "PRT & TGT",
      experience: "5+ years",
      specialization: "Academic Planning, Student Assessment",
      achievements: [""],
      email: "jitendra.kumar@brdschool.com",
      photo: "/teacher-photos/teacher-11.jpeg",
    },
    {
      name: "KHUSHBOO VERMA ",
      subject: "MOTHER TEACHER",
      designation: "PRT",
      experience: "4+ years",
      specialization: "Curriculum Coordination",
      achievements: [""],
      email: "khushboo.verma@brdschool.com",
      photo: "/teacher-photos/teacher-12.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-800 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Expert Faculty Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Meet Our Passionate Educators</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our handpicked team of experienced educators brings together expertise, innovation, and dedication to
              nurture every student's potential in our inaugural year.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">20+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Avg Experience</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Qualified Educators</div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Teaching Excellence</h2>
            <p className="text-xl text-gray-600">Meet the educators who will shape your child's future</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <Image
                    src={teacher.photo || "/placeholder.svg"}
                    alt={teacher.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 shadow-lg object-cover"
                  />
                  <CardTitle className="text-xl text-gray-800">{teacher.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium text-lg">{teacher.subject}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">designation:</p>
                    <p className="font-medium">{teacher.designation}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {teacher.experience}
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {teacher.specialization.split(",")[0]}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Specialization:</p>
                    <p className="text-sm">{teacher.specialization}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Achievements:</p>
                    <ul className="text-sm space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{teacher.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>{teacher.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600">The principles that guide our educational approach</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Student-Centered Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every lesson is designed around student needs, interests, and learning styles to maximize engagement
                  and understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Collaborative Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our teachers work together across subjects to create integrated learning experiences that connect
                  knowledge areas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Excellence & Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously update our methods with the latest educational research and technology to provide
                  cutting-edge learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Teaching Excellence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Are you a passionate educator looking to be part of something extraordinary? We're always looking for
            exceptional teachers to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => openWhatsApp("job")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-green hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
              onClick={() => openWhatsApp("resume")}
            >
              <FileText className="w-5 h-5 mr-2" />
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
