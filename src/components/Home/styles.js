const styles = {
  appBarSearch: {
    borderRadius: 2,
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'row',
    //alignItems: 'center',
    padding: '8px',
    //justifyContent: 'space-between',
    background: '#fffff',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  searchButton: {
    marginLeft: '5px',
    borderRadius:'45px',
    color:'black',
    width:'10px',
    background: 'linear-gradient(to left, #f2f2f2, #a6a6a6)',
    '&:hover':{
      background: 'linear-gradient(to left, #ffe680, #ffffe6)',
      cursor: 'pointer',
      color: 'black',
    }
  }, 
  addButton: {
    marginLeft: '100px',
    background: 'white',
    //borderRadius: '34px',
    border: 'none',
    color: '#060656',
    fontSize: '5px',
    boxShadow:'none',
    //padding: '11px 20px 11px 20px',
    '&:hover':{
      background: 'white',
      cursor: 'pointer',
      color: '#0099e6',
    }
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: 24,
  },
  pagination: {
    borderRadius: 2,
    marginTop: '1rem',
    paddingRight:'100px',
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex'
  },
};

export default styles;

/*const styles = {
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
};
export default styles;*/