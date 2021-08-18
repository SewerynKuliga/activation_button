import React from 'react';
import speakingPerson from './image/speakingPerson.png';
import styled from 'styled-components';


const Image = styled.img`
    position: relative;
    display: block;
    width: 300px;
    margin-top: 10px;
    float: right;
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
