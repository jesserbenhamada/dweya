import React from "react";
import HomePage from "../pages/HomePage";
import authRoutes from "./auth.routes";


export interface RouteConfig {
  path: string;
  component: React.ComponentType<unknown>;
  name: string;
 
  layout: "guest" | "private";
}

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    layout: "guest",
  
  },
  {
    path: "/home-page",
    name: "Home Page",
    component: HomePage,
    layout: "guest",
  
  },
  ...authRoutes,
];

export default routes;
