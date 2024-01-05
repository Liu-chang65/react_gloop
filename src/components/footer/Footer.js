import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Twitter, Discord, Telegram} from 'react-bootstrap-icons';
import logo from "../../assets/img/logo.png";
import facebook_url from "../../assets/img/facebook.svg";
import discord_url from "../../assets/img/discord.svg";
import book_url from "../../assets/img/book.svg";
import m_url from "../../assets/img/m.svg";


export default function Footer() {
    return (
        <footer className='footer-bg'>
            <Container>
                <Row>
                    <Col sm={6} className='width-100 py-3'>
                        <Link to="/"><img src={logo}  width="140px"/></Link>
                    </Col>
                    <Col sm={6} className='width-100 py-3'>
                        <Row>
                            <Col sm={4} className='width-33-50'>
                                <div className='color-white font-16 bold-700 mb-3'>Product</div>
                                <div className='footer-menu-item'>
                                    <Link to="/vault" className="font-14 color-gray none-text-line">Vault</Link>
                                </div>
                                <div className='footer-menu-item'>
                                    <Link to="/gmi" className="font-14 color-gray none-text-line">GMI</Link>
                                </div>
                                <div className='footer-menu-item'>
                                    <Link to="/mint" className="font-14 color-gray none-text-line">Mint</Link>
                                </div>
                                <div className='footer-menu-item'>
                                    <Link to="/gloop-presale" className="font-14 color-gray none-text-line">Gloop Presale</Link>
                                </div>
                            </Col>
                            <Col sm={4} className='width-33-50'>
                                <div className='color-white font-16 bold-700 mb-3'>Resources</div>
                                <div className='footer-menu-item'>
                                    <Link to="/#" className="font-14 color-gray none-text-line">Documentation</Link>
                                </div>
                                <div className='footer-menu-item'>
                                    <Link to="/#" className="font-14 color-gray none-text-line">Guide</Link>
                                </div>
                                <div className='footer-menu-item'>
                                    <Link to="/#" className="font-14 color-gray none-text-line">Github</Link>
                                </div>
                            </Col>
                            <Col sm={4} className='width-33-100'>
                                <div className='color-white font-16 bold-700 mb-4'>Community</div>
                                <div className='footer-menu-item'>
                                    <div className="d-flex">
                                        <div>
                                            <a href="https://google.com/" target="_blank" className='footer-social-item'><img src={facebook_url} width={18} /></a>
                                        </div>
                                        <div>
                                            <a href="https://google.com/" target="_blank" className='footer-social-item'><img src={discord_url} width={18} /></a>
                                        </div>
                                        <div>
                                            <a href="https://google.com/" target="_blank" className='footer-social-item'><img src={book_url} width={18} /></a>
                                        </div>
                                        <div>
                                            <a href="https://google.com/" target="_blank" className='footer-social-item'><img src={m_url} width={18} /></a>
                                        </div> 
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>           
        </footer>
    )
}