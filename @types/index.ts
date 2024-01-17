import React from "react";

export interface ButtonProps {
    btnText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}

export interface InputElementProps {
    type: string;
    value: string;
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}