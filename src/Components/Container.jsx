import { useEffect, useState, useRef } from "react";

function Container() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 } // Fires when at least 10% of the section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`text-white bg-transparent flex flex-col items-center text-center justify-center pt-60 space-y-10 transition-all duration-700 ease-in ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
            <p className="text-6xl font-bold">Start and Build Your Crypto Here</p>
            <p className="text-2xl">
                Only at CryptoCap, you can build a good portfolio and learn <br /> best practices about cryptocurrency
            </p>
            <button className="transition-transform transform hover:scale-110 active:scale-95 hover:shadow-lg p-4 bg-green-400 rounded-2xl text-black font-bold text-[20px] hover:bg-green-500 hover:text-white">
                Get Started
            </button>
        </section>
    );
}

export default Container;
