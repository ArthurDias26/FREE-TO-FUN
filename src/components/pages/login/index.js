import {useContext, useEffect, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

import {HiEye, HiEyeOff} from 'react-icons/hi'

import { LoginContainer, LoginForm, FormContainer, FormImage } from './style'

import {AuthContext} from '../../../contexts/AuthUserContext'

import RegisterImage from '../../../assets/image/register.jpg'

export default function Index() {

  const {isLogged, Login} = useContext(AuthContext)

  const [passwordType, setPasswordType] = useState('password')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleSubmit({name, email}) {
    if(isLogged) {
      return false
    }
    Login(name, email)

  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password : yup.string().required().min(8)
  })
  return (
    <LoginContainer>
      <LoginForm>

        <FormImage url={RegisterImage}/>

        <FormContainer>

          <h2>Create My Account!</h2>

          <Formik
          initialValues={{
            name: '',
            email: '',
            password: ''
          }}

          onSubmit={handleSubmit}

          validationSchema={schema}
          >
            {({isValid}) =>(
              <Form>

                <span htmlFor='name'>Username:</span>
                <Field type='text' id='name' name='name' autoComplete='off'/>
                <div className='error_message'><ErrorMessage name='name'/></div>

                <span htmlFor='email'>E-mail Address:</span>
                <Field type='email' id='email' name='email' autoComplete='off'/>
                <div className='error_message'><ErrorMessage name='email'/></div>

                <span htmlFor='password'>Password:</span>
                <span className='password_container'>
                  <Field type={passwordType} id='password' name='password'/>
                   {passwordType === 'password' ? <HiEyeOff onClick={() => passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')}/> : <HiEye onClick={() => passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')}/>}
                </span>
                <div className='error_message'><ErrorMessage name='password'/></div>

                <button disabled={!isValid} className={isValid  ? 'valid' : ''} type='submit'>Create Account</button>

              </Form>
            )}
          </Formik>

        </FormContainer>

      </LoginForm>
    </LoginContainer>
  )
}
