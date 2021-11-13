import React, {useState} from 'react';
import {Container} from "../../components/Global.styled";
import {IntroWrapper,IntroLogo,IntroText,IntroTextTitle,IntroTextDescription,CardWrapper,CardWrapperBlock,CardTextTitle,CardTextDescription,CardButtonWrapper,Button, ComentsSection, ComentsSectionName, ComentsSectionThanks, ComentsSectionDescription, ComentsBlock} from "./Home.styled";
import HomePageLogo from "../../icons/homepage_logo.jpg";


import PostList from './parts/PostList/PostList';
import ComentForm from './parts/ComentForm/ComentForm';


function Home() {
    const [coments, setComents] = useState([
        {id: 1, time: '08.10.2021', user: 'Andi', text: 'I have been using the services of this online store for the second year, the quality is great'},
        {id: 2, time: '12.05.2021', user: 'Jeims', text: 'I have ordered a rope for my daughter, she is satisfied, thank you'},
        {id: 3, time: '04.02.2020', user: 'Lola', text: 'Very disappointing tech-support, is there someone here?'}
    ])

    const createComent = (newComent) =>{
        setComents([newComent, ...coments])
    }

    
    return (
        <Container>
            <IntroWrapper>
                <IntroLogo src = {HomePageLogo} alt="Home Page Logo"/>
                <IntroText>
                    <IntroTextTitle>Great choice of goods!</IntroTextTitle>
                    <IntroTextDescription>In our store you can find anything you want!<br/>
                    We provide a wide range of quality products of famous brands from all over the world. <br/>
                    I am sure, that in our store you will exactly find what you have been looking for a long time!
                    </IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardWrapper>
                <CardWrapperBlock>
                    <CardTextTitle>Reliability</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
                <CardWrapperBlock>
                    <CardTextTitle>Faithfulness</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione.</CardTextDescription>
                </CardWrapperBlock>
                <CardWrapperBlock>
                    <CardTextTitle>Quality</CardTextTitle>
                    <CardTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos et expedita iure minus temporibus. Asperiores blanditiis
                        corporis dolore earum fugit laudantium nam perspiciatis, reiciendis
                        repellendus unde. Atque delectus exercitationem ratione. </CardTextDescription>
                </CardWrapperBlock>
            </CardWrapper>
            <CardButtonWrapper>
                <Button>View more</Button>
            </CardButtonWrapper>



            <ComentsSection>
                <ComentsSectionName>Comments</ComentsSectionName>
                <ComentsSectionDescription>We will definitely take your opinion into account in order to become better</ComentsSectionDescription>
                <ComentForm create={createComent}/>
                <ComentsBlock>
                    <PostList coments={coments}/>
                </ComentsBlock>
                <ComentsSectionThanks>Thanks for your comments</ComentsSectionThanks>
            </ComentsSection>
            


        </Container>
    );
}

export default Home;

//============= =========== ============ ============ 