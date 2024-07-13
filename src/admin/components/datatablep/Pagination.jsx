import React, { useEffect} from "react";
import { Pagination, PaginationItem } from '@mui/material';
//import styles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../../actions/posts';

const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.posts);

  const handleChange = (event, value) => {
    dispatch(getPosts(value));
  };

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [dispatch, page]);

  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          component="div"
          page={item.page}
          onClick={() => handleChange(null, item.page)}
          {...item}
        />
      )}
    />
  );
};

export default Paginate;