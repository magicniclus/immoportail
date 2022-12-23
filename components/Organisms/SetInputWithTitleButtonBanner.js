import React from 'react';
import SetInputWithTitleAndButton from '../Molecules/SetInputWithTitleAndButton'

const SetInputWithTitleButtonBanner = () => {
    return (
        <div className='px-5 md:px-40 py-10 md:py-16'>
            <div className="lg:w-8/12">
                <SetInputWithTitleAndButton bgColor="purple" titleColor="white" buttonVersion="secondary" colorInput="white" />
            </div>
        </div>
    );
};

export default SetInputWithTitleButtonBanner;