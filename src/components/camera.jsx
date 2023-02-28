import { useState, useEffect } from "react";
import axios from "axios";
import { Result } from "./result";

const API_URL_1 = "http://localhost:3003/api/baseurl";
const API_URL_2 = "http://localhost:3003/api/postphoto1";
const API_KEY = "ZvAyE8j0FUQAc33imrqBLNxX2E8jriXnjQKVVvDge5ZACAGGojtnJjCDFZvh";

export function Camera() {
  const [url, setUrl] = useState("");
  const [outputImage, setOutputImage] = useState("");
  const [finalImage, setFinalImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [text,setText]=useState("")

  useEffect(() => {
    console.log("update");
  }, [url]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageUrl = reader.result;
        // console.log(imageUrl)
        setUrl(imageUrl);
        data(imageUrl);
        // Do something with the imageUrl, such as set it to state
      };
    } catch (error) {
      console.log(error);
      alert("file size exceeded");
    }
  };

  console.log(url);

  const data = async (imgUrl) => {
    const formDataBody = {
      key: API_KEY,
      image: imgUrl,
      crop: "false",
    };
    const response = await axios.post(API_URL_1, formDataBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setOutputImage(response.data.link);
    setText(response.data.status)
    console.log(response.data.link);
  };

  const uploadPic = async () => {
    handleImage();
    setLoading(true);
    setNextClicked(true)
  };

  const handleImage = async () => {
    // console.log(URL.createObjectURL(inputImage));

    const formDataBody1 = {
      key: API_KEY,
      init_image: outputImage,
      width: "512",
      height: "512",
      num_inference_steps: "30",
      safety_checker: "no",
      guidance_scale: 7.5,
      strength: 0.7,
      seed: null,
      webhook: null,
      track_id: null,
      samples: "1",
      enhance_prompt: "yes",
    };
    try {
      const response = await axios.post(API_URL_2, formDataBody1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.data.output.length>0 && response.data.status ==="success"){
        setFinalImage(response.data.output[0]);
      }else
      {
        alert(response.data.status);
      }
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      alert("error")
      console.error(error);
    }
  };
  return (
    <>
    {!nextClicked && 
    <>
    <div className="page-top-section flex-1">
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-5 mx-auto">
          
          {url &&(
            <img
              src={url}
              alt="pic"
              style={{ height: "400px", width: "400px" }}
            />
          )}
        </div>
        {/* <button className="btn-camera d-block mb-4 mx-auto border-0"></button> */}
      </div>
      <div className="camera-page-btns">
        <label className="custom-file-upload mb-4 fw-bold">
        
          <input type="file" onChange={handleFileUpload} />
          {text==="success"?"Change photo":"Upload a photo"}
        </label>
        <button
          className="btn btn-default text-uppercase d-block m-auto"
          onClick={uploadPic}
        >
          Next
        </button>
      </div>
      </>
      }
      
      
       {nextClicked && <Result fImage={finalImage} isLoading={loading} />}
    </>
  );
}
