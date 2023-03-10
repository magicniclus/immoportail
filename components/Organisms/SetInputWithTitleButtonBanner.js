import React from 'react';
import SetInputWithTitleAndButton from '../Molecules/SetInputWithTitleAndButton'

const SetInputWithTitleButtonBanner = (props) => {
    const disabled = props.disabled

    return (
        <div className='px-5 md:px-40 py-10 md:py-16'>
            <div className="lg:w-8/12">
                <SetInputWithTitleAndButton disabled={disabled} textWithColor="gratuitement en ligne" bgColor="purple" titleColor="white" buttonVersion="secondary" colorInput="white" />
            </div>
        </div>
    );
};

export default SetInputWithTitleButtonBanner;