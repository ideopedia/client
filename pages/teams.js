import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import found1 from "../public/founder1.svg";
import Footer from "../components/footer";
import found2 from "../public/founder2.svg";
import bod1 from "../public/bod1.svg";
import bod2 from "../public/bod2.svg";
import bod3 from "../public/bod3.svg";
import close from "../public/close.svg";

const Teams = () => {
  const [board1, setBoard1] = useState(false);
  function handleBoard1() {
    setBoard1(!board1);
  }
  const [board2, setBoard2] = useState(false);
  function handleBoard2() {
    setBoard2(!board2);
  }
  const [board3, setBoard3] = useState(false);
  function handleBoard3() {
    setBoard3(!board3);
  }
  const [founder1, setFounder1] = useState(false);
  function handleFounder1() {
    setFounder1(!founder1);
  }
  const [founder2, setFounder2] = useState(false);
  function handleFounder2() {
    setFounder2(!founder2);
  }
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <div
          class="pt-5 pb-4 rounded-md flex items-center justify-center"
          id="bod"
        >
          <span className="text-xl">The Team</span>
        </div>
        <div class=" rounded-md flex items-center justify-center">
          <div className="text-2xl font-medium text-black">
            <div>This is our team, a lot of smiling happy people</div>
            <div className="text-center">
              who work hard to empower your teams
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-4 lg:gap-8">
          <div
            class="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleBoard1}
          >
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={bod1} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="font-medium text-2xl text-black ">
                  Mr. Binod Kumar Bawri
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="font-medium text-xl text-black uppercase">
                  Founder - director
                </span>
              </div>
            </div>
          </div>

          <div
            class="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleBoard2}
          >
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={bod2} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="font-medium text-2xl text-black">
                  Mr. A. Surya Prakash
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="font-medium text-xl text-black uppercase">
                  director
                </span>
              </div>
            </div>
          </div>

          <div
            class="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleBoard3}
          >
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={bod3} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="font-medium text-2xl text-black">
                  Mr. Swapan Dasgupta
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="font-medium text-xl text-black uppercase">
                  director
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div
            class=" rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleFounder1}
          >
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={found1} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="font-medium text-2xl text-black">
                  Malvika Bawri
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="font-medium text-xl text-black uppercase">
                  Founder
                </span>
              </div>
            </div>
          </div>
          <div
            class="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleFounder2}
          >
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div class="flex items-center justify-center">
                <Image src={found2} />
              </div>
              <div class="rounded-md flex items-center justify-center">
                <span className="font-medium text-2xl text-black">
                  Ritesh Bawri
                </span>
              </div>
              <div class="flex items-center justify-center">
                <span className="font-medium text-xl text-black uppercase">
                  Founder
                </span>
              </div>
            </div>
          </div>
        </div>

        {board1 ? (
          <>
            <div
              className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
              onClick={handleBoard1}
            >
              <div className="relative sm:w-auto md:w-10/12  lg:w-9/12 xl:w-9/12 my-20 mx-auto ">
                {/*content*/}
                <div className="bg-white rounded-md drop-shadow-md">
                  <div className="p-4">
                    <div className="flex justify-end items-end cursor-pointer">
                      <Image src={close} />
                    </div>
                    <br />
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div class=" rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div class="flex items-center justify-center">
                            <Image src={bod1} />
                          </div>
                          <div class="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Mr. Binod Kumar Bawri
                            </span>
                          </div>
                          <div class="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 pb-9 uppercase">
                              founder - director
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium ">
                          <div className="py-5 pr-8">
                            <span classname="text-green-500 " id="p1">
                              Mr Binod Kumar Bawri
                            </span>{" "}
                            is a leading intellectual, visionary, entrepreneur,
                            and philanthropist in India. He is the Founding
                            Director of Ideopedia.
                          </div>

                          <div className="py-5 pr-8">
                            He is the pioneer of industrialization in North-East
                            India. For over 40 years he has dedicated himself to
                            the economic and social enhancement of North-East
                            India. He has uplifted the lives of tens of
                            thousands of people through results-oriented
                            philanthrophy and public-spirited endeavors.
                          </div>

                          <div className="py-5 pr-8">
                            He was the Founder of Calcom Cement, the largest
                            private-sector enterprise in North-East India.
                            Calcom provided direct and indirect employment to
                            over 25,000 people annually.
                          </div>

                          <div className="py-5 pr-8">
                            Mr Bawri has over 30 years of experience in the
                            cement industry, and over 40 years of business
                            experience in manufacturing. At the age of 21 he set
                            up one of the first manufacturing industries in
                            North-East India.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {board2 ? (
          <>
            <div
              className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
              onClick={handleBoard2}
            >
              <div className="relative sm:w-auto md:w-10/12  lg:w-9/12 xl:w-9/12 my-20 mx-auto">
                {/*content*/}
                <div className="bg-white rounded-md drop-shadow-md">
                  <div className="p-4">
                    <div className="flex justify-end items-end cursor-pointer">
                      <Image src={close} />
                    </div>
                    <br />
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div class=" rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div class="flex items-center justify-center">
                            <Image src={bod2} />
                          </div>
                          <div class="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Mr. A. Surya Prakash
                            </span>
                          </div>
                          <div class="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 pb-9 uppercase">
                              director
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium">
                          <div className="py-5 pr-8">
                            <span id="p2">Mr Binod Kumar Bawri</span> is a
                            leading intellectual, visionary, entrepreneur, and
                            philanthropist in India. He is the Founding Director
                            of Ideopedia.
                          </div>
                          <div className="py-5 pr-8">
                            He is the pioneer of industrialization in North-East
                            India. For over 40 years he has dedicated himself to
                            the economic and social enhancement of North-East
                            India. He has uplifted the lives of tens of
                            thousands of people through results-oriented
                            philanthrophy and public-spirited endeavors.
                          </div>
                          <div className="py-5 pr-8">
                            He was the Founder of Calcom Cement, the largest
                            private-sector enterprise in North-East India.
                            Calcom provided direct and indirect employment to
                            over 25,000 people annually.
                          </div>
                          <div className="py-5 pr-8">
                            Mr Bawri has over 30 years of experience in the
                            cement industry, and over 40 years of business
                            experience in manufacturing. At the age of 21 he set
                            up one of the first manufacturing industries in
                            North-East India.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {board3 ? (
          <>
            <div
              className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
              onClick={handleBoard3}
            >
              <div className="relative sm:w-auto md:w-10/12  lg:w-9/12 xl:w-9/12 my-20 mx-auto">
                {/*content*/}
                <div className="bg-white rounded-md drop-shadow-md">
                  <div className="p-4">
                    <div className="flex justify-end items-end cursor-pointer">
                      <Image src={close} />
                    </div>
                    <br />
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div class=" rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div class="flex items-center justify-center">
                            <Image src={bod3} />
                          </div>
                          <div class="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Mr. Swapan Dasgupta
                            </span>
                          </div>
                          <div class="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 pb-9 uppercase">
                              director
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium">
                          <div className="py-5 pr-8">
                            <span id="p3">Mr Binod Kumar Bawri</span> is a
                            leading intellectual, visionary, entrepreneur, and
                            philanthropist in India. He is the Founding Director
                            of Ideopedia.
                          </div>
                          <div className="py-5 pr-8">
                            He is the pioneer of industrialization in North-East
                            India. For over 40 years he has dedicated himself to
                            the economic and social enhancement of North-East
                            India. He has uplifted the lives of tens of
                            thousands of people through results-oriented
                            philanthrophy and public-spirited endeavors.
                          </div>
                          <div className="py-5 pr-8">
                            He was the Founder of Calcom Cement, the largest
                            private-sector enterprise in North-East India.
                            Calcom provided direct and indirect employment to
                            over 25,000 people annually.
                          </div>
                          <div className="py-5 pr-8">
                            Mr Bawri has over 30 years of experience in the
                            cement industry, and over 40 years of business
                            experience in manufacturing. At the age of 21 he set
                            up one of the first manufacturing industries in
                            North-East India.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {founder1 ? (
          <>
            <div
              className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
              onClick={handleFounder1}
            >
              <div className="relative sm:w-auto md:w-10/12  lg:w-9/12 xl:w-9/12 my-20 mx-auto">
                {/*content*/}
                <div className="bg-white rounded-md drop-shadow-md">
                  <div className="p-4">
                    <div className="flex justify-end items-end cursor-pointer">
                      <Image src={close} />
                    </div>
                    <br />
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div class=" rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div class="flex items-center justify-center">
                            <Image src={found1} />
                          </div>
                          <div class="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Malvika Bawri
                            </span>
                          </div>
                          <div class="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 pb-9 uppercase">
                              Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium">
                          <div className="py-5 pr-8">
                            <span id="p2">Mr Binod Kumar Bawri</span> is a
                            leading intellectual, visionary, entrepreneur, and
                            philanthropist in India. He is the Founding Director
                            of Ideopedia.
                          </div>
                          <div className="py-5 pr-8">
                            He is the pioneer of industrialization in North-East
                            India. For over 40 years he has dedicated himself to
                            the economic and social enhancement of North-East
                            India. He has uplifted the lives of tens of
                            thousands of people through results-oriented
                            philanthrophy and public-spirited endeavors.
                          </div>
                          <div className="py-5 pr-8">
                            He was the Founder of Calcom Cement, the largest
                            private-sector enterprise in North-East India.
                            Calcom provided direct and indirect employment to
                            over 25,000 people annually.
                          </div>
                          <div className="py-5 pr-8">
                            Mr Bawri has over 30 years of experience in the
                            cement industry, and over 40 years of business
                            experience in manufacturing. At the age of 21 he set
                            up one of the first manufacturing industries in
                            North-East India.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {founder2 ? (
          <>
            <div
              className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
              onClick={handleFounder2}
            >
              <div className="relative sm:w-auto md:w-10/12  lg:w-9/12 xl:w-9/12 my-20 mx-auto">
                {/*content*/}
                <div className="bg-white rounded-md drop-shadow-md">
                  <div className="p-4">
                    <div className="flex justify-end items-end cursor-pointer">
                      <Image src={close} />
                    </div>
                    <br />
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div class=" rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div class="flex items-center justify-center">
                            <Image src={found2} />
                          </div>
                          <div class="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Ritesh Bawri
                            </span>
                          </div>
                          <div class="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 pb-9 uppercase">
                              Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class=" rounded-md flex items-center justify-center">
                        <span className="text-base font-medium text-black">
                          <div className="py-5 pr-8">
                            <span id="p2">Mr Binod Kumar Bawri</span> is a
                            leading intellectual, visionary, entrepreneur, and
                            philanthropist in India. He is the Founding Director
                            of Ideopedia.
                          </div>
                          <div className="py-5 pr-8">
                            He is the pioneer of industrialization in North-East
                            India. For over 40 years he has dedicated himself to
                            the economic and social enhancement of North-East
                            India. He has uplifted the lives of tens of
                            thousands of people through results-oriented
                            philanthrophy and public-spirited endeavors.
                          </div>
                          <div className="py-5 pr-8">
                            He was the Founder of Calcom Cement, the largest
                            private-sector enterprise in North-East India.
                            Calcom provided direct and indirect employment to
                            over 25,000 people annually.
                          </div>
                          <div className="py-5 pr-8">
                            Mr Bawri has over 30 years of experience in the
                            cement industry, and over 40 years of business
                            experience in manufacturing. At the age of 21 he set
                            up one of the first manufacturing industries in
                            North-East India.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Teams;
