import React from "react";
import Navbar from "../components/navbar";
import forgot_vector from "../public/forgot_vector.svg";
import Image from "next/image";
import Link from "next/link";
import eyeoff from "../public/eyeoff.svg";
import eyeon from "../public/eyeon.svg";
import Axios from "axios";
import { useRouter } from "next/router";
import { useState, useReducer, useEffect, useRef } from "react";
function ForgotPassword() {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  const classes =
    "border-2 border-gray-300 text-gray-900 text-base font-medium rounded-md   focus:ring-green-500 focus:border-green-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ";
  const emailRef = useRef();
  const passRef = useRef();
  const ConfirmRef = useRef();
  const [formValid, setFormValid] = useState(false);
  const [pass, setPass] = useState("password");
  const [cpass, setCPass] = useState("password");
  const [update, setUpdate] = useState(false);
  const router = useRouter();

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
          isValid: true,
          // isValid: state.value.includes("@") && action.val.includes("."),
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
  const ConfirmPassReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { value: action.val, isValid: action.val.length > 5 };
      case "validate":
        return { value: state.value, isValid: state.value.length > 5 };
      default:
        return { value: "", isValid: false };
    }
  };
  //   const inviteReducer = (state, action) => {
  //     switch (action.type) {
  //       case "input":
  //         return { value: action.val, isValid: action.val.length > 5 };
  //       case "validate":
  //         return { value: state.value, isValid: state.value.length > 5 };
  //       default:
  //         return { value: "", isValid: false };
  //     }
  //   };
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });
  const [password, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: true,
  });
  const [ConfirmPassword, dispatchConfirmPassword] = useReducer(
    ConfirmPassReducer,
    {
      value: "",
      isValid: true,
    }
  );
  const { isValid: emailValid } = email;
  const { isValid: passValid } = password;
  const { isValid: ConfirmpassValid } = ConfirmPassword;
  useEffect(() => {
    const loginCheck = setTimeout(() => {
      setFormValid(emailValid && passValid && ConfirmpassValid);
    }, 500);
    return () => {
      clearTimeout(loginCheck);
    };
  }, [emailValid, passValid, ConfirmpassValid]);
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    if (formValid) {
      // const user = {
      //   Email: email.value,
      //   Password: password.value,
      //   Invite_code: invite.value,
      // };
      // console.log(user);
      await Axios.post("http://localhost:3000/api/UserCredit/ForgotPass", {
        Email: email.value,
        Password: password.value,
      }).then((data) => {
        setUpdate(data.data);
        console.log(data.data);
        router.push(`/login`);
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
    if (!ConfirmpassValid) {
      ConfirmRef.current.focus();
    }
  };
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "input", val: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatchPass({ type: "input", val: e.target.value });
  };
  const ConfirmChangeHandler = (e) => {
    dispatchConfirmPassword({ type: "input", val: e.target.value });
  };
  const emailBlurHandler = () => {
    dispatchEmail({ type: "validate" });
  };
  const passBlurHandler = () => {
    dispatchPass({ type: "validate" });
  };
  const ConfirmBlurHandler = () => {
    dispatchConfirmPassword({ type: "validate" });
  };
  const emailClass = `${
    emailValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  const passClass = `${
    passValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  const ConfirmClass = `${
    ConfirmpassValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  return (
    <div>
      <Navbar  isLogedIn={false} />
      <section class="h-screen new">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-8/12 md:w-9/12 mb-12 md:mb-0 new1">
              <Image src={forgot_vector} />
            </div>

            <div className="newloginContainer">
              <div className="newLoginTop" style={{ marginLeft: "-1.8rem" }}>
                <FormHeader title="Reset Password" />
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
                <div className="flex justify-between pr-[1.5rem]">
                  <label className="text-lg font-medium">
                    Confirm Password
                  </label>
                  <p
                    style={{ position: "relative", top: "2.9rem" }}
                    className="cursor-pointer"
                    onClick={function handlePass() {
                      cpass === "password"
                        ? setCPass("text")
                        : setCPass("password");
                    }}
                  >
                    {cpass === "password" ? (
                      <Image src={eyeoff} />
                    ) : (
                      <Image src={eyeon} />
                    )}
                  </p>
                </div>
                <input
                  className={classes + ConfirmClass}
                  type={cpass}
                  placeholder="Confirm your password"
                  onChange={ConfirmChangeHandler}
                  ref={ConfirmRef}
                  onBlur={ConfirmBlurHandler}
                  required={true}
                />
                {!ConfirmpassValid && (
                  <p
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      bottom: "10px",
                      left: "10px",
                      color: "red",
                    }}
                  >
                    Password Doesn't Match
                  </p>
                )}
                <div
                  id="button"
                  className="row flex justify-center items-center"
                >
                  <button type="submit" style={{ width: "40%" }}>
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
