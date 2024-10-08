import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import styles from './styles';

const Posts = ({ setCurrentId, setOpen }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid sx={styles.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} setOpen={setOpen} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;
