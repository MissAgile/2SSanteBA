import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = new Router();

  const userConnect = JSON.parse(localStorage.getItem('userData') || '');
  if (userConnect.role == "medecin") {
    return true;
  }
  else {
    router.navigate(['login']);
    return false;
  }
};

export const patientGuardGuard: CanActivateFn = (route, state) => {

  const router = new Router();

  const userConnect = JSON.parse(localStorage.getItem('userData') || '');
  if (userConnect.role == "patient") {
    return true;
  }
  else {
    router.navigate(['login']);
    return false;
  }
};

export const adminGuardGuard: CanActivateFn = (route, state) => {

  const router = new Router();

  const userConnect = JSON.parse(localStorage.getItem('userData') || '');
  if (userConnect.role == "admin") {
    return true;
  }
  else {
    router.navigate(['login']);
    return false;
  }
};

