import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import LocationSearch from "../molecules/LocationSearch";
import ActionButton from "../molecules/ActionButton";
import "./Navbar.css";

function Navbar({
  onSearch,
  title = "Sanos y Salvos",
  className = ""
}) {
  return (
    <nav className={`navbar ${className}`}>

      <div className="navbar-left">
        <Icon name="logo" />
        <Text variant="h3">{title}</Text>
      </div>

      <div className="navbar-center">
        <LocationSearch onSearch={onSearch} />
      </div>

      <div className="navbar-right">

        <ActionButton icon="nosotros" ariaLabel="Nosotros" />

        <ActionButton icon="donaciones" ariaLabel="Ayudanos" />
      </div>

    </nav>
  );
}
export default Navbar;