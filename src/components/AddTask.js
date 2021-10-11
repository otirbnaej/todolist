import React, { useState } from 'react';

import Button from './Button';
import { AddTaskConteiner, Input } from './styles';

function AddTask({ handleTaskAddition }) {
	const [inputData, setInputData] = useState('');

	const handleInputChange = e => {
		setInputData(e.target.value);
	};

	const handleAddTaskClick = () => {
		handleTaskAddition(inputData);
		setInputData('');
	};

	return (
		<AddTaskConteiner>
			<Input onChange={handleInputChange} value={inputData} type='text' />
			<Button onClick={handleAddTaskClick}>Adicionar Tarefa</Button>
		</AddTaskConteiner>
	);
}

export default AddTask;
