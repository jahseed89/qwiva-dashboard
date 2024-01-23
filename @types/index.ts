import React, { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    disable: boolean;
    additionalStyles: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}

export interface InputElementProps {
    type: string;
    value: string;
    placeholder: string;
    required: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

export interface MainLayoutProps {
    children: ReactNode
}

export interface CareersCardProps {
    icon: ReactNode;
    title: string;
    figue: string;
    rate: number;
}

export interface VeiwersCardProps {
    children: ReactNode
}