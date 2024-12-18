import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-4 text-center  border-gray-600">
            <div className="max-w-4xl mx-auto px-4">
                <p className="mb-2 text-l">&copy; Muhammad Fairooz</p>
                <div className="flex justify-center gap-5">
                   
                    <a
                        href="https://www.linkedin.com/in/muhammad-fairooz-0b1136268/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors duration-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://fairooz2150.github.io/Fairooz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors duration-300"
                    >
                        <FaGlobe size={20} />
                    </a>
                    <a
                        href="https://github.com/Fairooz2150"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300  transition-colors duration-300"
                    >
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

