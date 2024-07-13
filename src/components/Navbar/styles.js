
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