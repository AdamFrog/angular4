import { TestBed, async, fakeAsync,tick } from '@angular/core/testing';

import { Location } from "@angular/common";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';

import { routes } from './routes';


describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

  }));

  it('navigate to "login" redirects you to /login', fakeAsync(() => {
    router.navigate(['login']);
    tick(50);
    expect(location.path()).toBe('/login');
  }));

});
