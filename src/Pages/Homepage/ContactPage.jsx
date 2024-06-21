import React from "react";
import "./ContactPage.css"

// this page should contain: mailchimp form to send a message to company,
// a map

// It's not a footer- footer should be another component with insta, fb, mail maybe icon and cvr number.


const ContactPage = () => {

  return (
    <form action="https://https://us10.list-manage.com/contact-form?u=441d1e1af24203e9cb72e5d04&form_id=782a31a3e33ef611effb8bc86e4cd44b" method="POST" noValidate>
         <input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/>
         <input type="hidden" name="id" value="8281a64779"/>
      
    </form>
  );
};

export default ContactPage;
