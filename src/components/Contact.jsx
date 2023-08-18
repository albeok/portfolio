import { linkedin2, mail } from "../assets"

const Contact = () => (
    <section id="contact" className="bg-gradient-to-b from-slate-50 py-12 md:py-20">
        <div className="sm:mx-[150px] mx-5">
            <h4 className="text-red-400 font-poppins text-xl md:text-right text-center font-semibold uppercase sm:mb-[50px] mb-[20px]">
                Contact Me
            </h4>
            <div className="flex md:flex-row flex-col md:justify-end justify-center md:gap-16 sm:gap-10 gap-5">
                <div className="flex md:flex-row flex-col-reverse md:gap-5 gap-2 items-center">
                    <span className="font-poppins text-[#555] text-center hover:text-black transition-all">
                        <a href="mailto:albertotoscano997@gmail.com">albertotoscano997@gmail.com</a>
                    </span>
                    <img src={mail} />
                </div>
                <div className="flex md:flex-row flex-col-reverse gap-2 md:gap-5 items-center">
                    <span className="font-poppins text-[#555] text-center hover:text-black transition-all">
                        <a href="https://www.linkedin.com/in/alberto-t-876425203/" target="_blank">Alberto Toscano</a>
                    </span>
                    <img src={linkedin2} />
                </div>

            </div>

        </div>
    </section>
)

export default Contact