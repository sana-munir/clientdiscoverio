import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import styles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import { useNavigate } from 'react-router-dom';

const Post = ({ post, setCurrentId, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(post?.likes);
  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    navigate(`/posts/${post._id}`);
  };

  const handleUpdate = () => {
    setCurrentId(post._id);
    setOpen(true);
  };

  return (
    <Card sx={styles.card} raised elevation={6}>
      <CardMedia sx={styles.media} image={post.selectedFile || 'https://via.placeholder.com/300'} title={post.title} />
      <div style={styles.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div style={styles.overlay2}>
          <Button style={{ color: 'white' }} onClick={handleUpdate}>
            <EditNoteIcon fontSize="medium" />Edit
          </Button>
        </div>
      )}
      <ButtonBase sx={styles.cardAction} component="span" name="test" onClick={openPost}>
        <div style={styles.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography sx={styles.title} gutterBottom variant="h5" component="h2">{truncate(post.title, 25)}</Typography>
        <CardContent sx={styles.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message.length > 100 ? (
              <>
                {truncate(post.message, 100)} <span style={{ color: 'blue', cursor: 'pointer' }}>see more</span>
              </>
            ) : post.message}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions sx={styles.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
