import React from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import Login from '../pages/Login';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RouterRoutes>
      		<Route path="/login" element={<Login />} />
		</RouterRoutes>
	</BrowserRouter>
);

export default Routes;
