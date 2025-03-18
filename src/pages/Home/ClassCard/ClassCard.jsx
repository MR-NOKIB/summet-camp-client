import { IoMdCheckmarkCircle } from "react-icons/io";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";

const ClassCard = ({ classData }) => {
    return (
        <div className="bg-slate-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
            <img
                src={classData?.image}
                alt={classData?.title}
                className=" md:h-[450px] w-full rounded-lg"
            />
            <div className="p-6">
                <h3 className="text-slate-900 text-3xl font-semibold mb-2">{classData?.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{classData?.description}</p>
                <ul className="mb-4">
                    {classData?.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-700 flex items-center mb-2">
                            <span className=""><IoMdCheckmarkCircle className='inline mr-1 text-2xl text-[#facc15]' /></span> {highlight}
                        </li>
                    ))}
                </ul>
                <p className="text-lg text-slate-800 mb-6">
                    Price: <span className="font-bold text-[#FACC15]">${classData?.price}</span>
                </p>
                <Button>
                    <Link>Enroll Now</Link>
                </Button>
            </div>
        </div>
    );
};

export default ClassCard;