import React, {useState} from 'react';
import {Modal, Input, Select, Button} from 'antd';

const initState = {
    email: '',
    username: '',
    fullname: '',
    department: '',
    postion: '',
};

export const AccountModal = ({data, onCancel, onOk}) => {
    const [state, setState] = useState(data);
    const {email, username, fullname, department, postion} = state;

    const departments = [
        {
            value: 'sale',
            label: 'Sale',
        },
        {
            value: 'marketing',
            label: 'Marketing',
        },
        {
            value: 'media',
            label: 'Media',
        },
    ];

    const postions = [
        {
            value: 'engineering',
            label: 'Engineering',
        },
        {
            value: 'leader',
            label: 'Leader',
        },
        {
            value: 'head_of_country',
            label: 'Head of country',
        },
    ];

    const handleOkButton = () => {
        onOk();
    };

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        setState((prevState) => ({...prevState, email: value}));
    };

    const handleChangeUserName = (e) => {
        const value = e.target.value;
        setState((prevState) => ({...prevState, username: value}));
    };

    const handleChangeFullName = (e) => {
        const value = e.target.value;
        setState((prevState) => ({...prevState, fullname: value}));
    };

    const handleChangeDepartment = (value) => {
        setState((prevState) => ({...prevState, department: value}));
    };

    const handleChangePostion = (value) => {
        setState((prevState) => ({...prevState, postion: value}));
    };

    const handleCreateNewItem = () => {
        onOk(state);
    };

    const handleResetForm = () => {
        setState(initState);
    };

    return (
        <Modal
            open={true}
            title="Account Modal"
            onOk={handleOkButton}
            onCancel={onCancel}
            footer={
                <div>
                    <Button onClick={handleResetForm}>Reset</Button>
                    <Button onClick={handleCreateNewItem}>Create</Button>
                </div>
            }
        >
            <div>
                <Input
                    id="email"
                    defaultValue=""
                    value={email}
                    addonBefore={<label htmlFor="email">Email:</label>}
                    onChange={handleChangeEmail}
                    placeholder="Input email..."
                />
            </div>
            <div>
                <Input
                    id="username"
                    defaultValue=""
                    value={username}
                    addonBefore={<label htmlFor="username">Username:</label>}
                    onChange={handleChangeUserName}
                    placeholder="Input user name..."
                />
            </div>
            <div>
                <Input
                    id="fullname"
                    defaultValue=""
                    value={fullname}
                    addonBefore={<label htmlFor="fullname">Fullname:</label>}
                    onChange={handleChangeFullName}
                    placeholder="Input full name..."
                />
            </div>
            <div>
                <Select
                    style={{width: 120}}
                    value={department}
                    placeholder="Select a department"
                    onChange={handleChangeDepartment}
                    options={departments}
                />
            </div>
            <div>
                <Select
                    style={{width: 120}}
                    value={postion}
                    placeholder="Select a postion"
                    onChange={handleChangePostion}
                    options={postions}
                />
            </div>
        </Modal>
    );
};
