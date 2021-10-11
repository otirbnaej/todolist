import React from 'react';

import { Btn } from './styles';

function Button({ children, onClick }) {
	return <Btn onClick={onClick}>{children}</Btn>;
}

export default Button;
