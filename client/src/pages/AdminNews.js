import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import AdminNewsList from '../components/AdminNewsList'
import NewsCreate from "../components/NewsCreate";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GrapesjsMain from '../components/GrapesjsMain';
import 'grapesjs/dist/css/grapes.min.css';
export const AdminNews = () => {
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
          <GrapesjsMain props={contentHtml} />
          <NewsCreate props={fetchLinks} content={content}  path={"/api/news"}/>
          <div className="container">
            <div className="row">
              <AdminNewsList deleteNews={deleteNews} props={data}  path={"/uploads/"}/>
            </div>
          </div>

    </>
  )
}