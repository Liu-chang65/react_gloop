import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook_url from "../assets/img/facebook.svg";
import discord_url from "../assets/img/discord.svg";
import book_url from "../assets/img/book.svg";
import m_url from "../assets/img/m.svg";

export default function SidebarSocial() {
    return (
        <div className="sidebar_social desktop-show">
            <div className='social-border-bottom border-top-left-8'>
                <a href="https://google.com/" target="_blank" className='sidebar-social-item border-top-left-8'><img src={facebook_url} width={20} /></a>
            </div>
            <div className='social-border-bottom'>
                <a href="https://google.com/" target="_blank" className='sidebar-social-item'><img src={discord_url} width={20} /></a>
            </div>
            <div className='social-border-bottom'>
                <a href="https://google.com/" target="_blank" className='sidebar-social-item'><img src={book_url} width={20} /></a>
            </div>
            <div className='border-bottom-left-8'>
                <a href="https://google.com/" target="_blank" className='sidebar-social-item radius-8 border-bottom-left-8'><img src={m_url} width={20} /></a>
            </div> 
        </div>
    )
}