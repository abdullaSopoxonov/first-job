import { useState } from "react";
import "../newUser/NewUserFrom.css"
import {v4 as vsuuid} from "uuid"
function NewUserFrom( {addNewUser}) {
  const [newUser, setnewUser] = useState({
    
      id: vsuuid(),
      img:"null",
      firstName:'null',
      lastName: 'null',
      age:'null',
      gender:'null',
      from:'null',
      job:'null',
      level:'null'
    }

  )
  const hendleSubmit = (e)=>{
    e.preventDefault()
    addNewUser(newUser)
    
  }
  // console.log(user)
  return (
    <>
      <div className="creat-overfloy">
        <div className="creat-wrap">
          <h3 className="creat-title">Creat New User</h3>
          <form className="creat-signUp" onSubmit={hendleSubmit}> 
            <label htmlFor="">Image URL:</label>
            <input type="text" onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, img:e.target.value}})
            }} />
            <label htmlFor="">First Name:</label>
            <input type="text" onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, firstName:e.target.value}})
            }}/>
            <label htmlFor="">Last Name:</label>
            <input type="text" onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, lastName:e.target.value}})
            }}/>
            <label htmlFor="">Age:</label>
            <input type="number" onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, age:e.target.value}})
            }}/>
            <label htmlFor="">From:</label>
            <input type="text" onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, from:e.target.value}})
            }}/>
            <label htmlFor="">Job:</label>
            <input type="text" onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, job:e.target.value}})
            }}/>
            <label htmlFor="">Level:</label>
            <div className="creat__level--wrap">
              <span>Junior</span>
              <input type="radio" name="level"  value="junior"
              onChange={(e)=>{ setnewUser((newUser)=>{
                return {...newUser, level:e.target.value}})
              }}/>
              <span>Middle</span>
              <input type="radio" name="level" value="middle" 
              onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, level:e.target.value}})
            }}/>

              <span>Senior</span>
              <input type="radio" name="level" value="senior"
              onChange={(e)=>{ setnewUser((newUser)=>{
                return {...newUser, level:e.target.value}})
              }} />

            </div>

            <label htmlFor="" className="creat__gender--title">Gender:
            </label>
            <div className="creat__gender--wrap">

            <span htmlFor="" className="gender__title--male">Male:</span>
            <input className="gender__radio--male" type="radio" name="gender" id="" value="male" 
              onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, gender:e.target.value}})
            }}/>
            <span htmlFor="" className="gender__title--female">Female</span>
            
            <input className="gender__radio--female" type="radio" name="gender" id="" value="famale" 
             onChange={(e)=>{ setnewUser((newUser)=>{
              return {...newUser, gender:e.target.value}})
            }}/>
            </div>

          <button className="creat__submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default NewUserFrom;
