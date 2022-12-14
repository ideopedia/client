import SideNavbar from "../../components/sidebar";
import Image from "next/image";
import prime from "../../public/prime.svg";
import mail from "../../public/mail.svg";
import birth from "../../public/birthday.svg";
import city from "../../public/citybirth.svg";
import spou from "../../public/spouse.svg";
import adres from "../../public/Address.svg";
import phne from "../../public/phone.svg"
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
const Profile = () => {
  const router = useRouter();
  const favo = router.query;
  console.log(favo.user);
  const [email, setEmail] = useState("");
  const [official_mail, setOffmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDes] = useState("");
  const [dob, setDob] = useState("");
  const [native, setNative] = useState("");
  const [school, setSchool] = useState("");
  const [spouse, setSpouse] = useState("");
  const [address, setAddr] = useState("");
  const [permanent_address, setPaddr] = useState("");
  const [about, setAbt] = useState("");
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    Axios.post("/api/UserDashboard/findUser", {
      User_Id: favo.users,
    }).then((data) => {
      setData(data.data);
    });
  }, []);
  const updateUser = {
    email,
    official_mail,
    phone,
    designation,
    dob,
    native,
    school,
    spouse,
    address,
    permanent_address,
    about,

    User_Id: favo.user,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("/api/UserProfile/addUserProfile", {
      email,
      official_mail,
      phone,
      designation,
      dob,
      native,
      school,
      spouse,
      address,
      permanent_address,
      about,

      User_Id: favo.user,
    }).then((data) => {
      setUpdate(data.data);
    });
    console.log(update);
  };
  // async function handleSubmit() {

  // }
  // useEffect(() => {
  //   Axios.post("http://localhost:3000/api/UserProfile/updateUserProfile", {
  //     email: email,
  //     official_mail: offmail,
  //     phone: phone,
  //     designation: des,
  //     dob: dob,
  //     native: native,
  //     school: school,
  //     spouse: spouse,
  //     address: addr,
  //     permanent_address: paddr,
  //     about: abt,

  //     User_Id: favo.user,
  //   }).then((data) => {
  //     setUpdate(data.data);
  //   });
  // }, []);
  return (
    <div>
      {data && getCookie("user")  ? (
        <div className="profile ">
          {/* <SideNavbar
            per={data[0].Profile_percent}
            image={data[0].Image}
            name={data[0].Name}
            u_id={data[0].User_Id}
          /> */}
          {console.log(data)}
          <Navbar isLogedIn={true} userid={data[0].User_Id} />
          <div className="desc md:pl-9 lg:w-9/12 md:w-9/12 sm:pl-1 sm:w-9/1">
            <div className="top">
              <h3 className="text-3xl font-medium sm:text-left text-center">Profile</h3>
            </div>
            <div className="flex sm:justify-start items-center justify-center pb-3">
            <div className="profImg inner">
              <Image src={prime} className="imgr" />
            </div>
            </div>
            <div className="FormSec">
              <form>
                <label>Email</label>
                <div>
                  <i className="ipSvg">
                    <Image src={mail} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="email"
                  required
                  placeholder="xyz@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Official Email</label>
                <div>
                  <i className="ipSvg">
                    <Image src={mail} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="email"
                  required
                  placeholder="Add official Email"
                  onChange={(e) => setOffmail(e.target.value)}
                />
                <label>Phone</label>
                <div>
                  <i className="ipSvg">
                    <Image src={phne} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="number"
                  required
                  placeholder="+234"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {/* <label>Designation</label>
                <div>
                  <i className="ipSvg">
                    <Image src={abou} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  
                  placeholder="Add designation"
                  onChange={(e) => setDes(e.target.value)}
                /> */}
                <label>Birthday</label>
                <div>
                  <i className="ipSvg">
                    <Image src={birth} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add Birthday"
                  onChange={(e) => setDob(e.target.value)}
                />
                <label>City of Birth</label>
                <div>
                  <i className="ipSvg">
                    <Image src={city} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add City of Birth"
                  onChange={(e) => setNative(e.target.value)}
                />
                {/* <label>School/College Name</label>
                <div>
                  <i className="ipSvg">
                    <Image src={abou} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add School/College Name"
                  onChange={(e) => setSchool(e.target.value)}
                /> */}
                <label>Spouse's Name</label>
                <div>
                  <i className="ipSvg">
                    <Image src={spou} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add Spouse's Name"
                  onChange={(e) => setSpouse(e.target.value)}
                />
                <label>Current Address</label>
                <div>
                  <i className="ipSvg">
                    <Image src={adres} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add Current Address"
                  onChange={(e) => setAddr(e.target.value)}
                  style={{ paddingBottom: "3rem" }}
                />
                <label>Permanent Address</label>
                <div>
                  <i className="ipSvg">
                    <Image src={adres} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add Permanent Address"
                  onChange={(e) => setPaddr(e.target.value)}
                  style={{ paddingBottom: "3rem" }}
                />
                {/* <label>About</label>
                <div>
                  <i className="ipSvg">
                    <Image src={abou} />
                  </i>
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  type="text"
                  required
                  placeholder="Add a short Bio"
                  onChange={(e) => setAbt(e.target.value)}
                  style={{ paddingBottom: "3rem" }}
                /> */}
                <div className="formBtn pb-16 flex items-center justify-center">
                  <div className="savebtn pb-20 font-semibold">
                    <button type="submit" onClick={handleSubmit}>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Profile;
