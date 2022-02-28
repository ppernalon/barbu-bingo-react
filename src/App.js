import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BingoPage from './pages/BingoPage'
import SharedChallengePage from './pages/SharedChallengePage'
import Layout from './components/Layout'
import RulesPage from './pages/RulesPage'
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'
import ShareAppPage from './pages/ShareAppPage'

function App() {

	return (
		<Layout>
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/1A2A"} element={<BingoPage />} />
				<Route path={"/3A4A"} element={<BingoPage />} />
				<Route path={"/shared-challenge"} element={<SharedChallengePage />} />
				<Route path={"/rules"} element={<RulesPage />} />
				<Route path={"/qr-code"} element={<ShareAppPage />} />
				<Route path={"/j-espere-que-pilouf-va-trouver-cette-page"} element={<AdminPage />} />
			</Routes>
		</Layout>
	
	)
}

export default App;
