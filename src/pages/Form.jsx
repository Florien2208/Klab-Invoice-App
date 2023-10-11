import { useState } from "react";
import "./Hpp.css";
import "./Form.css";
import { Link } from "react-router-dom";
function AddressForm() {
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // props.onFormSubmit(formData);
  };

  return (
    <>
      {/* <div>
        <Link to="/dashboard" className="arrow-icon1">
          <b>Go Back</b>
        </Link>
      </div> */}
      <div className="my-form">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2>New Invoice</h2>
            </div>
            <div className="hello">
              <h5>Bill From:</h5>
            </div>
            <label htmlFor="streetAddress">Street Address:</label>
            <br />
            <input
              type="text"
              className="input"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="row">
            <div>
              <label htmlFor="city">City:</label>
              <br />
              <input
                className="line"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="postalCode">Postal Code:</label>
              <br />
              <input
                className="line"
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <br />
              <input
                className="line"
                type="text"
                id="country"
                name="country"
                placeholder="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="hello">
            <h5>Bill To:</h5>
          </div>
          <div>
            <label htmlFor="clientName">Client Name:</label>
            <br />
            <input
              className="input"
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="clientEmail">Client Email:</label>
            <br />
            <input
              className="input"
              type="email"
              id="clientEmail"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="clientStreetAddress">Client Street Address:</label>
            <br />
            <input
              className="input"
              type="text"
              id="clientStreetAddress"
              name="clientStreetAddress"
              value={formData.clientStreetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="row">
            <div>
              <label htmlFor="city">City:</label>
              <br />
              <input
                className="line"
                type="text"
                id="city"
                name="city"
                value=""
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode">Postal Code:</label>
              <br />
              <input
                className="line"
                type="text"
                id="postalCode"
                name="postalCode"
                value=""
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <br />
              <input
                className="line"
                type="text"
                id="country"
                name="country"
                value=""
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br />
          <div className="input1">
            <div>
              <label htmlFor="invoiceDate">Invoice Date:</label>
              <br />
              <input
                className="input2"
                type="date" // Use the "date" input type for dates
                id="invoiceDate"
                name="invoiceDate"
                value={formData.invoiceDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="country">Payment Terms</label>
              <br />
              <input
                className="input2"
                type="date"
                id="paymentdate"
                name="paymentdate"
                value={formData.paymentdate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="country">Project Description</label>
            <br />
            <input
              className="input"
              type="text"
              id="country"
              name="country"
              value=""
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button type="submit" id="button1" className="butta1">
            + Add new item
          </button>
          <br />
          <br />
          <Link to="/">
            <button id="button" className="butta">
              Discard
            </button>
          </Link>
          <button type="submit" id="button" className="butta">
            Save as Draft
          </button>
          <button type="submit" id="button" className="butta">
            Save & Send
          </button>
        </form>
      </div>
    </>
  );
}

export default AddressForm;
