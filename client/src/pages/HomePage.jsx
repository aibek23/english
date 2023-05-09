import React, { useState } from "react";
import titlieImg from "../img/134722.png"
import frilaseImg from "../img/150649.png"
import frilaseImg1 from "../img/190303.png"
import frilaseImg2 from "../img/0326.png"
import Image1 from "../img/4433.png";
import Image2 from "../img/94457.png"
import Image3 from "../img/42.png"
import Image4 from "../img/205413.png"
import  Image5  from "../img/briefcase.png";
import  Image6  from "../img/pencil.png";
import  Image7  from "../img/todo.png";
import { BiMinus } from "react-icons/bi"
import { BiPlus } from "react-icons/bi"
// import {Link} from "react-router-dom"
// import { FaArrowDown } from "react-icons/fa";
// import { FcAcceptDatabase } from "react-icons/fc";
// import { FcBriefcase } from "react-icons/fc";
// import { FcAlphabeticalSortingZa } from "react-icons/fc";
// import { FcCamcorderPro } from "react-icons/fc";
// import { FcComboChart } from "react-icons/fc";
// import { FcDownload } from "react-icons/fc";
import { Link } from "react-router-dom";



import style from "../css/HomePage.module.css"
export const HomePage = () => {
  const [spoiler1, setSpoiler1] = useState(false)
  const [spoiler2, setSpoiler2] = useState(false)
  const [spoiler3, setSpoiler3] = useState(false)
  return (<div className="container">
    <div className="" style={{"width":"100%"}} >
      <div className="row align-items-center mb-5 mt-5">
        <div className="col-md-6 mt-5">
          <div className="node widget-metahtml widget css44">
            <div className="metahtml css45">
              <div className="outer">
                <div className="inner">
                  <h2 className="textable css46">Курсы технического английского языка</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 title">
          <div className="title_text">
          {/* <h4 className="" style={{ "maxWidth": "45vw" }}>Определить уровень <br/>английского языка</h4> */}
          <Link to={"/test/level"} className="title_text_btn btn btn-danger">пройди тест</Link>
          </div>
          
          <img src={titlieImg} className="textable img"  alt="" />
        </div>
      </div>
      <div className="" style={{ "marginTop": "100px" }}>
        <div className="node widget-metahtml widget wow bounceInUp css66">
          <div className="metahtml css67">
            <div className="outer">
              <div className="inner">
                <h2 className="textable css68"><strong> Курсы идеально подойдут вам, если вы: </strong></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-5">
          <div className="cont" style={{ "backgroundColor": "rgb(238, 238, 253)", "borderRadius": "30px" }}>
            <div className="spoiler1 d-flex align-items-center justify-content-center" style={{ padding: "25px" }}>
              <div className="inner"><img style={{ "maxWidth": "300px", maxHeight: "205px", borderRadius: "20px" }} src={frilaseImg} alt="" />
                <div className="proportions"></div>
              </div>
            </div>
            <div className="node widget-spoiler cr-spoiler widget css76" style={{ "borderRadius": "30px" }}>
              <div className="metahtml css77">
                <div className="spoiler1">
                  <div onClick={() => { setSpoiler1(!spoiler1) }}>
                    <div className={`spoiler1-toggle ${spoiler1 ? "is-collapsed" : "is-expanded"}`}>
                      <i className="fa fa-minus">  <BiPlus style={{ color: "wheat", fontSize: "35px" }} /></i>
                      <i className="fa fa-plus">  <BiMinus style={{ color: "wheat", fontSize: "35px" }} /></i>
                    </div>
                    <div className="spoiler1-header font-header is-collapsed">
                      <p className="textable css78">работаете в IT сфере</p>
                    </div>
                  </div>
                  <div className="dropdaunM">
                    <div className={`dropdaunMT ${spoiler1 ? "on" : ""}`}>
                      <div className="spoiler1-container is-collapsed " >
                        <div className="cont">
                          <div className="node widget-list widget css79 css80">
                            <div className="type-ul textable css81">
                              <ul>
                                <li>Хотите работать на фрилансе</li>
                                <li>Хотите устроиться в зарубежные компании</li>
                                <li>Нужно быстро обучиться и начать зарабатывать уже через 2-3 недели</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-5">
          <div className="cont" style={{ "backgroundColor": "rgb(255, 248, 223)", "borderRadius": "30px" }}>
            <div className="spoiler1 d-flex align-items-center justify-content-center" style={{ padding: "25px" }}>
              <div className="inner"><img style={{ "maxWidth": "300px", maxHeight: "205px", borderRadius: "20px" }} src={frilaseImg1} alt="" />
                <div className="proportions"></div>
              </div>
            </div>
            <div className="node widget-spoiler cr-spoiler widget css76" style={{ "borderRadius": "30px" }}>
              <div className="metahtml css77">
                <div className="spoiler1">
                  <div onClick={() => { setSpoiler2(!spoiler2) }}>
                    <div className={`spoiler1-toggle ${spoiler2 ? "is-collapsed" : "is-expanded"}`}>
                      <i className="fa fa-minus">  <BiPlus style={{ color: "wheat", fontSize: "35px" }} /></i>
                      <i className="fa fa-plus">  <BiMinus style={{ color: "wheat", fontSize: "35px" }} /></i>
                    </div>
                    <div className="spoiler1-header font-header is-collapsed">
                      <p className="textable css78">РАБОТАЕТЕ НА ПРЕДПРИЯТИЯХ</p>
                    </div>
                  </div>
                  <div className="dropdaunM">
                    <div className={`dropdaunMT ${spoiler2 ? "on" : ""}`}>
                      <div className="spoiler1-container is-collapsed " >
                        <div className="cont">
                          <div className="node widget-list widget css79 css80">
                            <div className="type-ul textable css81">
                              <ul><li>Уперлись в потолок<br />по зарплате</li><li>Надоела скучная, монотонная работа<br />без развити</li><li>Хотите больше зарабатывать<br />и получать удовольствие<br />от деятельности</li><li>Ищете профессии<br />с работой онлайн<br />в свободном графике</li></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-5">
          <div className="cont" style={{ "backgroundColor": "rgb(224, 237, 255)", "borderRadius": "30px" }}>
            <div className="spoiler1 d-flex align-items-center justify-content-center" style={{ padding: "25px" }}>
              <div className="inner"><img style={{ "maxWidth": "300px", maxHeight: "205px", borderRadius: "20px" }} src={frilaseImg2} alt="" />
                <div className="proportions"></div>
              </div>
            </div>
            <div className="node widget-spoiler cr-spoiler widget css76" style={{ "borderRadius": "30px" }}>
              <div className="metahtml css77">
                <div className="spoiler1">
                  <div onClick={() => { setSpoiler3(!spoiler3) }}>
                    <div className={`spoiler1-toggle ${spoiler3 ? "is-collapsed" : "is-expanded"}`}>
                      <i className="fa fa-minus">  <BiPlus style={{ color: "wheat", fontSize: "35px" }} /></i>
                      <i className="fa fa-plus">  <BiMinus style={{ color: "wheat", fontSize: "35px" }} /></i>
                    </div>
                    <div className="spoiler1-header font-header is-collapsed">
                      <p className="textable css78">ОБУЧАЕТЕ СОТРУДНИКОВ</p>
                    </div>
                  </div>
                  <div className="dropdaunM">
                    <div className={`dropdaunMT ${spoiler3 ? "on" : ""}`}>
                      <div className="spoiler1-container is-collapsed " >
                        <div className="cont">
                          <div className="node widget-list widget css79 css80">
                            <div className="type-ul textable css81">
                              <ul><li>Нужно системное обучение сотрудников Вашей компании</li><li>Мы разместим Ваши курсы<br />и откроем Вашим сотрудникам доступ</li><li>Проведем автоматическую аттестацию</li><li>Предоставим Вам статистику результатов</li></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5 mb-5">.</div>
    <div className="row mt-5">
      <div className="col-6 d-flex justify-content-end">
        <div className="cont">
          <div className="node widget-button widget css93">
            <div className="button-container right xs-full">
              <div className="button-wrapper"><a className="btn btn-legacy font-text css14" src="#" >
                <div className="pad-left" style={{ "width": "42px" }} ></div>
                <Link to={"/courses"} className="btn-content " style={{"textDecoration":"none" ,color:"white"}}>Начать обучение</Link>
                <div className="pad-right" style={{ "width": "42px" }}></div>
              </a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col" style={{ "width": "50%" }}>
        <div className="cont">
          <div className="node widget-button widget css94">
            <div className="button-container left xs-full">
              <div className="button-wrapper"><a className="btn btn-legacy font-text css95"src="#">
                <div className="pad-left" style={{ "width": "40px" }}></div>
                <div className="btn-content"><a className="text-muted" href="https://wa.me/996500712021?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."><span className="text">Связаться с нами</span></a></div>
                <div className="pad-right" style={{ "width": "40px" }}></div>
              </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5 mb-5">.</div>

    <div className="cont">
      <div className="node widget-metahtml widget bounceInUp css43" >
        <div className="metahtml css67">
          <div className="outer">
            <div className="inner">
              <h2 className="textable css97"><strong>Как проходит обучение</strong></h2></div>
          </div>
        </div>
      </div>
      <div className="node widget-text cr-text widget css98">
        <p className="textable css99">Подзаголовок секции с кратким описанием того, что внутри секции.</p>
      </div>
    </div>
    <div className="row p-5">
      <div className="col-md-4 text-centor d-flex flex-column align-items-center" >
        <div className="">
          <img src={Image1} alt="" style={{ maxWidth: "230px" }} />
          <div className="node widget-text cr-text widget css109 mt-3">
            <p className="textable css110">Смотрите видеоуроки</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-centor d-flex flex-column align-items-center " >
        <div className="">
          <img src={Image2} alt="" style={{ maxWidth: "230px" }} />
          <div className="node widget-text cr-text widget css109 mt-3">
            <p className="textable css110">Выполняете домашние задания</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-centor d-flex flex-column align-items-center pr-5" >
        <div className="pr-5">
          <img src={Image3} alt="" style={{ maxWidth: "230px" }} />
          <div className="node widget-text cr-text widget css109 mt-3">
            <p className="textable css110">Получаете результат</p>
          </div>
        </div>
      </div>

    </div>
    <div className="mt-5 mb-5">.</div>
    <div className="row">
      <div className="col-md-6 d-flex flex-column align-items-end">
        <div className="cont">
          <div className="node widget-metahtml widget bounceInUp css118" >
            <div className="metahtml css119"><div className="outer">
              <div className="inner">
                <h2 className="textable css120"><strong>Онлайн курсы.&nbsp;</strong></h2></div>
            </div></div></div><div className="node widget-text cr-text widget css121">
            <p className="textable css122">Смотрите видео-лекции, проходите тесты и выполняйте задания
              <br />с любого устройства: ПК, планшета, смартфона.</p></div></div>
      </div>
      <div className="col-md-6">
        <img src={Image4} className="online_corss_img" alt="" />
      </div>
    </div>
    <div className="mt-5 mb-5">.</div>
    <div className="row">
      <div className="col-lg-4 mt-3" >
        <div className="card" style={{"borderRadius":"40px"}}>
          <div className="card-body" style={{  padding: 51,height:450}}>
            <div className="cont">
              <div className="node widget-image widget css9 css126">
                <div className="bgnormal text-center">
                  <img className="" alt="" src={Image5} /></div>
              </div><div className="node widget-text cr-text widget css127">
                <h2 className="textable css128">Бизнес английский</h2>
              </div>
              <div className="node widget-text cr-text widget css129">
                <p className="textable css130">Лидерство, управление, написание текстов и писем.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-3">
        <div className="card" style={{"borderRadius":"40px"}}>
          <div className="card-body" style={{  padding: 51,height:450}}>
            <div className="cont">
              <div className="node widget-image widget css9 css126">
                <div className="bgnormal text-center">
                  <img className="" alt="" src={Image6} /></div>
              </div><div className="node widget-text cr-text widget css127">
                <h2 className="textable css128">Английский для IT</h2>
              </div>
              <div className="node widget-text cr-text widget css129">
                <p className="textable css130">HTML, CSS, Дизайн интерфейса, Javascript, создание игр. Словарный запас</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-3">
        <div className="card" style={{"borderRadius":"40px"}}>
          <div className="card-body" style={{  padding: 51,height:450}}>
            <div className="cont">
              <div className="node widget-image widget css9 css126">
                <div className="bgnormal text-center">
                  <img className="" alt="" src={Image7} /></div>
              </div><div className="node widget-text cr-text widget css127">
                <h2 className="textable css128">Английский для механики металлургии</h2>
              </div>
              <div className="node widget-text cr-text widget css129">
                <p className="textable css130">Грамматика, словарный запас.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="container p-5 d-flex justify-content-center  bg-white flex-column align-content-center text-center" >
        <h2 className="mb-5" style={{"color":"#F3921FFF","fontSize":"45px"}}>Знаете ли вы?</h2>
        <p>По крайней мере, около четверти всех американцев имеют немецкое происхождение.</p>
    </div>
      <div className={style.auth_cont}>
        <div className="d-flex align-items-center flex-column">  
        <h2 className="mt-5 text-white">Вы готовы начать?</h2>
         <Link to={"/AuthPage"} className="btn btn-success h-25">Зарегистрироваться</Link>
         </div>
      </div> */}
  </ div>
  )
}
