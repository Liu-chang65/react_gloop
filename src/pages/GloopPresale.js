import React, { useState,useEffect} from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SidebarSocial from '../components/SidebarSoical';
import GloopLeftPart from '../components/gloop/GloopLeftPart';
import GloopRightPart from '../components/gloop/GloopRightPart';

import gmi_img2_url from "../assets/img/gmi_img2.svg";
import gloop_img1_url from "../assets/img/gloop_img1.svg";
import gloop_img2_url from "../assets/img/gloop_img2.svg";
import gloop_img3_url from "../assets/img/gloop_img3.svg";
import gloop_img4_url from "../assets/img/gloop_img4.svg";

export default function GloopPresale() {
    const [currentValue, setCurrentValue] = useState(1200000);
    useEffect(() => {
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }
    }, [currentValue]);

    return (
        <div>
            <SidebarSocial />
            <section>
                <Container className='my-5'>
                    <Row className='radius-8 bg-trans1 m-0 py-4 px-3'>
                        <Col sm={9} className='w-75-100'>
                            <div className='desktop-flex v-center'>
                                <div className='my-3 mr-20'>
                                    <img src={gloop_img1_url} width={62}/>
                                </div>
                                <div className='color-white font-16 my-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel fermentum massa. 
                                    Quisque leo lorem, consequat et mi vel, tincidunt fermentum nisi.
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}  className='w-25-100'>
                            <div className='mobile-left my-3'>
                                <Button className='font-16 bold-400 radius-8 bg-trans-0 border-white color-white p-10-25 my-2'><span className='mr-10'>Sale informations</span><img src={gmi_img2_url} width={12}/></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='my-5'>
                    <Row className=''>
                        <Col sm={12}>
                            <div className='font-32 bold-700 color-white mb-3'>
                                Process
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={4} className='w-33-100' >
                            <div className='bg-trans1 radius-8 p-4 my-2 min-h-270'>
                                <div className='d-flex space-between v-center'>
                                    <div className='bg-trans2 radius-8 p-2 w-58px text-center'>
                                        <img src={gloop_img2_url} width={32} />
                                    </div>
                                    <div className='bg-green py-2 px-3 radius-8 color-dark text-center font-16 bold-700'>
                                        Live
                                    </div>
                                </div>
                                <div className='font-24 bold-700  color-white mt-3'>
                                    Presale
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Starting from December ??, whitelisted addresses will be able to participate in the token sale during 24 hours.
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className='w-33-100' >
                            <div className='bg-trans1 radius-8 p-4  my-2 min-h-270'>
                                <div className='bg-trans2 radius-8 p-2 w-58px text-center'>
                                    <img src={gloop_img3_url} width={32} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-3'>
                                    Public Sale
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Starting from December ??, remaining tokens can be purchased by other participants on a first-come, first-served basis.
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className='w-33-100' >
                            <div className='bg-trans1 radius-8 p-4 my-2 min-h-270'>
                                <div className='bg-trans2 radius-8 p-2 w-58px text-center'>
                                    <img src={gloop_img4_url} width={32} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-3'>
                                    Token Claim
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Starting from December ??, purchased tokens will be directly claimable and will be unlocked linearly over a period of 3 weeks.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='my-5'>
                    <Row className=''>
                        <Col sm={12}>
                            <div className='font-32 bold-700 color-white mb-3'>
                                Gloop Token Raise
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className='radius-8 bg-trans1 py-4 px-4 mb-4'>
                                <div className='d-flex space-between'>
                                    <div className='font-18 bold-700 color-white'>$0</div>
                                    <div className='font-18 bold-700 color-white'>$1,800,000</div>
                                </div>
                                <div className='mt-3 position-relative'>
                                    <input type="range" className="styled-slider slider-progress w-100" value={currentValue} min="0" max="1800000" onChange={(e) => setCurrentValue(e.target.value)}/>
                                    <div className='range_value color-dark font-14 bold-700 desktop-show' style={{left: `max(${currentValue*100/1800000 - 6}%, 1%)`}}>
                                        ${currentValue}
                                    </div>
                                    <div className='range_value color-dark font-14 bold-700 mobile-show' style={{left: `max(${currentValue*100/1800000 - 28}%, 1%)`}}>
                                        ${currentValue}
                                    </div>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                    <Row>
                        <Col sm={6} className='width-100 my-2'>
                                <GloopLeftPart />
                            </Col>
                            <Col sm={6} className='width-100 my-2'>
                                <GloopRightPart />
                            </Col>
                        </Row>
                </Container>
            </section>
            <section>
                <div className='py-3'> 
                </div>
            </section>
        </div>       
        )
}

