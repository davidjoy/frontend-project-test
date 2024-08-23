import { SiteConfig } from '@openedx/frontend-base';
import './project.scss';

import { ModuleTwo } from '@openedx/frontend-app-base-test';

const config: SiteConfig = {
  apps: [
    {
      appId: 'baseTest',
      remoteUrl: 'http://localhost:8082/remoteEntry.js',
      moduleId: 'ModuleOne',
      path: '/one/*',
    },
    {
      appId: 'moduleTwo',
      component: ModuleTwo,
      path: '/two/*',
    },
    {
      appId: 'baseTestProject',
      remoteUrl: 'http://localhost:8083/remoteEntry.js',
      moduleId: 'ModuleThree',
      path: '/three/*',
    },
    {
      appId: 'moduleFour',
      url: 'http://localhost:8084/four',
    }
  ],

  APP_ID: 'base-test',
  BASE_URL: 'http://localhost:8080',
  ENVIRONMENT: 'dev',
  SITE_NAME: 'edX',

  ACCOUNT_PROFILE_URL: 'http://localhost:1995',
  ACCOUNT_SETTINGS_URL: 'http://localhost:1997',
  LEARNING_BASE_URL: 'http://localhost:2000',
  LOGIN_URL: 'http://localhost:18000/login',
  LOGOUT_URL: 'http://localhost:18000/logout',
  MARKETING_SITE_BASE_URL: 'http://localhost:18000',

  CREDENTIALS_BASE_URL: 'http://localhost:18150',
  DISCOVERY_API_BASE_URL: 'http://localhost:18381',
  ECOMMERCE_BASE_URL: 'http://localhost:18130',
  LMS_BASE_URL: 'http://localhost:18000',
  PUBLISHER_BASE_URL: 'http://localhost:18400',
  STUDIO_BASE_URL: 'http://localhost:18010',

  FAVICON_URL: 'https://edx-cdn.org/v3/default/favicon.ico',
  LOGO_TRADEMARK_URL: 'https://edx-cdn.org/v3/default/logo-trademark.svg',
  LOGO_URL: 'https://edx-cdn.org/v3/default/logo.svg',
  LOGO_WHITE_URL: 'https://edx-cdn.org/v3/default/logo-white.svg',
};

export default config;
