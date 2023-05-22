import React from 'react'
import {Modal} from 'antd'

export const ConfirmModal = ({ onOk, onClose}) => {
  return (
    <Modal
      open={true}
      title="Xac nhan"
      onOk={onOk}
      onCancel={onClose}
    >
      Vui long xac nhan xoa phan tu
    </Modal>
  )
}