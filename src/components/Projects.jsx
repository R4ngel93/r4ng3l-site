//Import
import React from 'react'

//Main
const Projects = () => {
    return(
        <div>
            {/* Projects */}
            <div className='tab_01'>
                <span className='level_01'>Projects</span>
                <span className='symbol'>:&#123;</span>
            </div>

            {/* Front End */}
            <div className='tab_02'>
                <span className='level_02'>front_end</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <a className='level_03' href='https://r4ngel93.github.io/react-calculator/' target='blank_' rel="noreferrer">"React Calculator"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://r4ngel93.github.io/pomodoro-clock/' target='blank_' rel="noreferrer">"Pomodoro Clock"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://r4ngel93.github.io/rock-paper-scissors/' target='blank_' rel="noreferrer">"Rock, Paper & Scissors"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://r4ngel93.github.io/random-quote-machine/index.html' target='blank_' rel="noreferrer">"Random Quote Machine"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://r4ngel93.github.io/react-drum-machine/' target='blank_' rel="noreferrer">"React Drum Machine"</a>
                    </div>
                </div>

                <span className="symbol">&#93;,</span>
            </div>

            {/* Back End */}
            <div className='tab_02'>
                <span className='level_02'>back_end</span>
                <span className='symbol'>:&#91;</span> 
                
                <div className='tab_03'>
                    <div>
                        <a className='level_03' href='https://mern-notes-app-v1.herokuapp.com/' target='_blank' rel="noreferrer">"Notes App"</a>
                        <span className='symbol'>,</span>
                    </div>
                    <div>
                        <a className='level_03' href='https://socket-app-v3.herokuapp.com/' target='_blank' rel="noreferrer">"Chat Room"</a>
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
export default Projects