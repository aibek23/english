import React, { useCallback, useContext, useState, useRef ,useEffect} from "react";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import Input from "./input/Input";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};
const NewsCreate = (props) => {
    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
    });
    const { request } = useHttp();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState("");
    const [content, setContent] = useState('')
    const auth = useContext(Context);
    const datas = JSON.parse(localStorage.getItem('userData'));
    const author = datas.username
    const ref = useRef();
    useEffect(()=>{setContent(props.content)},[props.content])
    function imghandleUpload(event) {
        setFile(event.target.files[0]);
        setuserInfo({
            ...userInfo,
            file:event.target.files[0],
            filepreview:URL.createObjectURL(event.target.files[0]),
            });
    }
    const createHandler = useCallback(async () => {
        try {
            if(title===''||description===''||content===''){
                toast.error("заполните все поля формы", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            }else{
            const formdata = new FormData() 
            formdata.append('image', userInfo.file );
            formdata.append('image', title);
            formdata.append('image', description);
            formdata.append('image', content);
            formdata.append('image', author);
            axios.post(`${window.location.protocol + '//' + window.location.host+props.path}/save`,formdata ,{   
                headers: { "Content-Type": "multipart/form-data" } 
            })
            .then(res => {
                
                toast.info(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });

                  setTimeout(() => {
                    props.props()
                  }, 1000);
            })
            .catch(function (error) {
                let message = error.message;
                if(error.response.data.message){
                    message = error.response.data.message
                }
                toast.error(`${message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
              })
            }
        } catch (e) { console.log(e); }
 
    }, [auth.token, request, author, content, description, file, title])
    function removeHandler() {
        setTitle(""); setDescription(""); setFile(""); ref.current.value = "";
    }
    return (
        <>      <ToastContainer
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
                <div className="m-3">
                    <div className="form-group col-lg-7">
                        <label className="mb-2" style={{
                            color: "#566885",
                            fontWeight: 700
                        }}>Загрузите изображение</label>
                        <input onChange={imghandleUpload} type="file" ref={ref} accept="image/png, image/jpeg"  className="form-control" placeholder="img"
                        />
                        {file && <ImageThumb image={file} />}
                    </div>
                    <div className="form-group mt-4 col-lg-7">
                        <Input type="text" placeholder="Введите название заголовока..." value={title} setValue={setTitle} />
                    </div>
                    <div className="form-group mt-4 col-lg-7">
                        <Input type="text" placeholder="введите краткий описание ..." value={description} setValue={setDescription} />
                    </div>
                    <div className="form-group mt-4 col-lg-7">
                        <input style={{"opacity":".2"}} type="disabled" placeholder="контент ..." value={content} disabled={"disabled"}  />
                    </div>
                    <div className="col-lg-7 mt-5">
                        <button className="btn btn-success" onClick={() => createHandler()} style={{ marginRight: "20px" }}>Создать</button>
                        <button className=" btn btn-danger" onClick={() => removeHandler()}>стереть</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsCreate