import React, { useState, useEffect } from 'react'
import { loginService } from '../../services'
import { Formik, Form } from 'formik';
import SnackBar from '../../components/snackbar';

import { useHistory } from 'react-router-dom';

// Autenticacoes
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

// Util
import TokenUtil from '../../utils/usePersistedToken';

// Estilo global
import { FormGroup, Input, Label, Span, Submit } from '../../styles/style'

// Estilos da pagina
import { LoginForm } from './style';
import userUtil from '../../utils/userUtil';

// Service api
const service = new loginService()

const Login: React.FC = () => {
    const [message, setMessage] = useState({ isOpen: false, message: "", time: 0 });
    const history = useHistory();

    useEffect(() => {
        console.log('chamou')
        TokenUtil.getToken().then(token => {
            console.log(token)
            if (token != null) {
                setTimeout(() => { history.push('/') }, 3100)
            }
        })

    })

    const responseFacebook = async (response: any) => {
        await userUtil.getName(response.name).then(name => {
            const user = { firstname: name.firstname, lastname: name.lastname, email: response.email, password: response.userID }
            service.loginFacebook(user).then(data => {
                console.log(data)
                setMessage({ isOpen: true, message: data.message, time: 3000 })
                TokenUtil.saveToken(data.token).then(token => {
                    history.push('/')
                })
            }).catch(e => {
                console.log(e)
            })
        })
    }

    const responseGoogle = (response: any) => {
        console.log(response);
    }

    const login = (values: any) => {
        service.login(values).then(data => {
            localStorage.setItem('tokenMoney', data.token)
            setMessage({ isOpen: true, message: data.message, time: 3000 })
        }).catch(e => {
            console.log(e)
            setMessage({ isOpen: true, message: e.message, time: 3000 })
        })
    }

    return (
        <LoginForm>
            <FormGroup>
                <Formik initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { resetForm }) => {
                        login(values)
                        resetForm({})
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <Label style={{ textAlign: 'center' }}>
                                <img src="https://i.ibb.co/2NkRfQF/logo.png" style={{ maxWidth: '160px' }} alt="logo-note" />
                            </Label>
                            <div style={{ textAlign: 'center' }}>
                                <Label>
                                    <Input name="email"
                                        value={values.email}
                                        placeholder=" "
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Span>Login</Span>
                                </Label>
                                <Label>
                                    <Input name="password"
                                        type="password"
                                        placeholder=" "
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Span>Senha</Span>
                                </Label>
                                <Label>
                                    <Submit className="submit" type="submit">Entrar</Submit>
                                </Label>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Label style={{ display: 'flex', alignItems: "center" }}>
                                    <FacebookLogin
                                        appId="830065177737971" //APP ID NOT CREATED YET
                                        fields="name,email,picture"
                                        buttonStyle={{ fontSize: '10pt', padding: '10px 5px', textTransform: 'capitalize' }}
                                        textButton="Login With Facebook"
                                        callback={responseFacebook}
                                    />
                                </Label>
                                <Label>
                                    <GoogleLogin
                                        clientId="889394518861-eucagqa4qqd3p0koq3s5cvp843eioiiv.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                        buttonText="Login Witch Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        style={{ fontSize: '10pt', padding: '10px 5px' }}
                                    />
                                </Label>
                            </div>
                        </Form>
                    )}
                </Formik>
            </FormGroup>
            <SnackBar config={message} />
        </LoginForm>
    )
}

export default Login