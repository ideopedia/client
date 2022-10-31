import React from 'react'
import Navbar from "../components/navbar"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Signup() {
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
                                src="https://assets6.lottiefiles.com/packages/lf20_0mohmgca.json"
                                style={{ height: '400px', width: '350px'}}
                                id="player"
                                className='sticky -z-999'
                            >

                            </Player>
                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
                            <FormHeader title="Sign up" className="bd1" />
                            <div>

                                <form >
                                    <div className="row">
                                        <label>Name</label>
                                        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail_Id(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <label>Email</label>
                                        <input type="text" placeholder="Enter your password" onChange={(e) => setComponent_available(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <label>Password</label>
                                        <input type="text" placeholder="Enter your password" onChange={(e) => setComponent_available(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <label>Invite Code</label>
                                        <input type="text" placeholder="Enter your password" onChange={(e) => setComponent_available(e.target.value)} />
                                    </div>






                                    <div id="button" className="row">
                                        <button type="submit" >Sign up</button>
                                    </div>
                                </form>
                                <div className="row">
                                    <p>Already have an account? <span>Log in</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup