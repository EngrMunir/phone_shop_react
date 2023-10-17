import { useLoaderData } from "react-router-dom";
import Phones from "../../Components/Phones/Phones";
import Banner from "../../Header/Banner/Banner";


const Home = () => {
    const phones = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;