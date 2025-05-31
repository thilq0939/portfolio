import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="/terms" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon hover:scale-110 transition-transform duration-300"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Quang Thi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;