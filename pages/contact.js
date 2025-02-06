import Navbar from './/api/NavBar.js';
import ContactForm from './/api/Contact.js'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}