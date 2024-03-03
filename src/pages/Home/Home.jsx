import Banner from "./Banner";
import CollaborateSection from "./CollaborateSection";
import ConnectTools from "./ConnectTools";
import TrustedSection from "./TrustedSection";
import WorkTogether from "./WorkTogether";


const Home = () => {
    return (
        <div className="space-y-24 p-5 lg:p-0">
            <Banner/>
            <TrustedSection></TrustedSection>
            <CollaborateSection></CollaborateSection>
            <WorkTogether></WorkTogether>
            <ConnectTools></ConnectTools>
        </div>
    );
};

export default Home;