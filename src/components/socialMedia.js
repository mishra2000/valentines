import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import instagram from './images/instagram.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import TEXT_CONSTANTS from './utilities/constants';

function SocialMedia(){
    return (
        <div className='mt-4'>
            <p className='text-center mb-0'>Connect with me:</p>
            <p className='text-center underline mt-0'>utkarshsrmcem111@gmail.com</p>
            <Row>
                <Col className='col-10 mx-auto'>
                    <Row className=''>
                        <Col className='d-flex justify-content-center'>
                            <a target="_blank" rel="noreferrer" href={TEXT_CONSTANTS.social_media.github.profile_url}><Image src={github} className="social-image mx-2"></Image></a>
                            <a target="_blank" rel="noreferrer" href={TEXT_CONSTANTS.social_media.linkedin.profile_url}><Image src={linkedin} className="social-image mx-2"></Image></a>
                            <a target="_blank" rel="noreferrer" href={TEXT_CONSTANTS.social_media.instagram.profile_url}><Image src={instagram} className="social-image mx-2"></Image></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default SocialMedia;