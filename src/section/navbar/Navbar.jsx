import '../Navbar/Navbar.css'
function Navbar ({userLength}){
return(<>

    <div className="navbar">
<div className="container">
    <div className="navbar-container">
    <h1 className="navbar-logo">CUser</h1>
    <h3 className="navbar-counter">{userLength > 0 ? "You have :" + userLength : "No user :("}</h3>
    </div>
    {/* <h1> navbar</h1> */}
    </div>
</div>
</>)
}
export default Navbar