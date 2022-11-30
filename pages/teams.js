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
      <Navbar isLogedIn={false} />
      <div className="p-5">
        <div
          className="pt-5 pb-4 rounded-md flex items-center justify-center"
          id="bod"
        >
          <span className="text-xl">The Team</span>
        </div>
        <div className=" rounded-md flex items-center justify-center">
          <div className="md:text-2xl text-xl font-medium text-black">
            <div className="text-center">
              This is our team, a lot of smiling happy people
            </div>
            <div className="text-center">
              who work hard to empower your teams
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-4 lg:gap-8">
          <div
            className="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleBoard1}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div className="flex items-center justify-center">
                <Image src={bod1} />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <span className="font-medium text-black md:text-[24px] text-xl ">
                  Mr. Binod Kumar Bawri
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium md:text-xl text-lg text-black uppercase">
                  Founder - director
                </span>
              </div>
            </div>
          </div>

          <div
            className="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleBoard2}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div className="flex items-center justify-center">
                <Image src={bod2} />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <span className="font-medium md:text-[24px] text-xl text-black ">
                  Mr. A. Surya Prakash
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium md:text-xl text-lg text-black uppercase">
                  director
                </span>
              </div>
            </div>
          </div>

          <div
            className="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleBoard3}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div className="flex items-center justify-center">
                <Image src={bod3} />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <span className="font-medium md:text-[24px] text-xl text-black">
                  Mr. Swapan Dasgupta
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium md:text-xl text-lg text-black uppercase">
                  director
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
          id="bod1"
        >
          <div
            className=" rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleFounder1}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div className="flex items-center justify-center">
                <Image src={found1} />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <span className="font-medium md:text-[24px] text-xl text-black">
                  Malvika Bawri
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium md:text-xl text-lg text-black uppercase">
                  Founder
                </span>
              </div>
            </div>
          </div>
          <div
            className="p-4  rounded-md flex items-center justify-center cursor-pointer"
            onClick={handleFounder2}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
              <div className="flex items-center justify-center">
                <Image src={found2} />
              </div>
              <div className="rounded-md flex items-center justify-center">
                <span className="font-medium md:text-[24px] text-xl text-black">
                  Ritesh Bawri
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium md:text-xl text-lg text-black uppercase">
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
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div className=" rounded-md flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div className="flex items-center justify-center">
                            <Image src={bod1} />
                          </div>
                          <div className="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Mr. Binod Kumar Bawri
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 lg:pb-9 sm:pb-6 pb-2 uppercase">
                              founder - director
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium ">
                          <div className="py-5 lg:pr-8">
                            <span classname="text-green-500 " id="p1">
                              Mr Binod Kumar Bawri
                            </span>{" "}
                            is a leading intellectual, visionary, entrepreneur,
                            and philanthropist in India. He is the Founding
                            Director of Ideopedia.
                          </div>

                          <div className="py-5 lg:pr-8">
                            He is the pioneer of industrialization in North-East
                            India. For over 40 years he has dedicated himself to
                            the economic and social enhancement of North-East
                            India. He has uplifted the lives of tens of
                            thousands of people through results-oriented
                            philanthrophy and public-spirited endeavors.
                          </div>

                          <div className="py-5 lg:pr-8">
                            He was the Founder of Calcom Cement, the largest
                            private-sector enterprise in North-East India.
                            Calcom provided direct and indirect employment to
                            over 25,000 people annually.
                          </div>

                          <div className="py-5 lg:pr-8">
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
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div className=" rounded-md flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div className="flex items-center justify-center">
                            <Image src={bod2} />
                          </div>
                          <div className="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Mr. A. Surya Prakash
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 lg:pb-9 sm:pb-6 pb-2 uppercase">
                              director
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium">
                          <div className="py-5 lg:pr-8">
                            <span id="p2">Mr A Surya Prakash</span> is the
                            Chairman, Prasar Bharati, India's largest public
                            broadcasting body. He is an author and Columnist and
                            a leading commentator on Indian constitutional and
                            parliamentary issues and governance. Apart from his
                            pioneering work on Parliament, he is known for his
                            well-researched interventions on national issues.
                          </div>
                          <div className="py-5 lg:pr-8">
                            Over the last 47 years, Mr Prakash has held key
                            positions in several print and electronic media
                            organisations. He was Editor, Zee News; Executive
                            Editor, The Pioneer; India Editor, Asia Times;
                            Political Editor, Eenadu Group of Newspapers; and
                            Chief of Bureau, The Indian Express, New Delhi.
                          </div>
                          <div className="py-5 lg:pr-8">
                            Currently, apart from heading Prasar Bharati, he is
                            a Member of the Executive Council of the Nehru
                            Memorial Museum & Library, New Delhi and Member,
                            Board of Governors, Indira Gandhi National Open
                            University (IGNOU). He is also Member, Advisory
                            Council, Vivekananda International Foundation, a New
                            Delhi based Think-Tank and Director, India
                            Foundation, New Delhi.
                          </div>
                          <div className="py-5 lg:pr-8">
                            Mr Prakash is the recipient of the Sardar Patel
                            Fellowship from the Institute of Policy Studies;
                            Chennai; the Karnataka Rajyotsava Award from the
                            Government of Karnataka; the Karnataka Patrika
                            Academy Award; and the Bipan Chandra Pal Sanman for
                            Fearless Journalism.
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
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div className=" rounded-md flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div className="flex items-center justify-center">
                            <Image src={bod3} />
                          </div>
                          <div className="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Mr. Swapan Dasgupta
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 lg:pb-9 sm:pb-6 pb-2 uppercase">
                              director
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium">
                          <div className="py-5 lg:pr-8">
                            <span id="p3">Mr Swapan Dasgupta</span> is an Indian
                            journalist and Member of Parliament, being a
                            presidential nominee to the Rajya Sabha (Council of
                            States, or India's Upper House of Parliament)
                          </div>
                          <div className="py-5 lg:pr-8">
                            At various points in his career, he has held
                            editorial posts at The Statesman, The Daily
                            Telegraph, The Times of India, The Indian Express
                            and India Today, where he was managing editor till
                            2003.
                          </div>
                          <div className="py-5 lg:pr-8">
                            He has published his works in The Pioneer, The
                            Telegraph, Dainik Jagran, The Times of India, The
                            New Indian Express, Outlook, The Free Press Journal
                            and several other newspapers and magazines, and is
                            currently a freelance writer for various
                            publications. Over the last decade, he has acquired
                            the fame of being one of the most frequently
                            appearing faces on Indian television.
                          </div>
                          <div className="py-5 lg:pr-8">
                            Dasgupta was awarded the Padma Bhushan (India's
                            third highest civilian award) in 2015, for his
                            contribution to Literature and Education.
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
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div className=" rounded-md flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div className="flex items-center justify-center">
                            <Image src={found1} />
                          </div>
                          <div className="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Malvika Bawri
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 lg:pb-9 sm:pb-6 pb-2 uppercase">
                              Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className=" rounded-md flex items-center justify-center"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        <span className="text-base text-black font-medium">
                          <div className="py-5 lg:pr-8">
                            <span id="p2">Malvika Bawri</span> is a serial
                            entrepreneur, philanthropist, and innovator. She is
                            the Founder of Ideopedia. She is the Co-Founder and
                            President of Think India. She is the Founder of
                            Diduce Technologies, a software startup.
                          </div>
                          <div className="py-5 lg:pr-8">
                            She is the Co-Founder of Quantta Analytics, a Big
                            Data and Artificial Intelligence driven platform
                            that creates efficiencies in human interactions. She
                            was the Chief Strategy Officer of Calcom Cement, the
                            largest private-sector enterprise in North-East
                            India.
                          </div>
                          <div className="py-5 lg:pr-8">
                            She was the Founder of Saroj Antiques, a global
                            antiquarian company. She was the Co-Founder of
                            Cijen, an analytics and software company based out
                            of California. She has been granted a patent by the
                            USPTO and has several patents pending. She is an
                            Advisor to several startups.
                          </div>
                          <div className="py-5 lg:pr-8">
                            She was the Founder of Thaella, a high-fashion
                            accessories company that infused fashion with art.
                            She started her first company designing fashion
                            apparel at the age of sixteen. Her other interests
                            include writing, image consulting, mentoring, art,
                            yoga, and hiking. She holds an MBA from Pepperdine
                            University, USA.
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
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                      <div className=" rounded-md flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                          <div className="flex items-center justify-center">
                            <Image src={found2} />
                          </div>
                          <div className="rounded-md flex items-center justify-center">
                            <span className="font-medium text-2xl text-black">
                              Ritesh Bawri
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="font-medium text-xl text-gray-500 lg:pb-9 sm:pb-6 pb-2 uppercase">
                              Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" rounded-md flex items-center justify-center">
                        <span className="text-base font-medium text-black">
                          <div className="py-5 lg:pr-8">
                            <span id="p2">Ritesh Bawri</span> is a serial
                            entrepreneur, change maker, nutritionist and
                            lifestyle consultant. He is the Co-Founder of
                            Ideopedia. He is the Founder of Think India. He is
                            the Founder of Quantta Analytics, a Big Data and
                            Artificial Intelligence driven platform that creates
                            efficiencies in human interactions. He is the
                            Co-Founder of Diduce Technologies, a software
                            startup.
                          </div>
                          <div className="py-5 lg:pr-8">
                            He was the Managing Director of Calcom Cement, the
                            largest private-sector enterprise in North-East
                            India. He spent over a decade building and running
                            cement plants in Eastern India. He was the founder
                            of Cijen, an analytics and software company based
                            out of California. He served as the President of the
                            University of Michigan Indian Alumni Association. He
                            is a member of the Alumni Board, Ross School of
                            Business. He co-founded the India Business
                            Conference at the University of Michigan, Ross
                            School of Business.
                          </div>
                          <div className="py-5 lg:pr-8">
                            He served on the Entrepreneurs Organization's Board
                            in Kolkata in 2011, 2012, and 2017. He served on a
                            committee to set up a digital platform for Prasar
                            Bharati. He has actively promoted the culture of
                            North-East India through art. He was President,
                            Rotary Club, East Kolkata and a Paul Harris Fellow.
                          </div>
                          <div className="py-5 lg:pr-8">
                            He has transformed the lives of thousands of people
                            through nutrition counselling, and helped them
                            reverse diabetes, cardiovascular diseases, obesity,
                            asthma, and other diseases.
                          </div>
                          <div className="py-5 lg:pr-8">
                            He has several patents pending in the United States.
                            He holds an MBA from the University of Michigan, Ann
                            Arbor, USA, and a Bachelors degree in Economics,
                            from St. Xavier's College, Mumbai.
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
