import styled from 'styled-components';

export const TaskConteiner = styled.div`
	background-color: #444;
	margin: 8px 0;
	padding: 15px 20px;
	display: flex;
	border-radius: 5px;
	justify-content: space-between;
	color: #eee;
	align-items: center;
	cursor: pointer;
`;

export const AddTaskConteiner = styled.div`
	margin: 15px 0;
	width: 100%;
	display: flex;
`;

export const Input = styled.input`
	height: 40px;
	padding: 0 10px;
	border-radius: 5px;
	border: none;
	flex: 2;
	background-color: #444;
	color: #eee;
	font-size: 16px;
	margin-right: 10px;
`;

export const Btn = styled.button`
	background-color: chartreuse;
	height: 40px;
	padding: 0 10px;
	border-radius: 5px;
	width: 100%;
	font-size: 16px;
	color: #444;
	font-weight: bold;
	cursor: pointer;
	border: none;
	flex: 1;
`;
