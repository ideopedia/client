import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import SliderComponent from "../components/heroslider"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Navbar from "../components/navbar"
import Influencer from "../pages/new"

function Hero() {

    return (
        <div>
            <Navbar />

            <div className='body'>
                <div className='bg-white'>
                    <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                            <div className="max-w-lg">
                                <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Set your
                                    Title</h1>
                                <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                    laudantium quod rem voluptatem eos accusantium cumque.</p>
                                <div className="mt-6">
                                    <a href="#"
                                        className=" px-3 py-2  text-center text-white transition-colors duration-200 transform get">
                                        Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">

                           
                                <SliderComponent />
                            


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero