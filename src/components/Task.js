import React from 'react';

import { TaskConteiner } from './styles';

function Task({ task, handleTaskClick }) {
	return (
		<TaskConteiner
			style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
			onClick={() => handleTaskClick(task.id)}
		>
			{task.title}
		</TaskConteiner>
	);
}

export default Task;
