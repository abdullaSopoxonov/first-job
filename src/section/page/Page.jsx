import UserList from "../../componition/userList/UserList"
import NewUserFrom from "../../componition/newUser/NewUserFrom"
import "../page/Page.css"
function Page({userLength, user, deleteUser, creatBtn, setcreatBtn, addNewUser }){
    return(
        <main className="main">
            <div className="container">
            
        <div className="no-user">
        {userLength === 0 && <h2>No User</h2>}
        </div>
       <UserList user={user} deleteUser={deleteUser} ></UserList>
        {creatBtn && <NewUserFrom addNewUser={addNewUser}/>}
        <button className="user-create" onClick={()=>(setcreatBtn(true))}>Create User</button>

        </div>
    </main>
    )
}
export default Page