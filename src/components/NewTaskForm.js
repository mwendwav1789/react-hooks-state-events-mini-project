import React from "react";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState('Work');

  const handleTextChange = (event) => setTaskText(event.target.value);
  const handleCategoryChange = (event) => setTaskCategory(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuid(),
      text: taskText,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask);
    setTaskText(''); // Clear the input
    setTaskCategory('Work'); // Reset to default category
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={taskText}
        onChange={handleTextChange}
      />
      <select value={taskCategory} onChange={handleCategoryChange}>
        {categories
          .filter(category => category !== "All")
          .map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
