import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, FileText, Users, CreditCard, Award, Clock, Phone, Mail, MapPin, MessageCircle, BookOpen } from 'lucide-react'

const whatsappNumber = "919455862486"

const openWhatsApp = (type: string) => {
  let message = ""
  switch(type) {
    case 'admission':
      message = "Hello! I'm interested in admission to BRD Public School for the 2025-26 academic year. Please provide me with detailed information about the admission process, fees, available seats, and required documents."
      break
    case 'prospectus':
      message = "Hello! I would like to download the BRD Public School prospectus with complete details about curriculum, fees, facilities, and admission procedures."
      break
    case 'visit':
      message = "Hello! I would like to schedule a campus visit to BRD Public School to see the facilities and meet with the admission counselors."
      break
    case 'help':
      message = "Hello! I need assistance with the BRD Public School admission process. Could you please help me with my queries regarding admissions?"
      break
  }
  
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Admissions Open 2025-26
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Join Our Inaugural Batch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Be among the first students to experience our revolutionary approach to education. 
              Limited seats available with special early bird benefits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                onClick={() => openWhatsApp('admission')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => openWhatsApp('prospectus')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Early Bird Benefits */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎉 Early Bird Benefits</h2>
            <p className="text-xl">Exclusive advantages for our founding students</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "20% Discount",
                description: "On admission fees for first 100 students",
                icon: <CreditCard className="w-8 h-8" />
              },
              {
                title: "No Donation",
                description: "Transparent fee structure with no hidden charges",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "Founding Member",
                description: "Special recognition as inaugural batch student",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "Priority Access",
                description: "First preference for all school activities",
                icon: <Users className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple Admission Process</h2>
            <p className="text-xl text-gray-600">Four easy steps to join our school family</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Online Application",
                description: "Fill out our comprehensive online application form with all required details",
                icon: <FileText className="w-8 h-8 text-blue-600" />
              },
              {
                step: "02",
                title: "Document Submission",
                description: "Upload all necessary documents and certificates through our secure portal",
                icon: <CheckCircle className="w-8 h-8 text-green-600" />
              },
              {
                step: "03",
                title: "Interaction Session",
                description: "Attend a friendly parent-student interaction with our academic team",
                icon: <Users className="w-8 h-8 text-purple-600" />
              },
              {
                step: "04",
                title: "Confirmation",
                description: "Complete fee payment and receive admission confirmation with class details",
                icon: <Award className="w-8 h-8 text-orange-600" />
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {process.step}
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {process.icon}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-wise Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Classes & Age Groups</h2>
            <p className="text-xl text-gray-600">Comprehensive education from nursery to senior secondary</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                level: "Pre-Primary",
                classes: "Nursery, LKG, UKG",
                age: "3-5 years",
                seats: "25 per class",
                fee: "₹7,200/year",
                registrationFee: "₹200",
                transportFee: "NA",
                color: "bg-pink-100 text-pink-800"
              },
              {
                level: "Primary",
                classes: "Class I-III",
                age: "6-8 years",
                seats: "30 per class",
                fee: "₹8,400/year",
                registrationFee: "₹200",
                transportFee: "NA",
                color: "bg-blue-100 text-blue-800"
              },
              {
                level: "Primary",
                classes: "Class IV-V",
                age: "9-10 years",
                seats: "35 per class",
                fee: "₹9,600/year",
                registrationFee: "₹200",
                transportFee: "NA",
                color: "bg-green-100 text-green-800"
              },
              {
                level: "Upper Primary",
                classes: "Class VI-VII",
                age: "11-12 years",
                seats: "40 per class",
                fee: "₹12,000/year",
                registrationFee: "₹200",
                transportFee: "NA",
                color: "bg-purple-100 text-purple-800"
              },
              {
                level: "Upper Primary",
                classes: "Class VIII",
                age: "13-14 years",
                seats: "35 per class",
                fee: "₹14,400/year",
                registrationFee: "₹200",
                transportFee: "NA",
                color: "bg-orange-100 text-orange-800"
              }
            ].map((grade, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{grade.level}</CardTitle>
                    <Badge className={grade.color}>{grade.age}</Badge>
                  </div>
                  <CardDescription className="text-lg font-medium">{grade.classes}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Seats Available:</span>
                      <span className="font-medium">{grade.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Fee:</span>
                      <span className="font-medium text-green-600">{grade.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registration Fee:</span>
                      <span className="font-medium">{grade.registrationFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transport Fee:</span>
                      <span className="font-medium">{grade.transportFee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Required Documents</h2>
            <p className="text-xl text-gray-600">Please prepare these documents for your application</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Student Documents</h3>
              <div className="space-y-4">
                {[
                  "Birth Certificate (Original & Photocopy)",
                  "Previous School Transfer Certificate",
                  "Academic Records/Report Cards (Last 2 years)",
                  "Passport Size Photographs (6 copies)",
                  "Medical Certificate from Registered Doctor",
                  "Immunization Records",
                  "Character Certificate (if applicable)"
                ].map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Parent Documents</h3>
              <div className="space-y-4">
                {[
                  "Parent/Guardian ID Proof (Aadhar/Passport)",
                  "Address Proof (Utility Bill/Lease Agreement)",
                  "Income Certificate (for scholarship applicants)",
                  "Caste Certificate (if applicable)",
                  "Bank Account Details for fee payment",
                  "Emergency Contact Information",
                  "Parent Photographs (2 copies each)"
                ].map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600">Mark your calendar for these key admission dates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                date: "Jan 15, 2025",
                event: "Applications Open",
                description: "Online application portal goes live",
                status: "active"
              },
              {
                date: "Mar 31, 2025",
                event: "Early Bird Deadline",
                description: "Last date for 20% discount",
                status: "urgent"
              },
              {
                date: "May 15, 2025",
                event: "Applications Close",
                description: "Final date for submission",
                status: "upcoming"
              },
              {
                date: "Jun 1, 2025",
                event: "Classes Begin",
                description: "First day of academic year",
                status: "future"
              }
            ].map((date, index) => (
              <Card key={index} className={`text-center ${
                date.status === 'urgent' ? 'border-red-200 bg-red-50' : 
                date.status === 'active' ? 'border-green-200 bg-green-50' : 
                'border-blue-200 bg-blue-50'
              }`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Calendar className={`w-8 h-8 ${
                      date.status === 'urgent' ? 'text-red-600' : 
                      date.status === 'active' ? 'text-green-600' : 
                      'text-blue-600'
                    }`} />
                  </div>
                  <CardTitle className="text-lg">{date.event}</CardTitle>
                  <CardDescription className="font-medium text-gray-800">{date.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{date.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Need Help with Admissions?</h2>
            <p className="text-xl">Our admission counselors are here to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Admission Helpline</p>
                <p className="text-lg font-bold">+91 9569499507</p>
                <p className="text-sm mt-2">Mon-Sat: 9 AM - 6 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Admission Queries</p>
                <p className="text-lg font-bold">admissions@brdschool.edu.in</p>
                <p className="text-sm mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">School Campus</p>
                <p className="text-lg font-bold">Schedule a Tour</p>
                <p className="text-sm mt-2">See our facilities firsthand</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 mr-4"
              onClick={() => openWhatsApp('admission')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Apply Online Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-green hover:text-blue-600"
              onClick={() => openWhatsApp('visit')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
