import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, BarChart2 } from 'lucide-react';

// Home component for Next.js
export default function Home() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="lg:px-8 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <div className="text-indigo-600 text-xl font-bold">Brand</div>
              <div className="hidden md:flex md:ml-10 md:space-x-8">
                <Link href="/" className="text-gray-900 text-sm font-medium px-3 py-2">Home</Link>
                <Link href="#features" className="text-gray-500 text-sm font-medium hover:text-gray-900 px-3 py-2">Features</Link>
                <Link href="#pricing" className="text-gray-500 text-sm font-medium hover:text-gray-900 px-3 py-2">Pricing</Link>
                <Link href="#about" className="text-gray-500 text-sm font-medium hover:text-gray-900 px-3 py-2">About</Link>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-indigo-600 border border-transparent justify-center rounded-md shadow-sm text-sm text-white font-medium hidden hover:bg-indigo-700 inline-flex items-center md:block ml-8 px-4 py-2 whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="lg:px-8 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:gap-8 lg:grid lg:grid-cols-12">
            <div className="lg:col-span-6 lg:text-left md:max-w-2xl md:mx-auto sm:text-center">
              <h1 className="text-4xl text-gray-900 font-extrabold lg:text-6xl sm:text-5xl sm:tracking-tight">
                Modern solutions for your business
              </h1>
              <p className="text-base text-gray-500 mt-3 sm:mt-5 sm:text-lg">
                We provide cutting-edge solutions that help businesses streamline their operations, increase productivity, and drive growth through innovative technology.
              </p>
              <div className="lg:justify-start mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link href="#" className="flex bg-indigo-600 border border-transparent justify-center rounded-md text-base text-white font-medium hover:bg-indigo-700 items-center px-5 py-3">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <Link href="#" className="flex bg-white border border-transparent justify-center rounded-md text-base text-indigo-600 font-medium hover:bg-gray-50 items-center px-5 py-3">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:flex lg:items-center lg:max-w-none lg:mt-0 lg:mx-0 mt-12 relative sm:max-w-lg sm:mx-auto">
              <div className="rounded-lg shadow-lg w-full lg:max-w-md mx-auto relative">
                <div className="bg-gray-300 rounded-lg w-full block overflow-hidden relative">
                  {/* Using Lorem Picsum for the hero image */}
                  <img 
                    src="https://picsum.photos/600/400" 
                    alt="App screenshot" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-gray-50 py-12">
        <div className="lg:px-8 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="text-3xl text-gray-900 font-extrabold leading-8 mt-2 sm:text-4xl tracking-tight">
              Everything you need
            </p>
            <p className="text-gray-500 text-xl lg:mx-auto max-w-2xl mt-4">
              Our platform offers powerful tools designed to solve your business challenges effectively.
            </p>
          </div>

          <div className="mt-10">
            <div className="md:gap-x-8 md:gap-y-10 md:grid md:grid-cols-3 md:space-y-0 space-y-10">
              {/* Feature 1 */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex bg-indigo-500 h-12 justify-center rounded-md text-white w-12 items-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="text-center md:ml-4 md:mt-0 md:text-left mt-5">
                  <h3 className="text-gray-900 text-lg font-medium">Easy Integration</h3>
                  <p className="text-base text-gray-500 mt-2">
                    Quick setup with simple APIs and comprehensive documentation to get you started in minutes.
                  </p>
                </div>
                <div className="rounded-lg mt-4 overflow-hidden">
                  <img 
                    src="https://picsum.photos/id/1/300/200" 
                    alt="Feature 1" 
                    className="w-full"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex bg-indigo-500 h-12 justify-center rounded-md text-white w-12 items-center">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-center md:ml-4 md:mt-0 md:text-left mt-5">
                  <h3 className="text-gray-900 text-lg font-medium">Team Collaboration</h3>
                  <p className="text-base text-gray-500 mt-2">
                    Collaborate seamlessly with your team members with real-time updates and communication tools.
                  </p>
                </div>
                <div className="rounded-lg mt-4 overflow-hidden">
                  <img 
                    src="https://picsum.photos/id/15/300/200" 
                    alt="Feature 2" 
                    className="w-full"
                  />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex bg-indigo-500 h-12 justify-center rounded-md text-white w-12 items-center">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <div className="text-center md:ml-4 md:mt-0 md:text-left mt-5">
                  <h3 className="text-gray-900 text-lg font-medium">Advanced Analytics</h3>
                  <p className="text-base text-gray-500 mt-2">
                    Gain valuable insights with customizable reports and data visualizations to make informed decisions.
                  </p>
                </div>
                <div className="rounded-lg mt-4 overflow-hidden">
                  <img 
                    src="https://picsum.photos/id/22/300/200" 
                    alt="Feature 3" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16 max-w-6xl mx-auto px-4 py-12 sm:px-6">
          <h2 className="text-3xl text-white font-extrabold sm:text-4xl tracking-tight">
            <span className="block">Ready to dive in?</span>
            <span className="text-indigo-200 block">Start your free trial today.</span>
          </h2>
          <div className="flex lg:flex-shrink-0 lg:mt-0 mt-8">
            <div className="rounded-md shadow inline-flex">
              <Link href="#" className="bg-white border border-transparent justify-center rounded-md text-base text-indigo-600 font-medium hover:bg-indigo-50 inline-flex items-center px-5 py-3">
                Get started
              </Link>
            </div>
            <div className="rounded-md shadow inline-flex ml-3">
              <Link href="#" className="bg-indigo-500 border border-transparent justify-center rounded-md text-base text-white font-medium hover:bg-indigo-600 inline-flex items-center px-5 py-3">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="about" className="bg-white">
        <div className="lg:px-8 max-w-6xl mx-auto overflow-hidden px-4 py-12 sm:px-6">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">About</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">Jobs</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">Press</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</Link>
            </div>
          </nav>
          <p className="text-base text-center text-gray-500 mt-8">
            &copy; 2025 Brand, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}