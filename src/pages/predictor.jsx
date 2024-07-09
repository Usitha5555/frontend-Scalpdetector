import React, { useState } from 'react';
import axios from 'axios';
import Nav2 from '../components/Nav.predictor'
import './predictor.css'; 


function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [explanation, setExplanation] = useState('');

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
            const response = await axios.post('http://localhost:3001/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data && response.data.predicted_class !== undefined) {
                const classNumber = response.data.predicted_class.toString();
                let className = '';
                let classExplanation = '';

                switch (classNumber) {
                    case '0':
                        className = 'Alopecia Areata';
                        classExplanation = 'A condition that causes hair to fall out in small patches.';
                        break;
                    case '1':
                        className = 'Contact Dermatitis';
                        classExplanation = 'A skin rash caused by contact with a certain substance.';
                        break;
                    case '2':
                        className = 'Folliculitis';
                        classExplanation = 'Inflammation of hair follicles, often due to infection.';
                        break;
                    case '3':
                        className = 'Head Lice';
                        classExplanation = 'Infestation of the scalp and hair by small insects called lice.';
                        break;
                    case '4':
                        className = 'Lichen Planus';
                        classExplanation = 'A condition that causes swelling and irritation in the skin, hair, nails, and mucous membranes.';
                        break;
                    case '5':
                        className = 'Male Pattern Baldness';
                        classExplanation = 'A common form of hair loss in men, usually resulting in a receding hairline and thinning hair on the crown.';
                        break;
                    case '6':
                        className = 'Psoriasis';
                        classExplanation = 'A skin disease marked by red, itchy, scaly patches.';
                        break;
                    case '7':
                        className = 'Seborrheic Dermatitis';
                        classExplanation = 'A common skin condition that causes scaly patches, red skin, and stubborn dandruff.';
                        break;
                    case '8':
                        className = 'Telogen Effluvium';
                        classExplanation = 'Temporary hair loss that usually happens after stress, a shock, or a traumatic event.';
                        break;
                    case '9':
                        className = 'Tinea Capitis';
                        classExplanation = 'A fungal infection of the scalp, also known as ringworm of the scalp.';
                        break;
                    default:
                        className = 'Unknown';
                        classExplanation = 'No explanation available.';
                }

                setPrediction(className);
                setExplanation(classExplanation);
            } else {
                console.error('Prediction result is undefined or null.');
                setPrediction('Prediction unavailable');
                setExplanation('');
            }
        } catch (error) {
            console.error('Error predicting:', error);
            setPrediction('Prediction error');
            setExplanation('');
        }
    };

    return (
        <div>
            <Nav2/>
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
                            {explanation && (
                                <div className="explanation">
                                    <h3>Explanation:</h3>
                                    <p>{explanation}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
