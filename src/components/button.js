import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function CustomButton(props){
    const msg = props.msg || "Call me"
    if (props.phone === undefined)
        return ""
    return (
        <Row>
            <Col className='text-center msg-text pt-4'><Button variant="outline-success"><a href={"tel:"+props.phone}>{msg}</a></Button></Col>
        </Row>
    )
}

export default CustomButton;