import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email */}
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
            {/* email */}
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
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
