import Navbar from "../components/Navbar"

import Header from "../components/Header"

import PromotionSection from "../components/PromotionSection"

import Content from "../constants/Content.js"

import SectionTemplate from "../components/Reusable/SectionTemplate"
import Card from "../components/Reusable/Card"
import Button from "../components/Reusable/Button"

import Footer from "../components/Footer"


import DigitalCurrency from "../assets/digital_currency.svg"
import Dashboard from "../assets/dashboard.jpg"

const Index = () => (
    <>
        <Navbar />
        <Header />
        
        <SectionTemplate title={Content.section1.title}
        paragraph={Content.section1.paragraph} footer={<Button styling="primary" > Open Account </Button>}>
            
            {
                Content.section1.cards.map(card => <Card imgSrc={card.imgSrc} title={card.title}
                    paragraph={card.paragraph} key={card.key} />)
            }

        </SectionTemplate>
        
        <PromotionSection imgSrc={DigitalCurrency} title={Content.section2.title} paragraph={Content.section2.paragraph}
        list={Content.section2.cards} />
        
        <SectionTemplate title={Content.section3.title}>
            {
                Content.section3.cards.map(card => 
                <Card title={card.title} imgSrc={card.imgSrc} paragraph={card.paragraph} key={card.key} />)
            }
        </SectionTemplate>
        
        <SectionTemplate title={Content.section4.title} 
        paragraph={Content.section4.paragraph}>
            <img src={Dashboard} alt="Dashboard" />
        </SectionTemplate>
        
        <SectionTemplate title={Content.section5.title}>
            {
                Content.section5.cards.map(card => <Card widthShadow={true} key={card.key}
                    title={card.title} paragraph={card.paragraph} footer={<Button styling={card.styling} > {card.btnText} </Button>} />)
            }

        </SectionTemplate>

        <SectionTemplate title={Content.section6.title}
        paragraph={Content.section6.paragraph} >
            <Button styling="primary" > Open Account </Button>
        </SectionTemplate>

        <SectionTemplate title={Content.section7.title}
        paragraph={Content.section7.paragraph}>
            <form onSubmit={e => e.preventDefault()} >
                <input type="email" required={true} placeholder="Your email here" />
                <Button type="submit" styling="primary" > Subscribe </Button>
            </form>
        </SectionTemplate>
        <Footer />
    </>
)

export default Index