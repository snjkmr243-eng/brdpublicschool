"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Heart, Star, Users, BookOpen, Award, Lightbulb, Globe, MessageCircle } from "lucide-react"

export default function AboutPage() {
  const whatsappNumber = "919455862486"

  const openWhatsApp = (type: string) => {
    let message = ""
    switch (type) {
      case "visit":
        message =
          "Hello! I would like to schedule a campus visit to BRD Public School. Please let me know the available dates and times for a guided tour of your facilities."
        break
      case "brochure":
        message =
          "Hello! I would like to download the BRD Public School brochure with detailed information about your programs, facilities, and admission process."
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Established 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">About BRD Public School</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A visionary educational institution born in 2025, designed to redefine learning for the digital age while
              preserving timeless values of character and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  BRD Public School was founded in 2025 in Kandawa with a revolutionary vision: to create an educational
                  environment that seamlessly blends cutting-edge technology with time-tested pedagogical principles.
                  Our founders, a team of experienced educators and visionaries, recognized the need for a school that
                  could prepare students for the challenges of tomorrow while nurturing their individual talents today.
                </p>
                <p>
                  Starting fresh in 2025 has given us the unique opportunity to build our institution from the ground
                  up, incorporating the latest research in education, child psychology, and learning sciences. Every
                  aspect of our school - from our curriculum design to our physical infrastructure - has been carefully
                  planned to create an optimal learning environment.
                </p>
                <p>
                  We believe that being a new school is our greatest strength. It allows us to be agile, innovative, and
                  responsive to the evolving needs of modern education without being constrained by outdated systems or
                  practices.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/school-building-main.jpeg"
                alt="BRD Public School Campus Building"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class education that empowers students to become critical thinkers, compassionate
                  leaders, and global citizens who can thrive in an ever-changing world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as a pioneering educational institution that sets new standards for innovative
                  teaching, holistic development, and student success in the 21st century.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>• Excellence in all endeavors</li>
                  <li>• Integrity and honesty</li>
                  <li>• Respect for diversity</li>
                  <li>• Innovation and creativity</li>
                  <li>• Compassion and empathy</li>
                  <li>• Lifelong learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">The advantages of starting fresh in 2025</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: "Future-Ready Curriculum",
                description: "Designed with input from industry experts and educational researchers",
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: "Handpicked Faculty",
                description: "Carefully selected educators passionate about innovative teaching",
              },
              {
                icon: <Globe className="w-8 h-8 text-purple-600" />,
                title: "Global Perspective",
                description: "International standards with local cultural sensitivity",
              },
              {
                icon: <Award className="w-8 h-8 text-orange-600" />,
                title: "Personalized Learning",
                description: "Small class sizes ensuring individual attention for every student",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">School Leadership</h2>
            <p className="text-xl text-gray-600">Meet our dedicated principal leading BRD Public School</p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center hover:shadow-xl transition-shadow max-w-md">
              <CardHeader>
                <Image
                  src="/principal-ajit-kumar-verma.jpeg"
                  alt="Mr. Ajit Kumar Verma - Principal"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4 shadow-lg object-cover"
                />
                <CardTitle className="text-2xl">Mr. AJIT KUMAR VERMA</CardTitle>
                <CardDescription className="text-blue-600 font-medium text-lg">Principal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">M.A (Sociology), B.Ed</p>
                <Badge variant="secondary" className="mb-4">
                  25+ years experience
                </Badge>
                <p className="text-gray-600 leading-relaxed">
                  An experienced educator and administrator dedicated to providing quality education and fostering a
                  nurturing learning environment for all students at BRD Public School.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of something extraordinary. Help us write the first chapter of BRD Public School's legacy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => openWhatsApp("visit")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Schedule a Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
              onClick={() => openWhatsApp("brochure")}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
