import React, { useEffect, useState } from 'react'
import { folderService } from '../../services'
import { Container } from '../../styles/style'
import { useHistory } from 'react-router-dom'

const service = new folderService()

const Home: React.FC = () => {
    const [initialValue, setinitialValue] = useState(0)
    const history = useHistory();

    useEffect(() => {
        const token =  localStorage.getItem('tokenMoney');
        if(token == null) history.push('/login') 
        getFolder()
    }, [history, initialValue])

    const getFolder = async () => {
        service.getFolders().then(data => {
            // setinitialValue(data)
            console.log(data)
        })
    }
    return (
        <Container>
            <p>Ola mundo</p>
        </Container>
    )
}

export default Home