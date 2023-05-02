import React from "react";
import { FaTelegram } from "react-icons/fa"
import {ImMail4} from "react-icons/im"
import {SiFacebook} from "react-icons/si"
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import faviconPng from '../img/photo.jpg'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div  >
      <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a> */}
      <span className="mb-3 mb-md-0 text-muted">© 2023 Technic Pro
</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><FaTelegram style={{  fontSize: "35px" }} /></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><ImMail4 style={{  fontSize: "35px" }} /></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><SiFacebook style={{  fontSize: "35px" }} /></a></li>
      {/* <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
    </ul>
  </footer>
</div>
      {/* <div className="mt-5 pt-5 pb-5 footer " >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>Heading</h2>
              <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
              <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li>- <a href="#">Lorem ipsum</a></li>
                <li>- <a href="#">Nam mauris velit</a></li>
                <li>- <a href="#">Etiam vitae mauris</a></li>
                <li>- <a href="#">Fusce scelerisque</a></li>
                <li>- <a href="#">Sed faucibus</a></li>
                <li>- <a href="#">Mauris efficitur nulla</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
              <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="mb-3">.</div> */}
    </div>
  )
}