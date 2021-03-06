import React from 'react';

const styles = {
  resumeStyle: {
    fontColor: '#717E8E',
    borderStyle: 'solid',
    borderColor: '#717E8E',
    borderRadius: '10px',
    marginTop: 'auto',
    background: 'black',
    maxWidth: '800px'
  },
  textStyle: {
    color: '#717E8E',
    textAlign: 'center',
  },
  headStyle: {
    marginTop:'10px',
    color: '#717E8E',
  },
  hrStyle: {
    borderTop: '10px solid white',
  },
  image: {
    height: '200px',
    width: '200px',
    borderRadius: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderStyle: 'solid',
    borderColor: '#717E8E',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '25px',
  },
  colorGrey: {
    color: '#717E8E',
  },
};

export default function Resume() {
  return (
    <div style={styles.resumeStyle} className="container">
      <h1 style={styles.headStyle}>Skills and Resume</h1>
      <hr style={styles.hrStyle}/>
      <div className="row">
        <div className="col-4">
          <ul style={styles.colorGrey} className="fs-4">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>PWA</li>
            <li>Agile Methodoloy</li>
            <li>Git</li>
          </ul>
        </div>    
        <div style={styles.imgContainer} className="col-xs-12 col-md-8">
          <div className="row">
            <div className="col-12">
              <h3 style={styles.textStyle}>
                Consider my Resume.
              </h3>
            </div>
            <div className="col-12">
            <a href="./assets/pdf/BS-SE-10082012.pdf" target="_blank" rel="noreferrer noopener"><img style={styles.image} className="" src={"./assets/images/ssbsresume.png"} alt=" of Ben Slinde's resume" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
