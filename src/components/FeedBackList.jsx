import FeedBackItem from "./FeedBackItem"
import { AnimatePresence, motion } from "framer-motion"

const FeedBackList = ({feedbacks, deleteFeedBack}) => {
    
  return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedbacks.map((feedback, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedBackItem
							key={index}
							feedback={feedback}
							deleteFeedBack={deleteFeedBack}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default FeedBackList
