import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input/Input";
import NewsCreate  from "../components/NewsCreate";

const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};
export const AdminPanel = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = React.useState("");
    const ref = useRef();
    function createHandler() {
        console.log(title);
        console.log(description);
    }
    function imghandleUpload(event) {
        setFile(event.target.files[0]);
    }
    function removeHandler() {
        setTitle(""); setDescription(""); setFile(""); ref.current.value = "";
    }
    return (
        <>
            <div className="container">
       
                <NewsCreate />
                <div className="row">
                    <div className="col-lg-4 mt-5" >

                        <div className="card card-body" >
                            <Link to={'/test/level'} className=" englishCaerd" style={{ "borderRadius": "40px" }}>
                                <div className="cont">
                                    <div className="node widget-image widget css9 css126">
                                        <div className="bgnormal text-center">
                                            <img className="englishImg mt-3" style={{ "maxWidth": "250px" }} alt="" src='https://www.study.ru/uploads/server/rS22pEaa0EpHMKAA.jpg' />
                                        </div>
                                    </div><div className="node widget-text cr-text widget css127">
                                        <h2 className="textable css128">тест на определение уровня английского</h2>
                                    </div>
                                    <div className="node widget-text cr-text widget css129">
                                        <p className="textable css130">здесь будут общие вопросы для определения уровня английского языка.</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="d-flex justify-content-end m-2">
                                <button className=" btn btn-danger" onClick={() => console.log("ergrt")}>стереть</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}