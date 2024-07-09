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
                        classExplanation = 'Alopecia Areata is an autoimmune disorder causing hair loss in small, round patches on the scalp and body. The immune system mistakenly attacks hair follicles, leading to sudden hair loss, itching, or tingling. This condition can affect people of all ages and genders and can be emotionally distressing. Causes include genetic predisposition, stress, illness, and association with other autoimmune diseases. Remedies involve topical treatments like corticosteroids and Minoxidil, corticosteroid injections, and lifestyle changes such as stress management, a healthy diet, and gentle hair care. Support groups and counseling can also help. Consulting a healthcare provider is essential for a tailored treatment plan.';
                        break;
                    case '1':
                        className = 'Contact Dermatitis';
                        classExplanation = 'Contact Dermatitis is a skin condition resulting from exposure to irritants or allergens. It causes red, itchy, and inflamed skin that may blister or crack. This condition can affect anyone and usually occurs when the skin comes into direct contact with substances like soaps, cosmetics, fragrances, jewelry, plants, or chemicals.Symptoms include redness, itching, swelling, and sometimes blistering or peeling. The condition is often caused by direct exposure to irritants or allergens such as chemicals, soaps, or certain plants.Treatment involves identifying and avoiding the offending substance, applying topical corticosteroids to reduce inflammation, and using moisturizers to soothe the skin. In more severe cases, oral medications may be prescribed. Preventative measures include wearing protective clothing and using hypoallergenic products. Consulting a healthcare provider can help manage and treat the condition effectively.';
                        break;
                    case '2':
                        className = 'Folliculitis';
                        classExplanation = 'Folliculitis is a common skin condition where hair follicles become inflamed, usually due to bacterial or fungal infection. It appears as red, itchy bumps, sometimes with pus. Causes include shaving, friction from clothing, or exposure to contaminated water. Treatment involves keeping the area clean, applying warm compresses, using topical antibiotics or antifungals, and avoiding irritants. In severe cases, oral medications may be necessary. Consult a healthcare provider for proper diagnosis and treatment.';
                        break;
                    case '3':
                        className = 'Head Lice';
                        classExplanation = 'Head lice are tiny insects that infest the scalp, feeding on human blood. They cause itching and discomfort and are most common in children. Lice spread through direct head-to-head contact or sharing personal items like hats and brushes. Treatment involves using over-the-counter or prescription shampoos and lotions designed to kill lice, followed by combing out the nits (eggs) with a fine-toothed comb. Washing clothing and bedding in hot water and avoiding shared items can help prevent reinfestation. Consult a healthcare provider for effective treatment options.';
                        break;
                    case '4':
                        className = 'Lichen Planus';
                        classExplanation = 'Lichen Planus is an inflammatory condition affecting the skin and mucous membranes, characterized by purplish, itchy, flat-topped bumps. It can also cause painful sores in the mouth or other areas. The exact cause is unknown, but it may be related to an autoimmune response. Treatment focuses on reducing symptoms and may include topical corticosteroids, antihistamines, and oral medications. Good oral hygiene can help if the mouth is affected. Consult a healthcare provider for diagnosis and treatment options.';
                        break;
                    case '5':
                        className = 'Male Pattern Baldness';
                        classExplanation = 'Male Pattern Baldness, also known as androgenetic alopecia, is a common condition characterized by gradual hair thinning and loss, typically starting at the temples and crown of the head. It is influenced by genetics and hormones, specifically dihydrotestosterone (DHT).Symptoms include hair thinning and a receding hairline, leading to eventual baldness. While not harmful to health, it can cause emotional distress. Treatments include medications like minoxidil (Rogaine) and finasteride (Propecia) to slow hair loss and promote regrowth. Hair transplant surgery is another option for restoring hair in affected areas. Consulting a healthcare provider or dermatologist can help determine the best treatment approach.';
                        break;
                    case '6':
                        className = 'Psoriasis';
                        classExplanation = 'Psoriasis is a chronic autoimmune condition causing red, scaly patches on the skin. It results from rapid skin cell growth and can be itchy and painful. Triggers include stress, infections, and medications. Treatments aim to reduce inflammation and manage symptoms with topical treatments, phototherapy, medications, and lifestyle adjustments. Consulting a healthcare provider is essential for effective management.';
                        break;
                    case '7':
                        className = 'Seborrheic Dermatitis';
                        classExplanation = 'Seborrheic Dermatitis causes red, itchy, flaky skin, often on the scalp, face, or chest. Its linked to genetics, hormones, yeast, and stress. Treatment includes medicated shampoos and creams to reduce inflammation and scale buildup. Regular cleansing and moisturizing help manage symptoms. Consulting a healthcare provider ensures proper care.';
                        break;
                    case '8':
                        className = 'Telogen Effluvium';
                        classExplanation = 'Telogen Effluvium is a scalp condition characterized by sudden and excessive shedding of hair, typically caused by significant stress, illness, hormonal changes, or medications. It occurs when a large number of hair follicles enter the telogen (resting) phase prematurely, leading to noticeable hair thinning or loss. This condition is usually temporary, and hair growth often resumes once the underlying cause is addressed. Consulting a healthcare provider can help identify and manage triggers for effective treatment.';
                        break;
                    case '9':
                        className = 'Tinea Capitis';
                        classExplanation = 'Tinea Capitis, or scalp ringworm, is a fungal infection causing circular patches of hair loss, scaling, and itching on the scalp. Its common in children and spreads through contact with infected people, animals, or objects. Treatment includes antifungal medications like oral tablets and medicated shampoos. Good hygiene helps prevent spread. Consulting a healthcare provider ensures proper treatment.';
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
