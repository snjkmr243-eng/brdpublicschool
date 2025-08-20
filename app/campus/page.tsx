"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building,
  Users,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  FileText,
  Briefcase,
} from "lucide-react"

export default function CampusPage() {
  const whatsappNumber = "919455862486"

  const openWhatsApp = (type: string) => {
    let message = ""
    switch (type) {
      case "admission":
        message =
          "Hello! I'm interested in admission to BRD Public School. Please provide me with detailed information about the admission process, fees, and available seats."
        break
      case "job":
        message =
          "Hello! I'm interested in teaching opportunities at BRD Public School. I would like to submit my resume and learn about current job openings."
        break
      case "visit":
        message =
          "Hello! I would like to schedule a campus visit to BRD Public School. Please let me know the available dates and times for a guided tour."
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">
              <Building className="w-4 h-4 mr-2" />
              Campus Information
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Modern Campus</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our state-of-the-art facilities designed to provide the best learning environment for our students
              at BRD Public School, Kandawa.
            </p>

            {/* WhatsApp Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                onClick={() => openWhatsApp("admission")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Apply for Admission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 bg-transparent"
                onClick={() => openWhatsApp("visit")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Image
              src="/school-building-main.jpeg"
              alt="BRD Public School Campus"
              width={1200}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">A. General Information</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">School Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SL.NO</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">INFORMATION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1</td>
                        <td className="border border-gray-300 px-4 py-3">NAME OF THE SCHOOL</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">B R D PUBLIC SCHOOL</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">2</td>
                        <td className="border border-gray-300 px-4 py-3">AFFILIATION NO. (IF APPLICABLE)</td>
                        <td className="border border-gray-300 px-4 py-3">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">3</td>
                        <td className="border border-gray-300 px-4 py-3">SCHOOL CODE (IF APPLICABLE)</td>
                        <td className="border border-gray-300 px-4 py-3">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">4</td>
                        <td className="border border-gray-300 px-4 py-3">COMPLETE ADDRESS WITH PIN CODE</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          Kandawa, Ghamahapur (Near Film City), Varanasi-221106
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">5</td>
                        <td className="border border-gray-300 px-4 py-3">PRINCIPAL NAME & QUALIFICATION</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Mr. AJIT KUMAR VERMA MA, B.Ed</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">6</td>
                        <td className="border border-gray-300 px-4 py-3">SCHOOL EMAIL ID</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">brdpublicschool0@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">7</td>
                        <td className="border border-gray-300 px-4 py-3">CONTACT DETAILS (MOBILE AND LANDLINE)</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">+91-9455862486</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff and Teaching */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">D. Staff and Teaching</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Faculty Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SL.NO</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">INFORMATION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1</td>
                        <td className="border border-gray-300 px-4 py-3">Principal</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          Mr. AJIT KUMAR VERMA M.A, B.Ed | Experience: 12+ years
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 align-top">2</td>
                        <td className="border border-gray-300 px-4 py-3 align-top">Total No. of Teachers</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>
                              <strong>PGT:</strong> 13
                            </div>
                            <div>
                              <strong>TGT:</strong> 8
                            </div>
                            <div>
                              <strong>PRT:</strong> 7
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">3</td>
                        <td className="border border-gray-300 px-4 py-3">Teacher/Section Ratio</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">1:05</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">4</td>
                        <td className="border border-gray-300 px-4 py-3">DETAILS OF SPECIAL EDUCATOR</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">E. School Infrastructure</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Campus Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">SL.NO</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">INFORMATION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1</td>
                        <td className="border border-gray-300 px-4 py-3">
                          TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTS.)
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">11537</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">2</td>
                        <td className="border border-gray-300 px-4 py-3">
                          NUMBERS AND SIZE OF CLASSROOMS (IN SQUARE MTS.)
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">21 ROOMS 525 Sq mts</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">3</td>
                        <td className="border border-gray-300 px-4 py-3">
                          NUMBER OF LARGE LABS INCLUDING COMPUTER LABS(IN SQUARE MTS.)
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>
                              <strong>Labs:</strong> 2.88 X 2.41 Sq mtr
                            </div>
                            <div>
                              <strong>Computer Lab:</strong> 3.99 x 2.13 sq mts
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">4</td>
                        <td className="border border-gray-300 px-4 py-3">INTERNET FACILITIES (Y/N)</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium text-green-600">YES</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">5</td>
                        <td className="border border-gray-300 px-4 py-3">NUMBERS OF GIRL'S TOILETS</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">6</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">6</td>
                        <td className="border border-gray-300 px-4 py-3">NUMBERS OF BOY'S TOILETS</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">6</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">7</td>
                        <td className="border border-gray-300 px-4 py-3">YOUTUBE VIDEO LINKS OF SCHOOL INSPECTION</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Links</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Campus Highlights</h2>
            <p className="text-xl text-gray-600">Key features of our modern educational facility</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building className="w-8 h-8 text-blue-600" />,
                title: "11,537 Sq Mts",
                description: "Total campus area providing ample space for learning and recreation",
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-green-600" />,
                title: "21 Classrooms",
                description: "Spacious classrooms with 525 sq mts total area for optimal learning",
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "28 Teachers",
                description: "Qualified faculty including PGT, TGT, and PRT teachers",
              },
              {
                icon: <Building className="w-8 h-8 text-orange-600" />,
                title: "Modern Labs",
                description: "Well-equipped science and computer laboratories",
              },
            ].map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Connect with Us on WhatsApp</h2>
            <p className="text-xl">Get instant responses to your queries through WhatsApp</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => openWhatsApp("admission")}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Admission Enquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get detailed information about admission process, fees, and available seats</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat for Admission
                </Button>
              </CardContent>
            </Card>

            <Card
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => openWhatsApp("job")}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Submit your resume and explore teaching opportunities at our school</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Send Resume
                </Button>
              </CardContent>
            </Card>

            <Card
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => openWhatsApp("visit")}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Campus Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Schedule a guided tour of our modern campus and facilities</p>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Book Visit
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Phone className="w-6 h-6" />
                <span className="text-2xl font-bold">+91 94558 62486</span>
              </div>
              <p className="text-sm opacity-90">Available Mon-Sat: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Visit Our Campus</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">
                    <strong>BRD Public School</strong>
                    <br />
                    Kandawa, Ghamahapur
                    <br />
                    (Near Film City)
                    <br />
                    Varanasi - 221106
                    <br />
                    Uttar Pradesh, India
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600 flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>+91-9455862486</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <span>+91 9455862486 (WhatsApp)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-red-600" />
                      <span>brdpublicschool0@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
