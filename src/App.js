import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container } from './styles';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: '1',
			title: 'Estudar Programação',
			completed: false,
		},
		{
			id: '2',
			title: 'Ler Livros',
			completed: true,
		},
	]);

	const handleTaskClick = taskId => {
		const newTasks = tasks.map(task => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});

		setTasks(newTasks);
	};

	const handleTaskAddition = taskTitle => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		setTasks(newTasks);
	};

	return (
		<Container>
			<AddTask handleTaskAddition={handleTaskAddition} />
			<Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
		</Container>
	);
}

export default App;
