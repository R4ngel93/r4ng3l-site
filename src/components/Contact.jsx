//Import
import React from 'react'

//Main
const Contact = () => {
    return(
        <div>
            {/* Contact */}
            <div className='tab_01'>
                <span className='level_01'>Contact</span>
                <span className='symbol'>:&#123;</span>
            </div>    

            {/* Name */}
            <div className='tab_02'>
                <span className='level_02'>name</span>
                <span className='symbol'>: </span> 
                <span className='level_03'>"Oscar Emmanuel Rangel Calderón"</span>
                <span className='symbol'>,</span>
            </div>

            {/* Email */}
            <div className='tab_02'>
                <span className='level_02'>email</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <span className='level_03'>"rangel.oscar93@gmail.com"</span>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <span className='level_03'>"rangel93@protonmail.com"</span>
                    </div>
                </div>

                <span className="symbol">&#93;,</span>
            </div>

            {/* Phone */}
            <div className='tab_02'>
                <span className='level_02'>phone</span>
                <span className='symbol'>: </span> 
                <span className='level_03'>"55 6476 8275"</span>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;,</span>
            </div>   
        </div>
    );
}

//Export
export default Contact