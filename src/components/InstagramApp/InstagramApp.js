import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getUserId } from "../../helpers/GetInstagramUser";

const InstagramApp = () => {
  const [user, setUser] = useState({ username: "", userid: 0 });

  const [username, setUsername] = useState("");

  const userIdClick = () => {
    const userId = getUserId(username);
    userId.then(({ username, user_id }) =>
      setUser({ username: username, userid: user_id })
    );
    userId.catch((error) => {
      alert(error);
    });
  };

  const inputV = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  return (
    <div className="m-4">
      <Card style={{ borderRadius: "15px" }} className="shadow-lg p-3 mb-5">
        <Card.Title className="text-center h2">INSTAGRAM APP</Card.Title>

        <hr style={{ border: "solid 1px" }} />

        <Card.Body>
          <div className="m-4 col-auto">
            <input
              className="form-control"
              placeholder="Enter your Instagram Username"
              onChange={inputV}
            />
            <div className="m-4 row">
              <button className="btn btn-outline-dark " onClick={userIdClick}>
                TEST
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InstagramApp;
