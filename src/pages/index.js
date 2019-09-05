import React from "react"
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import ModelSection from "../components/ModelSection/ModelSection"
import ImprovingSection from "../components/ImprovingSection/ImprovingSection"
import SupplySection from "../components/SupplySection/SupplySection";
import Footer from "../components/Footer/Footer";
import Seo from "../components/Seo/Seo"



const App =  () => {
 return (
 		<Layout>
 			<Seo />
 			<Header />
 			<ModelSection />
 			<ImprovingSection />
 			<SupplySection />
 			<Footer/>
 		</Layout>
 	)

};

export default App;
