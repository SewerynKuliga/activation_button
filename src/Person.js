import React from 'react';
import speakingPerson from './image/speakingPerson.png';
import styled from 'styled-components';


const Image = styled.img`
    position: relative;
    display: block;
    margin-left: 55%;
    margin-top: 10px;
    width: 300px;
`

function Person() {
    return (
        
        <Image 
            src={speakingPerson} 
            alt="mówiąca osoba" 
        />
        
    )
}

export default Person;
