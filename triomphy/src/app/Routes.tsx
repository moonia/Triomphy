import React from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import { Box, Image, Flex, Text, Stack, Input } from '@chakra-ui/react'

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RouterRoutes>
      		<Route path="/login" element={<Login />} />
		</RouterRoutes>
	</BrowserRouter>
);

export default Routes;
