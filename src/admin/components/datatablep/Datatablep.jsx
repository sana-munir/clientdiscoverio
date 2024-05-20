// Datatablep.jsx
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/posts';
import Pagination from "./Pagination";
import { postColumns } from "../../datatablesourcep";

const Datatablep = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { posts, numberOfPages } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts(1)); // Fetch initial page (page 1)
  }, [dispatch]);

  useEffect(() => {
    // Map posts fetched from backend and add id property
    const mappedPosts = posts.map(post => ({ ...post, id: post._id }));
    setData(mappedPosts);
  }, [posts]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={data}
        columns={postColumns}
        checkboxSelection
      />
      <Pagination page={numberOfPages} />
    </div>
  );
};

export default Datatablep;