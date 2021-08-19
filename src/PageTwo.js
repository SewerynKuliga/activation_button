import React from 'react';
import styled from 'styled-components';
import klopsikiSmall from './image/klopsikiSmall.PNG';
import Ingredients from './Ingredients';
import Preparation from './Preparation';
import KlopsikiImages from './KlopsikiImages';
import GoToRightSide from './GoToRightSide';
import "./PageTwo.css";

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

const Text = styled.div`
    width: 100%;
    margin-top: 5%;
    min-width: 600px;
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

            <Text>
                 <Ingredients />                {/*  Składniki na klopsiki */}
                 <Preparation />               {/* Formuła przygotowania klopsików  */}
            </Text>

            <KlopsikiImages />                 {/* Zdjęcia klopsików (2x) */}

            <GoToRightSide />                  {/* Instrukcja wraz z przyciskiem przekierowującym */}

            <Footer>Zdjęcia oraz napisy zaczerpnięte z kwestiasmaku.com</Footer>
        </div>
    )
}

export default PageTwo;
