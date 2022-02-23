import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BingoPage from './pages/BingoPage'
import SharedChallengePage from './pages/SharedChallengePage'
import Layout from './components/Layout'

function App() {

	return (
		<Layout>
			<Routes>
				<Route path={"/"} element={<BingoPage />} />
				<Route path={"/1A2A"} element={<BingoPage />} />
				<Route path={"/3A4A"} element={<BingoPage />} />
				<Route path={"/shared-challenge"} element={<SharedChallengePage />} />
				<Route path={"/rules"} element={<BingoPage />} />
			</Routes>
		</Layout>
	
	)
}

export default App;
