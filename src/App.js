import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList"
import FeedBackStats from "./components/FeedBackStats"
import FeedBackForm from "./components/FeedBackForm"
import AboutLink from "./components/AboutLink"

import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  const [feedbacks, setFeedbacks] = useState(FeedbackData)
  
  const ondeleteFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback')){
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
  }

  const addFeedBack = (newFeedBack) =>{
    setFeedbacks([newFeedBack, ...feedbacks])
  }

  return (
		<BrowserRouter>
			<Header />
			<Routes>
				<div className="container">
					<FeedBackForm onAddFeedBack={addFeedBack} />
					<FeedBackStats feedbacks={feedbacks} />
					<FeedBackList
						feedbacks={feedbacks}
						deleteFeedBack={ondeleteFeedBack}
					/>
				</div>
				<AboutLink />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
