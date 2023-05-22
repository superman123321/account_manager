import {useState, useEffect, useMemo} from 'react';
import {AccountModal} from './components/Modal/AccountModal';
import {AccountTable} from './components/AccountTable';
import {ConfirmModal} from './components/Modal/ConfirmModal';
import {Button} from 'antd';
import axios from 'axios';
import './App.css';

const MODAL_MODE = {
  CREATE: 'create',
  UPDATE: 'update'
}

const initState = {
    reloadAccount: false,
    modalMode: MODAL_MODE.CREATE,
    selectedItemId: null,
    visibleAccountModal: false,
    visibleConfirmModal: false,
    accounts: [],
    loadingAccount: true,
};

const axiosInstance = axios.create({
    baseURL: 'https://6464d9e3043c103502c4c1fc.mockapi.io',
});

function App() {
    const [state, setState] = useState(initState);
    const {reloadAccount, selectedItemId, visibleAccountModal, visibleConfirmModal, accounts, loadingAccount} = state;

    useEffect(() => {
        axiosInstance.get('/accounts').then(function (res) {
            const accs = res.data;
            setState((prevState) => ({...prevState, accounts: accs, loadingAccount: false}));
        });
    }, [reloadAccount]);

    const handleShowAccountModal = () => {
        setState((prevState) => ({...prevState, visibleAccountModal: true}));
    };

    const handleCreateItem = (data) => {
      const { email, username, fullname, department, postion } = data
      axiosInstance.post('/accounts', {
        email,
        username,
        fullname,
        department,
        postion
      }).then(function (res) {
        setState(prevState => ({ ...prevState, reloadAccount: !reloadAccount, visibleAccountModal: false }))
      })
    };

    const handleCancelModal = () => {
      setState((prevState) => ({...prevState, visibleAccountModal: false}));
    };

    const handleDeleteTableItem = (id) => {
        setState(prevState => ({ ...prevState, selectedItemId: id, visibleConfirmModal: true }))
    };

    const handleUpdateTableItem = (id) => {
        setState(prevState => ({ ...prevState, selectedItemId: id, visibleAccountModal: true}))
    };

    const handleOkConfirmModal = () => {
      const newList = accounts.filter(item => (item.id !== selectedItemId))
      setState(prevState => ({ ...prevState, accounts: newList, selectedItemId: null, visibleConfirmModal: false }))
    };

    const handleCloseConfirmModal = () => {
      setState(prevState => ({ ...prevState, visibleConfirmModal: false }))
    };

    const selectedTableItem = useMemo(() => {
      const item = accounts.find(item => (item.id === selectedItemId))
      return item || {}
    }, [accounts, selectedItemId])

    return (
        <div className="App">
            <Button onClick={handleShowAccountModal}>Create New Account</Button>
            <AccountTable
                dataSource={accounts}
                loading={loadingAccount}
                onDelete={handleDeleteTableItem}
                onUpdate={handleUpdateTableItem}
            />
            {visibleConfirmModal ? (
                <ConfirmModal onOk={handleOkConfirmModal} onClose={handleCloseConfirmModal} />
            ) : null}
            {visibleAccountModal ? <AccountModal data={selectedTableItem} onOk={handleCreateItem} onCancel={handleCancelModal} /> : null}
        </div>
    );
}

export default App;
