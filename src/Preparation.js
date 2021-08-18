import React from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 75%;
    margin-left: 5%;
    `

function Preparation() {
    return (
        <Container>
            <h3>
                PRZYGOTOWANIE:
            </h3>

            <p> 
                <ArrowRightIcon />
                Na patelni na łyżce oliwy zeszklić pokrojoną w kosteczkę cebulę, pod koniec dodać starty 1 ząbek czosnku oraz 1 łyżkę masła,
                suszone oregano i paprykę w proszku, wymieszać i chwilę razem podsmażyć. Zdjąć z patelni i zmielić razem z mięsem
                lub drobniej posiekać na desce.
            </p>
            <p>
                <ArrowRightIcon />
                Zmielone mięso wraz z podsmażoną cebulą umieścić w misce. Dodać bułkę tartą lub ugotowaną kaszę, jajko, sos sojowy,
                doprawić solą oraz pieprzem i dokładnie wyrobić. Wilgotnymi dłońmi uformować nieduże pulpeciki.
            </p>
            <p>
                <ArrowRightIcon />
                Rozgrzać natłuszczoną oliwą patelnię i włożyć pulpeciki. Gdy się zrumienią od spodu przewrócić na drugą stronę i powtórzyć smażenie.
                Pod koniec na patelnię dodać starty drugi ząbek czosnku i lekko go zrumienić.
            </p>
            <p>
                <ArrowRightIcon />
                Na patelnię z pulpecikami wlać gorący bulion, przykryć pokrywą i gotować przez ok. 5 - 7 minut,
                w międzyczasie potrząsnąć patelnią w celu przemieszania pulpecików.
            </p>
            <p>
                <ArrowRightIcon />
                Dodać przecier pomidorowy i zagotować. Gotować bez przykrycia przez około 10 minut
                (jeśli używaliśmy indyka) lub ok. 15 minut (w przypadku innego mięsa). W międzyczasie 1 - 2 razy zamieszać.
            </p>
            <p>
                <ArrowRightIcon />
                Sos spróbować i doprawić w razie potrzeby solą, pieprzem, cukrem i suszonym oregano. Podawać z makaronem i tartym serem.
            </p>
        </Container>
    )
}

export default Preparation
