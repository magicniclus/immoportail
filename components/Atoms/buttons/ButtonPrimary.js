import React, { useState } from 'react';

const ButtonPrimary = (props) => {
    const title = props.title
    const version = props.version
    const callback = props.callback

    const classDesign = {
        primary: "text-base px-10 py-2 bg-purple rounded-3xl text-white hover:shadow-md hover:shadow-slate-200 transition-shadow",
        secondary: "text-base px-10 py-2 bg-white rounded-3xl text-purple hover:shadow-md hover:shadow-slate-200 transition-shadow"
    }

    return (
        <button className={version !== undefined && version !== null ? classDesign[version] : classDesign.primary}>
            {title}
        </button>
    );
};

export default ButtonPrimary;