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
  const classes="border border-gray-300 text-gray-900 text-sm rounded-md   focus:ring-green-500 focus:border-green-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
  const emailRef = useRef();
  const passRef = useRef();
  const [formValid, setFormValid] = useState(false);
  const emailReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { value: action.val, isValid: action.val.includes("@") };
      case "validate":
        return { value: state.value, isValid: state.value.includes("@") };
      default:
        return { value: "", isValid: false };
    }
  };
  const passReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { value: action.val, isValid: action.val.length>5 };
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
    const loginCheck=setTimeout(()=>{
      setFormValid(emailValid && passValid);
    },500)
    return ()=>{
      clearTimeout(loginCheck)
    }
  }, [emailValid, passValid]);
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      const user = { email: email.value, password: password.value };
      console.log(user);
    }
    if (!emailValid) {
      emailRef.current.focus()
      return
    } 
    if(!passValid) {
      passRef.current.focus()
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
  const emailClass=`${emailValid?" ":"focus:ring-red-500 focus:border-red-500"}`
  const passClass=`${passValid?" ":"focus:ring-red-500 focus:border-red-500"}`
  return (
    <div>
      <Navbar />
      <section class="h-screen new" style={{ padding: "4rem 2rem 0 0" }}>
        <div className="loginContainer">
          <div className="">
            <Image src={login} />
          </div>
          {/* <MyLogin
            title="Login"
            box={emailList}
            isLogin={true}
            button="LOGIN"
            isAuth={true}
            desc1="Don't have an account?"
            desc2="Signup here"
            submit={loginSubmitHandler}
          /> */}
          <div className="newloginContainer">
      <div className="newLoginTop" style={{ marginLeft: "-1.8rem" }}>
        <FormHeader title="Login" />
      </div>
          <form className="newLoginForm" onSubmit={loginSubmitHandler}>
          <label>Email</label>
          <input
            className={classes+emailClass}
            type="email"
            placeholder="enter your email"
            onChange={emailChangeHandler}
            ref={emailRef}
            onBlur={emailBlurHandler}
            required={true}
          />
          {!emailValid && < p style={{fontSize:"12px",position:"relative",bottom:"10px",left:"10px",color:"red"}}>Enter a valid email</p>}
          <div className="flex justify-between pr-[1.5rem]" >
          <label>Password</label>
          <p style={{position:"relative",top:"2.3rem"}}>ic</p>
          </div>
          
          <input
            className={classes+passClass}
            type="password"
            placeholder="enter your password"
            onChange={passwordChangeHandler}
            ref={passRef}
            onBlur={passBlurHandler}
            required={true}
          />
          {!passValid&&<p style={{fontSize:"12px",position:"relative",bottom:"10px",left:"10px",color:"red"}}>Enter atleast 6 characters</p>}
          <div className="formBottom">
            <label>
              <input
                style={{ marginRight: "6px" }}
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
              <Link href="/">SignUp here</Link>
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

{
  /*
<section class=" new">
                <div class="px-6 h-full text-gray-800">
                    <div
                        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 new1"
                        >
                            <Player
                                autoplay
                                loop
                                src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
                                style={{ height: '400px', width: '400px'}}
                                id="player"
                                className='sticky -z-999'
                            >

                            </Player>
                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-7/12 mb-12 md:mb-0 new">
                            <FormHeader title="Login" className="bd1" />
                            <div className='md:mr-4'>

                                <form >
                                    <div className="row">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail_Id(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <label>Password</label>
                                        <input type="text" placeholder="Enter your password" onChange={(e) => setComponent_available(e.target.value)} />
                                    </div>

                                    <div className='rw'>
                                        <div className='grp'>

                                            <label><input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-700 checked:border-green-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" ></input>
                                                Remember Me</label > <span>Forgot Password</span>
                                        </div>


                                    </div>




                                    <div id="button" className="row">
                                        <button type="submit" >Login</button>
                                    </div>
                                </form>
                                <div className="row">
                                    <p>Don't have an account? <span>signup</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
 */
}
