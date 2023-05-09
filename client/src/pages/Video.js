import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import loadings from "../img/loading.gif"
import VideoList from "../components/video/VideoList";
export const Video = () => {
    const [data, setData] = useState([]);
    const {request , loading} = useHttp();
    const { token } = useContext(Context);
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/video/show', 'GET', null, {
                Authorization: `Bearer ${token}`
            })

            setData(fetched);
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    const fetchLinksReloud = () => {
        fetchLinks()
    }
    return (
        <>{!loading?
        <div className="container">
            <div className="row">
                <VideoList props={data} />
            </div>
        </div>
           :
        <div className="container d-flex  align-items-center justify-content-center" style={{"height":"600px"}}> <img src={loadings} style={{width:"150px",height:"150px"}} alt="" /></div>
     }
         </>
    )
}