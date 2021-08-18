import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 20%;
    height: 500px;
`

const Header = styled.h3`
    display: inline;
`

const Portion = styled.p`
    display: inline;
    margin-left: 15px;
`

function Ingredients() {
    return (
        <Container>
            <Header>SKŁADNIKI</Header> <Portion>/ 4 porcje</Portion>
                <p>500 g mielonego mięsa (z indyka, cielęcego lub wieprzowego np. z szynki)</p>
                <p>1 cebula</p>
                <p>2 ząbki czosnku</p>
                <p>1 łyżeczka suszonego oregano, 1/2 łyżeczki papryki w proszku</p>
                <p>3 łyżki bułki tartej lub ugotowanej kaszy jaglanej</p>
                <p>1 jajko</p>
                <p>1 łyżka sosu sojowego (opcjonalnie)</p>
                <p>125 ml bulionu drobiowego lub rosołu</p>
                <p>oliwa, masło</p>
                <p>350 ml przecieru pomidorowego, passaty z butelki lub kartonu</p>

        </Container>
    )
}

export default Ingredients;
