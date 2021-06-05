import React from 'react';
import Project from './proyectos';
import { projects, hobbies} from '../Info';

const trabajos = () => {
    return (
        <>
            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="line pp-head">Laboratorios</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="line pp-head">Hobbies</h1>
                    </div>
                </>
                <div className="row">
                    {hobbies && hobbies.map((x) => 
                    <Project id={x.id} name={x.name} />
                    )}
                </div>
            </div>
        </>
    )
}

export default trabajos;