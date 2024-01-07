import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password should have at least one upper case character"
      );
      return;
    }
    else if(!accepted){
        setRegisterError('Please accept our terms and conditions');
        return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully created");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg" 
        })
        .then(()=>console.log('profile updated'))
        .catch()
        // send verification email:
      sendEmailVerification(result.user)
      .then(()=>{
        alert('Please check your email and verify your account')
      })

      })

      

      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="text-center mx-auto bg-pink-200 p-4 w-1/2">
      <h2 className="text-3xl mb-4 font-bold">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="mb-4 w-full p-2"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          className="mb-4 w-full p-2"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <br />
        <div className="relative mb-4">
          <input
            className=" w-full p-2"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
          <span className="absolute top-2 right-3" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEyeOff /> : <FaEye />}
          </span>
        </div>
        <br />
        <input type="checkbox" name="terms" id="terms" />
        <label className="ml-2 mb-4" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
        <br />
        <input
          className="btn btn-accent w-3/4"
          type="submit"
          value="Register"
        />
      </form>
      {registerError && <p className="text-red-600">{registerError}</p>}
      {success && <p className="text-green-600">{success}</p>}
      <p className="m-4">Already have an account? <Link className="text-blue-600 underline" to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
