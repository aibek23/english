import React, {useCallback, useContext, useEffect, useState } from "react";
import {useHttp} from '../hooks/http.hook'
import { Context } from '../context/Context';
import LineChart from "../components/LineChart";
// import Level_detection from "./test/Level_detection";

export const Personal = () => {
    const {request} = useHttp();
    const [date, setDate] = useState("");
    const [userAnswers , setUserAnswers] = useState([]);
    const [engineer ,  setEngineer] = useState([]);
    const [it_test , setit_test] = useState([]);
    const datas = JSON.parse(localStorage.getItem('userData'));
    const {token} = useContext(Context);
    const auth = useContext(Context);
  
    const fetchLinks = useCallback(async () => {
        try {
          const fetched = await request('/api/test/person', 'GET', null, {
            Authorization: `Bearer ${token}`
          })

          setUserAnswers(fetched);
        } catch (e) {}
      }, [token, request])
    
      useEffect(() => {
        fetchLinks()
      }, [fetchLinks])

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        localStorage.clear()
        window.location.reload();
    }
    useEffect(() => {
        setDate(new Date(datas.date).toLocaleString())
    }, [])
    return (
        <div className="testbg">
            <div className="container">
                <div className="row justify-content-between" style={{ "alignContent": "flex-start" }}>
                    <div className="col-md-4 bg-white p-4 mb-4" style={{ "borderRadius": "20px", "maxHeight": "380px" }} >
                        <table>
                            <tbody>
                                <tr style={{ borderBottom: "solid" }}>
                                    <td style={{ "padding": "15px" }}>Name:</td>
                                    <td style={{ "padding": "15px" }}>{datas.username}</td>
                                </tr>
                                <tr >
                                    <td style={{ "padding": "15px" }}>Surname:</td>
                                    <td style={{ "padding": "15px" }}>{datas.surname}</td>
                                </tr>
                                <tr>
                                    <td style={{ "padding": "15px" }}>Phone:</td>
                                    <td style={{ "padding": "15px" }}>{datas.phnumber}</td>
                                </tr>
                                <tr>
                                    <td style={{ "padding": "15px" }}>Date of Creation:</td>
                                    <td style={{ "padding": "15px" }}>{date}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn  btn-danger" style={{ "margin": "15px" }} onClick={(e) => logoutHandler(e)}>выйти</button>
                    </div>
                    <div className="col-md-7 " style={{ "borderRadius": "20px" }} >
                        <div className="bg-white p-4 " style={{ "borderRadius": "20px", }}>
                            <LineChart style={{ "height": "750px" }} props={userAnswers} testName={"Level_detection"} title={"грамматика английского языка"} />
                        </div>
                        <div className=" bg-white p-4 mt-4" style={{ "borderRadius": "20px" }}>
                            <LineChart style={{ "width": "750px" }} props={userAnswers} testName={"English_test"} title={"IT английский"} />
                        </div>
                        <div className=" bg-white p-4 mt-4" style={{ "borderRadius": "20px" }}>
                            <LineChart style={{ "width": "750px" }} props={userAnswers} testName={"IT_English_test"} title={"технический английский "} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}