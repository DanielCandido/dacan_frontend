import React from 'react';
import { Snackbar } from '@material-ui/core';

interface IProps {
    config: IState;
}

interface IState {
    message?: string;
    isOpen: boolean;
    time: number;
}

const SnackBar: React.FC<IProps> = (props) => {
    const { config } = props

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        config.isOpen = false;
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={config.isOpen}
                autoHideDuration={config.time}
                onClose={handleClose}
                message={config.message}
                action={
                    <React.Fragment>
                    </React.Fragment>
                }
            />
        </div>
    )
}

export default SnackBar;