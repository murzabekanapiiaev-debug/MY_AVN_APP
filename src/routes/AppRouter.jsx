import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Lms } from "../pages/Lms";
import { Schedule } from "../components/lms/Schedule";
import { RegistrationDisipline } from "../components/lms/RegistrationDisipline";
import { PersonalCard } from "../pages/apps/PersonalCard";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/lms" element={<Lms />}>
            <Route path="schedule" element={<Schedule />} />{" "}
            <Route path="registration" element={<RegistrationDisipline />} />
          </Route>
        </Route>

        <Route path="/personalCard" element={<PersonalCard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
