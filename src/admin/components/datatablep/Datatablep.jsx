// Datatablep.jsx
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost} from '../../../actions/posts';
import Pagination from "./Pagination";
import { postColumns } from "../../datatablesourcep";
import {Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Button} from '@mui/material';
import './datatablep.scss';

const Datatablep = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const { posts, numberOfPages } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts(1)); // Fetch initial page (page 1)
  }, [dispatch]);

  const handleConfirmDelete = async () => {
    setConfirmDialogOpen(false);
    dispatch(deletePost(currentId));
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  useEffect(() => {
    const mappedPosts = posts.map(post => ({ ...post, id: post._id }));
    setData(mappedPosts);
  }, [posts]);

  const handleDelete = (id) => {
    setCurrentId(id);
    setConfirmDialogOpen(true);
  };

  const actionColumn = [
    {
      field: "actions",
      headerName: "Actions", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/posts/${params.row.id}`} style={{ textDecoration: "none" }}>
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
        className="datagrid"
        rows={data}
        columns={[...postColumns, ...actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <Pagination page={numberOfPages} />
      <Dialog
        open={confirmDialogOpen}
        onClose={handleCloseConfirmDialog}
      >
          <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this post?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseConfirmDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete} color="error" autoFocus>
                Confirm
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
};

export default Datatablep;