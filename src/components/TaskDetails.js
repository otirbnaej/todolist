import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import { Details, BtnSmall } from './styles';

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};
	return (
		<>
			<BtnSmall>
				<Button onClick={handleBackButtonClick}>Voltar</Button>
			</BtnSmall>
			<Details>
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum id
					cupiditate ex animi incidunt ab ea totam nesciunt, tempora fugit quis
					maiores doloremque debitis quos enim sunt ipsa nihil natus?
				</p>
			</Details>
		</>
	);
};

export default TaskDetails;
