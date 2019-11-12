/* eslint-disable */
import React from 'react';

import img1 from '../../../assets/images/features/feature48/app-store.png';
import img2 from '../../../assets/images/features/feature48/play-store.png';

class C2aComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Call-2-Action</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="mini-spacer bg-info text-white c2a7">
                <div className="container">
                    <div className="d-flex">
                        <div className="display-7 align-self-center">Are you happy with what we offer? Ask for Free Quote</div>
                        <div className="ml-auto m-t-10 m-b-10"><button className="btn btn-outline-light btn-md">Ask for Quatation</button></div>
                    </div>
                </div>
            </div>
            <div className="spacer feature42 bg-success-gradiant">
                <div className="container">
                    <div className="row justify-content-center wrap-feature49-box">
                        <div className="col-md-10 col-lg-7 text-center" data-aos="fade-up">
                            <h2 className="title text-white">Grab our IOS or Android App from Stores</h2>
                            <h6 className="subtitle text-white op-7 m-b-20">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time.</h6>
                            <a href="javascript:void(0)" className="m-b-20"><img src={img1} alt="img" /></a>
                            <a href="javascript:void(0)" className="m-b-20"><img src={img2} alt="img" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default C2aComponent;
