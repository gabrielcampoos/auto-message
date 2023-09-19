import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicTabs from '../../pages/Home/components/BasicTab';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BasicTabs />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
