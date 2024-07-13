import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./adminhome.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="post" />
        </div>
        <div className="place">
          <Featured />
        </div>
        </div>
    </div>
  );
};

export default AdminHome;