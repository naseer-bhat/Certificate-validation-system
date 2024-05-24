// import Header from "../Header";
// import Sidebar from "../Sidebar";
// import styles from "./styles.module.css";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<Sidebar/>
// 			 <Header/>
// 			{/* <nav className={styles.navbar}>
// 				<h1>fakebook</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav> */}
// 		</div>
// 	);
// };

// export default Main;


// import React from "react";
// import Header from "../Header";
// import Sidebar from "../Sidebar";
// import { Grid } from "@material-ui/core";

// const Main = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   return (
//     <div>
//       <Header />
//       <Grid container>
//         <Grid item xs={3}>
//           <Sidebar />
//         </Grid>
//         <Grid item xs={9}>
//           {/* Your dashboard content here */}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Main;



import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./styles.module.css";
import MainContent from "../MainContent";
import Footer from "../Footer";


const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
        <Header />
         {/* dashboard content here */}
         <Sidebar />
         <MainContent/>
         <Footer/>
  
    </div>
    
  );
};

export default Main;
