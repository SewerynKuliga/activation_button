import React from 'react';
import klopsikiHuge from './image/klopsikiHuge.PNG';
import klopsikiPlate from './image/klopsikiPlate.PNG';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-width: 600px;
`
const Image = styled.img`
    width: 50%;
`
const Header = styled.h3`
    margin-top: 5%;
    margin-left: 5%;
`

const Offer = styled.h4`
    margin-left: 5%;
`

function KlopsikiImages() {
    return (
        <Container>
            <Header>PROPOZYCJA PODANIA:</Header>
            <Offer>Z makaronem oraz tartym <span style={{ color: "rgb(240, 236, 26)" }}>serem</span></Offer>

            <Image src={klopsikiHuge} alt=""  />
            <Image src={klopsikiPlate} alt=""  />
        </Container>
    )
}

export default KlopsikiImages;
