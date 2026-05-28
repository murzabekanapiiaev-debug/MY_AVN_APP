import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Lms } from "../pages/Lms";
import { Schedule } from "../components/lms/Schedule";
import { PersonalCard } from "../pages/apps/PersonalCard";
import { Journal } from "../pages/apps/Journal";
import { Umk } from "../pages/apps/Umk";
import { ShifrOplaty } from "../pages/apps/ShifrOplaty";
import { Testing } from "../pages/apps/Testing";
import { ELibrary } from "../pages/apps/ELibrary";
import { RegistrationDisipline } from "../pages/apps/RegistrationDisipline";
import { News } from "../pages/apps/News";
import { Anketing } from "../pages/apps/Anketing";
import { ProtectedRoute } from "../components/lms/ProtectedRoute";
import { ManagerPanel } from "../pages/ManagerPanel";
import { AdminPanel } from "../pages/AdminPanel";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичный */}
        <Route path="/login" element={<Login />} />

        {/* User, Manager, Admin кире алат */}
        <Route
          element={
            <ProtectedRoute roles={["user", "manager", "admin"]}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />

          <Route path="/lms" element={<Lms />}>
            <Route path="" element={<Schedule />} />
            <Route path="registration" element={<RegistrationDisipline />} />
            <Route path="umk" element={<Umk />} />
            <Route path="payment" element={<ShifrOplaty />} />
            <Route path="library" element={<ELibrary />} />
            <Route path="news" element={<News />} />
            <Route path="survey" element={<Anketing />} />
          </Route>

          <Route path="/journal" element={<Journal />} />
          <Route path="/personalCard" element={<PersonalCard />} />
        </Route>

        {/* Өзүнчө беттер */}
        <Route
          path="/testing"
          element={
            <ProtectedRoute roles={["user", "manager", "admin"]}>
              <Testing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager"
          element={
            <ProtectedRoute roles={["manager", "admin"]}>
              <ManagerPanel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
