import Topbar from "../topbar";
import Navigation from "../navigation";
import MainHeader from "../main-header";

const Header = () => {
  return (
    <header className="border-gray-100">
      <div className="md:mx-12">
        {/* Main header */}
        <MainHeader />

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
