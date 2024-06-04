import { useEffect, useRef } from "react";
import Form from "./Form";
import { useFetch } from "./hooks/useFetch";

function App() {
  const myRef = useRef();
  
  useEffect(() => {
    const user = myRef.current.test();
    console.log({user});
  });

  const res = useFetch('https://reqres.in/api/users/2');
  console.log({res});

  return (
    <>
      <h3>DEMO APP</h3>
      <Form ref={myRef} />
      <button onClick={() => { myRef.current.submitForm() }}>Login from Parent Component</button>
    </>
  );
}

export default App;
