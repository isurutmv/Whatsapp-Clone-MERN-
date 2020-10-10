import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className="app_body">
         <Sidebar/>
         <Chat/>
      </div>
     {/* <p>@Created By : Isuru Udayanga</p> */}
    </div>
  );
}

export default App;
