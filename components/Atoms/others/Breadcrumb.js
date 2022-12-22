import React, { useEffect } from 'react';

const Breadcrumb = (props) => {
    const list = props.list

    useEffect(()=>{
        console.log(list.length);
    }, [])

    const style = "text-purple text-xs md:text-sm font-bold"

    return (
        <div className='flex'>
            {
                list.map((item, idx)=>{
                    if(idx < list.length - 1){
                        return(
                            <p key={idx} className={style} ><span className='underline underline-offset-2'>{item.toUpperCase()}</span> &gt;  &nbsp; </p>
                        )
                    }
                    else{
                        return(
                            <p key={idx} className={style} >{item.toUpperCase()}</p>
                        )
                    }
                })
            }
        </div>
    );
};

export default Breadcrumb;