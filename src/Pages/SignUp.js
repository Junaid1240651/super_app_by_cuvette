import React, { useState } from "react";
import "./SignUp.moduel.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Number: "",
    CheckBox: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Number: "",
    CheckBox: "",
  });

  const [DisableBtn, setDisableBtn] = useState(true);

  function handleInput(e) {
    // localStorage.setItem("Select Music", "newArray");
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    if (!name == "") {
      setInput({ ...input, CheckBox: false });
    }
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: newValue,
      };
    });

    if (!value && type !== "checkbox") {
      setErrorMessage({
        ...errorMessage,
        Chec: "This field is required.",
      });
      setDisableBtn(true);
    } else if (name === "Name" && value.length < 5) {
      setErrorMessage({
        ...errorMessage,
        Name: "Name must be at least 5 characters long.",
      });
      setDisableBtn(true);
    } else if (name === "UserName" && value.length < 5) {
      setErrorMessage({
        ...errorMessage,
        UserName: "Name must be at least 5 characters long.",
      });
      setDisableBtn(true);
    } else if (name === "Email" && !value.endsWith("@gmail.com")) {
      setErrorMessage({
        ...errorMessage,
        Email: "Email must end with @gmail.com",
      });
      setDisableBtn(true);
    } else if (name === "Number" && value.length !== 10) {
      setErrorMessage({
        ...errorMessage,
        Number: "Phone number must be 10 digits long",
      });
      setDisableBtn(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        [name]: "",
      });
    }

    setDisableBtn(
      !(
        input.Name &&
        input.UserName &&
        input.Email &&
        input.Number &&
        !input.CheckBox &&
        errorMessage.Name == "" &&
        errorMessage.UserName == "" &&
        errorMessage.Email == "" &&
        errorMessage.Number == "" &&
        errorMessage.UserName == ""
      )
    );
  }
  function signUpHandler(event) {
    event.preventDefault();

    setInput({
      Name: "",
      UserName: "",
      Email: "",
      Number: "",
      CheckBox: false,
    });
    setErrorMessage({
      Name: "",
      UserName: "",
      Email: "",
      Number: "",
      CheckBox: "",
    });
    setDisableBtn(true);
    navigate("/categories");
    localStorage.setItem("User Details", JSON.stringify([input]));
    console.log(input);
  }
  return (
    <div className="container">
      <div className="leftDiv">
        <div className="accountDiv">
          <p>Already have an account?</p>
          <button className="loginBtn">Login</button>
        </div>
        <div className="discoverDiv">
          <h1 className="discoverText">Discover new things on Superapp</h1>
        </div>
      </div>
      <div className="rightDiv">
        <form onSubmit={signUpHandler}>
          <div className="createAccountDiv">
            <h1>Super app</h1>
            <p>Create your new account</p>
            <div className="socialBtn">
              <button className="emailBtn">Email</button>
              <button className="emptyBtn">|</button>
              <button className="googleBtn">Google</button>
            </div>
            <div className="inputDiv">
              {/* <div> */}
              <input
                value={input.Name}
                minLength={5}
                required
                onChange={handleInput}
                name="Name"
                className="inputBox"
                placeholder="Name"
              ></input>
              {errorMessage.Name && (
                <p
                  style={{
                    color: "red",
                    margin: "0px",
                    marginTop: "10px",
                    fontSize: "18px",
                    paddingLeft: "20px",
                  }}
                >
                  {errorMessage.Name}
                </p>
              )}
              <input
                value={input.UserName}
                minLength={5}
                required
                onChange={handleInput}
                name="UserName"
                className="inputBox"
                placeholder="UserName"
              ></input>
              {errorMessage.UserName && (
                <p
                  style={{
                    color: "red",
                    margin: "0px",
                    marginTop: "10px",
                    fontSize: "18px",
                    paddingLeft: "20px",
                  }}
                >
                  {errorMessage.UserName}
                </p>
              )}
              <input
                value={input.Email}
                onChange={handleInput}
                name="Email"
                pattern="[a-z0-9._%+-]+@gmail\.com$"
                required
                className="inputBox"
                placeholder="Email"
              ></input>
              {errorMessage.Email && (
                <p
                  style={{
                    color: "red",
                    margin: "0px",
                    marginTop: "10px",
                    fontSize: "18px",
                    paddingLeft: "20px",
                  }}
                >
                  {errorMessage.Email}
                </p>
              )}

              <input
                value={input.Number}
                onChange={handleInput}
                type="number"
                inputmode="numeric"
                name="Number"
                minLength={10}
                maxLength={10}
                className="inputBox"
                placeholder="Mobile Number"
              ></input>
              {errorMessage.Number && (
                <p
                  style={{
                    color: "red",
                    margin: "0px",
                    marginTop: "10px",
                    fontSize: "18px",
                    paddingLeft: "20px",
                  }}
                >
                  {errorMessage.Number}
                </p>
              )}

              <div className="checkBoxDiv">
                <input
                  onChange={handleInput}
                  required
                  type="checkbox"
                  name="CheckBox"
                  checked={input.CheckBox}
                  value="Share my registration data with Superapp"
                ></input>
                {errorMessage.CheckBox && (
                  <p
                    style={{
                      color: "red",
                      margin: "0px",
                      marginTop: "10px",
                      fontSize: "18px",
                      paddingLeft: "20px",
                    }}
                  >
                    {errorMessage.CheckBox}
                  </p>
                )}
                <p>Share my registration data with Superapp</p>
              </div>
              {/* {errorMessage && <p>{errorMessage}</p>} */}

              <button className="signUpBtn" disabled={DisableBtn}>
                SignUp
              </button>

              <p>
                By clicking on Sign up. you agree to Superapp Terms and
                Conditions of Use
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
