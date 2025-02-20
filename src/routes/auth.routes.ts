import Authentication from "../pages/Authentication";
import { RouteConfig } from "./app.routes";


const authRoutes: RouteConfig[] = [
    {
        path: "/login",
        name: "Login Page",
        component: Authentication,
        layout: "private",
      },
];

export default authRoutes;
