import React from 'react';
import Greeter from '../views/Greeter';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import pkg from '../../package.json';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    Component: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
];

export const tabs: TabLink[] = [
  {
    name: 'skills.js',
    url: '/skills',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: '.experiencerc',
    url: '/work-experience',
    icon: 'university',
    color: midBlue,
    mdFileName: 'work-experience',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
];
