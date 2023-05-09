import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import { useParams } from 'react-router-dom';
import HtmlViewer from "./HtmlViewer";
import loading from "../img/loading.gif"
export const NewsCart = () => {
    const { id } = useParams();
    const { request } = useHttp();
    const [data, setData] = useState({});
    const { token } = useContext(Context);
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(`/api/news/${id}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
                setData(fetched);
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        fetchLinks()

    }, [fetchLinks])
    return (<>
    {data?.content?
        <div>
            <HtmlViewer html={data.content} />
        </div>
       :
       <div className="container d-flex  align-items-center justify-content-center" style={{"height":"600px"}}> <img src={loading} style={{width:"150px",height:"150px"}} alt="" /></div>
        }
    </>
    )
}