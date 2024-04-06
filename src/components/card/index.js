import React from 'react';

const Card = ({ title, description, assignee, creator, dueDate, size, priority }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Assignee: {assignee}</p>
      <p>Creator: {creator}</p>
      <p>Due Date: {dueDate}</p>
      <p>Size: {size}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};

export default Card;