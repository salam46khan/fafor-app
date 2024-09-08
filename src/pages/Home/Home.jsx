import MarQ from "../../Components/MarQ/MarQ";
import AboutSec from "./AboutSec/AboutSec";
import Banner from "./Banner/Banner";
import Buy from "./Buy/Buy";
import Fofomic from "./Fofomic/Fofomic";
import Roadmap from "./Roadmap/Roadmap";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <MarQ></MarQ>
            <Buy></Buy>
            <MarQ></MarQ>
            <Roadmap></Roadmap>
            <MarQ></MarQ>
            <Fofomic></Fofomic>
            <MarQ></MarQ>
        </div>
    );
};

export default Home;