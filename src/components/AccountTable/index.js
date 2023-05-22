import React from 'react';
import {Table, Space, Button} from 'antd';

export const AccountTable = ({dataSource, onUpdate, onDelete, ...others}) => {
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'User name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Full name',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Postion',
            dataIndex: 'postion',
            key: 'postion',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size='middle'>
              <Button onClick={() => onUpdate(record.id)}>Update</Button>
              <Button onClick={() => onDelete(record.id)}>Delete</Button>
            </Space>
          ),
        }
    ];

    return <Table {...others} dataSource={dataSource} columns={columns} />;
};
