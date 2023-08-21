import { skills } from "../constants"

const Skills = () => (
    <div className="flex flex-col lg:flex-row mt-[30px] lg:mt-[100px] px-[150px] gap-3 lg:gap-0 lg:justify-start lg:text-center items-center mb-12">
        <h4 className="font-poppins text-lg font-medium text-stone-700 border-b-2 lg:border-b-0 lg:border-r-2 pb-[15px] lg:pb-0 lg:pr-5 border-slate-400">
            Skills
        </h4>
        <ul className="flex flex-wrap lg:flex-row gap-1 justify-center lg:pl-5 lg:items-center">
            {skills.map((skill) => (
                <li
                    key={skill.id}
                    className="list-none p-2 border-2 w border-slate-200 hover:border-red-300 transition duration-500 rounded-full cursor-pointer"
                >
                    <img src={skill.icon} alt={skill.id} className="w-[48px] h-[48px]" />
                </li>

            ))}
        </ul>
    </div>
);

export default Skills;



