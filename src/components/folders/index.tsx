import React, { useState } from 'react';
import { folderService } from '../../services';
import Carousel from 'react-grid-carousel'
// Material
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Delete } from '@material-ui/icons'

// Estilo da pagina
import { TitleCard, CardFolder } from './style';

// Interface
import { folder } from '../../interfaces/folder';
import SnackBar from '../snackbar';
const service = new folderService()

interface IProps {
    config: Array<folder>;
    updateValue(): void;
}

const Folders: React.FC<IProps> = ({updateValue, config}) => {
    const [folder, setfolder] = useState<folder>({ name: '', userId: '', _id: '' })
    const [message, setmessage] = useState({ message: '', isOpen: false, time: 0 })
    const [dialog, setdialog] = useState(false)
    const folders = config 

    const handleClickOpen = (folder: folder) => {
        setfolder(folder)
        console.log(folder)
        setdialog(true);
    };

    const handleClose = () => {
        setdialog(false);
    };

    const deleteFolder = () => {
        console.log(folder)
        service.deleteFolder(folder).then(data => {
            setdialog(false)
            setmessage({ isOpen: true, time: 3000, message: data.message })
            updateValue()
        }).catch(e => {
            setmessage({ isOpen: true, time: 3000, message: e.message })
        })
    }

    return (
        <div>
            <Carousel cols={3} rows={1} gap={10} loop>
                {
                    folders.map((e, index) => (
                        <Carousel.Item key={index}>
                            <CardFolder>
                                <Delete onClick={() => handleClickOpen(e)} style={{
                                    position: 'absolute', top: '20%',
                                    backgroundColor: 'red', borderRadius: '50%', padding: '3px', fontSize: '20pt', cursor: 'pointer'
                                }} />
                                <a href={'/folder/' + e.name} style={{ textDecoration: 'none' }}>
                                    <TitleCard>{e.name}</TitleCard>
                                </a>
                            </CardFolder>
                        </Carousel.Item>
                    ))
                }
            </Carousel>

            {/* DIALOG PARA REMOVER PASTA */}
            <Dialog
                open={dialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Deseja remover a pasta {folder.name} ?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Todo conteúdo dentro da mesma sera deletado.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Recusar
          </Button>
                    <Button onClick={deleteFolder} color="primary" autoFocus>
                        Aceitar
          </Button>
                </DialogActions>
            </Dialog>
            <SnackBar config={message} />
        </div>
    )
}

export default Folders