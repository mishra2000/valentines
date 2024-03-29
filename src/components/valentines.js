import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomButton from './button';
function Valentines(){
    const urlSearchString = window.location.search;

    const params = new URLSearchParams(urlSearchString);
    const phone = params.get('phone')
    const msg = params.get('msg')
    const valentinesDayNameHash = {
        "phone": phone,
        "0602": {
            name: "Sending u Virtual Roses",
            filepath: "images/rose.png",
            message: "Wishing you a bouquet of love and joy on this Day. May your life be as vibrant and beautiful as these lovely red flowers"
        },
        "0702": {
            name: "Sending u Virtual Roses",
            filepath: "images/rose.png",
            message: "Wishing you a bouquet of love and joy on this Day. May your life be as vibrant and beautiful as these lovely red flowers"
        },
        "0802": {
            name: "will u be my valentine?",
            filepath: "images/panda.png",
            message: "And if the stars should ever die, we'll make our own light, you and I."
        },
        "0902": {
            name: "Want some chocolate babe?",
            filepath: "images/chocolate.png",
            message: "Do you like it dark or milky? I can definitely make an adjustment for you"
        },
        "1002": {
            name: "Are you my teddy?",
            filepath: "images/teddy-12.png",
            message: "There is only one person in the entire world who can rival teddy bears in terms of cuteness, and that person is you"
        },
        "1102": {
            name: "Mai Likh ke deta hu !!",
            filepath: "images/promise.png",
            message: "As long as the sun shines bright, the stars twinkle in the night, I will only be yours forever"
        },
        "1202": {
            name: "Lag ja Galee..",
            filepath: "images/hug.png",
            message: "Whenever you are this far, there are the memories of the time you have hugged that brings smile on my face"
        },
        "1302": {
            name: "Muaaaah...",
            filepath: "images/kiss.png",
            message: "A tender kiss on your forehead to wake you up, a gentle kiss on your cheeks to make you happy"
        },
        "1402": {
            name: "Happy Valentines Day !!!",
            filepath: "images/valentines.png",
            message: "All the measurement units in this world can fail when it comes to measuring my Love for you"
        },

    }
    const currentDate = (new Date());
    const currentDay = currentDate.getDate().toString().padStart(2, '0');
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const ddmm = currentDay+currentMonth
    

    return (
        <Container className='pt-4 valentine-msg'>
            
            <Row>
                <Col className='text-center'><span>hey beautiful!!</span></Col>
            </Row>
            <Row>
                <Col className='col-1 col-sm-4'></Col>
                <Col className='col-10 col-sm-4 text-center'><img src={valentinesDayNameHash[ddmm].filepath} alt="BigCo Inc. logo" className='mx-auto rose-img'/></Col>
                <Col className='col-1 col-sm-4'></Col>
            </Row>
            <Row>
                <Col className='text-center'><span>{valentinesDayNameHash[ddmm].name}</span></Col>
            </Row>
            <Row>
                <Col className='text-center msg-text pt-1'><span>{valentinesDayNameHash[ddmm].message}</span></Col>
            </Row>
            <CustomButton phone={phone} msg={msg}></CustomButton>
        </Container>
    );
}

export default Valentines;