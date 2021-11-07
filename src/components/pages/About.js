import React from 'react';

const styles = {
  aboutStyle: {
    fontColor: '#717E8E',
    borderStyle: 'solid',
    borderColor: '#717E8E',
    borderRadius: '10px',
    marginTop: '10px',
  },
  textStyle: {
    fontColor: '#717E8E',
  },
  headStyle: {
    marginTop:'10px',
  },
  hrStyle: {
    borderTop: '10px solid black',
  },
  image: {
    height: '200px',
    width: '200px',
    borderRadius: '10px',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '25px',
  }
};

export default function About() {
  return (
    <div style={styles.aboutStyle} className="container">
      <h1 style={styles.headStyle}>About Me</h1>
      <hr style={styles.hrStyle}/>
      <div className="row">
        <div style={styles.imgContainer} className="col-xs-12 col-md-5 col-lg-4">
          <img style={styles.image} className="m-2" src={"./assets/images/selfImage2.jpg"} alt=" of Ben Slinde, he is very handsome" />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-8"> 
          <p style={styles.textStyle}>
            I am a recent graduate from a Georgia Tech Full Stack Software Engineering Bootcamp.  I am enthusiastic about starting a new career as a developer. React and SQL are some of my favorite programming languages and I am excited to work more with them.  I have a degree in Mechnical Engineering and twenty years of experience working with teams to develop new products and equipment in a manufacturing environment.  I look forward to using my years of experience in a new field.
          </p>
        </div>
      </div>
    </div>
  );
}
