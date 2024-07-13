import "./listp.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatablep from "../../components/datatablep/Datatablep";

const Listp = () => {
  const user= JSON.parse(localStorage.getItem('profile2'));
  return (
    <div className="list">
      {user ? (
        <>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatablep/>
      </div>
      </>
      ):(
        <div>
          You are not logged in as admin!
          </div>
      )}
    </div>
  )
}
export default Listp;