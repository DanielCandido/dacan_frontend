import React, { useState, useEffect } from 'react';
import { folderService } from '../../services';
import { Formik, Form, Field } from 'formik'
import Carousel from 'react-grid-carousel'

import { TitleCard } from './style';
import { folder } from '../../interfaces/folder';
const service = new folderService()

const Folders: React.FC = () => {
    const [folders, setfolders] = useState([{ name: ''}])
    const [initialState, setinitialState] = useState(0)
    const [folderName, setfolderName] = useState<folder>({ name: '', id: '' })

    const fetchFolder = async () => {

        service.getFolders().then(data => {
            setfolders(data)
        }).catch(e => {
            console.log(e)
        })
    }

    const createFolder = async (folder: folder) => {
        service.createFolder(folder).then(data => {
            console.log(data)
            setinitialState(initialState + 1)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        fetchFolder()
    }, [initialState])

    return (
        <div>
            <Carousel cols={3} rows={1} gap={10} loop>
                {folders.map((e, index) => (
                    <Carousel.Item key={index}>
                        <TitleCard>{e.name}</TitleCard>
                    </Carousel.Item>
                ))
                }
            </Carousel>
            <Formik initialValues={folderName}
                onSubmit={(folder, { resetForm }) => {
                    createFolder(folder)
                    resetForm({})
                }}
            >
                {({ values, handleChange, handleBlur, handleReset }) => (
                    <Form>
                        <input type="text" value={values.name} placeholder="Nome da pasta" onChange={handleChange}
                            onBlur={handleBlur} id="name" name="name" />
                        <input type="submit" value="Cadastrar" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Folders