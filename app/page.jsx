// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import {
//   featuresData,
//   howItWorksData,
//   statsData,
//   testimonialsData,
// } from "@/data/landing";
// import HeroSection from "@/components/hero";
// import Link from "next/link";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Stats Section */}
//       {/* <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {statsData.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-blue-600 mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Features Section */}
//       <section id="features" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Everything you need to manage your finances
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuresData.map((feature, index) => (
//               <Card className="p-6" key={index}>
//                 <CardContent className="space-y-4 pt-4">
//                   {feature.icon}
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {howItWorksData.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">
//             What Our Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonialsData.map((testimonial, index) => (
//               <Card key={index} className="p-6">
//                 <CardContent className="pt-4">
//                   <div className="flex items-center mb-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       width={40}
//                       height={40}
//                       className="rounded-full"
//                     />
//                     <div className="ml-4">
//                       <div className="font-semibold">{testimonial.name}</div>
//                       <div className="text-sm text-gray-600">
//                         {testimonial.role}
//                       </div>
//                     </div>
//                   </div>
//                   <p className="text-gray-600">{testimonial.quote}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-blue-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ready to Take Control of Your Finances?
//           </h2>
//           <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of users who are already managing their finances
//             smarter with Welth
//           </p>
//           <Link href="/dashboard">
//             <Button
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
//             >
//               Start Free Trial
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;




"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-title">
            Everything You Need to Manage Your Finances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="text-blue-600">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="text-center px-6 py-8 bg-white rounded-xl shadow hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mb-8 text-blue-100 max-w-xl mx-auto">
            Join thousands of users who are already managing their money
            smarter with <span className="font-semibold">Welth</span>.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-semibold px-8 py-4 transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
