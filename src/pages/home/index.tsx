import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Components
import Folders from '../../components/folders'
import AddFolder from '../../components/add-folder'
// Estilos
import { ContainerFolder } from './style'
// Interfaces
import { folder } from '../../interfaces/folder'
// Services
import { folderService } from '../../services'
// Util
import TokenUtil from '../../utils/usePersistedToken'
import SnackBar from '../../components/snackbar'

const service = new folderService()

const Home: React.FC = () => {
    const [folders, setfolders] = useState<[folder]>([{ name: '', userId: '', _id: '' }])
    const [message, setmessage] = useState({ message: '', isOpen: false, time: 0 })
    const [initialState, setinitialState] = useState(0)

    const history = useHistory();

    const update = () => {
        setinitialState(initialState + 1)
    }

    useEffect(() => {
        service.getFolders().then(data => {
            console.log(data)
            setfolders(data)
        }).catch(e => {
            console.log(e)
            if (e.response.status === 401) {
                TokenUtil.removeToken();
                setmessage({ message: 'Sessão expirada', time: 3000, isOpen: true })

                setTimeout(() => { history.push('/login') })
            }
        })
    }, [history, initialState])

    return (
        <div>
            <ContainerFolder>
                <Folders updateValue={update} config={folders} />
                <AddFolder updateValue={update}/>
            </ContainerFolder>
            <SnackBar config={message}/>
        </div>
    )
}

export default Home