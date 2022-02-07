import React from 'react';
import FeedbackItem from './Feedbacktem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence} from 'framer-motion'


function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback Yet</p>
    }

  return <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div 
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
          <FeedbackItem item={item} key={item.id}
          handleDelete={handleDelete} />
          </motion.div>
      ))}
      </AnimatePresence>
  </div>

    // return <div className='feedback-list'>
    // {feedback.map((item) => (
    //     <FeedbackItem item={item} key={item.id}
    //     handleDelete={handleDelete} />
    // ))}
    // </div>
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
