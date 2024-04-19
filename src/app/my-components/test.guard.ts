import { CanActivateFn } from '@angular/router';

export const testGuard: CanActivateFn = (route, state) => {
  const id = route.paramMap.get('id');

  if (id === 'iwi') {
    return true;
  } else {
    return false;
  }

  //return id === 'iwi' //alternative method
};
