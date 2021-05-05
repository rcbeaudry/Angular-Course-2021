// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
  // Could add something like an API Key, etc. to this file
  // Angular will swap this with environment.prod.ts when the --prod build is done
  // So you can put dev values here and prod values in .prod.ts
  // Import into module where you need it, and access keys by environment.keyname
  // import { environment } from '../../environments/environment' (angular will swap dev/prod automagically)
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
