import React from "react";
//import  Feedback  from "./Feedback";
//import Controls from "./Controls";

export const App = () => {
  return (
    <div className="App"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        flexDirection: 'column',
        color: '#010101',
        backgroundColor: '#dee7e4'
      }}
    >
      
      <Feedback />
    </div>
  );
};
