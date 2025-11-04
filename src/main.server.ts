import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { APP_BASE_HREF } from '@angular/common';

// Create a bootstrap function that accepts a context
const bootstrap = (context: { appBaseHref?: string } = {}) => {
  return bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...(config.providers || []),
      { provide: APP_BASE_HREF, useValue: context?.appBaseHref || '/' }
    ]
  });
};

// Export the bootstrap function
export default bootstrap;
