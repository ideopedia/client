import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import login from "../public/login.svg";
import Image from "next/image";
import eyeoff from "../public/eyeoff.svg";
import eyeon from "../public/eyeon.svg";
import { getCookie, setCookies, removeCookies,setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import Axios from "axios";
import { useRouter } from "next/router";
import { useReducer, useEffect, useState, useRef } from "react";

function Login() {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  console.log(getCookie('test'))
  const classes =
    "border-2 border-gray-300 text-gray-900 text-base font-medium rounded-md   focus:ring-green-500 focus:border-green-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ";
  const emailRef = useRef();
  const passRef = useRef();
  const [formValid, setFormValid] = useState(false);
  const [pass, setPass] = useState("password");
  const [update, setUpdate] = useState(false);
  const router = useRouter();
  const toastifySuccess = () => {
    toast.success("Successfully LogedIn !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const toastifyFailure = () => {
    toast.error("Invail Email or Password !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const emailReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return {
          value: action.val,
          // isValid: action.val.includes("@") && action.val.includes("."),
          isValid: true,
        };
      case "validate":
        return {
          value: state.value,
          // isValid: state.value.includes("@") && action.val.includes("."),
          isValid: true,
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
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    if (formValid) {
      // const user = { email: email.value, password: password.value };
      // console.log(user);
      await Axios.post("/api/UserCredit/Login", {
        Email: email.value,
        Password: password.value,
      }).then((data) => {
        setUpdate(data.data);
        // console.log(data.data);
        // router.push(`/dashboard/${data.data.User_Id}`);
        if (data.data === null) {
          console.log(data.data)
          toastifyFailure();
        } else {
          console.log(data.data);
          setCookie('user',data.data.User_Id,{ maxAge: 10000 })
          toastifySuccess();
          router.push(`/dashboard/${data.data.User_Id}`);
        }
      });
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
      <Navbar isLogedIn={false} />
      <section className="h-screen new">
        <div className="loginContainer">
          <div className="pt-20">
            <Image src={login} />
          </div>
          <ToastContainer />
          <div className="newloginContainer lg:pt-16">
            <div className="newLoginTop flex items-center justify-center">
              <FormHeader title="LOGIN" />
            </div>
            <form className="newLoginForm" onSubmit={loginSubmitHandler}>
              <label className="text-lg font-medium">Email</label>
              <input
                className={classes + emailClass}
                type="email"
                placeholder="Enter your email"
                onChange={emailChangeHandler}
                ref={emailRef}
                onBlur={emailBlurHandler}
                required={true}
              />
              {!emailValid && (
                <p
                  style={{
                    fontSize: "16px",
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
                <label className="text-lg font-medium">Password</label>
                <p
                  style={{ position: "relative", top: "2.9rem" }}
                  className="cursor-pointer"
                  onClick={function handlePass() {
                    pass === "password" ? setPass("text") : setPass("password");
                  }}
                >
                  {pass === "password" ? (
                    <Image src={eyeoff} />
                  ) : (
                    <Image src={eyeon} />
                  )}
                </p>
              </div>

              <input
                className={classes + passClass}
                type={pass}
                placeholder="Enter your password"
                onChange={passwordChangeHandler}
                ref={passRef}
                onBlur={passBlurHandler}
                required={true}
              />
              {!passValid && (
                <p
                  style={{
                    fontSize: "16px",
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
                    className="form-check-input appearance-none h-4 w-4 border-2 border-gray-300 rounded-sm bg-white checked:bg-green-500 checked:border-green-500 focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <span className="text-base font-medium">Remember me</span>
                </label>
                <label
                  className="text-gray-500 text-base font-medium cursor-pointer"
                  onClick={function handleForgot() {
                    router.push("/forgotPassword");
                  }}
                >
                  Forgot password
                </label>
              </div>
              <div id="button" className="row flex justify-center items-center">
                <button
                  type="submit"
                  style={{ width: "40%" }}
                  // onClick={function handleClick() {
                  //   router.push("/read");
                  // }}
                >
                  Login
                </button>
              </div>

              <div className="signDesc" style={{ margin: "1.5rem auto" }}>
                <p className="font-medium">
                  Don't have an account?{"    "}
                  <span className="text-green-500 font-medium">
                    <Link href="/signup">Signup here</Link>
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
