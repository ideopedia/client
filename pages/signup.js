import React from "react";
import Navbar from "../components/navbar";
import signupvector from "../public/signupvector.svg";
import Image from "next/image";
import Link from "next/link";
import eyeoff from "../public/eyeoff.svg";
import eyeon from "../public/eyeon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Axios from "axios";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState, useReducer, useEffect, useRef } from "react";
function Signup() {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  const classes =
    "border-2 border-gray-300 text-gray-900 text-base font-medium rounded-md   focus:ring-green-500 focus:border-green-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ";
  const emailRef = useRef();
  const passRef = useRef();
  const inviteRef = useRef();
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
    toast.error("Invail Email or Invite Code !", {
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

          isValid: action.val.includes("@"),

          // isValid: true,
        };
      case "validate":
        return {
          value: state.value,
          isValid: state.value.includes("@"),
          // isValid: true,
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
  const inviteReducer = (state, action) => {
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
  const [invite, dispatchInvite] = useReducer(inviteReducer, {
    value: "",
    isValid: true,
  });
  const { isValid: emailValid } = email;
  const { isValid: passValid } = password;
  const { isValid: inviteValid } = invite;
  useEffect(() => {
    const loginCheck = setTimeout(() => {
      setFormValid(emailValid && passValid && inviteValid);
    }, 500);
    return () => {
      clearTimeout(loginCheck);
    };
  }, [emailValid, passValid, inviteValid]);
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    if (formValid) {
      // const user = {
      //   Email: email.value,
      //   Password: password.value,
      //   Invite_code: invite.value,
      // };
      // console.log(user);
      await Axios.post("/api/UserCredit/Signup", {
        Email: email.value,
        Password: password.value,
        Invite_code: invite.value,
      }).then((data) => {
        setUpdate(data.data);
        if (data.data === null) {
          console.log(data.data);
          toastifyFailure();
        } else {
          console.log(data.data);
          setCookies("user", data.data.User_Id, { maxAge: 10000 });
          toastifySuccess();
          router.push(`/dashboard/${data.data.User_Id}`);
        }
        // router.push(`/dashboard/${data.data.User_Id}`);
      });
      // console.log(update);
    }
    if (!emailValid) {
      emailRef.current.focus();
      return;
    }
    if (!passValid) {
      passRef.current.focus();
    }
    if (!passValid) {
      passRef.current.focus();
    }
    if (!inviteValid) {
      inviteRef.current.focus();
    }
  };
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "input", val: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatchPass({ type: "input", val: e.target.value });
  };
  const inviteChangeHandler = (e) => {
    dispatchInvite({ type: "input", val: e.target.value });
  };
  const emailBlurHandler = () => {
    dispatchEmail({ type: "validate" });
  };
  const passBlurHandler = () => {
    dispatchPass({ type: "validate" });
  };
  const inviteBlurHandler = () => {
    dispatchInvite({ type: "validate" });
  };
  const emailClass = `${
    emailValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  const passClass = `${
    passValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  const inviteClass = `${
    inviteValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  return (
    <div>
      <Navbar isLogedIn={false} />
      <section className="h-screen new">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-8/12 md:w-9/12 new1">
              <Image src={signupvector} />
            </div>
            <div className="newloginContainer">
              <div className="newLoginTop flex items-center justify-center">
                <FormHeader title="SIGNUP" />
              </div>
              <ToastContainer />
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
                      pass === "password"
                        ? setPass("text")
                        : setPass("password");
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
                <label className="text-lg font-medium">Invite code</label>
                <input
                  className={classes + inviteClass}
                  type="text"
                  placeholder="Enter your invite code"
                  onChange={inviteChangeHandler}
                  ref={inviteRef}
                  onBlur={inviteBlurHandler}
                  required={true}
                />
                {!inviteValid && (
                  <p
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      bottom: "10px",
                      left: "10px",
                      color: "red",
                    }}
                  >
                    Enter a valid invite code
                  </p>
                )}
                <div
                  id="button"
                  className="row flex justify-center items-center"
                >
                  <button
                    type="submit"
                    style={{ width: "40%" }}
                  >
                    Signup
                  </button>
                </div>

                <div className="signDesc" style={{ margin: "1.5rem auto" }}>
                  <p className="text-base font-medium">
                    Already have an account?{"    "}
                    <span className="text-green-500">
                      <Link href="/login">Login here</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
