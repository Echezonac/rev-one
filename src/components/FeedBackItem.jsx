import Card from "./Card"
import { FaTimes} from 'react-icons/fa'



const FeedBackItem = ({feedback, deleteFeedBack}) => {

  return (
    <Card>
        <div className="num-display">{feedback.rating}</div>
        <button className="close" onClick={()=>deleteFeedBack(feedback.id)} >
            <FaTimes color="purple" />
        </button>
        <div className="text-display">
           {feedback.text}
        </div>
    </Card>
  )
}

export default FeedBackItem