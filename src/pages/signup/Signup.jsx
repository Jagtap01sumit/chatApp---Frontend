import React from "react";
import GenederCheckbox from "./GenederCheckbox";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>{" "}
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>{" "}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          {/* GENDER CHECKBOX */}
          <GenederCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// STARTER CODE FOR SIGNUP
// import React from "react";
// import GenederCheckbox from "./GenederCheckbox";

// export default function Signup() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>{" "}
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>{" "}
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           {/* GENDER CHECKBOX */}
//           <GenederCheckbox />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
//           >
//             Already have an account ?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
