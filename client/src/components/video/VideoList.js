import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VideoList = (props) => {
  const [data, setData] = useState(props.props);

  useEffect(() => {
    setData(props.props);
  }, [props]);

  if (!Array.isArray(data)) {
    return <h2 className="center">нет записи</h2>
  }
  return (
<>
  {Array.isArray(data) && data.map((element, index) => {
    return (
      <div key={index} className='col-md-6 mt-3  d-flex  align-items-start justify-content-center'>

        <div className="videoCart">
          <Link to={`/video/${element._id}`} className="videoCartBodo" style={{ "borderRadius": "50px" }}>
            <div className="videoRow">
              <div className="videoImg">
                  <img  alt="" src={window.location.protocol + '//' + window.location.host + '/video/' + element.image} />
              </div>
              <div className='videoText'>
              <div className="videoTitle">
                <h2 className="textable css128">{element.title}</h2>
              </div>
              <div className="videoDis">
                <p className="textable css130">{element.description}</p>
              </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

    )
    
  })}
</>
  )
}
export default VideoList;