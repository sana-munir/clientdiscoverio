const styles = {
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#ffcc00',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffcc00',
      },
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#ffcc00',
    },
    '& .MuiInputBase-input': {
      fontWeight: 'bold',
    },
  },
  paper: {
    padding: '16px',
    borderRadius: '16px',
    maxWidth: '800px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',  // Changed to row for left-right alignment
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '58%',  // Adjusted width for left section
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '38%',  // Adjusted width for right section
  },
  fileInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ffcc00',
      color: '#fff',
    },
  },
  buttonSubmit: {
    background: 'linear-gradient(45deg, #8080ff 30%, #000033 90%)',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ffcc00',
    },
  },
  buttonClear: {
    background: 'linear-gradient(45deg,#0091ff  30%, #cce9ff 90%)',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ffcc00',
    },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '150px',
    marginRight:'30px',
    marginBottom:'10px',
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: '8px',  // Ensure border-radius matches the container
    border: '2px dashed #ffcc00',  // Ensure the border is within the container
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',  // Match border-radius with container
    },
  },
  deleteIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ffcc00',
    color: '#fff',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  placeholderImage: {
    padding: '16px',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ffcc00',
      color: '#fff',
    },
  },
  media: {
    borderRadius: '8px',  // Ensure border-radius matches the container
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
};
export default styles;
