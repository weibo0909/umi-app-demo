// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/weichuanbo/projects/umi-app-demo/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/weichuanbo/projects/umi-app-demo/src/layouts/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('/Users/weichuanbo/projects/umi-app-demo/src/pages/index').default,
        "exact": true
      },
      {
        "path": "/users",
        "component": require('/Users/weichuanbo/projects/umi-app-demo/src/pages/users/index').default,
        "exact": true
      },
      {
        "path": "/goods",
        "component": require('/Users/weichuanbo/projects/umi-app-demo/src/pages/goods/goods').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
