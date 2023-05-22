
import{memo} from 'react'
import classNames from 'classnames/bind';
import styles from './ResultForm.module.scss';

const cx = classNames.bind(styles);

function ResultForm({children}) {
    return (
        <>
            <div>
                <table className={cx('wrapper')}>
                    <thead className={cx('wrapper-header')}>
                        <tr className={cx('wrapper-row')}>
                            <th className={cx('wrapper-item')}> ID </th>
                            <th className={cx('wrapper-item')}> Email </th>
                            <th className={cx('wrapper-item')}> Username </th>
                            <th className={cx('wrapper-item')}> Fullname </th>
                            <th className={cx('wrapper-item')}> Department </th>
                            <th className={cx('wrapper-item')}> Position </th>
                            <th className={cx('wrapper-item')}> Create Date </th>
                            <th className={cx('wrapper-item')}> Edit </th>
                            <th className={cx('wrapper-item')}> Delete </th>
                        </tr>
                    </thead>

                    <tbody className={cx('wrapper-body')}>
                      {children}
                      </tbody>
                </table>
            </div>
        </>
    );
}

export default memo(ResultForm);
