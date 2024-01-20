import TEXT_CONSTANTS from './utilities/constants';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function ShortIntro(){
    return (
        <Col xs={12}>
            <Row className="intro-text mb-0">
                <span className='name'>{TEXT_CONSTANTS.name}</span>
            </Row>
            <Row>
                <span className='intro-detail'>{TEXT_CONSTANTS.short_intro}</span>
            </Row>
        </Col>
    )
}

export default ShortIntro;