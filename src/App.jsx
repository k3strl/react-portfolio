import React, { useState } from "react";
import { Flex, Layout } from 'antd';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/index.css';
import projectsData from "./data/projectsData"; // Import your projects data

const { Header: AntHeader, Footer: AntFooter, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 100, // Increase height by 20px
  paddingInline: 48,
  lineHeight: '2em', // Adjust line height accordingly
  backgroundColor: 'var(--darkest)',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'var(--darkest)',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'var(--darkest)', // Update footer color
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxwidth: '100%',
};
const mainStyle = {
  flex: '0 0 85%',
  maxwidth: '85%', 
  minwidth: '85%', 
  width: '85%'
}

function App() {
  const [activeComponent, setActiveComponent] = useState('hero');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'hero':
        return <Hero />;
      case 'projects':
        return <Projects projects={projectsData} />; // Pass projects data
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <AntHeader style={headerStyle}>
          <Header />
        </AntHeader>
        <Layout>
          <Sider width="15%" style={siderStyle}>
            <Navbar setActiveComponent={setActiveComponent} />
          </Sider>
          <main style={mainStyle}>
            <Content style={contentStyle}>
              {renderComponent()}
            </Content>
          </main>
        </Layout>
        <AntFooter style={footerStyle}>
          <Footer />
        </AntFooter>
      </Layout>
    </Flex>
  );
}

export default App;
