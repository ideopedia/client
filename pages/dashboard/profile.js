import SideNavbar from "../../components/sidebar"
import Image from "next/image"
import prime from "../../public/prime.svg"
import about from "../../public/About.svg"
import Link from "next/link";
const profile = () => {
    return (
        <div className="profile lg:flex">
            <SideNavbar />
            <div className="desc md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/1">
                <div className="top">
                    <h1>Profile</h1>
                </div>
                <div className="profImg m-4 inne">
                    <Image src={prime} className="imgr" />
                </div>
                <div className="FormSec" >

                    <form>
                        <label>Email</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="email"
                            placeholder="xyz@gmail.com"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>Official Mail Address</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="email"
                            placeholder="Add official Mail"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>Phone</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="email"
                            placeholder="+234"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>Designation</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add designation"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>Birthday</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add BirthDay"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>City of Birth</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add City of Birth"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>School/College Name</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add School/College Name"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>Spouse Name</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add Spouse Name"
                            onChange={(e) => setEmail_Id(e.target.value)}
                        />
                        <label>Current Address</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add Current Address"
                            onChange={(e) => setEmail_Id(e.target.value)}
                            style={{ paddingBottom: "3rem" }}
                        />
                        <label>Permanent Address</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add Permanent Address"
                            onChange={(e) => setEmail_Id(e.target.value)}
                            style={{ paddingBottom: "3rem" }}
                        />
                        <label>About</label>
                        <div>
                            <i className="ipSvg">
                                <Image src={about} />
                            </i>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            placeholder="Add a short Bio"
                            onChange={(e) => setEmail_Id(e.target.value)}
                            style={{ paddingBottom: "3rem" }}
                        />
                        <div className="formBtn" style={{textAlign:"left",width:"10rem"}}>
                            <div className="flex mb-2 justify-center items-center gap-4 pl-4 bg-green-700  hover:bg-green-750 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" >
                                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                                    <Link href="/">Save</Link>
                                </h3>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    )
}
export default profile