import React, { useState, useEffect } from 'react'
import { loginService } from '../../services'
import { Formik, Form } from 'formik';
import SnackBar from '../../components/snackbar';

import { useHistory } from 'react-router-dom';
// import { login } from '../../interfaces/login'

// Icones
import { Facebook } from '@material-ui/icons'


// Estilos da pagina
import { LoginForm, FormGroup, Input, Label, Span, Submit } from './style';

// Service api
const service = new loginService()

const Login: React.FC = () => {
    const [message, setMessage] = useState({ isOpen: false, message: "", time: 0 });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('tokenMoney')
        if(token != null){
            history.push('/')
        }
    })

    const login = async (values: any) => {
        service.login(values).then(data => {
            console.log(data)
            setMessage({ isOpen: true, message: data.message, time: 3000 })
            localStorage.setItem('tokenMoney', data.token)
            history.push('/')
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
                                <img src="https://i.ibb.co/f2yhCfs/logo-note.png" style={{ maxWidth: '80px' }} alt="logo-note" />
                            </Label>
                            <Label style={{ textAlign: 'center' }}>
                                <h3>Control Money</h3>
                            </Label>
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
                            <Label style={{display: 'flex', alignItems: 'center', backgroundColor: 'blue'}}>
                                <Facebook/>
                                <span style={{paddingLeft: '5px'}}>Login Witch Facebook</span>
                            </Label>
                        </Form>
                    )}
                </Formik>
            </FormGroup>
            <SnackBar config={message} />
        </LoginForm>
    )
}

export default Login