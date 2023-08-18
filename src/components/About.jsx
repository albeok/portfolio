import { laptop, arrowdown } from "../assets"

const About = () => (
    <section id="about" className="bg-gradient-to-b from-slate-50 sm:pt-4 pt-2">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-32 justify-center mt-[100px] sm:mx-[150px] mx-1 mb-10">
            <div className="flex flex-col">
                <h4 className="text-red-400 font-poppins text-xl md:text-left text-center font-semibold uppercase md:mb-[50px] mb-[20px]">
                    About Me
                </h4>
                <h5 className="font-poppins text-2xl font-bold md:text-left text-center text-[#2d2e32] tracking-wide md:mb-5 mb-8">
                    A Junior Web Developer based in Milan, Italy 📍
                </h5>
                <div className="relative">
                    <p className="md:text-left text-center font-light font-mono text-[#555] tracking-tightest">
                        Since January 2022, I've been on a journey in computer science. I started with Python, which I found easy to learn. Then, I added Django to my skills for building web applications. I also ventured into blockchain, learning Solidity and using Brownie for testing smart contracts.
                        As I worked on my own web3 project, I realized the importance of JavaScript. So, I dedicated myself to learn it. And so also React.
                        <br />
                        Languages I can speak: 🇮🇹, 🇬🇧, 🇪🇸
                    </p>
                    <div className="absolute bg-red-gradient p-11 right-0 rounded-full mt-12 hover:bg-red-gradient-reverse" >
                        <a className="text-white uppercase font-poppins font-bold text-center" href="#projects">
                            Projects
                            <img src={arrowdown} alt="arrowdown" className="mx-auto" />
                        </a>

                    </div>
                </div>

            </div>
            <img src={laptop} className="rounded-xl w-[300px] h-[450px] mx-auto" />

        </div>
    </section>
)

export default About