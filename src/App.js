import React, {useState} from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Card from './components/shared/Card';
import FeedbackForm from './components/FeedbackForm';
import './App.css';


export default App
function App() {
const [feedback, setFeedback] = useState(FeedbackData)


const deleteFeedback  = (id) => {
  if(window.confirm('Are you sure you want to remove this?')) {

    setFeedback(feedback.filter((item) => item.id != id))
  }

}


  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackForm/>
        <FeedbackStats feedback = {feedback}/>
        <FeedbackList
          feedback = {feedback}
          handleDelete = {deleteFeedback}
        />  

          
        
      </div>
     
    </>
    
      
      
    


  )
}


