import Card from "./Card"
import { useState } from "react"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"

const FeedBackForm = ({ onAddFeedBack }) => {
	const [text, setText] = useState("")
	const [message, setMessage] = useState("")
	const [btnDisable, setBtnDisabled] = useState(true)
	const [rating, setRating] = useState(10)

	const handleChange = (e) => {
		if (text === "") {
			setMessage(null)
			setBtnDisabled(true)
		} else if (text !== "" && text.trim().length < 10) {
			setMessage("Review must be at least 10 character")
			setBtnDisabled(true)
		} else {
			setBtnDisabled(false)
			setMessage(null)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedBack = { text, rating }
			onAddFeedBack(newFeedBack)
            setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h4>How would you rate your service with us?</h4>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						type="text"
						placeholder="Enter your review"
						onChange={handleChange}
						value={text}
					/>
					<Button type="submit" isDisabled={btnDisable} version="secondary">
						send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	)
}

export default FeedBackForm
