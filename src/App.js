import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './Components/AboutIconLink';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
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