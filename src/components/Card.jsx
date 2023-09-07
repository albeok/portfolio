import { projects } from "../constants"
import { github, arrowTopRight } from "../assets";

const Card = () => (
    <div className="flex flex-col gap-16 justify-center">
        {projects.map(project => (
            <div className={`p-10 lg:py-36 shadow-custom rounded-xl flex flex-col-reverse ${project.id % 2 ? "md:flex-row " : "md:flex-row-reverse"} justify-center gap-10`} key={project.id}>
                <div className="flex flex-col h-auto md:w-1/3 w-[100%]">
                    <h3 className="font-poppins text-lg font-semibold text-center text-[#2d2e32] uppercase my-5">{project.title}</h3>
                    <p className="text-[#555] text-center my-5">{project.description}</p>
                    <div className="">
                        <ul className="list-none list-inside flex flex-wrap justify-center gap-2">
                            {project.skills.map(skill => (
                                <li key={skill} className="text-[#2d2e32] font-poppins font-medium uppercase border-2 border-red-300 rounded-md p-2">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-row justify-center mt-10">
                        <p className="font-poppins text-lg text-[#2d2e32] font-medium mr-3">Code</p>
                        <a href={project.links.github} target="_blank"><img src={github} className="w-[27px] h-[27px]" /></a>
                    </div>
                    {project.links.liveDemo &&
                        <div className="flex flex-row justify-center">
                            <p className="font-poppins text-lg text-[#2d2e32] font-medium mr-3">Live Demo</p>
                            <a href={project.links.liveDemo} target="_blank"><img src={arrowTopRight} className="w-[27px] h-[27px]" /></a>
                        </div>
                    }
                </div>
                <div className="overflow-hidden h-[400px] md:w-2/3 w-[100%] rounded-3xl shadow-md">
                    <img src={project.image} alt="project" className="object-contain w-full animate-scroll" />
                </div>
            </div>
        ))}
    </div >
);

export default Card