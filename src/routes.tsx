import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MDTab, { MDTabProps } from './components/MDTab';
import { PageProps } from './models';

import { pages, tabs } from './data/';

const View: React.FC<PageProps> = ({ Component, ...rest }) => {
  return <Component {...rest} />;
};

const Tab: React.FC<MDTabProps> = ({ fileName }) => {
  return <MDTab fileName={fileName} />;
};

const AppRoutes: React.FC = () => (
  <Routes>
    {pages.map(({ name, url, Component, ...rest }) => (
      <Route
        path={url}
        key={name}
        element={<View Component={Component} {...rest} />}
      />
    ))}
    {tabs.map(({ name, url, mdFileName }) => (
      <Route path={url} key={name} element={<Tab fileName={mdFileName} />} />
    ))}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default <AppRoutes />;
