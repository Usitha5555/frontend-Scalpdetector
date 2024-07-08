import React, { useState } from 'react';
import axios from 'axios';
import './predictor.css'; 


function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [prediction, setPrediction] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!selectedFile) {
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data && response.data.predicted_class !== undefined) {
                const classNumber = response.data.predicted_class.toString();
                let className = '';

                switch (classNumber) {
                    case '0':
                        className = 'Alopecia Areata';
                        break;
                    case '1':
                        className = 'Contact Dermatitis';
                        break;
                    case '2':
                        className = 'Folliculitis';
                        break;
                    case '3':
                        className = 'Head Lice';
                        break;
                    case '4':
                        className = 'Lichen Planus';
                        break;
                    case '5':
                        className = 'Male Pattern Baldness';
                        break;
                    case '6':
                        className = 'Psoriasis';
                        break;
                    case '7':
                        className = 'Seborrheic Dermatitis';
                        break;
                    case '8':
                        className = 'Telogen Effluvium';
                        break;
                    case '9':
                        className = 'Tinea Capitis';
                        break;
                    default:
                        className = 'Unknown';
                }

                setPrediction(className);
            } else {
                console.error('Prediction result is undefined or null.');
                setPrediction('Prediction unavailable');
            }
        } catch (error) {
            console.error('Error predicting:', error);
            setPrediction('Prediction error');
        }
    };

    return (
        <div className="App">
            <h1 className="app-title">Image Classifier</h1>
            <div className="image-predict-container">
                {imagePreview && (
                    <div className="image-preview">
                        <img src={imagePreview} alt="Selected" className="preview-image" />
                    </div>
                )}
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <input type="file" onChange={handleFileChange} />
                        <button type="submit">Upload</button>
                    </form>
                    {prediction !== '' && (
                        <div className="prediction-result">
                            <h2>Predicted Class:</h2>
                            <p>{prediction}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;