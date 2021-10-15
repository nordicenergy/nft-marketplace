import React from 'react';
import { Modal } from 'antd';

import './index.css';

export const MetaplexModal = (props: any) => {

  const { children, bodyStyle, ...rest } = props

  return (
    <Modal
      bodyStyle={{
        background: "#001B30",
        boxShadow: '0px 6px 12px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...bodyStyle,
      }}
      footer={null}
      width={400}
      {...rest}
    >
      {children}
    </Modal>
  );
};
