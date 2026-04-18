import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* ===== MAIN PAGES ===== */
import Home from "./pages/Home";
import WhyPitech from "./pages/WhyPitech";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Success from "./pages/Success";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

/* ===== INDUSTRY 4.0 ===== */
import Digitalization from "./pages/industry/Digitalization";
import DigitalAndon from "./pages/industry/DigitalAndon";
import ProductionDashboard from "./pages/industry/ProductionDashboard";
import EnergyMonitoring from "./pages/industry/EnergyMonitoring";
import PredictiveMaintenance from "./pages/industry/PredictiveMaintenance";
import IndustryMachineIntegration from "./pages/industry/MachineIntegration";
import IIoT from "./pages/industry/IoT";
import Solution from "./pages/industry/Solution";
import OEE from "./pages/industry/OEE";
import DWI from "./pages/industry/DWI";
import TraceabilitySCADA from "./pages/TraceabilitySCADA";


/* ===== PRODUCTS ===== */
import Contact from "./pages/products/Contact";   // ← YE IMPORT CHANGE KIYA HAI

/* ===== SERVICES ===== */
import Consulting from "./pages/services/Consulting";
import Implementation from "./pages/services/Implementation";

/* ===== AUTO-GENERATED PAGES ===== */
import MetalIndustry from "./pages/generated/MetalIndustry";
import GlassIndustry from "./pages/generated/GlassIndustry";
import AutomotiveIndustry from "./pages/generated/AutomotiveIndustry";
import MaterialHandling from "./pages/generated/MaterialHandling";
import Sensor from "./pages/products/Sensors";
import PLC from "./pages/generated/PLC";
import IoTGateway from "./pages/generated/Server";
import RFID from "./pages/generated/RFID";
import HMI from "./pages/generated/HMI";
import BLETag from "./pages/generated/BLETag";
import PLCProgramming from "./pages/generated/PLCProgramming";
import MachineIntegration from "./pages/industry/MachineIntegration";
import LeakTesting from "./pages/generated/LeakTesting";
import AssemblyLine from "./pages/generated/AssemblyLine";
import PressMachine from "./pages/solutions/spm/PressMachine";
import AutomationLines from "./pages/generated/AutomationLines";
import PalletConveyor from "./pages/generated/PalletConveyor";
import AssemblyConveyor from "./pages/generated/AssemblyConveyor";
import BeltConveyors from "./pages/generated/BeltConveyors";
import ChainConveyors from "./pages/generated/ChainConveyors";
import RoboticsIntegration from "./pages/generated/RoboticsIntegration";
import RoboticInspection from "./pages/generated/RoboticInspection";
import PickAndPlace from "./pages/generated/PickAndPlace";
import RoboticsOverview from "./pages/solutions/robotics/RoboticsOverview";
import RoboticsApplications from "./pages/solutions/robotics/RoboticsApplications";
import RoboticsSafety from "./pages/solutions/robotics/RoboticsSafety";

/* ===== NEW INDUSTRIES ===== */
import FoodBeverages from "./pages/industries/FoodBeverages";
import PharmaIndustry from "./pages/industries/Pharma";
import HomeAppliances from "./pages/industries/HomeAppliances";
import EVManufacturing from "./pages/industries/EVManufacturing";
import Ecommerce from "./pages/industries/Ecommerce";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/@PAAM' || location.pathname === '/dashboard';

    // Global Navigation Tracking for Quick Access
  React.useEffect(() => {
    // Normalize path: ignore case and remove trailing slash
    let path = location.pathname.toLowerCase();
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // Don't track home, admin, or empty paths
    if (path === '' || path === '/' || path.includes('@paam') || path.includes('dashboard')) return;

    try {
      const saved = localStorage.getItem('pitech_clicks_v3');
      const clicks = saved ? JSON.parse(saved) : {};
      clicks[path] = (clicks[path] || 0) + 1;
      localStorage.setItem('pitech_clicks_v3', JSON.stringify(clicks));
      console.log(`[Global Tracker] Recorded visit for normalized path: ${path}`);
    } catch (e) {
      console.error("Tracker Error:", e);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ===== HOME ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/why-pitech" element={<WhyPitech />} />

        {/* ===== ABOUT ===== */}
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<Navigate to="/about" replace />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/success" element={<Success />} />

        {/* ===== INDUSTRY ===== */}
        <Route path="/industry" element={<Navigate to="/industry/digitalization" replace />} />
        <Route path="/industry/digitalization" element={<Digitalization />} />
        <Route path="/industry/digital-andon" element={<DigitalAndon />} />
        <Route path="/industry/production-dashboard" element={<ProductionDashboard />} />
        <Route path="/industry/energy-monitoring" element={<EnergyMonitoring />} />
        <Route path="/industry/predictive-maintenance" element={<PredictiveMaintenance />} />
        <Route path="/industry/machine-integration" element={<IndustryMachineIntegration />} />
        <Route path="/industry/iiot" element={<IIoT />} />
        <Route path="/industry/solution" element={<Solution />} />
        <Route path="/industry/oee" element={<OEE />} />
        <Route path="/industry/dwi" element={<DWI />} />

        <Route path="/solutions/automation/traceability-scada" element={<TraceabilitySCADA />} />

        {/* ===== PRODUCTS ===== */}

        {/* ===== SERVICES ===== */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/implementation" element={<Implementation />} />

        {/* ===== OTHER ===== */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* ===== ADMIN ===== */}
        <Route path="/@PAAM" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />

        {/* ===== AUTO-GENERATED ROUTES ===== */}
        <Route path="/industry-4/metal-industry" element={<MetalIndustry />} />
        <Route path="/industry-4/glass-industry" element={<GlassIndustry />} />
        <Route path="/industry-4/automotive-industry" element={<AutomotiveIndustry />} />
        <Route path="/industry-4/material-handling" element={<MaterialHandling />} />
        <Route path="/products/sensor" element={<Sensor />} />
        <Route path="/products" element={<Navigate to="/products/sensor" replace />} />
        <Route path="/products/plc" element={<PLC />} />
        <Route path="/products/iot-gateway" element={<IoTGateway />} />
        <Route path="/products/rfid" element={<RFID />} />
        <Route path="/products/hmi" element={<HMI />} />
        <Route path="/products/ble-tag" element={<BLETag />} />
        <Route path="/solutions/automation/plc" element={<PLCProgramming />} />
        <Route path="/solutions/automation/machine-integration" element={<MachineIntegration />} />
        <Route path="/solutions/spm/leak-testing" element={<LeakTesting />} />
        <Route path="/solutions/spm" element={<Navigate to="/solutions/spm/leak-testing" replace />} />
        <Route path="/solutions/spm/assembly-line" element={<AssemblyLine />} />
        <Route path="/solutions/spm/press-machine" element={<PressMachine />} />
        <Route path="/solutions/automation-lines" element={<AutomationLines />} />
        <Route path="/solutions/convergence/pallet-conveyor" element={<PalletConveyor />} />
        <Route path="/solutions/convergence/assembly-conveyor" element={<AssemblyConveyor />} />
        <Route path="/solutions/convergence/belt-conveyors" element={<BeltConveyors />} />
        <Route path="/solutions/convergence/chain-conveyors" element={<ChainConveyors />} />
        <Route path="/solutions/robotics/integration" element={<RoboticsIntegration />} />
        <Route path="/solutions/robotics/inspection" element={<RoboticInspection />} />
        <Route path="/solutions/robotics/pick-and-place" element={<PickAndPlace />} />
        <Route path="/solutions/robotics/overview" element={<RoboticsOverview />} />
        <Route path="/solutions/robotics/applications" element={<RoboticsApplications />} />
        <Route path="/solutions/robotics/safety" element={<RoboticsSafety />} />

        {/* ===== NEW INDUSTRIES ROUTES ===== */}
        <Route path="/industries/food-beverages" element={<FoodBeverages />} />
        <Route path="/industries/pharma" element={<PharmaIndustry />} />
        <Route path="/industries/home-appliances" element={<HomeAppliances />} />
        <Route path="/industries/ev-manufacturing" element={<EVManufacturing />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;