import React from 'react';
import { render } from 'react-dom';
import { createClient, Button } from 'package-dom';

const client = createClient();
const onClick = () => client.print();

render(<Button onClick={onClick} />, document.getElementById('root'));
