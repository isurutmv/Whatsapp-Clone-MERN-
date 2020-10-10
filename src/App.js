import "./App.css";

import React from "react";

import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
      {/* <p>@Created By : Isuru Udayanga</p> */}
    </div>
  );
}

export default App;
