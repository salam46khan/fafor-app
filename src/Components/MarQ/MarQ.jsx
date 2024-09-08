
import Marquee from "react-fast-marquee";
import MarQItem from "../MarQItem/MarQItem";

const MarQ = () => {
    return (
        <div className="border-t-2 bg-[#ECE0E6] border-black border-b-2 w-full py-2">
            <Marquee>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
                <MarQItem></MarQItem>
            </Marquee>
        </div>
    );
};

export default MarQ;