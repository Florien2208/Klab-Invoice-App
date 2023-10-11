import { useState } from "react";
import "./Hpp.css";
import AddressForm from "./Form";
import { Link } from "react-router-dom";

function Dashboard() {
  // const [formDataFromAddressForm, setFormDataFromAddressForm] = useState(null);
  const appStyle = {
    backgroundColor: "#141625",
    // margin: 0,
    // padding: 0,
    // minHeight: "100vh",
  };
  const [modal, setModal] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");
  function openModal() {
    setModal((prevmodal) => !prevmodal);
  }
  const handleChoiceChange = (event) => {
    setSelectedChoice(event.target.value);
  };
  // const handleFormSubmit = (formData) => {
  //   setFormDataFromAddressForm(formData);
  // };

  return (
    <>
      <div className="dashboard-container" style={appStyle}>
        <br />
        <br />
        <br />
        {modal ? (
          <AddressForm />
        ) : (
          <>
            <div>
              <div className="head">
                <div>
                  <br />
                  <p style={{ color: "white", fontSize: "50px" }}>Invoices</p>
                  <p style={{ color: "white", fontSize: "20px" }}>8 invoices</p>
                </div>
                <div className="subhead2">
                  Filter by status
                  <select
                    id="selectOption"
                    value={selectedChoice || ""}
                    onChange={handleChoiceChange}
                    style={{ color: "blueviolet" }}
                  >
                    <option value="Draft"></option>
                    <option value="Pending"></option>
                    <option value="Paid"></option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="subhead" onClick={openModal}>
                    <b>+ Add New Invoice</b>
                  </button>
                </div>
              </div>

              <div className="divisionformat">
                <br />
                <Link to="./Bar">
                  <div className="divisionformat2">
                    <div>
                      <h6>#YM9141</h6>
                    </div>
                    <div>
                      <h6>30 july 2022</h6>
                    </div>
                    <div>
                      <h6>Florien</h6>
                    </div>
                    <div>
                      <h6>$500</h6>
                    </div>
                    <div>
                      <input
                        className="black1"
                        type="submit"
                        value="Pending"
                        style={{
                          color: "#ff8f00",
                          height: "30px",
                          width: "75px",
                        }}
                      ></input>
                    </div>
                  </div>
                </Link>
                <br />
                <div className="divisionformat2">
                  <div>
                    <h6>#XM9141</h6>
                  </div>
                  <div>
                    <h6>25 august 2022</h6>
                  </div>
                  <div>
                    <h6>mathias</h6>
                  </div>
                  <div>
                    <h6>$123</h6>
                  </div>
                  <div>
                    <input
                      className="black"
                      type="submit"
                      value="Paid"
                      style={{
                        color: "#33d69f",
                        height: "30px",
                        width: "75px",
                      }}
                    ></input>
                  </div>
                </div>
                {/* <div className="divisionformat2">
                  <div>
                    <h6>#XM9141</h6>
                  </div>
                  <div>
                    <h6>25 august 2022</h6>
                  </div>
                  <div>
                    <h6>Dj flo</h6>
                  </div>
                  <div>
                    <h6>$123</h6>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Piad"
                      style={{
                        color: "white",
                        height: "30px",
                        width: "75px",
                      }}
                    ></input>
                  </div>
                </div> */}
                <br />
                <div className="divisionformat2">
                  <div>
                    <h6>#YM9141</h6>
                  </div>
                  <div>
                    <h6>30 july 2022</h6>
                  </div>
                  <div>
                    <h6>Moses</h6>
                  </div>
                  <div>
                    <h6>$300</h6>
                  </div>
                  <div>
                    <input
                      className="black1"
                      type="submit"
                      value="Pending"
                      style={{
                        color: "#ff8f00",
                        height: "30px",
                        width: "75px",
                      }}
                    ></input>
                  </div>
                </div>
                <br />
                <div className="divisionformat2">
                  <div>
                    <h6>#YM9141</h6>
                  </div>
                  <div>
                    <h6>30 july 2022</h6>
                  </div>
                  <div>
                    <h6>Mufrobiba</h6>
                  </div>
                  <div>
                    <h6>$500</h6>
                  </div>
                  <div>
                    <input
                      className="black1"
                      type="submit"
                      value="Pending"
                      style={{
                        color: "#ff8f00",
                        height: "30px",
                        width: "75px",
                      }}
                    ></input>
                  </div>
                </div>
                <br />
                <div className="divisionformat2">
                  <div>
                    <h6>#YM9141</h6>
                  </div>
                  <div>
                    <h6>30 july 2022</h6>
                  </div>
                  <div>
                    <h6>Mahendra</h6>
                  </div>
                  <div>
                    <h6>$500</h6>
                  </div>
                  <div>
                    <input
                      className="black"
                      type="submit"
                      value="Draft"
                      style={{
                        color: "white",
                        height: "30px",
                        width: "75px",
                      }}
                    ></input>
                  </div>
                </div>

                <br />
                <div className="divisionformat2">
                  <div>
                    <h6>#YM9141</h6>
                  </div>
                  <div>
                    <h6>30 july 2022</h6>
                  </div>
                  <div>
                    <h6>Moses</h6>
                  </div>
                  <div>
                    <h6>$300</h6>
                  </div>
                  <div>
                    <input
                      className="black1"
                      type="submit"
                      value="Pending"
                      style={{
                        color: "#ff8f00",
                        height: "30px",
                        width: "75px",
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Dashboard;
