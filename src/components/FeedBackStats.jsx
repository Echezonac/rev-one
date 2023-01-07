import PropTypes from 'prop-types'

const FeedBackStats = ({feedbacks}) => {

  let avg = feedbacks.reduce((acc, cur)=>{
    return acc + cur.rating
  },0) / feedbacks.length

  avg = avg.toFixed(1).replace(/[.,]0$/, ' ')

  return (
		<div className="feedback-stats">
			<h4>
				{feedbacks.length} {feedbacks.length > 1 ? "Reviews" : "Review"}
			</h4>
			<h4>Average Rating : {isNaN(avg) ? 0 : avg}</h4>
		</div>
	)
}

FeedBackStats.propTypes = {
    feedbacks:PropTypes.array.isRequired
}

export default FeedBackStats
