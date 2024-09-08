import logo from "../../assets/pic/Logo.png"
import './MarQItem.css'
const MarQItem = () => {
    return (
        <div className="flex items-center gap-2 px-3">
            <img className="h-12 w-12" src={logo} alt="" />
            <p className="Mar-text text-3xl">FOFAR</p>
        </div>
    );
};

export default MarQItem;