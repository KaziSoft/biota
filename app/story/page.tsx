import Link from 'next/link';
import React from 'react';
import { FaBuilding, FaHome, FaChartLine, FaUsers } from 'react-icons/fa';
import { HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi';

export default function StoryPage() {
    // Milestones data
    const milestones = [
        {
            year: "2009",
            title: "Company Founded",
            description: "Renovated our first property - a historic brownstone in Chicago's Lincoln Park neighborhood.",
            alignLeft: true
        },
        {
            year: "2013",
            title: "First Commercial Project",
            description: "Completed our first mixed-use development, combining retail space with luxury condominiums.",
            alignLeft: false
        },
        {
            year: "2015",
            title: "Sustainable Focus",
            description: "Launched our Green Initiative, committing to LEED certification for all new developments.",
            alignLeft: true
        },
        {
            year: "2020",
            title: "Regional Expansion",
            description: "Expanded operations to three new states, with projects in Minneapolis, Indianapolis, and Milwaukee.",
            alignLeft: false
        },
        {
            year: "Present",
            title: "Continued Innovation",
            description: "Pioneering smart home technology and community-focused developments across the Midwest.",
            alignLeft: true
        }
    ];

    // Leadership team data
    const teamMembers = [
        {
            name: "Architect Md. Mamunur Rahman (Munim)",
            position: "MANAGING DIRECTOR",
            description: "With over 25 years in real estate development, John's vision continues to drive our company's growth and innovation.",
            image: "/img/bod/bod-01.png"
        },
        {
            name: "M. M. Rahman Mamun",
            position: "DEPUTY MANAGING DIRECTOR",
            description: "With over 25 years in real estate development, John's vision continues to drive our company's growth and innovation.",
            image: "/img/bod/mamun.png"
        },
        {
            name: "Architect Md. Mamunur Rahman (Munim)",
            position: "MANAGING DIRECTOR",
            description: "With over 25 years in real estate development, John's vision continues to drive our company's growth and innovation.",
            image: "/img/bod/bod-03.png"
        },
        {
            name: "Architect Md. Mamunur Rahman (Munim)",
            position: "MANAGING DIRECTOR",
            description: "With over 25 years in real estate development, John's vision continues to drive our company's growth and innovation.",
            image: "/img/bod/bod-04.png"
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section with Background Image */}
            <section className="relative px-4 py-32 text-center bg-gray-900 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-30"
                        src="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Modern office building"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7AA859] to-green-700 mix-blend-multiply" aria-hidden="true" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-poppins tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        Our Story
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-100">
                        Building communities, transforming skylines, and creating lasting value since 2009.
                    </p>
                </div>
            </section>

            {/* Our Beginning */}
            <section className="px-4 py-10 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    {/* Back to Home Button */}
                    <div className="mb-6">
                        <Link href="/">
                            <button className="flex items-center text-[#7AA859] hover:text-green-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                Back to Home
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-poppins dark:text-gray-50 mb-6">
                                Humble Beginnings, Bold Vision
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                Founded in 2009 by real estate visionary John Smith, our company started with a single renovated brownstone in downtown Chicago. What began as a passion project quickly grew into a mission to redefine urban living.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                From that first property, we've expanded to become one of the most respected development firms in the Midwest, with projects spanning residential, commercial, and mixed-use developments.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Our founder's original vision - to create spaces that inspire and communities that thrive - remains at the heart of everything we do.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1743487014165-c26c868b8186?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Our first property"
                                className="rounded-lg shadow-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="px-4 py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-poppins dark:text-gray-50 mb-4">
                            Our Journey
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                            Key milestones in our company's history
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 w-1 h-full bg-[#7AA859] transform -translate-x-1/2"></div>

                        {/* Timeline items */}
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative flex items-center">
                                    {milestone.alignLeft ? (
                                        <div className="hidden md:block md:w-1/2 pr-8 text-right">
                                            <h3 className="text-xl font-semibold dark:text-gray-50">{milestone.year}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{milestone.title}</p>
                                        </div>
                                    ) : (
                                        <div className="md:w-1/2 pr-8 text-right">
                                            <h3 className="text-xl font-semibold dark:text-gray-50">{milestone.year}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{milestone.title}</p>
                                        </div>
                                    )}

                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#7AA859] border-4 border-white dark:border-gray-800"></div>

                                    <div className="md:w-1/2 md:pl-8 text-center md:text-left mt-4 md:mt-0">
                                        <div className="md:hidden">
                                            <h3 className="text-xl font-semibold dark:text-gray-50">{milestone.year}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{milestone.title}</p>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="px-4 py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-poppins dark:text-gray-50 mb-4">
                            Meet Our Leadership
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                            The experienced professionals guiding our company's vision
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold dark:text-gray-50 mb-1">{member.name}</h3>
                                    <p className="text-[#7AA859] mb-4">{member.position}</p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* <section className="px-4 py-20 bg-gradient-to-r from-[#7AA859] to-green-700 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-poppins mb-6">Building the Future Together</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-100">
                        Discover how our approach to real estate development can benefit your next project or investment.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-[#7AA859] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg">
                            View Our Portfolio
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#7AA859] transition shadow-lg">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section> */}
        </div>
    );
}