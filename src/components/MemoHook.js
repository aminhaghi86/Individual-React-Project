import React, { useMemo, useState } from "react";

const Button = (props) => {
  console.log(props.children.toString() + " is renders");
  return <button onClick={props.handleClick}>{props.children}</button>;
};

const App = () => {
  const [counter1, setCounter1] = useState(0);


  const btnReset1 = useMemo(() => {
    return <Button handleClick={() => setCounter1(0)}>Reset1</Button>;
  }, []);
  const btncountup1 = useMemo(() => {
    return (
      <Button handleClick={() => setCounter1(counter1=>counter1 + 1)}>Countup1</Button>
    );
  }, []);


  return (
    <div style={{margin:'2rem 5rem'}}>
      {btnReset1}
      {btncountup1}
      <p>{counter1}</p>
    </div>
  );  
};

export default App;
