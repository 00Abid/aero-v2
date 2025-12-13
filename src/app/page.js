import React from 'react'
import { MoveRight, ChevronDown, ChevronUp } from 'lucide-react';
import CTA from './components/CTA';
import Image from 'next/image';
import Link from 'next/link';
import FAQSectionClient from './components/FAQSectionClient';

const Home =
  () => {
    const excellenceFeatures = [
      {
        title: 'State-of-the-Art Facilities',
        description: 'Source quality sheet metal through our reliable network.',
      },
      {
        title: 'Expert Engineering',
        description: 'Get the right sheet metal with our in-depth knowledge.',

      },
      {
        title: 'Quality Materials',
        description: 'Quality sheet metal for superior product performance.',


      },
    ];

    const companies = [
      {
        name: 'SAGAR METAL CUTTING WORKS',
        desc: 'Turning Sheet Metals into Precision Masterpieces',
        url: 'https://smcw.netlify.app/',
      },
      {
        name: 'AERO MOTOLITE',
        desc: 'Your Trusted Source for Automotive, Lights and Accesories ',
        url: 'https://aeromotolite.vercel.app/',
      },
      {
        name: 'AERO LABS',
        desc: 'Your Digital Growth Patner',
        url: 'https://aerolab.vercel.app'
      }
    ];


    return (
      <>
        <section className='bg-white overflow-hidden'>

          {/* Hero Section */}
          <div className="relative w-full h-screen min-h-screen overflow-hidden">
            <video
              src='/hero.mp4'
              poster='/hero-image.webp'
              autoPlay
              muted
              loop
              preload="metadata"
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              Premium sheet metal coils and steel products at AERO ENTERPRISES manufacturing facility in Vasai
            </video>
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-center md:items-center md:text-center px-4 z-10" data-aos="zoom-in-up">
              <h1 className="text-5xl text-white ">
                AERO ENTERPRISES
              </h1>
              <p className="text-lg text-white mt-4 max-w-4xl">
                Your Trusted Sheet Metal Supplier
              </p>
            </div>
          </div>

          {/* Excellence section */}
          <div className="bg-white py-20">
            <div className="md:text-center max-w-3xl mx-auto mb-16 px-4">
              <h2 className="text-3xl text-black">Our Excellence</h2>
            </div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-15 px-4">
              {excellenceFeatures.map((feature, index) => (
                <div key={index} className="w-auto h-auto md:mx-6" data-aos="fade-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-black"> {feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="py-16 bg-[#F5F7FA]">
            <div className="md:text-center max-w-3xl md:mx-auto px-4 mb-8">
              <h2 className="text-3xl text-black">Our Capabilities</h2>
            </div>

            <div className="md:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
              <div className="h-32 dark-metal-card p-6 rounded-lg md:text-center shadow-sm" data-aos="fade-right">
                <h3 className="text-lg font-semibold">Precision Cutting</h3>
                <p className="mt-2 ">Clean and precise cuts with technology.</p>
              </div>

              <div className="h-32 dark-metal-card p-6 rounded-lg md:text-center shadow-sm" data-aos="fade-right">
                <h3 className="text-lg font-semibold">Material Sourcing</h3>
                <p className="mt-2 ">High-quality sheet metal from trusted suppliers.</p>
              </div>

              <div className="h-32 dark-metal-card p-6 rounded-lg md:text-center shadow-sm" data-aos="fade-right">
                <h3 className="text-lg font-semibold">Quality Assurance</h3>
                <p className="mt-2 ">Reliable quality through strict checks.</p>
              </div>
            </div>
          </div>

          {/* Why Us */}
          <div className="py-16 flex flex-col md:flex-row justify-evenly items-start gap-8">
            <div className="max-w-3xl mx-auto px-4 flex flex-col gap-10">
              <div>
                <h2 className="text-3xl text-black">Why Us</h2>
              </div>
              <div className="flex flex-col gap-8 mt-8">
                <div data-aos="fade-left">
                  <h3 className="text-lg font-semibold text-black">Industry Leading Quality</h3>
                  <p className="text-gray-700">Exceeding industry norms with top-tier quality.</p>
                </div>
                <div data-aos="fade-left">
                  <h3 className="text-lg font-semibold text-black">Expert Team</h3>
                  <p className="text-gray-700">Skilled professionals delivering quality solutions for all your sheet metal needs.</p>
                </div>
                <div data-aos="fade-left">
                  <h3 className="text-lg font-semibold text-black">On-Time Delivery</h3>
                  <p className="text-gray-700">Timely delivery without sacrificing quality.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mx-auto px-4 pt-8" data-aos="zoom-in-up">
              <video src="/about.mp4" alt="AERO ENTERPRISES team working with precision sheet metal fabrication equipment and quality steel products" autoPlay muted loop className="rounded-xl" loading="lazy" />
            </div>
          </div>

          {/* Group of Companies Section */}
          <div className="py-16 bg-[#F5F7FA]">
            <div className="md:text-center max-w-3xl mx-auto px-4 mb-8">
              <h2 className="text-3xl text-black">Group of Companies</h2>
            </div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 ">
              {companies.map((company, index) => (
                <a
                  key={index}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="dark-metal-card p-6 rounded-lg md:text-center shadow-sm h-48 flex flex-col justify-center md:items-center" data-aos="fade-right">
                    <h3 className="text-lg font-semibold ">{company.name}</h3>
                    <p className="pt-1">{company.desc}</p>
                    <button className="pt-3 md:pt-5 text-white flex gap-4 md:justify-center items-center transition-all duration-500 hover:scale-105 focus:scale-105 active:scale-105">
                      Visit Site
                      <MoveRight className='animate-bounce' />
                    </button>

                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Section (client interactive component) */}
          <FAQSectionClient />

          {/* Download section */}
          <CTA
            title="Ready to Source Quality Sheet Metal?"
            description="Access our full product specifications, grades, and inventory list. Contact AERO ENTERPRISES today for expert solutions."

            primaryButtonText="Download Catalogue"
            primaryButtonLink="/AERO ENTERPRISES Catalogue.pdf"
            isPrimaryDownload={true}
            secondaryButtonText="Contact Us"
            secondaryButtonLink="/contact"
          />
        </section>
      </>
    )
  }

export default Home
