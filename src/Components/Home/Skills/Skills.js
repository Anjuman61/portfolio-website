import React from 'react';
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFire,} from '@fortawesome/free-solid-svg-icons'
import { faCss3, faEnvira, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <div className='skills-container my-3' id='skills'>
         <div className='container mt-4'>
         <h1 className='text-center'>My Skills</h1>
            <div className='skills mt-5'>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faCode} size="4x" />
            <p>Coding</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faHtml5} color='#FF7F50' size="4x"   />
            <p>HTML5</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faCss3} color='#4169E1' size="4x"  />
            <p>CSS3</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faJs} color='#FFD700' size="4x"  />
            <p>JavaScript</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faReact} color='#87CEEB' size="4x"  />
            <p>React</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faFire} color='#FFD700' size="4x"  />
            <p>Firebase</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faEnvira} color='#008000' size="4x"   />
            <p>MongoDB</p>
            </div>
            <div className='single-skill'>
            <FontAwesomeIcon icon={faNode} color='#2E8B57' size="4x"   />
            <p>NodeJs</p>
            </div>
            </div>
         </div>
        </div>
    );
};

export default Skills;