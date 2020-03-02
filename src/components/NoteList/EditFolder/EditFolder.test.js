import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditFolder from './EditFolder';

const folder = {
  "id": 1,
  "name": "Test Folder"
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<EditFolder
  			{...folder}
  			key={folder.id}
  		/>
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});
