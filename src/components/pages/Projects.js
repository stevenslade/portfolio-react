import React from 'react';

const styles = {
  cardStyle: {
    width: '20rem',
    fontColor: '#717E8E',
    borderStyle: 'solid',
    borderColor: '#717E8E',
    borderRadius: '10px',
    borderWidth: '3px',
    marginTop: '20px',
    marginLeft: '5px',
    marginRight: '5px',
    background: 'black',
  },
  headStyle: {
    marginTop:'10px',
    textAlign: 'center',
    color: '#717E8E',
    backgroundColor: 'black',
  },
  imageContStyle: {
    minHeight: '200px',
    minWidth: '200px',
  },
  imgStyle: {
    borderRadius: '10px',
  },
  colorGrey: {
    color: '#717E8E',
  },
  iconStyle: {
    fontSize: '32px',
    color: 'blue',
    margin: '10px',
  },
};

export default function Projects() {
  return (
    <div className="container">
      <h1 style={styles.headStyle}>Showcased Projects</h1>
      <div className="row d-flex justify-content-evenly">
        <div className="card" style={styles.cardStyle}>
          <div style={styles.imageContStyle}>
            <img style={styles.imgStyle} src="./assets/images/screenshothome.png" className="card-img-top mt-2" alt="book shelf and cards of book reviews" />
          </div>
          <div className="card-body d-flex align-items-start flex-column">
           <h4 style={styles.colorGrey} className="card-title font-weight-bold">Book Club Collective</h4>
            <p style={styles.colorGrey} className="card-text">This app allows the user to make a profile, leave book reviews, read reviews left by other users and create a club for other users to join to discuss books.</p>
              <div className="row mt-auto">
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Repo" href="https://github.com/stevenslade/Book-Club-Collective" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Deployed App" href="https://intense-tor-64466.herokuapp.com/" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-gear-fill"></i></a>
              </div>
          </div>
        </div>
        <div className="card" style={styles.cardStyle}>
          <div style={styles.imageContStyle}>
            <img style={styles.imgStyle} src="./assets/images/HHSS.png" className="card-img-top mt-2" alt="book shelf and cards of book reviews" />
          </div>
          <div className="card-body d-flex align-items-start flex-column">
            <h4 style={styles.colorGrey} className="card-title font-weight-bold">Hiking Hub</h4>
            <p style={styles.colorGrey} className="card-text">An app that enables the user to search for local hiking trails and then find trail related content on reddit.</p>
              <div className="row mt-auto">
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Repo" href="https://github.com/stevenslade/Hiking-Hub" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Deployed App" href="https://stevenslade.github.io/Hiking-Hub/" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-gear-fill"></i></a>
              </div>
          </div>
        </div>
        <div className="card" style={styles.cardStyle}>
          <div style={styles.imageContStyle}>
            <img style={styles.imgStyle} src="./assets/images/weatherDashboardSS.png" className="card-img-top mt-2" alt="book shelf and cards of book reviews" />
          </div>
          <div className="card-body d-flex align-items-start flex-column">
            <h4 style={styles.colorGrey} className="card-title font-weight-bold">Weather Dashboard</h4>
            <p style={styles.colorGrey} className="card-text">A weather forecasting app which allows the user to select a city and see the current weather and a five day forecast.</p>
              <div className="row mt-auto">
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Repo" href="https://github.com/stevenslade/WeatherDashboard" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Deployed App" href="https://stevenslade.github.io/WeatherDashboard/" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-gear-fill"></i></a>
              </div>
          </div>
        </div>
      </div>
    <div className="row d-flex justify-content-evenly">
      <div className="card" style={styles.cardStyle}>
        <div style={styles.imageContStyle}>
          <img style={styles.imgStyle} src="./assets/images/SSBW.png" className="card-img-top mt-2" alt="book shelf and cards of book reviews" />
        </div>
          <div className="card-body d-flex align-items-start flex-column">
            <h4 style={styles.colorGrey} className="card-title font-weight-bold">Travel Budget Tracker</h4>
            <p style={styles.colorGrey} className="card-text">A simple budget tracker allowing the user to enter positive and negative fund allocations to see a total remaining balance.</p>
              <div className="row mt-auto">
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Repo" href="https://github.com/stevenslade/Budget-Tracker" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Deployed App" href="https://stark-reaches-88697.herokuapp.com/" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-gear-fill"></i></a>
              </div>
          </div>
        </div>
        <div className="card" style={styles.cardStyle}>
          <div style={styles.imageContStyle}>
            <img style={styles.imgStyle} src="./assets/images/TTSS.png" className="card-img-top mt-2" alt="book shelf and cards of book reviews" />
          </div>
          <div className="card-body d-flex align-items-start flex-column">
           <h4 style={styles.colorGrey} className="card-title font-weight-bold">Tech Blog</h4>
            <p style={styles.colorGrey} className="card-text">This app allows the user to create a login and then leave blog posts.  Signed in users can also respond to posts created by other users.</p>
              <div className="row mt-auto">
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Repo" href="https://github.com/stevenslade/Tech-Theory" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Deployed App" href="https://arcane-forest-46584.herokuapp.com/" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-gear-fill"></i></a>
              </div>
          </div>
        </div>
        <div className="card" style={styles.cardStyle}>
          <div style={styles.imageContStyle}>
            <img style={styles.imgStyle} src="./assets/images/WorkDaySchedulerSS.png" className="card-img-top mt-2" alt="book shelf and cards of book reviews" />
          </div>
          <div className="card-body d-flex align-items-start flex-column">
            <h4 style={styles.colorGrey} className="card-title font-weight-bold">Work Day Scheduler</h4>
            <p style={styles.colorGrey} className="card-text">A single day task planning app. Allows entry and edits of tasks scheduled per hour.  Rows change color to indicate past, present or future time slot. </p>
              <div className="row mt-auto">
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Repo" href="https://github.com/stevenslade/Homework-GT-FSF-PT-06-2021/tree/main/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-github"></i></a>
                <a className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see the Deployed App" href="https://stevenslade.github.io/Homework-GT-FSF-PT-06-2021/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank" rel="noreferrer noopener"><i style={styles.iconStyle} className="bi bi-gear-fill"></i></a>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
