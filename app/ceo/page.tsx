import { FaLinkedin, FaTwitter, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

export default function CeoPage() {
    const director = {
        name: "Md. Sujal Ahmed Talukder",
        title: "DIRECTOR & CEO",
        company: "Biobuild Development Ltd.",
        bio: `Our journey begins with a shared vision—to create innovative, eco-friendly spaces that not only redefine urban living but also contribute to a sustainable future. As an ex cadet and member of Cadet College Club ltd, he can ensure transparent communication with stakeholders—be it investors, partners, or local communities.

As a master mariner who has sailed the seas, he understand the delicate balance of ecosystems. Let us build responsibly, leaving a positive footprint.We don’t merely construct buildings; we shape legacies. Our structures will stand as testaments to our commitment to sustainable growth..

Let’s bridge trust among all parties—investors, residents, and collaborators. Let’s create spaces where families thrive, where greenery flourishes, and where dreams find a home.`,
        imageUrl: "/img/bod/bod-03.png", // Replace with your image path
        email: "managing-director@biobuild.com",
        phone: "+800 555-0199",
        location: "Dhaka, Bangladesh",
        linkedin: "https://www.linkedin.com/in/alexandrachen",
        twitter: "https://twitter.com/alexchen_md",
        achievements: [
            "Named 'Tech Leader of the Year' 2023",
            "Led company to 300% revenue growth in 5 years",
            "Established industry-leading sustainability program"
        ]
    };

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative px-4 py-32 text-center bg-gray-900 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-30"
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Corporate boardroom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7AA859] to-green-700 mix-blend-multiply" aria-hidden="true" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins tracking-tight text-white mb-6">
                        Meet Our Leadership
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-100">
                        Visionary leadership driving innovation and excellence in real estate development
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
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

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-poppins text-gray-900 sm:text-4xl">{director.title}</h2>
                        <p className="mt-3 text-xl text-gray-600">Leading {director.company} to new heights</p>
                    </div>

                    {/* Profile Card */}
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                        <div className="md:flex">
                            {/* Image Section */}
                            <div className="md:w-2/5 bg-gradient-to-b from-indigo-100 to-blue-100 flex flex-col items-center p-8">
                                <img
                                    className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                                    src={director.imageUrl}
                                    alt={`Portrait of ${director.name}`}
                                />
                                <h2 className="mt-6 text-2xl font-bold text-gray-900">{director.name}</h2>
                                <p className="text-[#7AA859] font-medium">{director.title}</p>
                                <p className="text-gray-600 mt-1">{director.company}</p>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-3/5 p-8 md:p-10">
                                {/* Bio */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Profile</h3>
                                    <p className="mt-4 text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                                        {director.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}