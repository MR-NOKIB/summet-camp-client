import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ButtonSoft from "../../../Components/Buttons/ButtonSoft";

const Card = ({ cardData }) => {
    return (
        <div className="bg-[#f0f7fe] border border-[#EAEDF1] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 px-4 pt-4 flex flex-col">
            <img
                src={cardData?.image}
                alt={cardData?.title}
                className="md:h-[350px] w-full rounded-lg"
            />
            <div className="px-6 pt-6 pb-7 flex flex-col flex-grow">
                <h3 className="text-slate-900 text-3xl font-semibold mb-2">
                    {cardData?.title ?? cardData?.name ?? ''}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{cardData?.description}</p>
                <ul className="mb-4">
                    {cardData.highlights && cardData?.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-700 flex items-center mb-2">
                            <span><IoMdCheckmarkCircle className='inline mr-1 text-[#6cadee] text-3xl' /></span> {highlight}
                        </li>
                    ))}
                    {cardData.bio && <p className="text-lg text-slate-700">{cardData.bio}</p>}
                </ul>
                {cardData.price && (
                    <p className="text-lg text-slate-800 mb-6">
                        Price: <span className="font-bold text-[#6cadee]">${cardData?.price}</span>
                    </p>
                )}
                <div className="mt-auto"> 
                    <ButtonSoft css="w-full">
                        <Link>Enroll Now</Link>
                    </ButtonSoft>
                </div>
            </div>
        </div>
    );
};

export default Card;
