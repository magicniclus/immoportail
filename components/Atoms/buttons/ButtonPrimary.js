import React, { useState } from 'react';

const ButtonPrimary = (props) => {
    const text = props.text
    const version = props.version
    const callback = props.callback
    const disabled = props.disabled || false

    const classDesign = {
        primary: disabled ? "text-base px-10 py-2 bg-purpleLight rounded-3xl text-white hover:shadow-md hover:shadow-slate-200 transition-shadow": "text-base px-10 py-2 bg-purple rounded-3xl text-white hover:shadow-md hover:shadow-slate-200 transition-shadow",
        secondary: disabled ? "text-base px-10 py-2 bg-white rounded-3xl text-purple hover:shadow-md hover:shadow-slate-200 transition-shadow":"text-base px-10 py-2 bg-white rounded-3xl text-purple hover:shadow-md hover:shadow-slate-200 transition-shadow"
    }

    return (
        <button disabled={disabled} className={version !== undefined && version !== null ? classDesign[version] : classDesign.primary}>
            {text}
        </button>
    );
};

export default ButtonPrimary;