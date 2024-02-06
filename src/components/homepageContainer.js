import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Timeline from './timeline';
import SocialMedia from './socialMedia';
import ShortIntro from './shortIntro';
import ShowGitHubCalendar from './githubCalender';
function HomepageContainer(){
    return (
    <Container className='mt-4'>
        <Row>
            <Col xs={12}>
                <Row className='image-row'>
                    <Col className='dp-image'></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <ShortIntro></ShortIntro>
        </Row>
        <Row>
            <SocialMedia></SocialMedia>
        </Row>
        <Row className='mt-3 mb-3'>
            <ShowGitHubCalendar></ShowGitHubCalendar>
        </Row>
        <Row>
            <Timeline></Timeline>
        </Row>
    </Container>
    )
}

export default HomepageContainer;