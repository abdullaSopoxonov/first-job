import "../userList/UserList.css"
function UserList({ user,deleteUser }) {
 
    return(
  <>
     <ul className="users-wrap">
   {
       user.map((user)=>{ 
           return(
               
               <li className="user-block" key={user.id}>
            < img  src={user.img} alt="userImg" className="user-img" />
            <h4 className="user-name">{user.firstName}  {  user.lastName }, { user.age} age </h4>
            <p className="from">Frorm: {user.from}</p>
            <p className="job">Job: {user.job}</p>
            <p className="from">Category: {user.category}</p>
            <p className="from">Gender: {user.gender}</p>
            <button className="user-delete" onClick={()=>(deleteUser(user.id))}>Delete</button>
            
            </li>
       
    )
})}
</ul>

  </>
    )
}
export default UserList
