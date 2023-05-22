import {forwardRef, useCallback, useRef, useState, useEffect} from 'react';

import Button from '../Button/Button';
import ResultForm from '~/components/ResultForm/ResultForm';
import ResultFormItem from '~/components/ResultFormItem/ResultFormItem';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { stored } from '../stored/stored';

const cx = classNames.bind(styles);

function Modal({display}, ref) {
    const classes = cx('wrapper', );

    

    const emailValue = useRef();
    const usernameValue = useRef();
    const fullnameValue = useRef();
    const departValue = useRef();
    const posValue = useRef();
    // create newitem
    const [item, setItem] = useState([]);

    const handleCreateNewItem = () => {
      
        const newInfo = {
            id: item.length + 1,
            email: emailValue.current.value,
            username: usernameValue.current.value,
            fullname: fullnameValue.current.value,
            depart: departValue.current.value,
            pos: posValue.current.value,
            created_at: new Date().toLocaleString(),
            // In this example, toLocaleString() is used to format the date and time to the user's local format. You can customize the date and time format by passing options to toLocaleString() or using a third-party library like date-fns or moment.js.
        };

        const itemList = [...item, newInfo]
        setItem(itemList);
        stored(itemList)

    };


    // close modal
    const handleClose = useCallback(() => {
        ref.current.classList.remove('display');
    }, []);
    // Edit modal
    const [editValueEmail, setEditValueEmail] = useState('');
    const [editValueUsername, setEditValueUsername] = useState('');
    const [editValuedFullname, setEditValueFullname] = useState('');
    const [editValueDepart, setEditValueDepart] = useState('');
    const [editValuePos, setEditValuePos] = useState('');

    // lấy index
    const [indexItem, setIndexItem] = useState('')

    const handleGetIndexOfItem = (index)=>{
        setIndexItem(index)
        console.log(index)
    }

    const handleChangeInput = (email, username, fullname, depart, pos) => {
        setEditValueEmail(email);
        setEditValueUsername(username);
        setEditValueFullname(fullname);
        setEditValueDepart(depart);
        setEditValuePos(pos);
    };

    const handleChangeInputEmail = (email) => {
        setEditValueEmail(email);
    };

    const handleChangeInputUsername = (username) => {
        setEditValueUsername(username);
    };

    const handleChangeInputFullname = (fullname) => {
        setEditValueFullname(fullname);
    };
    const handleChangeInputDepart = (Depart) => {
        setEditValueDepart(Depart);
    };

    const handleChangeInputPos = (Pos) => {
        setEditValuePos(Pos);
    };
    const handleEdit = () => {
        ref.current.classList.add('display');
    };
    // update
    
    
    const handleUpdate = ()=> {
      
        // const newUpdateItem =  {
        //     id: `edited ${indexItem}` ,
        //     email: emailValue.current.value,
        //     username: usernameValue.current.value,
        //     fullname: fullnameValue.current.value,
        //     depart: departValue.current.value,
        //     pos: posValue.current.value,
        //     created_at: new Date().toLocaleString(),
        //     // In this example, toLocaleString() is used to format the date and time to the user's local format. You can customize the date and time format by passing options to toLocaleString() or using a third-party library like date-fns or moment.js.
        // };
        // item[indexItem] = newUpdateItem 


        setItem((prevItems) => {
            const updatedItems = [...prevItems];
            const newUpdateItem = {
              id: `edited ${indexItem}`,
              email: emailValue.current.value,
              username: usernameValue.current.value,
              fullname: fullnameValue.current.value,
              depart: departValue.current.value,
              pos: posValue.current.value,
              created_at: new Date().toLocaleString(),
            };
            updatedItems[indexItem] = newUpdateItem;
            stored(updatedItems)
            return updatedItems;
          });
       

    }
    
  
    

    // reset
    const handleReset = useCallback(() => {
        const inputs = Array.from(document.getElementsByTagName('input'));
        inputs.forEach(function (input) {
            input.value = null;
        });
    });

    // Delete item
    const handleDelItem = (id) => {
        localStorage.clear()
        const newListItem = item.filter(item => item.id !== id) // lấy ra mảng mới bỏ phần tử .id
       
        setItem(newListItem)
        stored(newListItem)
        
      }
    return (
        <>
            <ResultForm>
               
                    { item.length > 0 ? <ResultFormItem 
                    onEdit={handleEdit} 
                    data={item} 
               
                    onUpdate={handleUpdate}
                    onChangeInput={handleChangeInput} 
                    onGetIndexOfItem={handleGetIndexOfItem}
                    
                    onDelItem={handleDelItem}
                    /> : <div className={cx('nouser-title')} >Chưa có danh sách</div>}
               
            </ResultForm>

            <div ref={ref} className={classes}>
                <div className={cx('body')}>
                    <h1 className={cx('heading')}>Create New Account</h1>

                    <div className={cx('info')}>
                        <label htmlFor="email"> Email:</label> <br />
                        <input
                            ref={emailValue}
                            id="email"
                            value={editValueEmail}
                            onChange={(e) => handleChangeInputEmail(e.target.value)}
                            className={cx('modal-input')}
                            type="email"
                            placeholder="Input email ..."
                        />
                    </div>

                    <div className={cx('info')}>
                        <label htmlFor="username"> Username:</label> <br />
                        <input
                            ref={usernameValue}
                            id="username"
                            value={editValueUsername}
                            onChange={(e) => handleChangeInputUsername(e.target.value)}
                            className={cx('modal-input')}
                            type="text"
                            placeholder="Input username..."
                        />
                    </div>

                    <div className={cx('info')}>
                        <label htmlFor="fullname"> Fullname:</label> <br />
                        <input
                            ref={fullnameValue}
                            id="fullname"
                            value={editValuedFullname}
                            onChange={(e) => handleChangeInputFullname(e.target.value)}
                            className={cx('modal-input')}
                            type="text"
                            placeholder="Input your fullname..."
                        />
                    </div>

                    <div className={cx('info')}>
                        <label htmlFor="department"> Select a department</label> <br />
                        <select
                            value={editValueDepart}
                            onChange={(e) => handleChangeInputDepart(e.target.value)}
                            ref={departValue}
                            className={cx('modal-input')}
                            name=""
                            id="star"
                        >
                            <option value="Giám đốc">Giám đốc</option>
                            <option value="Nhân viên">Nhân viên</option>
                        </select>
                    </div>

                    <div className={cx('info')}>
                        <label htmlFor="department"> Select position</label> <br />
                        <select
                            value={editValuePos}
                            onChange={(e) => handleChangeInputPos(e.target.value)}
                            ref={posValue}
                            className={cx('modal-input')}
                            name=""
                            id="star"
                        >
                            <option value="Test">Test</option>
                            <option value="Dev">Dev</option>
                        </select>
                    </div>

                    <div className={cx('ftn-btn')}>
                        <Button title="Create" onCreateNewItem={handleCreateNewItem} />
                        <Button title="Reset" reset onReset={handleReset} />
                        <Button title={'Update'} update onUpdate={handleUpdate} />
                    </div>

                    <div className={cx('close')}>
                        <span>
                            <Button title="Close" close onClose={handleClose} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default forwardRef(Modal);
