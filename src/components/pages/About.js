import React from 'react';

const styles = {
  aboutStyle: {
    background: 'black',
    fontColor: '#717E8E',
  },
  textStyle: {
    fontColor: '#717E8E',
  },
  iconStyle: {
      fontSize: '48px',
      color: 'blue',
      margin: '10px',
  },
  listStyle: {
      display: 'inline'
  }
};

export default function About() {
  return (
    <div style={styles.aboutStyle} className="container">
      <h1 style={styles.textStyle}>About Me</h1>
      <p style={styles.textStyle}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
