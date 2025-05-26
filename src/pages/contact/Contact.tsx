import Header from "../../components/header/Header";
import ContactUs from "../../components/contact-form/ContactUs";
import FooterSocial from "../../components/footersocial/FooterSocial";

import classes from './Contact.module.css';

const Contact = () => {
    return (
        <div className={classes.page}>
            <Header />
            <ContactUs />
            <FooterSocial />
        </div>
    )
}

export default Contact;
