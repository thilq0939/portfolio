import {useState, useEffect} from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header
            className={`navbar fixed top-0  w-full transition-all duration-500 z-500
                ${scrolled
                    ? 'bg-black/80 backdrop-blur-md shadow-lg'
                    : 'bg-transparent backdrop-blur-md'
                }`}
            style={{
                transition: 'background-color 0.5s, box-shadow 0.5s'
            }}
        >
            <div className='inner'>
                <a href="#Hero1" className='logo'>Quang Thi</a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link, name})=>(
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>

        </header>
    )
}

export default Navbar