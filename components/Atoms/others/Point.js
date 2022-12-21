import React, { useEffect } from 'react';

const Point = (props) => {
    const active = props.active
    useEffect(()=>{
        console.log(active);
    }, [])
    return (
        <div className={active === true ? 'cursor-pointer h-4 w-4 bg-white opacity-100 rounded-full':'cursor-pointer h-4 w-4 bg-white opacity-40 rounded-full'}></div>
    );
};

export default Point;