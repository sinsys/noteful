import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SidebarNav from './SidebarNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<SidebarNav />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});