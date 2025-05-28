import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import { AboutUsPage } from "./pages/AboutUsPage"
import { StaffPage } from "./pages/StaffPage"
import { ProductsPage } from "./pages/ProductsPage"
import { BeneficePage } from "./pages/BeneficePage"
import { ContactPage } from "./pages/ContactPage"
import { NavBarComponent } from "./Components/navigation/NavBarComponent"
import { HeatherComponent } from "./Components/heather/HeatherComponent"
import { FooterComponent } from "./Components/footer/FooterComponent"
import { WhatsappComponent } from "./Components/whatsapp/WhatsappComponent"
import { WorkWithUs } from "./pages/WorkWithUs"

function MediNextApp() {
	return (
		<>
			<HeatherComponent />
			<NavBarComponent />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path='/about' element={<AboutUsPage />} />
				<Route path="/staff" element={<StaffPage />}  />
				<Route path="/product" element={<ProductsPage />} />
				<Route path="/benefice" element={<BeneficePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/work" element={<WorkWithUs />} />
			</Routes >
			<WhatsappComponent />
			<FooterComponent />
		</>
	)
}

export default MediNextApp
