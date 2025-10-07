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
        <div className="py-16 px-4" style={{
            background: 'linear-gradient(150deg, #45e083 0%, #2586c3 40%, #329854 70%, #329854 100%)'
        }}>
            <div className="max-w-6xl mx-auto">
                <RegisterHeader activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Registration Forms */}
                <div className="flex justify-center">
                    <div className="bg-green-600 rounded-lg p-8 border-2 border-green-400 max-w-4xl w-full">
                        {activeTab === 'individual' ? <IndividualForm /> : <TeamForm />}

                        {/* Submit Button */}
                        <div className="flex justify-center mt-8">
                            <Button
                                hasZoomAnimation={true}
                                variant="primary"
                                size="lg"
                                className="bg-green-400 px-16 py-4 text-xl font-bold rounded-full"
                            >
                                Register
                            </Button>
                        </div>
                    </div>

                    {/* Side Illustration - Only show when Individual tab is active */}
                    {activeTab === 'individual' && <RegisterIllustration />}
                </div>
            </div>
        </div>
    );
};

export default SectionRegister;
