import { deepPurple } from '@mui/material/colors';

const styles = {
  appBar: {
    borderRadius: 15,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  image1: {
    marginLeft: '15px',
  },
  icon: {
    marginLeft: '10px',
    fontSize: '60px',
    cursor: 'pointer',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '20px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logout: {
    marginLeft: '20px',
    color:'black'
    //backgroundColor: 'black',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  purple: {
    backgroundColor: '#ffcc00',
  },
  signInButton: {
    background: 'linear-gradient(180deg, #0084ff 26.71%, #cce6ff 99.36%)',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '5px',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'white',
      color: 'black',
    },
  },
};

export default styles;


/*import { deepPurple } from '@mui/material/colors';

const styles = {
  appBar: {
    borderRadius: 15,
    marginTop: '30px', // Top margin
    marginRight: '30px', // Right margin
    marginBottom: '30px', // Bottom margin
    marginLeft: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    width:'2000px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '0px',
    marginTop: '5px',
  },
  image1: {
    marginLeft: '0px',
    marginTop: '5px',
    marginRight: '300px',
  },
  icon: {
    marginLeft: '0px',
    fontSize:'60px',
    marginBottom: '0px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    //[theme.breakpoints.down('sm')]: {
      //width: 'auto',
    //},
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    //[theme.breakpoints.down('sm')]: {
      //width: 'auto',
      //marginTop: 20,
      //justifyContent: 'center',
    //},
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0px',
  },
  purple: {
    //color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
};
export default styles;*/