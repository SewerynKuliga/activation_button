import React from 'react';
import styled from 'styled-components';

const Information = styled.div`
    position: relative;
    padding: 30px;
    display: block;
    margin-top: 8%;
    margin-left: 15%;

    width: 1200px;
    height: auto;

    border: 2px solid;
    color: white;
    font-size: 20px;
    filter: blur(0.5px);
    background-color: rgba(19, 19, 19, 0.788);
`

function EndingText() {
    return (
        <Information>
            W tym okienku jednak muszę przeprosić za przeskakiwanie po stronach i te pierwsze klopsiki,
            ale byłem głodny zaczynając ten projekt. Także jak to czytasz oznacza że jesteś osobą
            potrafiącą odpalić repo. Graty.
            Jako że jest to wersja "testowa" zapraszam Cię do projektu pod nazwą "riddles".
        </Information>
    )
}

export default EndingText
