'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import RegisterHeader from './register/RegisterHeader';
import IndividualForm from './register/IndividualForm';
import TeamForm from './register/TeamForm';
import RegisterIllustration from './register/RegisterIllustration';

const SectionRegister: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'individual' | 'team'>('individual');

    return (
        <div className="py-6 md:py-8 px-4" style={{
            background: 'linear-gradient(150deg, #45e083 0%, #2586c3 40%, #329854 70%, #329854 100%)'
        }}>
            <div className="max-w-6xl mx-auto">
                <RegisterHeader activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Registration Forms */}
                <div className="flex flex-col lg:flex-row justify-center gap-6">
                    <div className="bg-green-600 rounded-lg p-4 md:p-6 lg:p-8 border-2 border-green-400 w-full max-w-4xl">
                        {activeTab === 'individual' ? <IndividualForm /> : <TeamForm />}

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6 md:mt-8">
                            <Button
                                hasZoomAnimation={true}
                                variant="primary"
                                size="lg"
                                className="bg-green-400 px-8 md:px-12 lg:px-16 py-3 md:py-4 text-lg md:text-xl font-bold rounded-full hover:bg-green-300 transition-colors w-full max-w-xs"
                            >
                                Register
                            </Button>
                        </div>
                    </div>

                    {/* Side Illustration - Show on desktop when Individual tab is active */}
                    {activeTab === 'individual' && (
                        <div className="hidden lg:block">
                            <RegisterIllustration />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionRegister;
