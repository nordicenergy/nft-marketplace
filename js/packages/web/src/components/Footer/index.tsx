import React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './index.less';

export const Footer = () => {
  return (
    <div className={'footer'}>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://github.com/fyfylian/nft-marketplace'}
        icon={<GithubOutlined />}
        style={{ marginRight: '20px' }}
      ></Button>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://twitter.com/solana'}
        icon={<TwitterOutlined />}
      ></Button>
    </div>
  );
};
