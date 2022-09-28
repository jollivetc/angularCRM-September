import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app-material.module';
import { HelpComponent } from '../component/help/help.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        NoopAnimationsModule,
        AppMaterialModule
      ],
      declarations: [ LoginComponent, HelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have login button deactivated on first display',()=>{
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('button')?.disabled).toBeTrue();
  })

  it('should enable login button when form is complete and valid', ()=>{
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    const login = (fixture.nativeElement as HTMLElement).querySelector('input#login');
    const password = (fixture.nativeElement as HTMLElement).querySelector('input#password');

    (login as HTMLInputElement).value='login';
    (password as HTMLInputElement).value='password';

    login?.dispatchEvent(new Event('input'))
    password?.dispatchEvent(new Event('input'))

    fixture.detectChanges();

    expect(button?.disabled).toBeFalse();
  })
});
