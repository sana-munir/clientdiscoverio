import React, { useState, useEffect } from 'react';
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
              <TextField name="search" variant="outlined" label="Search Memories" onKeyDown={handleKeyPress} fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
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

export default Home;