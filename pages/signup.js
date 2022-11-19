import React from "react";
import Navbar from "../components/navbar";
import signupvector from "../public/signupvector.svg";
import Image from "next/image";
import Link from "next/link";
import SignUp from "./Auth";
import { useState, useReducer, useEffect, useRef } from "react";
function Signup() {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  const classes =
    "border border-gray-300 text-gray-900 text-sm rounded-md   focus:ring-green-500 focus:border-green-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ";
  const emailRef = useRef();
  const passRef = useRef();
  const inviteRef = useRef();
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
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      const user = {
        email: email.value,
        password: password.value,
        inviteCode: invite.value,
      };
      console.log(user);
    }
    if (!emailValid) {
      emailRef.current.focus();
      return;
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
      <Navbar />
      <section class="h-screen new">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 new1">
              <Image src={signupvector} />
            </div>
            {/* <SignUp
              title="Sign Up"
              box={signUpList}
              button="SIGNUP"
              isAuth={true}
              desc1="Already have an account?"
              desc2="Login here"
            /> */}
            <div className="newloginContainer">
              <div className="newLoginTop" style={{ marginLeft: "-1.8rem" }}>
                <FormHeader title="Email" />
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
                      pass === "password"
                        ? setPass("text")
                        : setPass("password");
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
                <label>Invite code</label>
                <input
                  className={classes + inviteClass}
                  type="text"
                  placeholder="enter your invite code"
                  onChange={inviteChangeHandler}
                  ref={inviteRef}
                  onBlur={inviteBlurHandler}
                  required={true}
                />
                {!inviteValid && (
                  <p
                    style={{
                      fontSize: "12px",
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
                      <Link href="/login">Login here</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
            {/* <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
              <FormHeader title="Sign up" className="bd1" />
              <div>
                <form>
                  <div className="row">
                    <label>Email</label>
                    <input
                      className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail_Id(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <label>Password</label>
                    <input
                      className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setComponent_available(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <label>Invite Code</label>
                    <input
                      className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
                      type="password"
                      placeholder="Enter your Invite Code"
                      onChange={(e) => setComponent_available(e.target.value)}
                    />
                  </div>

                  <div id="button" className="row">
                    <button type="submit">Sign up</button>
                  </div>
                </form>
                <div className="row">
                  <p>
                    Already have an account? <span><Link href="/">Log in</Link></span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
