import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from './styles';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

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

	const handleTaskDeletion = async taskId => {
		const newTasks = await tasks.filter(task => task.id !== taskId);
		setTasks(newTasks);
		console.log(typeof newTasks, 'novasTasks');
	};

	return (
		<Router>
			<Container>
				<Header />
				<Route
					path='/'
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>{' '}
						</>
					)}
				/>

				<Route path='/:taskTitle' exact component={TaskDetails} />
			</Container>
		</Router>
	);
}

export default App;
