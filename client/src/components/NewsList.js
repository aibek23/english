import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NewsList = (props) => {
  const [data, setData] = useState(props.props);

  useEffect(() => {
    setData(props.props);
  }, [props]);

  if (!Array.isArray(data)) {
    return <h2 className="center">нет записи</h2>
  }
  return (

  Array.isArray(data) && data.map((element, index) => {
    const cardSize = index % 3 === 0 ? 'col-lg-7' : 'col-lg-5';
    let maxWidth // set a different size for every third element
    if(cardSize ==='col-lg-7'){
        maxWidth = "100%"
    }else{
        maxWidth ="70%"
    }
    return (
      <div key={index} className={`${cardSize} mt-5`}>
        <div className="card card-body">
          <Link to={`/news/${element._id}`} className="englishCaerd" style={{ "borderRadius": "40px" }}>
            <div className="cont">
              <div className="node widget-image widget css9 css126">
                <div className="bgnormal text-center">
                  <img className="englishImg mt-3" style={{ "maxWidth": maxWidth }} alt="" src={window.location.protocol + '//' + window.location.host + '/uploads/' + element.image} />
                </div>
              </div>
              <div className="node widget-text cr-text widget css127">
                <h2 className="textable css128">{element.title}</h2>
              </div>
              <div className="node widget-text cr-text widget css129">
                <p className="textable css130">{element.description}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>


    )
  })
  )
}
export default NewsList;