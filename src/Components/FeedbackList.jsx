import React from 'react';
import FeedbackItem from './Feedbacktem';
import PropTypes from 'prop-types';


function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback Yet</p>
    }

  return <div className='feedback-list'>
      {feedback.map((item) => (
          <FeedbackItem item={item} key={item.id}
          handleDelete={handleDelete} />
      ))}
  </div>
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
