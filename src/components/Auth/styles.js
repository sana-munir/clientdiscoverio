const styles = {
    container: {
      height: '850px', 
      width:'1980px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${require('../../assets/bgs.jpg')})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    containerSignUp: {
      backgroundImage: `url(${require('../../assets/bga.jpg')})`,
    },
  
  paper: {
    marginTop: '64px',
    display: 'flex',
    width:'430px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  avatar: {
    margin: '8px',
    backgroundColor:'#ffcc00'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '24px',
  },
  submit: {
    marginTop: '24px',
    marginRight: '0px',
    marginBottom: '16px',
  },
  googleButton: {
    marginBottom: '16px',
  },
};
export default styles;