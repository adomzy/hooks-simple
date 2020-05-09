import React, { useState } from "react";
import ResoureList from "./ResourceList";
//import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <div>
        <button
          className="ui button primary"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="ui button primary"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResoureList resource={resource} />
    </div>
  );
};

export default App;
