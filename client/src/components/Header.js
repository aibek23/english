import React, { useContext, useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

import faviconPng from '../img/photo.jpg'
export const Header = (props) => {
  const isAuthenticated = props.user;
  const [state, setState] = useState({ authenticated: false, adm: false });
  const data = JSON.parse(localStorage.getItem('userData'));
  useEffect(() => {
    setState(prevState => {
      const newState = { ...prevState };

      if (isAuthenticated !== null) {
        newState.authenticated = true;
      }

      if (data && data.userEmail === "admin@gmail.com") {
        newState.adm = true;
      }

      //   if (data && data.userEmail) {
      //     studentTime==1
      //       newState.studentTime = true;
      //   }

      return newState;
    });
  }, [isAuthenticated]);
  return (

    <div className='container'>
      <Navbar variant="white" expand="lg" sticky="top" style={{ "backgroundColor": "white" }}>
        <div className='container'>
          <Navbar.Brand href="/"><div className="grid valign-middle paddings-20px">
            <div className="d-flex align-items-center">
              <div className="col" style={{ "width": "81px" }}>
                <div className="cont">
                  <div className="node widget-image widget css4 css5"  >
                    <div className="bgnormal"><img className="" alt="" src={faviconPng} style={{ "maxWidth": "61px","borderRight": "4px solid rgba(87, 86, 233, 0.5)", "left": "-2px"  }} /></div>

                  </div>
                </div>
              </div>
              <div className="col " style={{ "width": "100%" }}>
                <div className="d-flex " >
                <div className=" mr-3  ">
                  <h1 className=" mr-3  font-weight-bold">Technic Pro</h1></div></div>
              </div>
            </div>
          </div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
              {state.adm?              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/admin"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">Админ панель
                </span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>:""}

              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">Для кого
                </span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/courses"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">Курсы</span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/grammar"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">База знаний</span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/about"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">О нас

                </span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>
              {state.authenticated?              <NavLink className=" nav-link btn btn-legacy font-text css10" to={"/test"}>
                <div className="pad-left" style={{ "width": "6px" }}></div>
                <div className="btn-content"><span className="text">Тесты
                </span></div>
                <div className="pad-right" style={{ "width": "6px" }}></div>
              </NavLink>:""}

            </Nav>
            <Nav>
              <NavLink to={"/AuthPage"} className=" btn btn-legacy font-text css14 " style={{ "marginLeft": "5px", "backgroundColor": "rgb(87, 86, 233)" }}>
                <div className="pad-left" style={{ "width": "42px" }}></div>
                <div className="btn-content"><span className="text">{
                state.authenticated?"личный кабинет":"Зарегистрироваться"}
                </span></div>
                <div className="pad-right" style={{ "width": "42px" }}></div>
              </NavLink>
            </Nav>
            {/* <div className="col" style={{ "width": "255px" }}>
              <div className="cont">
                <div className="node widget-button widget xs-hidden css8" id="zvonok">
                  <div className="button-container center">
                    <div className="button-wrapper"><button className="btn btn-legacy font-text css14" data-action="modal"
                      data-modal="modal">
                      <div className="pad-left" style={{ "width": "42px" }}></div>
                      <div className="btn-content"><span className="text">Записаться на курс</span></div>
                      <div className="pad-right" style={{ "width": "42px" }}></div>
                    </button></div>
                  </div>
                  <div className="modal nocolors css15"
                    data-id="form">
                    <div data-uid="ulfh30fvtxztpdw45dgb_0"></div>
                  </div>
                </div>
              </div>
            </div> */}

          </Navbar.Collapse>

        </div>
      </Navbar>
    </div>
  )
}
{/* <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {data ? state.operator ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CallPage">прием звонков</NavLink>
                </li> :
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CallPage">позвонить</NavLink>
                </li> : ''}
              {state.adm ? <NavLink className="nav-link" to="/AdminPanel">админ панель</NavLink> : ""}
            </ul>
            <ul className='navbar-nav'>
              <li className="nav-item">
                <a className="nav-link" href="/AuthPage" onClick={logoutHandler}>{data?"выйти":"вход в аккаунт"}</a>
              </li>
            </ul> */}