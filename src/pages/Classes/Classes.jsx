import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useClasses } from '../../hooks/useClasses';
import Card from '../Shared/Card/Card';

const Classes = () => {
    // const classes = useLoaderData();
    const [, classes] = useClasses();

    return (
        <div className='pt-[64px] md:pt-[69.78px] mb-10 max-w-[1450px] mx-auto'>
            <SectionTitle
                heading="Explore Our Photography Classes"
                subHeading="Unlock your creativity with hands-on learning."
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes && classes.map(cardData => <Card
                        key={cardData._id}
                        cardData={cardData}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Classes;