"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Award, Calendar, MapPin, Star, Sparkles, Target, Heart, MessageCircle } from "lucide-react"

export default function HomePage() {
  const whatsappNumber = "919455862486"

  const openWhatsApp = (type: string) => {
    let message = ""
    switch (type) {
      case "admission":
        message =
          "Hello! I'm interested in admission to B R D Public School. Please provide me with detailed information about the admission process, fees, and available seats for the 2025-26 academic year."
        break
      case "visit":
        message =
          "Hello! I would like to schedule a campus visit to B R D Public School. Please let me know the available dates and times for a guided tour of your facilities."
        break
      case "prospectus":
        message =
          "Hello! I would like to download the B R D Public School prospectus. Please share the detailed brochure with admission information, fee structure, and curriculum details."
        break
      default:
        message = "Hello! I'm interested in learning more about B R D Public School."
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
      <section className="relative h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        </div>

        <Image
          src="/school-building-main.jpeg"
          alt="B R D Public School - Modern Campus Building"
          fill
          className="object-cover mix-blend-overlay opacity-30"
        />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Newly Established 2025
              </Badge>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
                B R D Public School
              </span>
              <span className="block text-4xl md:text-5xl text-white/90">Kandawa</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
              Where innovation meets tradition. Join India's newest premier educational institution, designed for the
              leaders of tomorrow with world-class facilities and passionate educators.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 shadow-xl"
                onClick={() => openWhatsApp("admission")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
                onClick={() => openWhatsApp("visit")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Visit
              </Button>
            </div>

            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">2025</div>
                <div className="text-sm opacity-80">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Students interaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New School Announcement */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full mb-8">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Grand Opening - Academic Year 2025-26</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">A Fresh Start to Excellence</h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're thrilled to announce the opening of B R D Public School - a state-of-the-art educational institution
              built from the ground up with the latest in educational technology, innovative teaching methodologies, and
              a commitment to nurturing every child's potential.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Brand New Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cutting-edge curriculum designed with the latest educational research and global best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Handpicked Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Carefully selected educators from top institutions, passionate about innovative teaching methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Modern Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Purpose-built campus with smart classrooms, advanced labs, and recreational facilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Start Your Journey With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Being a new school gives us the unique advantage of implementing the latest in educational innovation
              without the constraints of outdated systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Target className="w-6 h-6 text-blue-600" />,
                  title: "Personalized Attention",
                  description: "Small class sizes ensure every student receives individual attention and support.",
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-green-600" />,
                  title: "Latest Technology Integration",
                  description: "AI-powered learning tools, smart boards, and digital resources in every classroom.",
                },
                {
                  icon: <Heart className="w-6 h-6 text-red-600" />,
                  title: "Holistic Development",
                  description: "Focus on academics, sports, arts, and character building for well-rounded growth.",
                },
                {
                  icon: <Award className="w-6 h-6 text-purple-600" />,
                  title: "Global Standards",
                  description: "International curriculum standards adapted for Indian educational requirements.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <Image
                src="/school-building-main.jpeg"
                alt="B R D Public School Building"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">2025</div>
                <div className="text-sm">Newly Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Open Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">🎉 Admissions Now Open for 2025-26!</h2>
            <p className="text-xl mb-8">
              Be among the first students to experience our revolutionary approach to education. Limited seats available
              for our inaugural batch.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                onClick={() => openWhatsApp("admission")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Apply Now - Early Bird Discount
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
                onClick={() => openWhatsApp("prospectus")}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Download Prospectus
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">Early Bird</div>
                <div className="text-sm">20% off on admission fees for first 100 students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">No Donation</div>
                <div className="text-sm">Transparent fee structure with no hidden charges</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">Scholarships</div>
                <div className="text-sm">Merit-based scholarships for deserving students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our School</h2>
            <p className="text-xl text-gray-600">Discover what makes B R D Public School special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Our Faculty",
                description: "Meet our passionate educators",
                link: "/teachers",
                icon: <Users className="w-8 h-8" />,
                color: "blue",
              },
              {
                title: "Campus Tour",
                description: "Explore our modern facilities",
                link: "/campus",
                icon: <MapPin className="w-8 h-8" />,
                color: "green",
              },
              {
                title: "Admission Process",
                description: "Join our school community",
                link: "/admissions",
                icon: <BookOpen className="w-8 h-8" />,
                color: "purple",
              },
              {
                title: "School Events",
                description: "Upcoming activities & programs",
                link: "/events",
                icon: <Calendar className="w-8 h-8" />,
                color: "orange",
              },
            ].map((item, index) => (
              <Link key={index} href={item.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color}-200 transition-colors`}
                    >
                      <div className={`text-${item.color}-600`}>{item.icon}</div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
