import { github, hero_image, linkedin } from "../assets"
import Skills from "./Skills"

const Hero = () => {
    return (
        <section id="home" className="bg-gradient-to-b from-slate-50">
            <div className="flex flex-col">
                <div className="flex sm:flex-row-reverse flex-col justify-center items-center sm:gap-[13rem] gap-[4rem] md:pt-[130px] pt-[100px] mx-[30px]">
                    <div className="flex relative">
                        <img src={hero_image} alt="hero_image" className="w-[300px] h-[300px] object-cover object-center border-[#2d2e32] border-[3px] relative z-10" />
                        <div className="absolute top-6 left-6 border-2 border-red-300 z-0 w-full h-full" />
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-[#2d2e32] font-bold text-6xl sm:text-left text-center mt-10">Full Stack <br className="md:hidden flex" /> Web &<br /> Blockchain Developer</h1>
                        <p className="sm:text-left text-center font-light font-mono text-[#555]">Hi, I'm Alberto Toscano. <br className="md:hidden flex" />I'm a Full Stack Web & Blockchain <br /> Developer <br className="sm:flex md:hidden hidden" /> based in Milan, Italy. 📍</p>
                        <div className="flex flex-row items-center sm:justify-start justify-center sm:gap-4 gap-1">
                            <div className="flex items-center justify-center p-1 rounded-full bg-white border-2 border-slate-200 w-[40px] h-[40px] hover:border-red-400 transition duration-500">
                                <a href="https://github.com/albeok" target="_blank">
                                    <img src={github} alt="github" className=" w-[37px] object-contain" />
                                </a>
                            </div>
                            <div className="flex items-center justify-center p-1 rounded-full bg-white border-2 border-slate-200 w-[40px] h-[40px] hover:border-red-400 transition duration-500">
                                <a href="https://www.linkedin.com/in/alberto-t-876425203/" target="_blank">
                                    <img src={linkedin} alt="linkedin" className="w-[24px] object-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills />
            </div>
        </section>
    )
}

export default Hero