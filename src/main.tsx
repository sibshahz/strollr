import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import SideBar from "./layout/sidebar/sidebar.component.tsx";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";
import ListingPage from "./pages/listing/listing.page.tsx";
import UserManagementPage from "./pages/user-management/user-management.page.tsx";
import SettingsPage from "./pages/settings/settings.page.tsx";
import HelpPage from "./pages/help/help.page.tsx";
import SignInPage from "./pages/sign-in/sign-in.page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<DashboardPage />} />
          <Route path="listing" element={<ListingPage />} />
          <Route path="user-management" element={<UserManagementPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="logout" element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
