import React from 'react';
import {
    universities,
    seniorityLevels,
    cities,
    districts,
    wards,
    challengeStatements,
    hearAboutOptions,
    jobInterestOptions
} from './FormData';

const TeamForm: React.FC = () => {
    return (
        <>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">Register as TEAM</h2>
            <form className="space-y-4 md:space-y-6">
                {/* Team Names */}
                <div>
                    <h3 className="text-white text-sm md:text-base font-semibold mb-2">Team Member Names</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                        <input
                            type="text"
                            placeholder="Team lead: Full name*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Member 1: Full name*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Member 2: Full name*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Member 3: Full name"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                        <input
                            type="text"
                            placeholder="Member 4: Full name"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                    </div>
                </div>

                {/* Phone Numbers */}
                <div>
                    <h3 className="text-white text-sm md:text-base font-semibold mb-2">Phone Numbers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                        <input
                            type="tel"
                            placeholder="Phone*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone 1*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone 2*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone 3"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                        <input
                            type="tel"
                            placeholder="Phone 4"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                    </div>
                </div>

                {/* Emails */}
                <div>
                    <h3 className="text-white text-sm md:text-base font-semibold mb-2">Email Addresses</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                        <input
                            type="email"
                            placeholder="Email*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email 1*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email 2*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email 3"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                        <input
                            type="email"
                            placeholder="Email 4"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                    </div>
                </div>

                {/* Birth Years */}
                <div>
                    <h3 className="text-white text-sm md:text-base font-semibold mb-2">Years of Birth</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                        <input
                            type="text"
                            placeholder="Year of birth*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Year of birth 1*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Year of birth 2*"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Year of birth 3"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                        <input
                            type="text"
                            placeholder="Year of birth 4"
                            className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                        />
                    </div>
                </div>

                {/* Universities */}
                <div>
                    <h3 className="text-white text-sm md:text-base font-semibold mb-2">Universities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                        {[0, 1, 2, 3, 4].map((index) => (
                            <select key={index} className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                                {universities.map((uni, uniIndex) => (
                                    <option key={uniIndex} value={uni}>
                                        {uni}
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>
                </div>

                {/* University Others */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                    <input type="text" placeholder="University (Other):" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="text" placeholder="University (Other):" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="text" placeholder="University (Other):" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="text" placeholder="University (Other):" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="text" placeholder="University (Other):" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                </div>

                {/* Company & Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                    <input type="text" placeholder="Current company & position*" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" required />
                    <input type="text" placeholder="Current company & position*" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" required />
                    <input type="text" placeholder="Current company & position*" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" required />
                    <input type="text" placeholder="Current company & position*" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="text" placeholder="Current company & position*" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                </div>

                {/* Seniority Levels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <select key={index} className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                            {seniorityLevels.map((level, levelIndex) => (
                                <option key={levelIndex} value={level}>
                                    {level}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>

                {/* Resume Uploads */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div key={index}>
                            <label className="block text-white text-sm mb-1">Resume upload</label>
                            <input type="file" className="p-2 md:p-3 rounded bg-white border-2 border-white w-full text-sm text-black" accept=".pdf,.doc,.docx" />
                        </div>
                    ))}
                </div>

                {/* LinkedIn Profiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                    <input type="url" placeholder="LinkedIn profile" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="LinkedIn profile 1" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="LinkedIn profile 2" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="LinkedIn profile" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="LinkedIn profile" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                </div>

                {/* GitHub Repos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                    <input type="url" placeholder="Github repo" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="Github repo 1" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="Github repo 2" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="Github repo 3" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                    <input type="url" placeholder="Github repo 4" className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base" />
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    <select className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    <select className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                    <select className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                        {wards.map((ward, index) => (
                            <option key={index} value={ward}>{ward}</option>
                        ))}
                    </select>
                </div>

                {/* Additional shared form fields */}
                <div className="space-y-3 md:space-y-4">
                    <select className="w-full p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                        {challengeStatements.map((statement, index) => (
                            <option key={index} value={statement}>{statement}</option>
                        ))}
                    </select>
                    <select className="w-full p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                        {hearAboutOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </form>
        </>
    );
};

export default TeamForm;
