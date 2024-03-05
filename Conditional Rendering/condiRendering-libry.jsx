
export function CondiRender(props){

   
             if(props.component == 'Login' ){
   return(
            <div className="container">
            <form>
                <h3>Login Form </h3>
                <dl>
                    <dt>User ID</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="" id="" /></dd>
                    <dt><input type="checkbox" name="" id="" />Terms & Condition</dt>
                    <button className="btn btn-info">Submit</button>
                </dl>
            </form>
            </div>)
        }else{
            return(
            <div className="container">

            <form>
            <h3>Register Form </h3>
                <dl>
                    <dt>Full Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="" id="" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name=""/></dd>
                    <button className="btn btn-danger">Register</button>
                </dl>
            </form>
            </div>)
        }
        
      
    }
     
    
