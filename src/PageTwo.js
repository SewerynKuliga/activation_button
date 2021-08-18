import React from 'react';
import styled from 'styled-components';
import klopsikiSmall from './image/klopsikiSmall.PNG';
import klopsikiHuge from './image/klopsikiHuge.PNG';
import klopsikiPlate from './image/klopsikiPlate.PNG';
import Ingredients from './Ingredients';
import Preparation from './Preparation';


const KlopsikiTop = styled.img`
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 700px;
`

const Headline = styled.h1`
    position: relative;
    display: block;
    margin: 30px auto;
    width: fit-content;
`

const Footer = styled.footer`
    font-size: 10px;
`

function PageTwo() {
    return (
        <div className='pageTwo'>
            <KlopsikiTop
                src={klopsikiSmall}
                alt="małe zdjęcie klopsików"
            />

            <Headline>
                Domowy przepis na <em>klopsiki w sosie pomidorowym</em>
            </Headline>

            <Ingredients />
            <Preparation />

            <h3>PROPOZYCJA PODANIA:</h3>
            <h4>Z makaronem oraz tartym serem</h4>

            <img src={klopsikiHuge} alt="" width="600" />
            <img src={klopsikiPlate} alt="" width="600" />


            <Footer>Zdjęcia oraz napisy zaczerpnięte z kwestiasmaku.com</Footer>
        </div>
    )
}

export default PageTwo;
