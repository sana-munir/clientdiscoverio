import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, useMediaQuery, Modal, Typography } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, AddBox } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { MuiChipsInput } from 'mui-chips-input';
import styles from './styles';
import Pagination from '../Pagination';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useNavigate, useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const isSmallDevice = useMediaQuery('(max-width:600px)');
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags(tag);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentId(0);
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <AppBar sx={styles.appBarSearch} position="static" color="inherit">
          <TextField
            name="search"
            variant="outlined"
            label="Search Posts"
            color="secondary"
            onKeyDown={handleKeyPress}
            sx={{ width: '400px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MuiChipsInput
            style={{ marginLeft: '2px', width: '400px' }}
            value={tags}
            color="warning"
            onChange={handleAddChip}
            label="Search Tags"
            variant="outlined"
          />
          <Button onClick={searchPost} sx={styles.searchButton} >
            <SearchIcon />
          </Button>
          <Button onClick={handleOpen} sx={styles.addButton}>
            <AddBox color='#020c40'/><Typography><b>Create Post</b></Typography>
          </Button>
        </AppBar>
        <Modal open={open} onClose={handleClose}>
          <div style={styles.modal}>
            <Form currentId={currentId} setCurrentId={setCurrentId} setOpen={setOpen} />
          </div>
        </Modal>
        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{ flexDirection: isSmallDevice ? 'column-reverse' : 'row' }}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid sx={{ marginLeft: '0px' }} container spacing={3}>
              <Posts setCurrentId={setCurrentId} setOpen={setOpen} />
            </Grid>
          </Grid>
        </Grid>
        {(!searchQuery && !tags.length) && (
          <Paper elevation={0} sx={styles.pagination}>
            <Pagination page={page} />
          </Paper>
        )}
      </Container>
    </Grow>
  );
};

export default Home;


/*import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, useMediaQuery, Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { MuiChipsInput } from 'mui-chips-input'
import styles from './styles';
import Pagination from '../Pagination';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useNavigate, useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const isSmallDevice = useMediaQuery('(max-width:600px)');
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [search, setSearch]=useState('');
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };
  const handleKeyPress = (e) =>{
    if(e.keyCode === 13){
      searchPost();
    }
  };
  const handleAddChip = (tag) => setTags(tag);

  //const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{ flexDirection: isSmallDevice ? 'column-reverse' : 'row' }}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <AppBar sx={styles.appBarSearch} position="static" color="inherit">
              <TextField name="search" variant="outlined" label="Search Destinations" onKeyDown={handleKeyPress} fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <MuiChipsInput
                style={{ margin: '10px 0' }}
                value={tags}
                onChange={handleAddChip}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} sx={styles.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Paper sx={styles.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;*/