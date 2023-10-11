// import React from "react";
import { FaCircle } from "react-icons/fa";
// import arrowLeftIcon from "./arrow-left-solid.svg";
import "./Bar.css";
import { Link } from "react-router-dom";
function Bar() {
  return (
    <div className="allhold">
      <div className="holder14">
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/" className="arrow-icon">
            <b>Go Back</b>
          </Link>
        </div>
        <br />
        <div className="holder1">
          <div className="subhold">
            <div style={{ color: "white" }}>status</div>
            <div>
              <button type="submit" className="paid">
                <FaCircle />
                pending
              </button>
            </div>
          </div>
          <div className="subhold1">
            <div>
              <button type="reset" className="edit">
                Edit
              </button>
            </div>
            <div>
              <button type="reset" className="delete">
                Delete
              </button>
            </div>
            <div>
              <button type="submit" className="mark">
                Mark as Paid
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="hol2_hol3">
        <div className="holder2">
          <div className="wordh1">
            <div>
              <b>RT3080</b>
              <br />
              Re-branding
            </div>
            <div className="word1">
              106 Kendell Street,
              <br />
              Sharrington,
              <br />
              NR24 5WQ,
              <br />
              United Kingdom
              <br />
            </div>
          </div>{" "}
          <br></br>
          <div className="wordh2">
            <div>
              Invoice Date
              <br />
              <b>2021-8-18</b>
              <br></br>
              <br></br>
              Payment Due
              <br />
              <b>2021-8-19</b>
            </div>
            <div>
              Bill To
              <br />
              <b>Jensen Huang</b>
              <br />
              19 Union Terrace,
              <br />
              London,
              <br />
              E1 3EZ,
              <br />
              United Kingdom
            </div>
            <div>
              Sent to
              <br />
              <b>jensenh@mail.com</b>
            </div>
          </div>
        </div>
        <br></br>
        <div className="w3">
          <div className="wordh3">
            <div className="wh1">
              <div>Item Name</div>
              <div>QTY.</div>
              <div>Price</div>
              <div>Total</div>
            </div>
            <br></br>
            <div className="wh2">
              <div>
                <b>Brand Guidelines</b>
              </div>
              <div>
                <b>1</b>
              </div>
              <div>
                <b>£ 1800.9</b>
              </div>
              <div>
                <b>£ 1800.9</b>
              </div>
            </div>
          </div>
          <div className="wend">
            <div>Amount Due</div>
            <div className="numwend">
              <b>£ 1800.9</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
