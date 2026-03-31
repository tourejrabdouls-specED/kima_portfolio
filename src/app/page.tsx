'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                C. Kima S.J. Wea
              </h1>
              <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-xl text-slate-300 sm:text-2xl">
                Full-Stack Software Engineer specializing in modern web technologies and scalable solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors duration-200 shadow-lg"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400 text-lg font-semibold rounded-lg text-amber-400 bg-transparent hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
                >
                  View Portfolio
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for profile photo */}
                    <div className="text-center text-slate-500">
                      <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <p className="text-sm font-medium">Profile Photo</p>
                      <p className="text-xs text-slate-400 mt-1">Add your professional photo here</p>
                    </div>
                    {/* Admin edit indicator */}
                    <div className="absolute top-2 right-2 bg-amber-400 text-slate-900 text-xs px-2 py-1 rounded-full font-medium opacity-75 hover:opacity-100 cursor-pointer transition-opacity">
                      Edit
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="text-lg leading-relaxed">
                  With a strong foundation in software engineering, I specialize in developing robust, scalable web applications. My expertise spans modern frameworks, database design, and collaborative development practices, with a proven track record of delivering high-quality solutions that drive business value.
                </p>
                <p className="text-lg leading-relaxed">
                  I am passionate about creating efficient, user-centric applications that solve real-world problems. My approach combines technical excellence with a deep understanding of user experience and business requirements.
                </p>
              </div>

              {/* Key Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">Experience</h3>
                    <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  <p className="text-slate-600">5+ Years</p>
                  <p className="text-sm text-slate-500 mt-1">Full-Stack Development</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">Location</h3>
                    <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  <p className="text-slate-600">Remote</p>
                  <p className="text-sm text-slate-500 mt-1">Available Worldwide</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">Specialization</h3>
                    <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  <p className="text-slate-600">Web Applications</p>
                  <p className="text-sm text-slate-500 mt-1">React & Node.js</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors duration-200 group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">Education</h3>
                    <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  <p className="text-slate-600">B.S. Computer Science</p>
                  <p className="text-sm text-slate-500 mt-1">University Name</p>
                </div>
              </div>
            </div>

            {/* Professional Photo/Info Update Area */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Professional Profile</h3>

                {/* Current Photo Display */}
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-slate-300 rounded-full flex items-center justify-center mb-4 relative group">
                    <svg className="w-12 h-12 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="text-white text-sm font-medium">Update Photo</span>
                    </div>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                    Change Profile Picture
                  </button>
                </div>

                {/* Quick Info Update */}
                <div className="space-y-4">
                  <div className="border border-slate-300 rounded-lg p-4 hover:border-amber-300 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-slate-700">Professional Title</label>
                      <button className="text-amber-500 text-sm hover:text-amber-600">Edit</button>
                    </div>
                    <p className="text-slate-900">Full-Stack Software Engineer</p>
                  </div>

                  <div className="border border-slate-300 rounded-lg p-4 hover:border-amber-300 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-slate-700">Current Status</label>
                      <button className="text-amber-500 text-sm hover:text-amber-600">Edit</button>
                    </div>
                    <p className="text-slate-900">Available for new opportunities</p>
                  </div>

                  <div className="border border-slate-300 rounded-lg p-4 hover:border-amber-300 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-slate-700">Contact Email</label>
                      <button className="text-amber-500 text-sm hover:text-amber-600">Edit</button>
                    </div>
                    <p className="text-slate-900">your.email@example.com</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                    Update Profile Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical competencies and professional capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Edit
                </button>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Full-Stack Web Development</h3>
              <p className="text-slate-600 leading-relaxed">Advanced proficiency in modern web technologies including HTML5, CSS3, JavaScript (ES6+), React, Next.js, and responsive design principles.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Edit
                </button>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Database Architecture & Management</h3>
              <p className="text-slate-600 leading-relaxed">Extensive experience with relational and NoSQL databases, including PostgreSQL, MongoDB, and Prisma ORM for efficient data modeling and optimization.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </div>
                <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Edit
                </button>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Version Control & DevOps</h3>
              <p className="text-slate-600 leading-relaxed">Expert-level Git proficiency for distributed version control, collaborative workflows, and CI/CD pipeline implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A selection of recent projects demonstrating technical expertise and problem-solving capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Edit
                </button>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Professional Portfolio Platform</h3>
              <p className="text-slate-600 leading-relaxed mb-6">A high-performance, responsive portfolio website built with Next.js 14, Tailwind CSS, and Prisma ORM, featuring contact form integration and admin dashboard functionality.</p>
              <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Edit
                </button>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Enterprise E-Commerce Solution</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Full-stack e-commerce platform with secure user authentication, payment processing integration, inventory management, and comprehensive order tracking system.</p>
              <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <button className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Edit
                </button>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Advanced Data Visualization Dashboard</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Interactive data visualization platform utilizing React and D3.js for complex data analysis, featuring real-time updates, customizable charts, and export capabilities.</p>
              <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities? Let's connect and bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600">hello@professional.dev</p>
                  <button className="text-amber-500 text-sm font-medium mt-1 hover:text-amber-600 transition-colors">
                    Update Email
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <button className="text-amber-500 text-sm font-medium mt-1 hover:text-amber-600 transition-colors">
                    Update Phone
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
                  <p className="text-slate-600">San Francisco, CA</p>
                  <button className="text-amber-500 text-sm font-medium mt-1 hover:text-amber-600 transition-colors">
                    Update Location
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const error = await response.json();
        setStatus(error.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Message
        </button>
      </div>
      {status && <p className="text-center text-sm text-slate-600">{status}</p>}
    </form>
  );
}
