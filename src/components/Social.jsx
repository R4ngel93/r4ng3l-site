//Import
import React from 'react'

//Main
const Social = () => {
    return(
        <div>
            {/* Social */}
            <div className='tab_01'>
                <span className='level_01'>Social</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* Linkedin */}
            <div className='tab_02'>
                <span className='level_02'>linkedin</span>
                <span className='symbol'>: </span> 
                <a className='level_03' href='https://www.linkedin.com/in/oscar-rangel-9a09ba1a8/' target='blank_' >"oscar-rangel-9a09ba1a8"</a>
                <span className='symbol'>,</span>
            </div>    

            {/* Twitter */}
            <div className='tab_02'>
                <span className='level_02'>twitter</span>
                <span className='symbol'>: </span> 
                <a className='level_03' href='https://twitter.com/OscarRa65705186' target='blank_' >"@OscarRa65705186"</a>
                <span className='symbol'>,</span>
            </div>

            {/* Github */}
            <div className='tab_02'>
                <span className='level_02'>github</span>
                <span className='symbol'>: </span> 
                <a className='level_03' href='https://github.com/R4ngel93' target='blank_' >"R4ngel93"</a>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;</span>
            </div>  

        </div>
    );
}

//Export
export default Social