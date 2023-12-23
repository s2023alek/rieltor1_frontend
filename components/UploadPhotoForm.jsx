"use client"

import {useState} from 'react';

export default function UploadPhotoForm() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [resultMsg, setResultMsg] = useState("ready")
    const [resultImg, setResultImg] = useState("")

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
    };

    const handleSubmit = (event) => {
        setResultImg("")
        event.preventDefault()

        const formData = new FormData();
        formData.append('file', selectedFile)

        fetch('/api/uploadPhoto', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                switch (data.status) {
                    case 201:
                        setResultMsg(
                            <div>success: <a href={data.filename}> {data.filename} </a></div>
                        )
                        setResultImg(data.filename)
                        break
                    case 500:
                        setResultMsg("internal server error")
                        break
                }
            })
            .catch((error) => {
                console.error(error)
                setResultMsg("client side error:" + error)
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{width: "300px"}}>
                <input type="file" onChange={handleFileChange} style={{paddingBottom:"20px"}}/>
                <button type="submit">Загрузить</button>
            </form>
            <span id="result">Status:{resultMsg}</span>
            <img src={resultImg}/>
        </div>
    );
};
