import "./NewListButton.css";
import assets from "../../assets";

const NewListButton = ({ createNewList }) => {
  return (
    <button className="newButtonContainer" onClick={createNewList}>
      <img src={assets.add} alt="add new list" className="icon" />
      <p>Create New List</p>
    </button>
  );
};

export default NewListButton;
