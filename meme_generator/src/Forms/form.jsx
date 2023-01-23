import "./Form.css";

import { useState } from "react"
function Form(){
  const[formData,setFormData]=useState({
        email:"",
        password:"",
        passwordConfirm:"",
        joinedNewsletter:true
  })
    function handleChange(event){
        const {name,value,type,checked}=event.target
        type==="checkbox" ? setFormData({...formData,[name]:checked}) : setFormData({...formData,[name]:value})
    }

    console.log(formData)

  function handleSubmit(event){
    event.preventDefault()    
        if(formData.password===formData.passwordConfirm){
            console.log("Successfully signed up!")
        }else{
            console.log("passwords do not match")
            return
        }
        if(formData.joinedNewsletter){
            console.log("Thank you for joining our newsletter!")
        }
  }
  return(
    <div className="form-container">
        <Header />
        <Meme/>
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="passwordConfirm"
                onChange={handleChange}
                value={formData.passwordConfirm}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinedNewsletter"
                    onChange={handleChange}
                    checked={formData.joinedNewsletter}     
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
)
}
export default Form