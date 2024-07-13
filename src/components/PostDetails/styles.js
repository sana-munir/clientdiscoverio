const styles = {
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '1000px', 
  },
  card: {
    display: 'flex',
    flexDirection: 'column', // Ensure card content stacks vertically on small screens
    width: '100%',
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0', // Margin to add space around the image section
  },
  recommendedPosts: {
    display: 'flex',
    flexWrap: 'wrap', // Ensure posts wrap on smaller screens
    gap: '20px', // Add spacing between recommended posts
  },
  recommendedPost: {
    width: '200px', // Fixed width for recommended post images
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column', // Stack content vertically
    alignItems: 'center', // Center content
    textAlign: 'center',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack comments and input vertically
    gap: '20px', // Add spacing between comments and input
  },
  commentsInnerContainer: {
    maxHeight: '300px', // Set a max height for the comments container
    overflowY: 'auto', // Enable vertical scrolling
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default styles;

/*const styles = {
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    //[theme.breakpoints.down('sm')]: {
      //flexWrap: 'wrap',
      //flexDirection: 'column',
    //},
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
   // [theme.breakpoints.down('sm')]: {
     // marginLeft: 0,
    //},
  },
  recommendedPosts: {
    display: 'flex',
    //[theme.breakpoints.down('sm')]: {
      //flexDirection: 'column',
    //},
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
};
export default styles;*/