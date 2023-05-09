import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import { AdminNews } from "./AdminNews";
import { AdminVideo } from "./AdminVide";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GrapesjsMain from '../components/GrapesjsMain';
import 'grapesjs/dist/css/grapes.min.css';
export const AdminPanel = () => {
  const [data, setData] = useState({});
  const [btn, setBtn] = useState(true)
  const [content, setContent] = useState("")
  const { request } = useHttp();
  const { token } = useContext(Context);
  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/news/show', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setData(fetched);
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  const deleteNews = async (id) => {
    try {
      const data = request(`/api/news/delete/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${token}`
      });
      data.then(({ m: value }) => {
        toast.info(`${value}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchLinks();
      }).catch((error) => {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };


  const fetchLinksvideo = useCallback(async () => {
    try {
      const fetched = await request('/api/news/show', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setData(fetched);
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [token, request]);

  useEffect(() => {
    fetchLinksvideo();
  }, [fetchLinksvideo]);

  const deleteVideo = async (id) => {
    try {
      const data = request(`/api/video/delete/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${token}`
      });
      data.then(({ m: value }) => {
        toast.info(`${value}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchLinksvideo();
      }).catch((error) => {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const contentHtml = (data) => {
    setContent(data)
  }

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className="ml-3">
          <button className={`${btn ? "btn-primary" : "btn-light"} m-2`} onClick={() => { setBtn(true) }}>редактор страницы (новости) </button>
          <button className={`${!btn ? "btn-primary" : "btn-light"} m-2`} onClick={() => { setBtn(false) }}>редактор страницы (видео)</button>
        </div></div>
      {btn ?
        <AdminNews />
        :
        <AdminVideo />
      }
    </>
  )
}