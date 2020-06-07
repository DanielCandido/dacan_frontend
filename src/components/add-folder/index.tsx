import React, { useState } from 'react'
import { folderService } from '../../services';
import { folder } from '../../interfaces/folder'
import { Formik, Form } from 'formik';
import { Add } from '@material-ui/icons'

import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';

// Estilo global
import { Input, Label } from '../../styles/style'

const service = new folderService()

interface IProps {
    updateValue(): void
}

const AddFolder: React.FC<IProps> = ({ updateValue }) => {
    const [dialog, setdialog] = useState(false)

    const createFolder = async (folder: folder) => {
        service.createFolder(folder).then(data => {
            console.log(data)
            setdialog(false)
            updateValue()
        }).catch(e => {
            console.log(e)
        })
    }

    const handleOpen = () => {
        setdialog(true)
    }

    const handleClose = () => {
        setdialog(false)
    }

    return (
        <div>
            Adicionar Pastas
            <Add onClick={handleOpen} />
            {/* DIALOG PARA REMOVER PASTA */}
            <Dialog
                open={dialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Cadastrar Nova Pasta</DialogTitle>
                <DialogContent>
                    <Formik initialValues={{ name: '', userId: '', _id: '' }}
                        onSubmit={(folder, { resetForm }) => {
                            createFolder(folder)
                            resetForm({})
                        }}
                    >
                        {({ values, handleChange, handleBlur, handleReset }) => (
                            <Form>
                                <Label>
                                    <Input name="name"
                                        value={values.name}
                                        placeholder="Nome da pasta"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Label>
                                <Label>
                                    <Button onClick={handleClose} color="secondary" style={{ padding: '5px' }}>
                                        Cancelar
                                        </Button>
                                    <Button color="primary" style={{ padding: '5px' }} type="submit">Criar Pasta</Button>
                                </Label>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddFolder