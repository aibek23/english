import React from "react";
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import faviconPng from '../img/photo.jpg'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      {/* <div className=" mt-5 d-flex flex-column align-content-center" style={{ "height": "150px", "backgroundColor": "rgb(238, 238, 253)" }}>
        <div className="container ">
          <div className="row mt-5">
            <div className="col-5 d-flex align-items-center" >
              <div className="d-flex align-items-center">
                <div className="col" style={{ "width": "81px" }}>
                  <div className="cont">
                    <div className="node widget-image widget css4 css5"  >
                      <div className="bgnormal"><img className="" alt="" src={faviconPng} style={{ "maxWidth": "61px", "borderRight": "4px solid rgba(87, 86, 233, 0.5)", "left": "-2px" }} /></div>

                    </div>
                  </div>
                </div>
                <div className="" style={{ "width": "100%" }}>
                  <div className="d-flex " >
                    <div className=" mr-3  ">
                      <h1 className=" mr-3  font-weight-bold">Technic Pro</h1></div></div>
                </div>
              </div>
            </div>
            <div className="col-7 d-flex justify-content-end">
            <Nav >
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/AuthPage"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">Для кого
                </span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/grammar"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">Обучение</span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/grammar"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">База знаний</span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/grammar"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">о нас

                </span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>

            </Nav>
            <Nav>
              <NavLink className=" btn btn-legacy font-text css14 " style={{ "marginLeft": "30px", "backgroundColor": "rgb(87, 86, 233)" }}>
                <div className="pad-left" style={{ "width": "42px" }}></div>
                <div className="btn-content"><span className="text">Записаться на курс</span></div>
                <div className="pad-right" style={{ "width": "42px" }}></div>
              </NavLink>
            </Nav>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mb-3">.</div>
    </div>
  )
}