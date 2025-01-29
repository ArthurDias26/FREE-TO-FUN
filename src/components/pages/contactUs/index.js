import React from 'react'
import { ContactContainer, ContactForm, ContactNotes } from './style'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiMapPin2Fill} from 'react-icons/ri'

export default function index() {

    function handleSubmit() {
        alert('sucess')
    }

    const schema = yup.object().shape({
        name: yup.string()
        .required()
        .min(3)
        .max(35),

        email: yup.string()
        .email()
        .required(),

        message: yup.string()
        .required()
        .min(15)
    })

  return (
    <ContactContainer>
        <div className='flex_container'>

            <h1>Contact Us</h1>

            <ContactForm>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }}

                    onSubmit={handleSubmit}
                    validationSchema={schema}
                >
                    {({isValid}) => (

                    <Form>
                        <span htmlFor='name'>Your Name</span>
                        <Field type='text' id='name' name='name'/>
                        <div className='error_message'><ErrorMessage name='name'/></div>

                        <span htmlFor='email'>Your Email</span>
                        <Field type='text' id='email' name='email'/>
                        <div className='error_message'><ErrorMessage name='email'/></div>

                        <span htmlFor='message'>Your Message</span>
                        <Field type='text' id='message' name='message'/>
                        <div className='error_message'><ErrorMessage name='message'/></div>

                        <button type='submit' disabled={!isValid} className={isValid ? 'valid' : ''}>Submit</button>
                    </Form>

                    )}
                </Formik>
            </ContactForm>

            <ContactNotes>

            <h3>Shop Info</h3>

                <ul>
                    <li><RiMapPin2Fill/> 135 willow st yonkers ny 10701-4360 USA</li>

                    <li><MdEmail/> Email: contact@freetofun.com</li>

                    <li><FaPhoneAlt/> Phone: 0123456789</li>
                </ul>

                <h3>Note</h3>

                <p>Please note that we cannot promise to respond to every email we receive, but we definitely read everything, even if it takes some time.</p>

            </ContactNotes>
        </div>
    </ContactContainer>
  )
}
