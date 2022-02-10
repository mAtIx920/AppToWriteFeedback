import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './Components/AboutIconLink';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
       
    }
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback}/>
                                <FeedbackStats feedback={feedback}/>
                                <FeedbackList feedback={feedback}
                                handleDelete={deleteFeedback} />
                            </>
                        }>       
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    )
}

export default App