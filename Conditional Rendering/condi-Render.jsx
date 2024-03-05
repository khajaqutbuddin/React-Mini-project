import { useEffect, useState } from "react"
import {CondiRender } from "../component-library/condiRendering-libry"

export function ConditionalRendering(){

    const [component, setComponent]= useState('Login')
    const [hide , setHide] = useState('d-none')
 
    function ChangeValue(e){
        if(e && e.target){
                  setHide('d-block')
              setComponent(e.target.value)
        }
    }
     useEffect(()=>{
        ChangeValue();
     },[])
    return(
        <div className="container-fluid m-4 ">
            <form >
                <dl >
                   <h3>Welcome !</h3>
                    <dt>Methods</dt>
                    <dd><select onChange={ChangeValue} className="bg-dark  text-white">
                        <option >Select</option>
                        <option  value="Login">log in</option>
                        <option  value="Register">Register</option>
                        </select></dd>
                </dl>
                {/* <button  onClick={SubmitClick} className="btn btn-primary">Submit</button> */}
            <div className={`${hide}`} >
            <CondiRender  component={component}/>
                </div>    

            </form>

        </div>
    )

}