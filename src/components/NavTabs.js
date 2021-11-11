import React from 'react';

const styles = {
  navStyle: {
    backgroundColor: '#717E8E',
    margin: '10px',
    borderRadius: '10px',
  },
  nameStyle: {
    fontColor: 'black',
    margin: '15px',
    fontWeight: 'bold',
    
  },
};

// Use destructuring to get variables from the props object
// Assign to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.navStyle} className="row">
        <div className="col-md-6 col-xs-12">
          <h1 style={styles.nameStyle}>Ben Slinde</h1>
        </div>
      <ul className="nav nav-pills justify-content-end fw-bold col-md-6 col-xs-12">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-black'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link text-black'}
          >
            Projects
          </a>
          </li>
          <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link text-black'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
           href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-black'}
        >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
