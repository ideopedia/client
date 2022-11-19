import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import login from "../public/login.svg";
import Image from "next/image";
import Link from "next/link";
import { useReducer, useEffect, useState, useRef } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import MyLogin from "./Auth";
function Login() {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  const classes =
    "border border-gray-300 text-gray-900 text-sm rounded-md   focus:ring-green-500 focus:border-green-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ";
  const emailRef = useRef();
  const passRef = useRef();
  const [formValid, setFormValid] = useState(false);
  const [pass, setPass] = useState("password");
  const emailReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return {
          value: action.val,
          isValid: action.val.includes("@") && action.val.includes("."),
        };
      case "validate":
        return {
          value: state.value,
          isValid: state.value.includes("@") && action.val.includes("."),
        };
      default:
        return { value: "", isValid: false };
    }
  };
  const passReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { value: action.val, isValid: action.val.length > 5 };
      case "validate":
        return { value: state.value, isValid: state.value.length > 5 };
      default:
        return { value: "", isValid: false };
    }
  };
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });
  const [password, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: true,
  });
  const { isValid: emailValid } = email;
  const { isValid: passValid } = password;
  useEffect(() => {
    const loginCheck = setTimeout(() => {
      setFormValid(emailValid && passValid);
    }, 500);
    return () => {
      clearTimeout(loginCheck);
    };
  }, [emailValid, passValid]);
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      const user = { email: email.value, password: password.value };
      console.log(user);
    }
    if (!emailValid) {
      emailRef.current.focus();
      return;
    }
    if (!passValid) {
      passRef.current.focus();
    }
  };
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "input", val: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatchPass({ type: "input", val: e.target.value });
  };
  const emailBlurHandler = () => {
    dispatchEmail({ type: "validate" });
  };
  const passBlurHandler = () => {
    dispatchPass({ type: "validate" });
  };
  const emailClass = `${
    emailValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  const passClass = `${
    passValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  return (
    <div>
      <Navbar />
      <section class="h-screen new" style={{ padding: "4rem 2rem 0 0" }}>
        <div className="loginContainer">
          <div className="">
            <Image src={login} />
          </div>

          <div className="newloginContainer">
            <div className="newLoginTop" style={{ marginLeft: "-1.8rem" }}>
              <FormHeader title="Login" />
            </div>
            <form className="newLoginForm" onSubmit={loginSubmitHandler}>
              <label>Email</label>
              <input
                className={classes + emailClass}
                type="email"
                placeholder="enter your email"
                onChange={emailChangeHandler}
                ref={emailRef}
                onBlur={emailBlurHandler}
                required={true}
              />
              {!emailValid && (
                <p
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    bottom: "10px",
                    left: "10px",
                    color: "red",
                  }}
                >
                  Enter a valid email
                </p>
              )}
              <div className="flex justify-between pr-[1.5rem]">
                <label>Password</label>
                <p
                  style={{ position: "relative", top: "2.3rem" }}
                  className="cursor-pointer"
                  onClick={function handlePass() {
                    pass === "password" ? setPass("text") : setPass("password");
                  }}
                >
                  ic
                </p>
              </div>

              <input
                className={classes + passClass}
                type={pass}
                placeholder="enter your password"
                onChange={passwordChangeHandler}
                ref={passRef}
                onBlur={passBlurHandler}
                required={true}
              />
              {!passValid && (
                <p
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    bottom: "10px",
                    left: "10px",
                    color: "red",
                  }}
                >
                  Enter atleast 6 characters
                </p>
              )}
              <div className="formBottom">
                <label>
                  <input
                    style={{ marginRight: "6px" }}
                    class="form-check-input appearance-none h-4 w-4 border-0 rounded-sm bg-white checked:bg-green-500 checked:border-green-500 focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <span>Remember Me</span>
                </label>
                <label className="text-gray-500">Forget password</label>
              </div>
              <div id="button" className="row flex justify-center items-center">
                <button
                  type="submit"
                  style={{ width: "100%" }}
                  // onClick={function handleClick() {
                  //   router.push("/read");
                  // }}
                >
                  Login
                </button>
              </div>

              <div className="signDesc" style={{ margin: "1.5rem auto" }}>
                <p>
                  Don't have an account?{"    "}
                  <span className="text-green-500">
                    <Link href="/signup">SignUp here</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
