import { Analytics } from '@vercel/analytics/react';
import Home from "../Home.jsx";
import SuccessProof from "../SuccessProof.jsx";
import ContactForm from "../ContactForm.jsx";

export default function App() {
  return (
    <>
      <Home />
      <SuccessProof />
      <ContactForm />
      <Analytics />
    </>
  );
}
