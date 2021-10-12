import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import { TaskConteiner, Icons, IconsConteiner } from './styles';

function Task({ task, handleTaskClick, handleTaskDeletion }) {
	const history = useHistory();

	const handleTaskDetailsClick = () => {
		history.push(`/${task.title}`);
	};

	return (
		<TaskConteiner
			style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
			onClick={() => handleTaskClick(task.id)}
		>
			{task.title}
			<IconsConteiner>
				<Icons onClick={handleTaskDetailsClick}>
					<CgInfo />
				</Icons>
				<Icons onClick={() => handleTaskDeletion(task.id)}>
					<CgClose />
				</Icons>
			</IconsConteiner>
		</TaskConteiner>
	);
}

export default Task;
