import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Signup = () => {
  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      {" "}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            {/* Name */}
            <div className="mt-5">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border outline-none mt-2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-2">
                  This name field is required
                </p>
              )}
            </div>
            {/* Email */}
            <div className="mt-5">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your eamil"
                className="w-full px-3 py-2 border outline-none mt-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-2">
                  This email field is required
                </p>
              )}
            </div>
            {/* Password */}
            <div className="mt-5">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border outline-none mt-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-2">
                  This password field is required
                </p>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around items-center mt-5">
              <button className="btn bg-pink-500">Login</button>
              <p>
                Have account?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
