import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSoft from '../../Components/Buttons/ButtonSoft';

const InsCard = ({ cardData }) => {
    return (
        <div className="bg-[#f0f7fe] hover:shadow-2xl shadow-[#2b5eca] border border-[#D4D4D8] rounded-lg transition-shadow duration-300 px-4 pt-4 flex flex-col">
            <img
                src={cardData?.image}
                alt={cardData?.title}
                className="md:h-[400px] w-full rounded-lg"
            />
            <div className="px-6 pt-6 pb-7 flex flex-col flex-grow">
                <h3 className="text-[#0f172b] text-3xl font-semibold mb-2">
                    {cardData.name}
                </h3>
                <p className="text-lg text-[#0f172b] mb-4">{cardData.bio}</p>
                {cardData.price && (
                    <p className="text-lg text-[#0f172b] mb-6">
                        Price: <span className="font-bold text-[#FACC15]">${cardData?.price}</span>
                    </p>
                )}
                <div className="mt-auto">
                    <ButtonSoft click={() => document.getElementById(`modal_${cardData._id}`).showModal()} css="w-full">
                        <Link>Details</Link>
                    </ButtonSoft>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id={`modal_${cardData._id}`} className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-[#f0f7fe]">
                            <div className="card flex-col md:flex-row card-side w-full bg-[#f0f7fe]">
                                <figure>
                                    <img
                                        className='h-[400px] w-[400px]'
                                        src={cardData?.image}
                                        alt="Movie" />
                                </figure>
                                <div className="px-10 flex flex-col justify-center text-[#0f172b]">
                                    <h2 className="font-[600] mb-3 text-4xl">{cardData.name}</h2>
                                    <p className=''><span className='font-bold'>Email:</span> {cardData.email}</p>
                                    <p className='mb-3'><span className='font-bold'>Specialty</span>: {cardData.specialty}</p>
                                    <p className='w-3/4'>{cardData.bio}</p>
                                    <div className="card-actions justify-end">
                                        {/* follow */}
                                    </div>
                                </div>
                            </div>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-circle text-2xl btn-ghost absolute right-2 top-2 hover:bg-[#c4dff9] text-[#0f172b]">✕</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default InsCard;