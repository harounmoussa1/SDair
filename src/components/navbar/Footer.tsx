import { Box, Divider } from "@chakra-ui/react"
import { Link } from "react-router"

const Footer = () => {
  return (
    <Box bg="#95A2B2" w="100%" h="301px" className="grid grid-cols-3 mt-50">
            <div className="flex flex-col items-center justify-center h-[301px] px-4 gap-5">
            <div className="flex items-center gap-3">
                <img className="w-16 h-16" src="/src/assets/sdaire_logo_rm.png" alt="Logo" />
                <div className="text-start">
                <p className="font-bold">S.D-AIR</p>
                <p className="text-sm">LA DIFFUSION DE L'AIR</p>
                </div>
            </div>
            <p className="text-base">Copyright @2025 all rights reserved</p>
            </div>
        

        <div className="flex flex-col-2 items-center justify-center h-[301px] px-4 gap-5 mr-160">
            <Divider orientation='vertical' h="201px" />
            <div className="flex items-center ">
                <div className="grid grid-col-1 text-center gap-5">
                <Link to="/"> Accueil</Link>
                <Link to="" className="text-nowrap"> Nos Produits</Link>
                <Link to="/apropos" > A Propos</Link>
                <Link to="/contact"> Contact</Link>

                </div>
            </div>
        </div>


        <div className="flex flex-col items-center justify-center h-[301px] px-4 gap-10">
            <div className="flex items-center gap-3">
                <div className="text-center">
                <p className="font-bold">Contactez Nous</p>
                <p className="text-sm">Par téléphone : +216 xx xxx xxx</p>
                <p className="text-sm">Par émail : projects@jeeniso.com</p>
                </div>
            </div>
            <p className="text-base">Copyright @2025 all rights reserved</p>
            </div>

        
    </Box>
)}

export default Footer