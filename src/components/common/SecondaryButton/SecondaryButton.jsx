import "./SecondaryButton.css";
import { Link } from "react-router-dom";
import assets from "../../../assets";

const SecondaryButton = ({ text, id }) => {
  return (
    <Link to={`/${id}`} className="secondaryButtonContainer" title={text}>
      <img src={assets.notesSelected} alt="notes" className="icon" />
      <p>{text}</p>
    </Link>
  );
};

export default SecondaryButton;
