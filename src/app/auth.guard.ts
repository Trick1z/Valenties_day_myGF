import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {


  const router = inject(Router)
  const getData = sessionStorage.getItem("status")

  if (getData != null) {

    return true;
  } else {
    router.navigateByUrl('HomePage');

    return false;
  }

  return true
};
