import Link from "next/link";
import { useRouter } from "next/router";
const newLogin = () => {
  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  const router = useRouter();
  return (
    <div className="newloginContainer">
      <div className="newLoginTop" style={{ marginLeft: "-1.8rem" }}>
        <FormHeader title="Login" />
      </div>
      <form className="newLoginForm">
        <label>Email</label>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
          type="email"
          
          placeholder="Enter your email"
          onChange={(e) => setEmail_Id(e.target.value)}
        />
        <label>Password</label>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setComponent_available(e.target.value)}
        />
        <div className="formBottom">
          <label>
            <input
              style={{ marginRight: "6px" }}
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            Remember Me
          </label>
          <label>password</label>
        </div>
        <div id="button" className="row flex justify-center items-center">
          <button
            type="submit"
            style={{ width: "100%" }}
            onClick={function handleClick() {
              router.push("/read");
            }}
          >
            LOGIN
          </button>
        </div>
        <div className="signDesc" style={{ margin: "1.5rem auto" }}>
          <p>
            Don't have an account?
            <span>
              <Link href="/"> Signup here</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default newLogin;
