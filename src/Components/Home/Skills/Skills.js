import React from 'react';
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFire,} from '@fortawesome/free-solid-svg-icons'
import { faCss3, faEnvira, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <div>
            <h1>My Skills</h1>

            <FontAwesomeIcon icon={faCode} size="6x" />
            <FontAwesomeIcon icon={faHtml5} size="6x"   />
            <FontAwesomeIcon icon={faCss3} size="6x"  />
            <FontAwesomeIcon icon={faJs} size="6x"  />
            <FontAwesomeIcon icon={faReact} size="6x"  />
            <FontAwesomeIcon icon={faFire} size="6x"  />
            <FontAwesomeIcon icon={faEnvira} size="6x"   />
            
        </div>
    );
};

export default Skills;