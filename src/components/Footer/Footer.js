import "./Footer.scss"


function Footer () {
    return (
        <>
            <div className="footer">
                <div className="footer__contact">
                    <p className="footer__text">Please contact with us</p>
                    <p className="footer__mail"><a className="footer__mail-link" href="mailto:info@dontwaste.com">info@dontwaste.com</a></p>
                </div>
                <div className="footer__contact">
                    <p className="footer__text">Copyright 2023</p>
                </div>
            </div>
        </>
    );
};

export default Footer;