// navBar para pantalla grande
import BigNavBar from "../bigNavBar";
// navBar para pantalla chica
import SmallNavBar from "../smallNavBar";

const NavBar: React.FC = () => {
  return (
    <div>
      <BigNavBar />
      <SmallNavBar />
    </div>
  );
};

export default NavBar;
