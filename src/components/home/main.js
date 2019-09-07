/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import sample from '../../assests/video/Window-Snow.mp4';
import img from '../../assests/pictures/Mt_Baker.jpg';


class Main extends React.Component {
  render() {
    return (

      <div style={style.video}>
        {/* <img src={img}
            style={{
                objectFit: 'fill',
                width: '100%',
                height: '100%',
                display: 'block'
              }} /> */}
        <video
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            // position: 'absolute',
            // right: 0,
            // bottom: 0
          }}
              // preload
          loop
          autoPlay
          poster="../../assests/pictures/Mt_Baker.jpg"
        >
          <source src={sample} type="video/mp4" />
        </video>
        <div
          className="headStyle"
          style={{
            position: 'absolute', zIndex: 11, fontSize: '100px', left: '25%', top: '25%', color: 'white', fontWeight: '600', textDecoration: 'underline',
          }}
        >TREKMONK
        </div>

      </div>
    );
  }
}

const style = {
  video: {
    height: '100vh',
    width: 'inherit',
    padding: 'none',
    backgroundImage: img,
  },
};

export default Main;
