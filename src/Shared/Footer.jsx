/* eslint-disable no-unused-vars */
import React from 'react';
import { BiHash } from 'react-icons/bi';

// TODO: style, color , added search field


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                   <BiHash className='text-4xl'></BiHash>
                    <p> <span className='text-2xl font-bold'>Summer Haven</span> <br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-slate-400 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by SUMMER HAVEN .</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;