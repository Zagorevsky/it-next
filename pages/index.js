import BigBanner from "../components/BigBanner";
import Menu from "../components/Menu";

const Index = () => {
  return (
    <div>
      <div className="page">
        <div className="page__container">
          <Menu />
          <BigBanner />
        </div>
      </div>
    </div>
  );
};

export default Index;