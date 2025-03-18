import { useRef } from 'react';

const useScroll = () => {
    const sectionRef = useRef(null);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return { sectionRef, scrollToSection };
};

export default useScroll;