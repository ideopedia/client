import React from 'react'
import Navbar from "../components/navbar"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import contact from "../public/Rectangle_1223.svg"
import Image from "next/image"
function Contact() {
    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );
    return (
        <div>
            <Navbar />
            <section class="h-screen new">
                <div class="px-6 h-full text-gray-800">
                    <div
                        class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 "
                    >
                        <div
                            class="grow-0 shrink-1 md:shrink-0 basis-auto py-8 xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 new1 cim"
                        >
                          
                                <Image src={contact} />
                           

                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 new">
                            <FormHeader title="Contact us" className="bd1" />
                            <div>

                                <form >
                                    <div className="row">
                                        <label>Name</label>
                                        <input type="email" placeholder="Enter your name" onChange={(e) => setEmail_Id(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <label>Email</label>
                                        <input type="text" placeholder="Enter your email" onChange={(e) => setComponent_available(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <label>Message</label>
                                        <textarea type="text" placeholder="write your message" onChange={(e) => setComponent_available(e.target.value)} ></textarea>

                                    </div>






                                    <div id="button" className="row">
                                        <button type="submit" >Send Message</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact