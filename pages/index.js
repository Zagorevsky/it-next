import BigBanner from "../components/BigBanner";
import DigitalBanner from "../components/DigitalBanner";

import Menu from "../components/Menu";

const Index = () => {
  return (
    <div>
      <div className="page">
        <div className="page__container">
          <Menu />
          <BigBanner />
          <DigitalBanner />
        </div>
      </div>
    </div>
  );
};

export default Index;
