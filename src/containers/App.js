import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "../Components/users/users";

function App() {
  const [users, setUsers] = useState({
    title: "",
    fname: "",
    lname: "",
    email: "",
    cellNo: "",
    imgSrc: "",
  });

  const RandomUserAPI = "https://randomuser.me/api/?nat=us,dk,fr,gb";

  useEffect(() => {
    getUser();
  }, [setUsers]);

  const getUser = async () => {
    const result = await fetch(RandomUserAPI);
    const receivedUser = await result.json();

    const fname = receivedUser.results[0].name.first;
    const lname = receivedUser.results[0].name.last;

    const email = receivedUser.results[0].email;
    const cellNo = receivedUser.results[0].phone;
    const imgSrc = receivedUser.results[0].picture.large;

    setUsers({
      fname: fname,
      lname: lname,
      email: email,
      cellNo: cellNo,
      imgSrc: imgSrc,
    });
  };

  const changeUserHandler = (event) => {
    getUser();
  };

  const getGitProfile = async () => {
    const gitData = await fetch("https://api.github.com/users/imspidy");
    const returnGitData = await gitData.json();

    const username = returnGitData.login;
    const name = returnGitData.name;
    const imgSrc = returnGitData.avatar_url;

    console.log(returnGitData);

    setUsers({
      title: username,
      fname: name,
      email: "Manerahul8298@gmail.com",
      cellNo: "+91 8087549050",
      imgSrc: imgSrc,
    });
  };

  return (
    <div className="App">
      <Users
        title={users.title}
        fname={users.fname}
        lname={users.lname}
        email={users.email}
        cellNo={users.cellNo}
        imgSrc={users.imgSrc}
      />
      <button className="btn-changeUser" onClick={changeUserHandler}>
        Change User
      </button>
      <button className="btn-changeUser" onClick={getGitProfile}>
        My GitHub Profile
      </button>
    </div>
  );
}

export default App;
