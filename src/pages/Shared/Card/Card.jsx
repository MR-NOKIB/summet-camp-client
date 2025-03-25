import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ButtonSoft from "../../../Components/Buttons/ButtonSoft";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Card = ({ cardData }) => {
    const { _id, title, image, price } = cardData;
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleSelect = () => {
        if (user && user.email) {
            const selectedClass = {
                classId: _id,
                email: user.email,
                title,
                image,
                price
            };
            axiosSecure.post('/carts', selectedClass)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Added to My Classes",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        };
    };

    return (
        <div className="bg-[#f0f7fe] border border-[#EAEDF1] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 px-4 pt-4 flex flex-col">
            <img
                src={cardData?.image}
                alt={cardData?.title}
                className="md:h-[450px] w-full rounded-lg"
            />
            <div className="px-6 pt-6 pb-7 flex flex-col flex-grow">
                <h3 className="text-slate-900 text-3xl font-semibold mb-2">
                    {cardData?.title ?? cardData?.name ?? ''}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{cardData?.description}</p>

                {cardData.instructor && (
                    <p className="text-lg text-slate-800">
                        Instructor Name: <span className="font-bold text-[#6cadee]">{cardData?.instructor}</span>
                    </p>
                )}
                <p className="text-lg text-slate-800">
                    Available Seats: <span className={`${cardData.availableSeats ? 'text-[#6cadee]' : 'text-red-500'} font-bold`}>{cardData?.availableSeats}</span>
                </p>
                {cardData.price && (
                    <p className="text-lg text-slate-800 mb-6">
                        Price: <span className="font-bold text-[#6cadee]">${cardData?.price}</span>
                    </p>
                )}
                <div className="mt-auto">
                    <ButtonSoft click={handleSelect} css="w-full">
                        <Link>Select</Link>
                    </ButtonSoft>
                </div>
            </div>
        </div>
    );
};

export default Card;
