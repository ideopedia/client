import React from 'react'
import Navbar from "../components/navbar"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Login() {
    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );
    return (
        <div>
            <Navbar />
            <section class="h-screen new">
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
                                style={{ height: '400px', width: '400px' }}
                            >

                            </Player>
                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 new">
                            <FormHeader title="Login" className="bd1" />
                            <div>

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
        </div>
    )
}

export default Login