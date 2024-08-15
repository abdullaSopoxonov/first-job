import Navbar from "./section/navbar/Navbar"
import Footer from "./section/footer/Footer"
import Page from "./section/page/Page"
import { useState } from "react"
function App() {
  const [creatBtn, setcreatBtn] = useState (false)
  const [user, setUser] = useState([
    {
      id:1,
      img:"https://picsum.photos/400?random=1",
      firstName:'Abdulla',
      lastName: 'Sopoxonov',
      age:'25',
      gender:'Male',
      from:'Uzbekiston',
      job:'Frontend Developer',
      category: 'junior'
    },
    {
      id:2,
      img:"https://picsum.photos/400?random=2",
      firstName:'Abdulla',
      lastName: 'Sopoxonov',
      age:'25',
      gender:'Male',
      from:'Uzbekiston',
      job:'Frontend Developer',
      category: 'junior'
    },
    {
      id:3,
      img:"https://picsum.photos/400?random=3",
      firstName:'Abdulla',
      lastName: 'Sopoxonov',
      age:'25',
      gender:'Male',
      from:'Uzbekiston',
      job:'Frontend Developer',
      category: 'junior'
    },
    {
      id:4,
      img:"https://picsum.photos/400?random=4",
      firstName:'Abdulla',
      lastName: 'Sopoxonov',
      age:'25',
      gender:'Male',
      from:'Uzbekiston',
      job:'Frontend Developer',
      category: 'junior'
    },
    {
      id:5,
      img:"https://picsum.photos/400?random=5",
      firstName:'Abdulla',
      lastName: 'Sopoxonov',
      age:'25',
      gender:'Male',
      from:'Uzbekiston',
      job:'Frontend Developer',
      category: 'junior'
    },


  ])
  
  const closCreatUcer = (e)=>{
    if(e.target.className == "creat-overfloy") {setcreatBtn(false)}
    else if(e.key == "Escape") {setcreatBtn(false)}
    
  } 

  const addNewUser =(user)=>{
    
    if(Object.values(user).includes("null"))
    {
      alert("Ma`lumotlarni to`liq kiriting")
      console.log(user)
    }
    else{
      setUser((prev)=>{
        return( [...prev,user])
      })
    }
    setcreatBtn(false)

  }
  const deleteUser = (id)=>{
    console.log(id)
    setUser((prev)=>{
      return (prev.filter((user) => {
        return(user.id !== id)
      }))
    })
  }
  return (
    <div className="App" onClick={closCreatUcer} onKeyDown={closCreatUcer}> 
      <Navbar userLength={user.length}/>
    <Page userLength={user.length} user={user} deleteUser={deleteUser} creatBtn ={ creatBtn} setcreatBtn ={setcreatBtn}
    addNewUser={addNewUser}>
      
    </Page>
    <Footer></Footer>
    </div>
  )
}

export default App
