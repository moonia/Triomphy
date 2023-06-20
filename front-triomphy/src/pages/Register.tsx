import register_image from "../ressource/register_image.jpg";
import logo from "../ressource/logo.png";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  return (
    <>
      <div className="flex bg-white flex-col h-screen lg:flex-row">
        <div className="flex-grow w-1/2 bg-white card place-items-center">
          <img src={logo} alt="logo" className="h-20 w-50 pt-10" />
          <h1 className="text-6xl font-bold text-black pt-20">Sign up</h1>
          <p className="pt-3"> Unlock and go build your future Project !</p>
          <div className="form-control w-1/2 max-w-xl mt-10">
            <button className="btn btn-active text-black border-black border-1 bg-white focus:bg-transparent">
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
          <div className="divider p-10"> OR </div>

          <div className="flex w-1/9 gap-24">
            <div className="flex-grow">
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text text-black"> Name </span>
                </label>
                <input
                  type="text"
                  placeholder="Type your name ..."
                  className="input input-ghost border-0 border-b-2 rounded-none border-gray-200 bg-transparent focus:outline-none focus:text-black"
                />
              </div>
            </div>
            <div className="flex-grow place-items-left pl-2">
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text text-black"> Username </span>
                </label>
                <input
                  type="text"
                  placeholder="Type your username ..."
                  className="input input-ghost border-0 border-b-2 rounded-none border-gray-200 bg-transparent focus:outline-none focus:text-black"
                />
              </div>
            </div>
          </div>
          <div className="form-control w-full max-w-xl mt-5">
            <label className="label">
              <span className="label-text text-black"> Email </span>
            </label>
            <input
              type="text"
              placeholder="Type your email ..."
              className="input input-ghost border-0 border-b-2 rounded-none border-gray-200 bg-transparent focus:outline-none focus:text-black"
            />
          </div>
          <div className="form-control w-full max-w-xl mt-5">
            <label className="label">
              <span className="label-text text-black"> Password </span>
            </label>
            <input
              type="text"
              placeholder="Type your password ..."
              className="input input-ghost border-0 border-b-2 rounded-none border-gray-200 bg-transparent focus:outline-none focus:text-black"
            />
          </div>
          <div className="form-control w-full max-w-xl mt-10">
            <button className="btn btn-active text-white"> Sign up </button>
          </div>
        </div>

        <div className="flex-grow w-1/2 bg-white place-items-end">
          <img
            src={register_image}
            alt="register_image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
