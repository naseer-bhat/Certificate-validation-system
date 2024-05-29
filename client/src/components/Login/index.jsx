// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
// import { auth, provider } from "../googleSignup/config";
// import { signInWithPopup } from "firebase/auth";
// import Main from "../Main";

// const Login = () => {
    
//     const [data, setData] = useState({ email: "", password: "" });
//     const [error, setError] = useState("");
//     const [value, setValue] = useState("");


//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };


//     const handleGoogleLogin =()=>{
//         signInWithPopup(auth, provider).then((data)=>{
//             setValue(data.user.email);
//             localStorage.setItem("email", data.user.email);
//             window.location = "/"

//         })

//     }
    
//     useEffect(()=>{

//         setValue(localStorage.getItem("email"));

//     })


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/api/auth";
//             const { data: res } = await axios.post(url, data);
//             console.log(res);
//             localStorage.setItem("token", res.data);
//             window.location = "/";
//         } catch (error) {
//             if (error.response) {
                
//                 console.error("Error response:", error.response);
//                 setError(error.response.data.message);
//             } else if (error.request) {
                
//                 console.error("Error request:", error.request);
//                 setError("Server did not respond. Please try again later.");
//             } else {
            
//                 console.error("Error message:", error.message);
//                 setError("An unexpected error occurred. Please try again later.");
//             }
//         }
//     };

//     return (
//         <div className={styles.login_container}>
//             <div className={styles.login_form_container}>
//                 <div className={styles.left}>
                   
//                     <form className={styles.form_container} onSubmit={handleSubmit}>
//                         <h1>Login to Your Account</h1>
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             name="email"
//                             onChange={handleChange}
//                             value={data.email}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             name="password"
//                             onChange={handleChange}
//                             value={data.password}
//                             required
//                             className={styles.input}
//                         />
//                         {error && <div className={styles.error_msg}>{error}</div>}
//                         <button type="submit" className={styles.green_btn}>
//                             Sign In
//                         </button>
//                         <h3>OR</h3>
                                  
//                     </form>

//                     {/* {value? <Main/>: */}
// 						<button onClick = {handleGoogleLogin} className={styles.green_btn}>
// 							Sign in with Google
// 						</button>
//                         {/* } */}
//                 </div>
//                 <div className={styles.right}>
//                     <h1>New Here ?</h1>
//                     <Link to="/signup">
//                         <button type="button" className={styles.white_btn}>
//                             Sign Up
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { auth, provider } from "../googleSignup/config";
import { signInWithPopup } from "firebase/auth";
import styles from "./styles.module.css";

const Login = () => {
  
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      window.location = "/";
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } 
    catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
        setError(error.response.data.message);
      } else if (error.request) {
        console.error("Error request:", error.request);
        setError("Server did not respond. Please try again later.");
      } else {
        console.error("Error message:", error.message);
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
  
  <div className={styles.login_container}>
      {/* Video background */}
      
     
    
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
            <h3>OR</h3>
          </form>
         
          <button onClick={handleGoogleLogin} className={styles.green_btn}>
            Sign in with Google
          </button>

        </div>
       
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;

