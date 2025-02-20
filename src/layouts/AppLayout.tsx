import { AppShell } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";

import { HeaderSimple } from "./HeaderSimple";
import authRoutes from "../routes/auth.routes";
import { FooterSimple } from "./FooterSimple";

type AppLayoutProps = {
  isPrivate: boolean;
};

const AppLayout = ({ isPrivate }: AppLayoutProps) => {
  const location = useLocation();

  // Get all auth route paths
  const authPaths = authRoutes.map((route) => route.path);

  // Check if the current route is an authentication route
  const isAuthRoute = authPaths.includes(location.pathname);

  return (
    <AppShell
      header={isAuthRoute ? undefined : { height: 70 }}
      // navbar={isAuthRoute ? undefined : { width: 350, breakpoint: "sm" }}
    >
      {!isAuthRoute && (
        <AppShell.Header>
          <HeaderSimple />
        </AppShell.Header>
      )}
    
      <AppShell.Main>
     
          <Outlet />
        
      </AppShell.Main>
      {/* Add FooterLinks if needed */}
      <FooterSimple/>
    </AppShell>
  );
};

export default AppLayout;
