import React, {useState} from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import './App.css';


export default App
function App() {
const [feedback, setFeedback] = useState(FeedbackData)





  return (
    <>
      <Header/>
    <div className='container'>
      <FeedbackList
        feedback = {feedback}
      />  
      
    </div>
     
    </>
    
      
      
    


  )
}


