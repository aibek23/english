import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminNewsList = (props) => {
  const [data, setData] = useState(props.props);
  const [links , setLinks] = useState("")
  useEffect(() => {
    setData(props.props);
    if(props.path==="/uploads/"){
      setLinks("/news/")
    }else{
      setLinks("/video/")
    }

  }, [props]);

  if (!Array.isArray(data)) {
    return <h2 className="center">нет записи</h2>
  }

  return (
    <>
      {Array.isArray(data) && data.map((element, index) => {
        return (
          <div  key={index} className="col-lg-4 mt-5" >
            <div className="card card-body" >
              <Link to={`${ links +element._id}`} className=" englishCaerd" style={{ "borderRadius": "40px" }}>
                <div className="cont">
                  <div className="node widget-image widget css9 css126">
                    <div className="bgnormal text-center">
                      <img className="englishImg mt-3" style={{ "maxWidth": "250px" }} alt="" src={window.location.protocol + '//' + window.location.host + props.path + element.image} />
                    </div>
                  </div><div className="node widget-text cr-text widget css127">
                    <h2 className="textable css128">{element.title}</h2>
                  </div>
                  <div className="node widget-text cr-text widget css129">
                    <p className="textable css130">{element.description}</p>
                  </div>
                </div>
              </Link>
              <div className="d-flex justify-content-end m-2">
                <button className=" btn btn-danger" onClick={() => props.deleteNews(element._id)}>стереть</button>
              </div>
            </div>

          </div>
        )
      })}
    </>
  )
}
export default AdminNewsList;