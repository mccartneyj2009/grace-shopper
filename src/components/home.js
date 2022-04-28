import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ allUsers, admin, user }) => {
    // if (!admin) {
    //   return (
    //     <>
    //       {" "}
    //       <div id="intro">
    //         <h1>When you're with Tony, youre with Family</h1>
    //         <h1>Come back Weekly for New Meats!</h1>
    //       </div>
    //     </>
    //   );
    // console.log(allUsers);

    useEffect(() => {}, []);
    return (
        <>
            {admin ? (
                <div id="aboutus">
                    <h1>User Information</h1>
                    {allUsers.users.map((user) => {
                        return (
                            <div key={user.id}>
                                <p>{user.first_name}</p>
                                <p>{user.last_name}</p>
                                <p>{user.email}</p>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>
                    <div id="intro">
                        // <h1>When you're with Tony, youre with Family</h1>
                        // <h1>Come back Weekly for New Meats!</h1>
                        //{" "}
                    </div>
                </div>
            )}

            {/* {allUsers.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.id}</h1>
          </div>
        );
      })} */}
        </>
    );
};

export default Home;
