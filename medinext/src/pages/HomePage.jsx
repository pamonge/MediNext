import React from 'react'
import { CarouselComponent } from '../Components/carousel/CarouselComponent'
import { CardContainerComponent } from '../Components/cards/CardContainerComponent'
import { AboutUsComponent } from '../Components/about/AboutUsComponent'
import { BeneficeComponent } from '../Components/benefice/BeneficeComponent'
import { StaffComponent } from '../Components/staff/StaffComponent'
import { ProductComponent } from '../Components/product/ProductComponent'
import { TitleComponent } from '../Components/TitleComponent'

const HomePage = () => {
	return (
		<div>
			<CarouselComponent />
			<CardContainerComponent />
			<TitleComponent value='Acerca de Nosotros' />
			<AboutUsComponent />
			<TitleComponent value='Nuestro Staff' />
			<StaffComponent />
			<TitleComponent value='Nuestros Planes' />
			<ProductComponent />
			<TitleComponent value='Tus Beneficios con nosotros' />
			<BeneficeComponent />
		</div>
	)
}

export default HomePage