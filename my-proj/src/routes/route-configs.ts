import { lazy } from "react";
import { PAGES, ROUTES } from "./constants";

const AuthLayout = lazy(() =>
  import("../layouts/auth").then((module) => ({
    default: module.AuthLayout,
  }))
);
const Login = lazy(() =>
  import("../pages/registration/login").then((module) => ({
    default: module.default,
  }))
);

const SignUp = lazy(() =>
  import("../pages/registration/sign-up").then((module) => ({
    default: module.default,
  }))
);

export const appRoutes = [
  // [ROUTES.AUTH + '/*', NoAuthLayout, Auth],
  [ROUTES.START, AuthLayout, SignUp, PAGES.SignUp],
  [ROUTES.SIGNUP, AuthLayout, SignUp, PAGES.SignUp],
  [ROUTES.LOGIN + "/*", AuthLayout, Login, PAGES.Login],
];
