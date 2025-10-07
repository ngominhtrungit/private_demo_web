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
            <h2 className="text-white text-2xl font-bold mb-6">Register as TEAM</h2>
            <form className="space-y-2">
                {/* Team Names */}
                <div className="grid grid-cols-5 gap-2">
                    <input
                        type="text"
                        placeholder="Team lead: Full name*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Member 1: Full name*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Member 2: Full name*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Member 3: Full name"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                    <input
                        type="text"
                        placeholder="Member 4: Full name"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                </div>

                {/* Phone Numbers */}
                <div className="grid grid-cols-5 gap-2">
                    <input
                        type="tel"
                        placeholder="Phone*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone 1*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone 2*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone 3"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                    <input
                        type="tel"
                        placeholder="Phone 4"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                </div>

                {/* Emails */}
                <div className="grid grid-cols-5 gap-2">
                    <input
                        type="email"
                        placeholder="Email*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email 1*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email 2*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email 3"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                    <input
                        type="email"
                        placeholder="Email 4"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                </div>

                {/* Birth Years */}
                <div className="grid grid-cols-5 gap-2">
                    <input
                        type="text"
                        placeholder="Year of birth*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Year of birth 1*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Year of birth 2*"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Year of birth 3"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                    <input
                        type="text"
                        placeholder="Year of birth 4"
                        className="p-1 rounded bg-white border-8 border-white text-black"
                    />
                </div>

                {/* Universities */}
                <div className="grid grid-cols-5 gap-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <select key={index} className="p-1 rounded bg-white border-8 border-white text-black">
                            {universities.map((uni, uniIndex) => (
                                <option key={uniIndex} value={uni}>
                                    {index === 0 ? uni : uni.replace('University', `University ${index + 1}`)}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>

                {/* University Others */}
                <div className="grid grid-cols-5 gap-2">
                    <input type="text" placeholder="University (Other):" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="text" placeholder="University (Other):" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="text" placeholder="University (Other):" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="text" placeholder="University (Other):" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="text" placeholder="University (Other):" className="p-1 rounded bg-white border-8 border-white text-black" />
                </div>

                {/* Company & Position */}
                <div className="grid grid-cols-5 gap-2">
                    <input type="text" placeholder="Current company & position*" className="p-1 rounded bg-white border-8 border-white text-black" required />
                    <input type="text" placeholder="Current company & position*" className="p-1 rounded bg-white border-8 border-white text-black" required />
                    <input type="text" placeholder="Current company & position*" className="p-1 rounded bg-white border-8 border-white text-black" required />
                    <input type="text" placeholder="Current company & position*" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="text" placeholder="Current company & position*" className="p-1 rounded bg-white border-8 border-white text-black" />
                </div>

                {/* Seniority Levels */}
                <div className="grid grid-cols-5 gap-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <select key={index} className="p-1 rounded bg-white border-8 border-white text-black">
                            {seniorityLevels.map((level, levelIndex) => (
                                <option key={levelIndex} value={level}>
                                    {index === 0 ? level : level.replace('Seniority Level', `Seniority Level ${index + 1}`)}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>

                {/* Resume Uploads */}
                <div className="grid grid-cols-5 gap-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div key={index}>
                            <label className="block text-white text-sm mb-1">Resume upload</label>
                            <input type="file" className="p-2 rounded bg-white border-8 border-white w-full text-sm text-black" accept=".pdf,.doc,.docx" />
                        </div>
                    ))}
                </div>

                {/* LinkedIn Profiles */}
                <div className="grid grid-cols-5 gap-2">
                    <input type="url" placeholder="LinkedIn profile" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="LinkedIn profile 1" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="LinkedIn profile 2" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="LinkedIn profile" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="LinkedIn profile" className="p-1 rounded bg-white border-8 border-white text-black" />
                </div>

                {/* GitHub Repos */}
                <div className="grid grid-cols-5 gap-2">
                    <input type="url" placeholder="Github repo" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="Github repo 1" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="Github repo 2" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="Github repo 3" className="p-1 rounded bg-white border-8 border-white text-black" />
                    <input type="url" placeholder="Github repo 4" className="p-1 rounded bg-white border-8 border-white text-black" />
                </div>

                {/* Location */}
                <div className="grid grid-cols-3 gap-2">
                    <select className="p-1 rounded bg-white border-8 border-white text-black">
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    <select className="p-1 rounded bg-white border-8 border-white text-black">
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                    <select className="p-1 rounded bg-white border-8 border-white text-black">
                        {wards.map((ward, index) => (
                            <option key={index} value={ward}>{ward}</option>
                        ))}
                    </select>
                </div>

                {/* Common Fields */}
                <select className="p-1 rounded bg-white border-8 border-white w-full text-black">
                    {challengeStatements.map((statement, index) => (
                        <option key={index} value={statement}>{statement}</option>
                    ))}
                </select>
                <select className="p-1 rounded bg-white border-8 border-white w-full text-black">
                    {hearAboutOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <select className="p-1 rounded bg-white border-8 border-white w-full text-black">
                    {jobInterestOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </form>
        </>
    );
};

export default TeamForm;
