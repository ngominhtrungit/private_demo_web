import React from 'react';

export default function SectionAbout() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Learn more about our mission, vision, and the team behind this amazing project.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                    <p className="text-white/80 leading-relaxed">
                        We are dedicated to creating innovative solutions that make a difference.
                        Our platform brings together technology and creativity to deliver exceptional experiences.
                    </p>

                    <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                    <p className="text-white/80 leading-relaxed">
                        To be the leading platform that empowers individuals and teams to achieve their goals
                        through cutting-edge technology and collaborative innovation.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">Why Choose Us?</h3>
                    <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            Expert team with years of experience
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            Cutting-edge technology and tools
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            24/7 support and dedicated service
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            Proven track record of success
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                <p className="text-white/80 mb-8">
                    Ready to start your journey with us? We'd love to hear from you.
                </p>
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                </button>
            </div>
        </section>
    );
}
