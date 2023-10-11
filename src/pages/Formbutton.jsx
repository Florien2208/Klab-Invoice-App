import { useState } from "react";

function FormButton() {
  const [modal, setModal] = useState(false);

  function openModal() {
    console.log("clicked");
  }
  return (
    <div>
      <button type="submit" className="subhead" onClick={openModal}>
        + Add New Invoice
      </button>
    </div>
  );
}
export default FormButton;
