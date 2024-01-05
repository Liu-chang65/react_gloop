import React, { useState,useEffect} from 'react';
import { Row, Col, Button, Container, Accordion } from 'react-bootstrap';
import home_img2_url from "../assets/img/home-img2.svg";
import circle_url from "../assets/img/circle.svg";
import home_img1_url from "../assets/img/home-img1.svg";
import home_light_url from "../assets/img/home_light.svg";
import capitally_efficient_url from "../assets/img/Capitally_Efficient.svg";
import low_risk_url from "../assets/img/Low_Risk.svg";
import secure_url from "../assets/img/Secure.svg";
import fun_url from "../assets/img/Fun.svg";
import home_img3_url from "../assets/img/home_img3.svg";
import home_img4_url from "../assets/img/home_img4.svg";
import home_img5_url from "../assets/img/home_img5.svg";
import one_url from "../assets/img/one.svg";
import two_url from "../assets/img/two.svg";
import three_url from "../assets/img/three.svg";
import four_url from "../assets/img/four.svg";
import SidebarSocial from '../components/SidebarSoical';

export default function Home() {
    useEffect(() => {
    }, []);

    return (
        <div>
            <SidebarSocial />
            <section className='home-section1'>
                <Container className=''>
                    <Row>
                        <Col className='width-100' sm={6}>
                            <div className='w-238 font-14 color-white radius-8 bg-trans px-3 py-2 text-center'>COMING SOON ON ARBITRUM</div>
                            <div className='py-5'>
                                <img src={home_img2_url} width={203}/>
                            </div>
                            <div className='font-36 bold-700 color-white'>
                                Increase your capital efficiency
                            </div>
                            <div className='font-16 color-white py-3'>
                                Gloop is a protocol offering an optimally weighted GM asset index token and an advanced lending/borrowing platform for strategic GM leverage.
                            </div>
                            <div className='mt-3'>
                                <Button className='btn_apply_for_whitelist font-16 bold-700 radius-8 bg-green border-green color-dark p-10-25 my-2'>Apply For Whitelist</Button>
                                <Button className='btn_read_doc font-16 bold-700 radius-8 bg-trans-0 border-white color-white p-10-25 my-2'>Read Documentation</Button>
                            </div>
                            <img src={home_light_url}  className='section1-img-light1 mobile-show'/>
                        </Col>
                        <Col className='width-100' sm={6}>
                            <div className='desktop-show positoin-relative'>
                                <img src={circle_url} width={418}/>
                                <img src={home_img1_url} width={466} className='section1-img'/>
                                <img src={home_light_url}  className='section1-img-light'/>
                            </div>
                        </Col>
                    </Row>
                    <Row className='m-0 radius-8 bg-trans mt-5 border-dark-green border-1'>
                            <Col sm={3} className='p-4 w-25-100'>
                                <div className='font-32 bold-600 color-green mb-2'>[Soon]</div>
                                <div className='font-22 color-white '>TVL</div>
                            </Col>
                            <Col sm={3} className='p-4 w-25-100'>
                                <div className='font-32 bold-600 color-green mb-2'>[Soon]</div>
                                <div className='font-22 color-white '>Total Borrowed</div>
                            </Col>
                            <Col sm={3} className='p-4 w-25-100'>
                                <div className='font-32 bold-600 color-green mb-2'>[Soon]</div>
                                <div className='font-22 color-white '>Total Lended</div>
                            </Col>
                            <Col sm={3} className='p-4 w-25-100'>
                                <div className='font-32 bold-600 color-green mb-2'>[Soon]</div>
                                <div className='font-22 color-white '>Total Users</div>
                            </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='ptb-50'>
                    <Row>
                        <Col sm={12}>
                            <div className='font-32 bold-700 color-white mb-4'>
                                Why Gloop?
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={3} className='w-25-100' >
                            <div className='bg-trans radius-8 p-4 min-h-357 my-2'>
                                <div className='bg-trans radius-8 p-2 w-58px text-center'>
                                    <img src={capitally_efficient_url} width={38} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-3'>
                                    Capitally Efficient
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Instead of relying solely on GM tokens, consider the strategic use of the GMI index and explore borrowing against it to optimize your overall investment portfolio.
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='w-25-100' >
                            <div className='bg-trans radius-8 p-4 min-h-357 my-2'>
                                <div className='bg-trans radius-8 p-2 w-58px text-center'>
                                    <img src={low_risk_url} width={38} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-3'>
                                    Low Risk
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                Our smart rebalancing algorithm adjusts the weights of GM’s in the index to maximize return and minimize risk so you don’t have to constantly rebalance your own portfolio.
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='w-25-100' >
                            <div className='bg-trans radius-8 p-4 min-h-357 my-2'>
                                <div className='bg-trans radius-8 p-2 w-58px text-center'>
                                    <img src={secure_url} width={38} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-3'>
                                    Secure
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Extremely talented developers with smart contract auditing experience developed Gloop. All our products and features have also been audited out by some top firms in the field.
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='w-25-100' >
                            <div className='bg-trans radius-8 p-4 min-h-357 my-2'>
                                <div className='bg-trans radius-8 p-2 w-58px text-center'>
                                    <img src={fun_url} width={38} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-3'>
                                    Fun
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    The Gloop community is made up of awesome arbitrum loving individuals who are passionate about web3 and the future of finance.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='ptb-50'>
                    <Row>
                        <Col sm={12}>
                            <div className='font-32 bold-700 color-white mb-4 text-center'>
                                GMI & Borrowing Synergies
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='width-100' >
                            <div className='bg-trans radius-8 p-4 min-h-357 my-2'>
                                <div className=''>
                                    <img src={home_img3_url} className="w-100"/>
                                </div>
                                <div className='font-24 bold-700 color-white mt-4'>
                                    GMI
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    The GM Index token operates as a basket, offering a curated assortment of GM assets. It also undergoes optimal rebalancing through a proprietary algorithm to enhance the risk/return ratio.
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} className='width-100' >
                            <div className='bg-trans radius-8 p-4 min-h-357 my-2'>
                                <div className=''>
                                    <img src={home_img4_url} className="w-100" />
                                </div>
                                <div className='font-24 bold-700 color-white mt-4'>
                                    Borrow against GMI
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Leveraging GMI holdings is made seamless with our lending and borrowing platform, offering users the flexibility to capitalize on emerging market trends.
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className='text-center mt-4 mb-5'>
                                <Button className='font-16 bold-700 radius-8 bg-green border-green color-dark p-10-25 my-2'>Read Documentation</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='home-section4'>
                <Container className='ptb-50'>
                    <Row>
                        <Col sm={12}>
                            <div className='text-center mb-5'>
                                <img src={home_img5_url} className="w-450px"/>
                            </div>
                            <div className='font-32 bold-700 color-white mb-3 text-center'>
                                Built to Boost
                            </div>
                            <div className='color-gray font-16 mt-3 text-center px-5'>
                                GMI includes gmBTC, gmETH, and gmSOL. To maintain the index at its target weights, fees are adjusted in response to variations in the targeted pool weights.
                            </div>
                            <div className='text-center mt-4'>
                                <Button className='font-16 bold-700 radius-8 bg-green border-green color-dark p-10-25 my-2'>Start Earning</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='ptb-50'>
                    <Row>
                        <Col sm={12}>
                            <div className='font-32 bold-700 color-white mb-4 text-center'>
                                How it works?
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} className='width-100' >
                            <div className='bg-trans radius-8 p-4 my-2'>
                                <div className='bg-trans radius-8 p-2 py-3 w-58px text-center'>
                                    <img src={one_url} width={12} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-4'>
                                    Connect Wallet
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Connect your wallet with the “connect wallet” button on the top right side of the page.
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} className='width-100' >
                            <div className='bg-trans radius-8 p-4 my-2'>
                                <div className='bg-trans radius-8 p-2 py-3 w-58px text-center'>
                                    <img src={two_url} width={21} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-4'>
                                    Go to GMI page
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Head over to the dedicated GMI page to get more info on yield, the pool, and index adjustments.
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} className='width-100' >
                            <div className='bg-trans radius-8 p-4 my-2'>
                                <div className='bg-trans radius-8 p-2 py-3 w-58px text-center'>
                                    <img src={three_url} width={21} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-4'>
                                    Buy GMI
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Gloop takes care of everything. Deposit your USDC and, in return, receive GMI containing the GM tokens perfectly adjusted algorithmically by Gloop's proprietary optimizer.
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} className='width-100' >
                            <div className='bg-trans radius-8 p-4 my-2'>
                                <div className='bg-trans radius-8 p-2 py-3 w-58px text-center'>
                                    <img src={four_url} width={21} />
                                </div>
                                <div className='font-24 bold-700 color-white mt-4'>
                                    Borrow Aginst GMI (coming soon)
                                </div>
                                <div className='color-gray font-16 mt-3'>
                                    Seize opportunities with our lending and borrowing feature, empowering you to leverage GMI holdings and gain flexibility in capitalizing on market trends.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='ptb-50'>
                    <Row >
                        <Col sm={5} className='w-41-100 pt-3'>
                            <div className='font-32 bold-700 color-white'>
                                Get the answers you need about Gloop
                            </div>
                            <div className='mt-4 desktop-show'>
                                <Button className='font-16 bold-700 radius-8 bg-green border-green color-dark p-10-25 my-2'>Read more</Button>
                            </div>
                        </Col>
                        <Col sm={7} className='w-59-100'>
                            <div>
                                <Accordion className='color-gray'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='color-white'>Lorem ipsum?</Accordion.Header>
                                        <Accordion.Body className='color-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Lorem ipsum?</Accordion.Header>
                                        <Accordion.Body className='color-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Lorem ipsum?</Accordion.Header>
                                        <Accordion.Body className='color-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Lorem ipsum?</Accordion.Header>
                                        <Accordion.Body className='color-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Lorem ipsum?</Accordion.Header>
                                        <Accordion.Body className='color-gray'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className='mt-4 mobile-show text-center'>
                                <Button className='font-16 bold-700 radius-8 bg-green border-green color-dark p-10-25 my-2'>Read more</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>       
        )
}

