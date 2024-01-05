import { Container, Navbar, Nav, Button, Collapse, Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import mobile_logo from "../../assets/img/mobile-logo.svg";
import gloop from "../../assets/img/gloop.svg";
import icon1 from "../../assets/img/icon1.svg";
import down_arrow from "../../assets/img/down-arrow.svg";
import active_url from "../../assets/img/active.png";
import etherum_icon from "../../assets/img/from_icon.svg";
import facebook_url from "../../assets/img/facebook.svg";
import discord_url from "../../assets/img/discord.svg";
import book_url from "../../assets/img/book.svg";
import m_url from "../../assets/img/m.svg";
import dropdown_close_url from "../../assets/img/dropdown-close.svg";
import dropdown_open_url from "../../assets/img/dropdown-open.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState(icon1)
  const [chainMenuActive, setChainMenuActive] = useState("arbtrum")
  const [activeMenu, setActiveMenu] = useState("Enclave");
  const [resourceDropUrl, setResourceDropUrl] = useState(dropdown_close_url);
  const [resourceDropStatus, setResourceDropStatus] = useState(false);

  const chainMenuHandler = () => {
    if(open){
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  const closeMenuhandler = () => {
    if(open){
      setOpen(false);
    }
  }
  window.addEventListener('click', (e) => {
    if(e.target !== document.querySelector('.chain-menu') && e.target !== document.querySelector('.menu-toggle img') && e.target !== document.querySelector('.mobile-toggle-img')){
      closeMenuhandler();
    }
  })
  const arbtrumHandler = () => {
    setSelectedChain(icon1);
    setChainMenuActive("arbtrum");
  }
  const etherHandler = () => {
    setSelectedChain(etherum_icon);
    setChainMenuActive("ethur");
  }
  const closeMobileMenu = () => {
    var aa = window.innerWidth;
    if(aa<980){
      document.querySelector(".navbar-toggler").click();
    }
  }
  const resourceDropDownHandler = (e) =>{
    if(resourceDropStatus){
        setResourceDropUrl(dropdown_close_url);
        setResourceDropStatus(false);
    } else{
      setResourceDropUrl(dropdown_open_url);
      setResourceDropStatus(true);
    }
  }

  return (
    <header>
      <Navbar expand="lg">
      <Container className='py-3'>
          <Navbar.Brand>
            <Link to="/" >
              <img src={logo}  width="140px" className='desktop-show'/>
              <img src={mobile_logo}  width="54px" className='mobile-show'/>
            </Link>
          </Navbar.Brand>
          <Button className='connect_btn connect_btn_mobile mobile-show'>0xaa...169b</Button>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2" >
                <Dropdown className="mobile-show">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" >
                    <span onClick={resourceDropDownHandler}>Resources</span><img src={resourceDropUrl} width={6} className='mx-2'/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://github.com/" target='_blank'>Documentation</Dropdown.Item>
                    <Dropdown.Item href="https://github.com/" target='_blank'>Guide</Dropdown.Item>
                    <Dropdown.Item href="https://github.com/" target='_blank'>Github</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="#" className={`menu-item desktop-show font-14 color-white-50 none-text-line px-3 ${activeMenu == "Docs" ? "active_menu" : ""}`} onClick={(e) => {setActiveMenu("Docs"); closeMobileMenu();}} >Docs</Link>
                <Link to="/vault" className={`menu-item font-14 color-white-50 none-text-line px-3  ${activeMenu == "Borrow" ? "active_menu" : ""}`} onClick={(e) => {setActiveMenu("Borrow"); closeMobileMenu();}}>Vault</Link>
                <Link to="/gmi" className={`menu-item font-14 color-white-50 none-text-line px-3 ${activeMenu == "GMI" ? "active_menu" : ""}`} onClick={(e) => {setActiveMenu("GMI"); closeMobileMenu();}} >GMI</Link>
                <Link to="/gloop-presale" className={`menu-item font-14 color-white-50 none-text-line px-3  ${activeMenu == "Gloop" ? "active_menu" : ""}`} onClick={(e) => {setActiveMenu("Gloop"); closeMobileMenu();}} >Gloop Presale</Link>
                <Link to="/mint" className={`menu-item font-14 color-white-50 none-text-line px-3  ${activeMenu == "Mint" ? "active_menu" : ""}`} onClick={(e) => {setActiveMenu("Mint"); closeMobileMenu();}} >Mint</Link>
                <div className="menu-item mobile-show  px-3 mt-2">
                  <a href="https://google.com/" target="_blank" className='social-item'><img src={facebook_url} width={18} /></a>
                  <a href="https://google.com/" target="_blank" className='social-item'><img src={discord_url} width={18} /></a>
                  <a href="https://google.com/" target="_blank" className='social-item'><img src={book_url} width={18} /></a>
                  <a href="https://google.com/" target="_blank" className='social-item'><img src={m_url} width={18} /></a>
                </div>
            </Nav> 
          </Navbar.Collapse>
          
          <Nav className='position-relative chain_icon_menu desktop-show'>
              <div className='d-flex align-items-center' >
                <div className='cursur-pointer menu-toggle' onClick={chainMenuHandler}>
                    <img src={selectedChain} width={38} className='px-1'/>
                    <img src={down_arrow} className='' width={6}/>
                </div>
                <Collapse in={open} className=''>
                  <div className='chain-menu'>
                      <div className='font-12 bold-700 color-dark-blue px-2'>Switch Networks</div>
                      <div className='d-flex space-between align-items-center p-2 cursur-pointer chain-menu-item' onClick={arbtrumHandler}>
                        <div className=''>
                          <img src={icon1} width={25}/> <span className='font-14 bold-700 color-dark-blue'>ARBITRUM</span>
                        </div>
                        <div>
                          {
                            chainMenuActive === "arbtrum" &&
                              (<img src={active_url} />)
                          }
                        </div>
                      </div>  
                      <div className='d-flex space-between align-items-center p-2 cursur-pointer chain-menu-item' onClick={etherHandler}>
                        <div className=''>
                          <img src={etherum_icon} width={25}/> <span className='font-14 bold-700 color-dark-blue'>ETHERUM MAINNET</span>
                        </div>
                        <div>
                            {
                              chainMenuActive === "ethur" &&
                                (<img src={active_url} />)
                            }
                        </div>
                      </div>            
                  </div>
                </Collapse>
                <Button className='connect_btn'>0xaa...169b</Button>
              </div>   
          </Nav>
      </Container>
    </Navbar>
    </header>    
  )
}