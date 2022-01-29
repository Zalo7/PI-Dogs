import React from 'react';
import '../styles/NoResults.css'

export default function NoResults() {
    return(
        <div>
            <p className='escapado'>El perro se escapó!</p>
            <img className='perrito'
            src="https://animalpoisons.com.au/wp-content/uploads/2019/11/dog-ques-448x344.png"
            alt=""
            width="70%"
            height="70%"
          />
        </div>
    )
}