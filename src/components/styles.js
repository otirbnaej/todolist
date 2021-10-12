import styled from 'styled-components';

export const Title = styled.h1`
	color: #eee;
`;

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

export const Btn = styled.div`
	button {
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
		transition: all 0.3s ease;

		&:hover {
			background-color: #444;
			color: chartreuse;
		}
	}
`;

export const BtnSmall = styled(Btn)`
	button {
		width: 30%;
		margin-bottom: 10px;
	}
`;

export const Icons = styled.button`
	background-color: #444;
	margin-left: 6px;
	border: none;
	font-size: 20px;
	color: chartreuse;
	cursor: pointer;
`;

export const IconsConteiner = styled.div`
	width: 30%;
	display: flex;
	justify-content: flex-end;
`;

export const Details = styled.div`
	background: #444;
	margin: 15px 0;
	padding: 5px 20px;
	display: flex;
	flex-direction: column;
	color: #eee;
	border-radius: 5px;

	h2 {
		margin-bottom: 5px;
		color: chartreuse;
	}
`;
