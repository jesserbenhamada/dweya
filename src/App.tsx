
import "@mantine/core/styles.css";
import "@fontsource/poppins"; // Default 400 weight
import "@fontsource/poppins/400.css"; // Normal weight
import "@fontsource/poppins/700.css"; // Bold weight

import { Route, Routes } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import routes from "./routes/app.routes";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./layouts/AppLayout";

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function App() {
  useScrollToTop();
  const adminRoutes = routes.filter((route) => route.layout === "private");
  const guestRoutes = routes.filter((route) => route.layout === "guest");

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Guest Layout */}
        <Route element={<AppLayout isPrivate={false} />}>
          {guestRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        {/* Admin Layout */}
        <Route element={<AppLayout isPrivate />}>
          {adminRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}
