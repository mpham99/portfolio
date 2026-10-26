import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Initialize AOS after app loads
setTimeout(() => {
  if ((window as any).AOS) {
    (window as any).AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      mirror: false,
      offset: 100,
    });
  }
}, 500);


