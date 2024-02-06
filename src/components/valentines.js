import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function Valentines(){
    const valentinesDayNameHash = {
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
            name: "Teddy Day",
            filepath: "",
            message: ""
        },
        "1102": {
            name: "Promise Day",
            filepath: "",
            message: ""
        },
        "1202": {
            name: "Hug Day",
            filepath: "",
            message: ""
        },
        "1302": {
            name: "Kiss Day",
            filepath: "",
            message: ""
        },
        "1402": {
            name: "Valentine's Day",
            filepath: "",
            message: ""
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
                <Col className='text-center msg-text pt-1'><span></span>{valentinesDayNameHash[ddmm].message}</Col>
            </Row>
        </Container>
    );
}

export default Valentines;