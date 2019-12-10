/*
 * Core module containing application core modules and components used throughout booky ®.
 * this module is loaded eagerly and should not contain any feature-specific content.
*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from 'src/app/app.reducer';
import { environment } from 'src/environments/environment';

import { routes } from '../app.routes';
import { IntroPageComponent } from '../pages/intro-page/intro-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { LoginEffects } from '../pages/login-page/store/login.effects';
import { SharedModule } from '../shared/shared.module';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MainFooterComponent } from './containers/main-container/main-footer/main-footer.component';
import { MainHeaderComponent } from './containers/main-container/main-header/main-header.component';

// a Meta reducer from ngx-localStorage (syncing store with storage).
const metaReducers: Array<MetaReducer<any, any>> = [fromApp.localStorageSyncReducer];

@NgModule({
  declarations: [
    MainContainerComponent,
    IntroPageComponent,
    LoginPageComponent,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(fromApp.appReducer, { metaReducers }),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  exports: [RouterModule]
})
export class CoreModule { }

