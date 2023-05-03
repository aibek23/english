import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import { useHttp } from '../hooks/http.hook'
import { Context } from '../context/Context';
import Input from "./input/Input";
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};
const NewsCreate = () => {
    const { request } = useHttp();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState("");
    const [content, setContent] = useState("")
    const auth = useContext(Context);
    const datas = JSON.parse(localStorage.getItem('userData'));
    const author = datas.username
    const ref = useRef();
    function imghandleUpload(event) {
        setFile(event.target.files[0]);
    }
    const createHandler = useCallback(async () => {
        try {
            // title && description && content && author && 
            if (file) {


                const formData = new FormData();
                // formData.append('image', file);

                // Add other fields to the form data
                formData.append('image', "edcw");
                console.log(formData);
                // formData.append('description', description);
                // formData.append('content', content);
                // formData.append('author', author);
                const data = await request('/api/news/save', 'POST', formData , {
                    Authorization: `Bearer ${auth.token}`
                });
                // const data = await request('/api/news/save', 'POST', {
                //     image: file,
                //     title: title,
                //     description: description,
                //     content: content,
                //     author: author
                // }, {
                //     'Content-Type': 'application/json',
                //     Authorization: `Bearer ${auth.token}`
                // });
                console.log(data);
            } else {
                console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;");
                console.error('One or more variables are undefined.');
                return;
            }



        } catch (e) { console.log(e); }
    }, [auth.token, request, author, content, description, file, title])
    function removeHandler() {
        setTitle(""); setDescription(""); setFile(""); ref.current.value = "";
    }
    return (
        <>
            <div className="container">
                <div className="m-3">
                    <div className="form-group col-lg-7">
                        <label className="mb-2" style={{
                            color: "#566885",
                            fontWeight: 700
                        }}>Загрузите изображение</label>
                        <input onChange={imghandleUpload} type="file" ref={ref} accept="image/png, image/jpeg" className="form-control" placeholder="img"
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
                        <Input type="text" placeholder="контент ..." value={content} setValue={setContent} />
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

// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }