import React from 'react';

const styles = {
  footerStyle: {
    backgroundColor: '#717E8E',
    position: 'absolute',
    bottom: 0,
    borderRadius: '10px',
    width: '100%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontColor: 'black',
    backgroundColor: '#717E8E',
    margin: '15px',
  },
  iconStyle: {
    fontSize: '48px',
    color: 'blue',
    margin: '10px',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footerStyle}>

      <div>
        <h1 style={styles.textStyle} >Full Stack Software Engineer</h1>
      </div>

      <div>
        <a  href="https://github.com/stevenslade" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>

        <a  href="https://www.linkedin.com/in/benjamin-slinde" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-linkedin"></i></a>

        <a  href="https://stackexchange.com/users/21525143/benjamin-slinde" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-stack-overflow"></i></a>
      </div>
      
    </footer>
  );
}

