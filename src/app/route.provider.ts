import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {

        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/lawyer-store',
        name: '::Menu:LawyerStore',
        iconClass: 'fas fa-book',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/lawyers',
        name: '::Menu:Lawyers',
        parentName: '::Menu:LawyerStore',
        layout: eLayoutType.application,
      },
      {
        path: '/case-store',
        name: '::Menu:CaseStore',
        iconClass: 'fas fa-book',
        order: 2,
        layout: eLayoutType.application,
      },
     
      {
        path: '/cases',
        name: '::Menu:cases',
        parentName: '::Menu:CaseStore',
        layout: eLayoutType.application,
      },

      
    ]);
  };
}
