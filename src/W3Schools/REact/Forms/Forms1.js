import React, {useState} from "react";

function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <label>
            Enter your name: <input type="text"  value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }

function Forms1(){
    return (<MyForm></MyForm>)
}

export default Forms1