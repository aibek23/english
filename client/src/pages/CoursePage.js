import React from "react";
import { Link } from "react-router-dom";
import ITenglish from "../img/English.png"
import english from "../img/ITEnglish.png"
import Mechanical from "../img/Mechanical.png"
export const CoursePage = () => {
    return(
        <div className="container mt-5">
        <div className="row">
        <div className="col-lg-4 mt-3" >
          <Link to={'/courses/english'} className="card englishCaerd" style={{"borderRadius":"40px"}}>
            <div className="card-body" style={{height:450}}>
              <div className="cont">
                <div className="node widget-image widget css9 css126">
                  <div className="bgnormal text-center">
                    <img className="englishImg" alt="" src={english} />
                    </div>
                </div><div className="node widget-text cr-text widget css127">
                  <h2 className="textable css128">Английский</h2>
                </div>
                <div className="node widget-text cr-text widget css129">
                  <p className="textable css130">Лидерство, управление, написание текстов и писем.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 mt-3">
          <Link to={"/courses/englishforit"} className="card englishCaerd" style={{"borderRadius":"40px"}}>
            <div className="card-body" style={{height:450}}>
              <div className="cont">
                <div className="node widget-image widget css9 css126">
                  <div className="bgnormal text-center">
                    <img className="englishImg" alt="" src={ITenglish} />
                    </div>
                </div><div className="node widget-text cr-text widget css127">
                  <h2 className="textable css128">Английский для IT</h2>
                </div>
                <div className="node widget-text cr-text widget css129">
                  <p className="textable css130">HTML, CSS, Дизайн интерфейса, Javascript, создание игр. Словарный запас</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 mt-3">
          <Link to={"/courses/englishfromechanical"} className="card englishCaerd" style={{"borderRadius":"40px"}}>
            <div className="card-body" style={{height:450}}>
              <div className="cont">
                <div className="node widget-image widget css9 css126">
                  <div className="bgnormal text-center" style={{"boxSixing":"content-box"}}>
                    <img className="englishImg" alt="" src={Mechanical} />
                    </div>
                </div><div className="node widget-text cr-text widget css127">
                  <h2 className="textable css128">Английский для механики металлургии</h2>
                </div>
                <div className="node widget-text cr-text widget css129">
                  <p className="textable css130">Грамматика, словарный запас.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        </div>
        </div>
    )
}