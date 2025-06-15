import Header from "../../components/header/Header";
import HeroImageBackground from "../../components/heroimagebackground/HeroImageBackground";
import HeroBullets from "../../components/herobullets/HeroBullets";
import FooterSocial from "../../components/footersocial/FooterSocial";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroImageBackground />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <HeroBullets />
            </motion.div>
            <FooterSocial />
        </div>
    )
}

export default Home;