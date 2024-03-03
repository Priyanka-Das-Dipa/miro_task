import Banner from "./Banner";
import BestTeam from "./BestTeam";
import BuildTeam from "./BuildTeam";
import BuildWork from "./BuildWork";
import CollaborateSection from "./CollaborateSection";
import ConnectTools from "./ConnectTools";
import ImageSection from "./ImageSection";
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
            <ImageSection></ImageSection>
            <BuildWork></BuildWork>
            <BuildTeam></BuildTeam>
            <BestTeam></BestTeam>
        </div>
    );
};

export default Home;