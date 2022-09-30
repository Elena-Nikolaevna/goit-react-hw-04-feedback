import  Feedback  from "./Feedback";
//import Controls from "./Controls";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        flexDirection: 'column',
        color: '#010101'
      }}
    >
      <h1>Please leave feedback</h1>
      <Feedback />
    </div>
  );
};
