import configService from './config-service'
import { AxiosError } from 'axios'
import { folder } from '../interfaces/folder';

export class folderService {
    getFolders = async () => {
        try {
            const response = await configService.get('/getFolders');
            const folders: Array<folder> = response.data;

            return folders;
        } catch (err) {
            if (err && err.reponse) {
                const axiosError = err as AxiosError;
                console.log(axiosError);
                return axiosError.response?.data;
            }
            throw err;
        }
    }

    createFolder = async (folderName: folder) => {
        try {
            const response = await configService.post('/createFolder', folderName)
            const data = response.data;

            return data;
        } catch (err) {
            if (err && err.reponse) {
                const axiosError = err as AxiosError;
                console.log(axiosError);
                return axiosError.response?.data;
            }
            throw err;
        }
    }

    deleteFolder = async (folder: folder) => {
        try {
            const response = await configService.post('/deleteFolder', folder)
            const data = response.data

            return data
        } catch (err) {
            if (err && err.reponse) {
                const axiosError = err as AxiosError;
                console.log(axiosError);
                return axiosError.response?.data;
            }
            throw err;
        }
    }
}
