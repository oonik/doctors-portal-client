import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section className=''>
            <footer className="footer p-10 bg-neutral  text-neutral-content"
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            >
                <div>
                    <span className="footer-title">Services</span>
                    <a href='jf' className="link link-hover">Branding</a>
                    <a href='jf' className="link link-hover">Design</a>
                    <a href='jf' className="link link-hover">Marketing</a>
                    <a href='jf' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='jf' className="link link-hover">About us</a>
                    <a href='jf' className="link link-hover">Contact</a>
                    <a href='jf' className="link link-hover">Jobs</a>
                    <a href='jf' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='jf' className="link link-hover">Terms of use</a>
                    <a href='jf' className="link link-hover">Privacy policy</a>
                    <a href='jf' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4  text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
        </section>
    );
};

export default Footer;