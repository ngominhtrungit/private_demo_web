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

const IndividualForm: React.FC = () => {
    return (
        <>
            <h2 className="text-white text-2xl font-bold mb-6">Register as INDIVIDUAL</h2>
            <form className="grid grid-cols-2 gap-2">
                <input
                    type="tel"
                    placeholder="Phone*"
                    className="p-1 rounded bg-white border-8 border-white text-black"
                    required
                />
                <input
                    type="text"
                    placeholder="Full name*"
                    className="p-1 rounded bg-white border-8 border-white text-black"
                    required
                />
                <input
                    type="email"
                    placeholder="Email*"
                    className="p-1 rounded bg-white border-8 border-white text-black"
                    required
                />
                <input
                    type="text"
                    placeholder="Year of birth*"
                    className="p-1 rounded bg-white border-8 border-white text-black"
                    required
                />
                <select className="p-1 rounded bg-white border-8 border-white text-black">
                    {universities.map((uni, index) => (
                        <option key={index} value={uni}>{uni}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="University (Other):"
                    className="p-1 rounded bg-white border-8 border-white text-black"
                />
                <input
                    type="text"
                    placeholder="Current company & position*"
                    className="p-1 rounded bg-white border-8 border-white col-span-2 text-black"
                    required
                />
                <select className="p-1 rounded bg-white border-8 border-white col-span-2 text-black">
                    {seniorityLevels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                    ))}
                </select>
                <div className="col-span-2">
                    <label className="block text-white mb-2">Resume upload (If you are concerning a career path with VPBank)</label>
                    <input
                        type="file"
                        className="p-1 rounded bg-white border-8 border-white w-full text-black"
                        accept=".pdf,.doc,.docx"
                    />
                </div>
                <input
                    type="url"
                    placeholder="LinkedIn profile (this help strengthen your application)"
                    className="p-1 rounded bg-white border-8 border-white col-span-2 text-black"
                />
                <input
                    type="url"
                    placeholder="Github repo (this help strengthen your application)"
                    className="p-1 rounded bg-white border-8 border-white col-span-2 text-black"
                />
                <div className="grid grid-cols-3 gap-4 col-span-2">
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
                <select className="p-1 rounded bg-white border-8 border-white col-span-2 text-black">
                    {challengeStatements.map((statement, index) => (
                        <option key={index} value={statement}>{statement}</option>
                    ))}
                </select>
                <select className="p-1 rounded bg-white border-8 border-white col-span-2 text-black">
                    {hearAboutOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <select className="p-1 rounded bg-white border-8 border-white col-span-2 text-black">
                    {jobInterestOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </form>
        </>
    );
};

export default IndividualForm;
