import React from 'react';

interface RegisterHeaderProps {
    activeTab: 'individual' | 'team';
    setActiveTab: (tab: 'individual' | 'team') => void;
}

const RegisterHeader: React.FC<RegisterHeaderProps> = ({ activeTab, setActiveTab }) => {
    return (
        <>
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 px-4">
                <h1 className="font-orbitron text-outline text-shadow-outline text-2xl md:text-3xl lg:text-4xl font-bold text-green-50 mb-4 md:mb-6">
                    Register Here!
                </h1>
                <p className="text-white text-xs md:text-sm mb-2 max-w-4xl mx-auto">
                    The standard team size is 3 to 5 members. If you register as an individual, the organizers will group you with
                </p>
                <p className="text-white text-xs md:text-sm mb-3 md:mb-4 max-w-4xl mx-auto">
                    other participants to form a team.
                </p>
                <p className="text-white italic text-xs md:text-sm max-w-4xl mx-auto">
                    This event targets external participants who have not been VPBankers yet.
                </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 px-4">
                <div
                    onClick={() => setActiveTab('individual')}
                    className={`px-4 md:px-8 lg:px-12 py-3 md:py-4 rounded-lg text-sm md:text-lg lg:text-xl font-bold border-2 transition-all cursor-pointer text-center ${
                        activeTab === 'individual'
                            ? 'bg-green-500 text-white border-green-400'
                            : 'bg-white text-green-600 border-green-300 hover:bg-green-50'
                    }`}
                >
                    Register as INDIVIDUAL ↓
                </div>
                <div
                    onClick={() => setActiveTab('team')}
                    className={`px-4 md:px-8 lg:px-12 py-3 md:py-4 rounded-lg text-sm md:text-lg lg:text-xl font-bold border-2 transition-all cursor-pointer text-center ${
                        activeTab === 'team'
                            ? 'bg-green-500 text-white border-green-400'
                            : 'bg-white text-green-600 border-green-300 hover:bg-green-50'
                    }`}
                >
                    Register as TEAM ↓
                </div>
            </div>
        </>
    );
};

export default RegisterHeader;
