import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../../actions/users';
import { userColumns } from "../../datatablesource";
import {Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Button} from '@mui/material';
import './datatable.scss';

const Datatable = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleConfirmDelete = async () => {
    setConfirmDialogOpen(false);
    dispatch(deleteUser(currentId));
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  useEffect(() => {
    const mappedUsers = users.map(user => ({ ...user, id: user._id }));
    setData(mappedUsers);
  }, [users]);

  const handleDelete = (id) => {
    setCurrentId(id);
    setConfirmDialogOpen(true);
  };

  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to={`/creators/${params.row.name}`} style={{ textDecoration: "none" }}>
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
  };

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={[...userColumns, actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
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

export default Datatable;