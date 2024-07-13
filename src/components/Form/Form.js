import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';

const Form = ({ currentId, setCurrentId, setOpen }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postData.title || !postData.message || !postData.tags || !postData.selectedFile) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
    setOpen(false);  // Close the modal
  };

  if (!user?.result?.name) {
    return (
      <Paper sx={styles.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and interact with other's memories.
        </Typography>
      </Paper>
    );
  }

  const handleImageDelete = () => {
    setPostData({ ...postData, selectedFile: '' });
  };

  const handleFileInputClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  return (
    <Paper sx={styles.paper} elevation={6}>
      <form autoComplete="off" noValidate style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.leftSection}>
          <Typography variant="h6">{currentId ? `Editing "${postData.title}"` : 'Creating a Memory'}</Typography>
          <TextField name="title" required sx={styles.root} variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" required sx={styles.root} variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" required sx={styles.root} variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </div>
        <div style={styles.rightSection}>
          <div style={styles.fileInput} onClick={handleFileInputClick}>
            {postData.selectedFile ? (
              <div style={styles.imageContainer}>
                <img style={styles.media} src={postData.selectedFile} alt="Selected" />
                <IconButton style={styles.deleteIcon} onClick={handleImageDelete}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ) : (
              <div style={styles.placeholderImage}>Insert a picture</div>
            )}
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
              style={{ display: 'none' }}
              required
            />
          </div>
          <Button sx={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Post</Button>
          <Button sx={styles.buttonClear} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;