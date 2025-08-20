"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Camera,
  Heart,
  Star,
  Sparkles,
  MessageCircle,
  Award,
  Ribbon,
} from "lucide-react"

export default function EventsPage() {
  const whatsappNumber = "919455862486"

  const openWhatsApp = (type: string) => {
    let message = ""
    switch (type) {
      case "newsletter":
        message =
          "Hello! I would like to subscribe to BRD Public School's newsletter to stay updated about upcoming events, activities, and important announcements."
        break
      case "calendar":
        message =
          "Hello! I would like to get the complete event calendar for BRD Public School. Please share the schedule of upcoming events and activities."
        break
      default:
        message = "Hello! I'm interested in learning more about BRD Public School events."
    }

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank")
    }
  }

  const inaugurationEvents = [
    {
      image: "/events/inauguration/inauguration-1.jpeg",
      title: "Grand Opening Ceremony",
      description: "The main inauguration ceremony with hundreds of attendees in the school courtyard",
    },
    {
      image: "/events/inauguration/inauguration-2.jpeg",
      title: "Chief Guest Felicitation",
      description: "Honoring distinguished guests with traditional marigold garlands",
    },
    {
      image: "/events/inauguration/inauguration-3.jpeg",
      title: "Ribbon Cutting Ceremony",
      description: "Official ribbon cutting by dignitaries to mark the school's opening",
    },
    {
      image: "/events/inauguration/inauguration-4.jpeg",
      title: "VIP Gathering",
      description: "Distinguished guests and officials at the inauguration ceremony",
    },
    {
      image: "/events/inauguration/inauguration-5.jpeg",
      title: "Official Handshake",
      description: "Ceremonial handshake between school officials and chief guests",
    },
    {
      image: "/events/inauguration/inauguration-6.jpeg",
      title: "Foundation Stone Unveiling",
      description: "Unveiling of the school's foundation stone and inauguration plaque",
    },
    {
      image: "/events/inauguration/inauguration-7.jpeg",
      title: "Sacred Havan Ceremony",
      description: "Traditional puja and havan ceremony for auspicious beginnings",
    },
    {
      image: "/events/inauguration/inauguration-8.jpeg",
      title: "Group Celebration",
      description: "Staff, officials, and community members celebrating together",
    },
  ]

  const sawanevents = [
    {
      image: "/events/sawan/sawan-1.jpeg",
      title: "Traditional Costume Parade",
      description: "Students dressed as Krishna, Radha, and other deities",
    },
    {
      image: "/events/sawan/sawan-2.jpeg",
      title: "Monsoon Joy",
      description: "Children celebrating the rainy season with umbrellas",
    },
    {
      image: "/events/sawan/sawan-3.jpeg",
      title: "Lord Shiva Performance",
      description: "Student performing as Lord Shiva with traditional makeup",
    },
    {
      image: "/events/sawan/sawan-4.jpeg",
      title: "Sawan Decorations",
      description: "Beautiful floral arch with Sawan greetings",
    },
    {
      image: "/events/sawan/sawan-5.jpeg",
      title: "Spiritual Setup",
      description: "Teacher with traditional Shiva lingam arrangement",
    },
    {
      image: "/events/sawan/sawan-6.jpeg",
      title: "Marigold Garlands",
      description: "Students holding traditional flower garlands",
    },
    {
      image: "/events/sawan/sawan-7.jpeg",
      title: "Krishna & Radha",
      description: "Beautiful traditional costumes of divine couple",
    },
    {
      image: "/events/sawan/sawan-8.jpeg",
      title: "Group Celebration",
      description: "Students enjoying under the decorated arch",
    },
    {
      image: "/events/sawan/sawan-9.jpeg",
      title: "Craft Activities",
      description: "Indoor learning activities with natural materials",
    },
    {
      image: "/events/sawan/sawan-10.jpeg",
      title: "Festival Joy",
      description: "Children celebrating together on the school grounds",
    },
  ]

  const upcomingEvents = [
    {
      name: "Annual Sports Day",
      date: "March 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Ground",
      description: "Inter-house competitions, athletics, and team sports",
      type: "Sports",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Science Exhibition",
      date: "April 22, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "School Auditorium",
      description: "Student projects and innovative science experiments",
      type: "Academic",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Cultural Fest - Kaleidoscope",
      date: "December 10-12, 2025",
      time: "All Day Event",
      location: "Entire Campus",
      description: "Dance, music, drama, and art competitions",
      type: "Cultural",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Independence Day Celebration",
      date: "August 15, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "School Assembly Ground",
      description: "Flag hoisting, patriotic performances, and cultural programs",
      type: "National",
      color: "bg-orange-100 text-orange-800",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              School Events & Celebrations
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Celebrating Learning & Culture</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At BRD Public School, we believe in celebrating every moment of learning through vibrant festivals,
              cultural events, and educational activities that enrich our students' lives.
            </p>
          </div>
        </div>
      </section>

      {/* Inauguration Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-800">BRD Public School Inauguration Program</h2>
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A historic moment as BRD Public School officially opened its doors to the community. The grand
              inauguration ceremony was attended by distinguished guests, local officials, and community members.
            </p>
          </div>

          {/* Event Details Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-800 mb-2">🎉 Grand Inauguration Ceremony</CardTitle>
                    <CardDescription className="text-lg text-gray-700">
                      Official opening of BRD Public School, Kandawa
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600 text-white px-4 py-2 text-lg">Historic Event</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-600">February 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">BRD Public School Campus</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Attendees</p>
                      <p className="text-gray-600">500+ Community Members</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">📸 Inauguration Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inaugurationEvents.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800">
                        <Camera className="w-3 h-3 mr-1" />
                        Photo {index + 1}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Highlights */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Inauguration Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Ribbon className="w-8 h-8 text-blue-500" />,
                  title: "Ribbon Cutting",
                  description: "Official opening ceremony with distinguished guests",
                },
                {
                  icon: <Award className="w-8 h-8 text-gold-500" />,
                  title: "Chief Guest Honor",
                  description: "Felicitation of dignitaries and community leaders",
                },
                {
                  icon: <Users className="w-8 h-8 text-green-500" />,
                  title: "Community Gathering",
                  description: "Hundreds of community members joined the celebration",
                },
                {
                  icon: <Star className="w-8 h-8 text-purple-500" />,
                  title: "Sacred Ceremonies",
                  description: "Traditional puja and havan for auspicious beginnings",
                },
              ].map((highlight, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      {highlight.icon}
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sawan Festival Celebration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-800">Sawan Festival Celebration 2025</h2>
              <Sparkles className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our recent Sawan festival celebration was a beautiful blend of tradition, spirituality, and joy. Students
              participated with great enthusiasm, showcasing Indian culture and values.
            </p>
          </div>

          {/* Event Details Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-green-800 mb-2">🌧️ Sawan Mahotsav 2025</CardTitle>
                    <CardDescription className="text-lg text-gray-700">
                      A celebration of monsoon season and Lord Shiva
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-600 text-white px-4 py-2 text-lg">Recently Celebrated</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-600">July 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">School Campus</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold">Participants</p>
                      <p className="text-gray-600">All Students</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">📸 Sawan Event Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sawanevents.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800">
                        <Camera className="w-3 h-3 mr-1" />
                        Photo {index + 1}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Highlights */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Sawan Event Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-red-500" />,
                  title: "Traditional Costumes",
                  description: "Students dressed as Krishna, Radha, and Lord Shiva",
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
                  title: "Beautiful Decorations",
                  description: "Colorful floral arches and traditional banners",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-500" />,
                  title: "Cultural Learning",
                  description: "Students learned about Indian traditions and values",
                },
                {
                  icon: <Star className="w-8 h-8 text-purple-500" />,
                  title: "Spiritual Activities",
                  description: "Prayer sessions and devotional activities",
                },
              ].map((highlight, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      {highlight.icon}
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Mark your calendars for these exciting upcoming celebrations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                    <Badge className={event.color}>{event.type}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Our Events</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't miss out on any of our exciting school events and celebrations. Subscribe to our newsletter or follow
            our social media for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => openWhatsApp("newsletter")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Subscribe to Newsletter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-green hover:text-blue-600 text-lg px-8 py-4 bg-transparent"
              onClick={() => openWhatsApp("calendar")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Event Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
