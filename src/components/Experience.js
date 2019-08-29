import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.experience = props.experience;
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center text-left" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Full stack Developer</h3>
                            <div className="subheading mb-3">Axon Active</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end
                                of the day, going forward, a new normal that has evolved from generation X is on the
                                runway heading towards a streamlined cloud solution. User generated content in real-time
                                will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Jun 2019 - Present</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Enclave</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                                Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
                                immersion along the information highway will close the loop on focusing solely on the
                                bottom line.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Jul 2017 - May 2019</span>
                        </div>
                    </div>

                </div>
            </section>

        );
    }
}

export default Experience;
