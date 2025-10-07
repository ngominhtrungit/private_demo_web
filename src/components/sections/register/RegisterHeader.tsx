import React from 'react';

interface RegisterHeaderProps {
    activeTab: 'individual' | 'team';
    setActiveTab: (tab: 'individual' | 'team') => void;
}

const RegisterHeader: React.FC<RegisterHeaderProps> = ({ activeTab, setActiveTab }) => {
    return (
        <>
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="font-orbitron text-outline text-shadow-outline text-3xl font-bold text-green-50 mb-6">
                    Register Here!
                </h1>
                <p className="text-white text-sm mb-2">
                    The standard team size is 3 to 5 members. If you register as an individual, the organizers will group you with
                </p>
                <p className="text-white text-sm mb-4">
                    other participants to form a team.
                </p>
                <p className="text-white italic text-sm">
                    This event targets external participants who have not been VPBankers yet.
                </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-8 mb-8">
                <div
                    onClick={() => setActiveTab('individual')}
                    className={`px-12 py-4 rounded-lg text-xl font-bold border-2 transition-all cursor-pointer ${
                        activeTab === 'individual'
                            ? 'bg-green-500 text-white border-green-400'
                            : 'bg-white text-green-600 border-green-300'
                    }`}
                >
                    Register as INDIVIDUAL ↓
                </div>
                <div
                    onClick={() => setActiveTab('team')}
                    className={`px-12 py-4 rounded-lg text-xl font-bold border-2 transition-all cursor-pointer ${
                        activeTab === 'team'
                            ? 'bg-green-500 text-white border-green-400'
                            : 'bg-white text-green-600 border-green-300'
                    }`}
                >
                    Register as TEAM ↓
                </div>
            </div>
        </>
    );
};

export default RegisterHeader;
