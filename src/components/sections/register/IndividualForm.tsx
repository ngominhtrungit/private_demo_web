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
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">Register as INDIVIDUAL</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                    type="tel"
                    placeholder="Phone*"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                    required
                />
                <input
                    type="text"
                    placeholder="Full name*"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                    required
                />
                <input
                    type="email"
                    placeholder="Email*"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                    required
                />
                <input
                    type="text"
                    placeholder="Year of birth*"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                    required
                />
                <select className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base">
                    {universities.map((uni, index) => (
                        <option key={index} value={uni}>{uni}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="University (Other):"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white text-black text-sm md:text-base"
                />
                <input
                    type="text"
                    placeholder="Current company & position*"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base"
                    required
                />
                <select className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base">
                    {seniorityLevels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                    ))}
                </select>
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-white mb-2 text-sm md:text-base">Resume upload (If you are concerning a career path with VPBank)</label>
                    <input
                        type="file"
                        className="p-2 md:p-3 rounded bg-white border-2 border-white w-full text-black text-sm md:text-base"
                        accept=".pdf,.doc,.docx"
                    />
                </div>
                <input
                    type="url"
                    placeholder="LinkedIn profile (this help strengthen your application)"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base"
                />
                <input
                    type="url"
                    placeholder="Github repo (this help strengthen your application)"
                    className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 col-span-1 md:col-span-2">
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
                <select className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base">
                    {challengeStatements.map((statement, index) => (
                        <option key={index} value={statement}>{statement}</option>
                    ))}
                </select>
                <select className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base">
                    {hearAboutOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <select className="p-2 md:p-3 rounded bg-white border-2 border-white col-span-1 md:col-span-2 text-black text-sm md:text-base">
                    {jobInterestOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </form>
        </>
    );
};

export default IndividualForm;
