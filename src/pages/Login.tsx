import login_image from "../ressource/login_image.jpg";
import logo from "../ressource/logo.png";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <>
      <div className="flex bg-white flex-col h-screen lg:flex-row">
        <div className="flex-grow w-1/2 bg-white card rounded-box place-items-center">
          <img src={logo} alt="logo" className="h-20 w-50 pt-10" />
          <h1 className="text-6xl font-bold text-black pt-20">
            Welcome to Triomphy
          </h1>
          <p className="pt-3">
            {" "}
            Log in for manage yout project, they will grow up !
          </p>
          <div className="form-control w-full max-w-xl mt-20">
            <label className="label">
              <span className="label-text text-black"> Email </span>
            </label>
            <input
              type="text"
              placeholder="Type your email ..."
              className="input input-ghost border-0 border-b-2 rounded-none border-gray-200 bg-transparent focus:outline-none focus:text-black"
            />
          </div>
          <div className="form-control w-full max-w-xl mt-10">
            <label className="label">
              <span className="label-text text-black"> Password </span>
            </label>
            <input
              type="text"
              placeholder="Type your password ..."
              className="input input-ghost border-0 border-b-2 rounded-none border-gray-200 bg-transparent focus:outline-none focus:text-black"
            />
            <label className="label">
              <span className="label-text-alt text-black">
                {" "}
                Forget password{" "}
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-xl mt-10">
            <button className="btn btn-active text-white"> Sign in </button>
          </div>
          <div className="form-control w-1/2 max-w-xl mt-10">
            <button className="btn btn-active text-black border-black border-1 bg-white focus:bg-transparent">
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="flex-grow w-1/2 bg-white card rounded-box place-items-end">
          <img
            src={login_image}
            alt="login_image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
