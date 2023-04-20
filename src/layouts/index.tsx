import { Link, Outlet } from 'umi';
import { Layout as AntdLayout } from 'antd'
import React, {useState} from 'react';
import styles from './index.less';
import MyHeader from '@/components/MyHeader';
const { Header, Footer, Sider, Content } = AntdLayout;


const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#e9e9e9',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default function Layout() {
  return (
    <div className={styles.layout}>
      <AntdLayout>
        <Header style={headerStyle}>Header</Header>
        <AntdLayout>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>
            <Outlet />

          </Content>
        </AntdLayout>
        <Footer style={footerStyle}>Footer</Footer>
      </AntdLayout>
    </div>
  );
}
