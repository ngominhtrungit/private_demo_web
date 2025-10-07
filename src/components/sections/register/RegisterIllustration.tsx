import React from 'react';

const RegisterIllustration: React.FC = () => {
    return (
        <div className="hidden lg:block ml-8">
            <div className="w-80 h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-6 relative overflow-hidden">
                {/* 3D Isometric Tech Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        {/* Cloud */}
                        <div className="absolute top-0 right-4 w-16 h-8 bg-green-300 rounded-full opacity-80"></div>

                        {/* Main Server Stack */}
                        <div className="transform rotate-12 space-y-1">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-24 h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-sm shadow-lg"
                                    style={{ marginLeft: `${i * 2}px` }}
                                ></div>
                            ))}
                        </div>

                        {/* Monitor */}
                        <div className="absolute -left-16 top-8 transform -rotate-12">
                            <div className="w-20 h-14 bg-gray-800 rounded border-2 border-gray-600">
                                <div className="w-16 h-10 bg-green-400 m-2 rounded opacity-90"></div>
                            </div>
                            <div className="w-2 h-4 bg-gray-600 mx-auto"></div>
                            <div className="w-8 h-2 bg-gray-600 mx-auto rounded-b"></div>
                        </div>

                        {/* Laptop */}
                        <div className="absolute -right-12 top-16 transform rotate-6">
                            <div className="w-16 h-10 bg-gray-700 rounded-t border border-gray-500">
                                <div className="w-14 h-8 bg-green-300 m-1 rounded opacity-90"></div>
                            </div>
                            <div className="w-16 h-1 bg-gray-600 rounded-b"></div>
                        </div>

                        {/* Mobile Phone */}
                        <div className="absolute -left-8 top-20 transform -rotate-6">
                            <div className="w-6 h-12 bg-gray-800 rounded-lg border border-gray-600">
                                <div className="w-4 h-8 bg-green-400 m-1 rounded opacity-90"></div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-2 left-8 w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                        <div className="absolute top-6 left-12 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
                        <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-green-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterIllustration;
