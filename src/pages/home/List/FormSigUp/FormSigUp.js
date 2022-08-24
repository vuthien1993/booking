import React from "react";
import "./FormSigUp.css";
function FormSigUp() {
  return (
    <div className="borderFormSig">
      <div className="borderSignUp">
        <div className="center">
          <h1>Save time, Save money!</h1>
          <p>Sign up and we'll send the best deals to you</p>
          <form>
            <input type={"text"} placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default FormSigUp;
