import TEXT_CONSTANTS from './utilities/constants';

function Timeline(){
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h4>Professional Timeline</h4>
                    <ul className="timeline">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.uplandsoftware.com/#">{TEXT_CONSTANTS.timeline.upland_Softwares.org}</a>
                            <p>Role: {TEXT_CONSTANTS.timeline.upland_Softwares.role}</p>
                            <p>{TEXT_CONSTANTS.timeline.upland_Softwares.doj + " - "+ TEXT_CONSTANTS.timeline.upland_Softwares.doe}</p>
                            <p>{TEXT_CONSTANTS.timeline.upland_Softwares.summary}</p>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.planetspark.in/#">{TEXT_CONSTANTS.timeline.planetSpark.org}</a>
                            <p>Role: {TEXT_CONSTANTS.timeline.planetSpark.role}</p>
                            <p>{TEXT_CONSTANTS.timeline.planetSpark.doj + " - "+ TEXT_CONSTANTS.timeline.planetSpark.doe}</p>
                            <p>{TEXT_CONSTANTS.timeline.planetSpark.summary}</p>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.paytm.com/#">{TEXT_CONSTANTS.timeline.paytm.org}</a>
                            <p>Role: {TEXT_CONSTANTS.timeline.paytm.role}</p>
                            <p>{TEXT_CONSTANTS.timeline.paytm.doj + " - "+ TEXT_CONSTANTS.timeline.paytm.doe}</p>
                            <p>{TEXT_CONSTANTS.timeline.paytm.summary}</p>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.cognizant.com">{TEXT_CONSTANTS.timeline.cognizant.org}</a>
                            <p>Role: {TEXT_CONSTANTS.timeline.cognizant.role}</p>
                            <p>{TEXT_CONSTANTS.timeline.cognizant.doj + " - "+ TEXT_CONSTANTS.timeline.cognizant.doe}</p>
                            <p>{TEXT_CONSTANTS.timeline.cognizant.summary}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Timeline;