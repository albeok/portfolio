import { footerLinks } from "../constants";

const Footer = () => (
    <footer className="bg-gray-800 py-20">
        <div className="sm:mx-[150px] mx-5 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-white font-poppins font-bold">{footerLinks[0].copyright}</p>
            </div>
            <div className="flex gap-4">
                {footerLinks[0].socialMedia.map((link) => (
                    <a
                        key={link.id}
                        href={link.link}
                        target="_blank"
                    >
                        <img
                            src={link.icon}
                            alt={link.name}
                            className="w-6 h-6 filter invert hover:scale-110 transition-all"
                        />
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
