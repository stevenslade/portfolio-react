import React from 'react';

const styles = {
    footerStyle: {
      background: 'red',
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
    },
    headingStyle: {
      fontSize: '100px',
    },
  };



export default function Footer() {
  return (
    <div style={styles.footerStyle} className="footer">
      <h1>This is a footer</h1>
      
    </div>
  );
}


// for style reference

// function Header() {
//     return (
//       <header style={styles.headerStyle} className="header">
//         <h1 style={styles.headingStyle}>Welcome</h1>
//       </header>
//     );
//   }
  
//   export default Header;
  