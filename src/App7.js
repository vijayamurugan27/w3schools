import './App.css';

import SimpleHook from './W3Schools/REact/Hooks/UseState/SimpleHook';

//// USeState Hooks
import UseSt from './W3Schools/REact/Hooks/UseState/UseSt';
import UseSt1 from './W3Schools/REact/Hooks/UseState/UseSt1';
import UseSt2 from './W3Schools/REact/Hooks/UseState/UseSt2';
import UseSt3 from './W3Schools/REact/Hooks/UseState/UseSt3';



function App7() {
  return (

    <div className="App">
        Hooks.<br></br>
        <SimpleHook></SimpleHook><br></br>
        Usestate
        <UseSt></UseSt>
        <UseSt1></UseSt1>
        <UseSt2></UseSt2>
        <UseSt3></UseSt3>
    </div>
  );
}

export default App7;