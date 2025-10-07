'use client';

import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    hasZoomAnimation?: boolean;
}

export default function Button({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
    size = 'md',
    hasZoomAnimation = false
}: ButtonProps) {
    const baseClasses = 'font-bold rounded-full shadow-sm transition focus:outline-none';

    const variantClasses = {
        primary: 'bg-white text-[#31B675]',
        secondary: 'bg-[#31B675] text-white'
    };

    const sizeClasses = {
        sm: 'px-4 py-1 text-sm',
        md: 'px-5 py-2',
        lg: 'px-6 py-3 text-lg'
    };

    const animationClass = hasZoomAnimation ? 'zoom-animation' : '';

    const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClass} ${className}`;

    return (
        <button
            className={finalClassName}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
