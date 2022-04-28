// import { useState } from "react";

// const Admin = ({ meats, setMeat }) => {
//   const [error, setError] = useState("");

//   const handleMeats = async () => {
//     try {
//       const resp = await fetch(`http://localhost:3001/api/meats`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           species,
//           style,
//           description,
//           flavor,
//           weight,
//           price,
//         }),
//       });
//       const info = await resp.json();
//       if (info.error) {
//         setError(info.error);
//         setMeat("");
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   const deleteMeat = async () => {};

//   return (
//     <>
//       <h1>are you allowed here?</h1>
//     </>
//   );
// };

// export default Admin;
