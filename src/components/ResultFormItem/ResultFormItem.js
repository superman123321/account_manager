


import classNames from 'classnames/bind';
import styles from './ResultFormItem.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function ResultFormItem(
    {
        onEdit,
        onChangeInput,
        onUpdate,
        onGetIndexOfItem,
        onDelItem,
     
        data,
    },
    ref,
) {

    

   


    return (
        <>
            {data.map((item,index) => {

              return (
                <tr key={item.id} className={cx('wrapper')}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.fullname}</td>
                    <td>{item.depart}</td>
                    <td>{item.pos}</td>
                    <td>{item.created_at}</td>

                    <td>
                        <Button edit title="Edit" 
                        onEdit={onEdit} 
                       
                        

                        onChangeInput={()=>onChangeInput(item.email,item.username,item.fullname,item.depart,item.pos)}
                        onGetIndexOfItem={()=>onGetIndexOfItem(index)}
                       
                       
                        />
                    </td>
                    <td>
                        <Button del title="Delete"  onUpdate={()=>onUpdate(item.id)} onDelItem={()=> onDelItem(item.id)} />
                    </td>
                </tr>
              )
            })}
        </>
    );
}
export default ResultFormItem;
