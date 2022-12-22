import React from 'react';
import Breadcrumb from '../Atoms/others/Breadcrumb';

const BreadcrumbContainer = (props) => {
    const list = props.list

    return (
        <div className='w-full py-10 md:py-16'>
            <div className="px-5 md:px-40">
                <Breadcrumb  list={list}/>
            </div>
        </div>
    );
};

export default BreadcrumbContainer;