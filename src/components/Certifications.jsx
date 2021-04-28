//Import
import React from 'react'

//Main
const Certifications = () => {
    return(
        <div>
            
            {/* Certifications */}
            <div className='tab_01'>
                <span className='level_01'>Certifications</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* freeCodeCamp */}
            <div className='tab_02'>
                <span className='level_02'>freeCodeCamp</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/responsive-web-design' target='blank_'>"Responsive Web Design"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/javascript-algorithms-and-data-structures' target='blank_'>"JavaScript Algorithms and Data Structures"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/front-end-libraries' target='blank_'>"Front End Libraries"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/data-visualization' target='blank_'>"Data Visualization"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/apis-and-microservices' target='blank_'>"APIs and Microservices"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/information-security-and-quality-assurance' target='blank_'>"Legacy Information Security and Quality Assurance"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.freecodecamp.org/certification/r4ng3l/full-stack' target='blank_'>"Legacy Full Stack"</a>
                    </div>
                </div>

                <span className="symbol">&#93;,</span>
            </div>

            {/* HackerRank */}
            <div className='tab_02'>
                <span className='level_02'>HackerRank</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <a className='level_03' href='https://www.hackerrank.com/certificates/6ad3de90f584' target='blank_'>"Python (Basic)"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://www.hackerrank.com/certificates/d5ce47744f79' target='blank_'>"Problem Solving (Basic)"</a>
                        <span className='symbol'></span>
                    </div>
                </div>

                <span className="symbol">&#93;</span>
            </div>

            <div className='tab_01'>
                <span className='symbol'>&#125;,</span>
            </div>  

        </div>
    );
}

//Export
export default Certifications
