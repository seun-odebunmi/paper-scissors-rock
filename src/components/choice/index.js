import React from 'react'

const choice = ({ title, onClick, selectedChoice }) => {
  return (
    <div
      className={`option${selectedChoice === title ? ' red transform' : ''}`}
      onClick={onClick}
    >
      <div className="icon">
        <i className={`far fa-hand-${title}`} />
      </div>
      <p className="ttc">{title}</p>
    </div>
  )
}

export default choice
