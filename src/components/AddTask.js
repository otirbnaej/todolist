import React, { useState } from 'react';

import Button from './Button';
import { AddTaskConteiner, Input, Btn } from './styles';

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

			<Btn>
				<Button onClick={handleAddTaskClick}>Adicionar Tarefa</Button>
			</Btn>
		</AddTaskConteiner>
	);
}

export default AddTask;
