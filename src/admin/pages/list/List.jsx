import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = () => {
  const user= JSON.parse(localStorage.getItem('profile2'));
  return (
    <div className="list">
      {user ? (
        <>
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable/>
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

export default List;