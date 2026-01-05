import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Subscribe to Our Newsletter</h1>
                <p>Be the first to know about new collections and stay updated!</p>
                <form className="subscription-form" aria-label="Newsletter subscription form">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        aria-label="Email address"
                        required 
                    />
                    <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
                </form>
            </div>
            
           
            <div className="footer-bottom">
                <hr />
                <p>
                    copyright from google · 
                    <a href="#">Refund policy</a> · 
                    <a href="#">Privacy policy</a> · 
                    <a href="#">Terms of service</a> · 
                    <a href="#">Contact information</a>
                </p>
            </div>
        </footer>
    );                  
}
export default Footer;