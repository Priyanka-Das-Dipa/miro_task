import Banner from "./Banner";
import CollaborateSection from "./CollaborateSection";
import TrustedSection from "./TrustedSection";


const Home = () => {
    return (
        <div className="space-y-24 p-5 lg:p-0">
            <Banner/>
            <TrustedSection></TrustedSection>
            <CollaborateSection></CollaborateSection>
        </div>
    );
};

export default Home;