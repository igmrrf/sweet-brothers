import AdminGuard from "./helpers/guards/admin.guard";
import AuthGuard from "./helpers/guards/auth.guard";
import UserGuard from "./helpers/guards/user.guard";
import GuestGuard from "./helpers/guards/guest.guard";
import DevGuard from "./helpers/guards/dev.guard";

import AdminLayout from "./layout/admin.layout";
import AuthLayout from "./layout/auth.layout";
import DevLayout from "./layout/dev.layout";
import GuestLayout from "./layout/guest.layout";
import UserLayout from "./layout/user.layout";

import Home from "./views/guest/about-us";

import Loading from "./containers/Loading/loading.container";
import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  // Auth Routes
  // {
  //   guard: AuthGuard,
  //   layout: AuthLayout,
  //   path: "/auth/login",
  //   exact: true,
  //   component: lazy(() => import("./views/auth/login")),
  // },
  {
    guard: AuthGuard,
    path: "/auth",
    layout: AuthLayout,
    routes: [
      {
        path: "/auth/login",
        exact: true,
        component: lazy(() => import("./views/auth/login")),
        protected: true,
      },
      {
        path: "/auth/register",
        exact: true,
        component: lazy(() => import("./views/auth/login")),
        protected: true,
      },
      {
        path: "/auth/forgot-password",
        exact: true,
        component: lazy(() => import("./views/auth/login")),
        protected: true,
      },
      {
        path: "/auth/verify",
        exact: true,
        component: lazy(() => import("./views/auth/login")),
        protected: true,
      },
      {
        path: "/auth/change-password",
        exact: true,
        component: lazy(() => import("./views/auth/login")),
        protected: true,
      },
    ],
  },

  // Guest Routes
  {
    name: "Home",
    guard: GuestGuard,
    layout: GuestLayout,
    path: "/",
    routes: [
      {
        name: "About Us",
        path: "/about-us",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "How to shop on SBC",
        path: "/how-to",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Delivery Options and Details",
        path: "/delivery",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Policies on Return of Products",
        path: "/returns",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Reviews and Complains",
        path: "/complains",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Terms and Conditions",
        path: "/terms-conditions",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Privacy Policy",
        path: "/privacy",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "SBC Careers",
        path: "/careers",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
    ],
  },
  // Admin Routes
  {
    name: "Admin Dashboard",
    guard: AdminGuard,
    layout: AdminLayout,
    path: "/app",
    routes: [
      {
        name: "Summary",
        path: "/app/",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Orders",
        path: "/app/orders",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Deliveries",
        path: "/app/deliveries",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Products",
        path: "/app/products",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Expenses",
        path: "/app/expenses",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Incomes",
        path: "/app/incomes",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Financial Statement",
        path: "/app/finances",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Invoices",
        path: "/app/invoices",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Mailings",
        path: "/app/mailings",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Notifications",
        path: "/app/notifications",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
    ],
  },
  // Dev Routes
  {
    name: "Developer Control Section",
    guard: DevGuard,
    layout: DevLayout,
    path: "/code",
    routes: [
      {
        name: "Summary",
        path: "/code/",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Analyticcs",
        path: "/code/analytics",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },

      {
        name: "Orders",
        path: "/code/",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Deliveries",
        path: "/code/deliveries",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Products",
        path: "/code/products",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Expenses",
        path: "/code/expenses",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Incomes",
        path: "/code/incomes",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Financial Statement",
        path: "/code/finances",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: false,
      },
      {
        name: "Invoices",
        path: "/code/invoices",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Mailings",
        path: "/code/mailings",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Notifications",
        path: "/code/notifications",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
    ],
  },
  // User Routes
  {
    name: "User Account",
    guard: UserGuard,
    layout: UserLayout,
    path: "/dashboard",
    routes: [
      {
        name: "Summary",
        path: "/dashboard/",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Orders",
        path: "/dashboard/orders",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Deliveries",
        path: "/dashboard/deliveries",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Products",
        path: "/dashboard/products",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Expenses",
        path: "/dashboard/expenses",

        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Incomes",
        path: "/dashboard/incomes",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Financial Statement",
        path: "/dashboard/finances",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: false,
      },
      {
        name: "Invoices",
        path: "/dashboard/invoices",
        exact: true,
        component: lazy(() => import("./views/guest/about-us")),
        protected: true,
      },
      {
        name: "Mailings",
        path: "/dashboard/mailings",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
      {
        name: "Notifications",
        path: "/dashboard/notifications",
        component: lazy(() => import("./views/guest/about-us")),
        exact: true,
        protected: true,
      },
    ],
  },
  {
    path: "*",
    layout: GuestLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: Home,
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];

export default routes;
