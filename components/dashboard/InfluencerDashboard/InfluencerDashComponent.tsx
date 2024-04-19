"use client";
import { useState } from "react";
import Sidebar from "../Sidebar";
import DashHomeInf from "./DashHomeInf";
import ProductsInf from "./ProductsInf";
import InfluencerInf from "./InfluencerInf";
import ReportsInf from "./ReportsInf";
import CampaignsInf from "./CampaignsInf";
import Settings from "../Settings";

function InfluencerDashComponent() {
  const [activePage, setActivePage] = useState("DashHomePage");
  return (
    <Layout>
      <div className="bg-[#1E2023] w-[80%] min-h-screen overflow-y-auto flex">
        <RenderPage />
      </div>
    </Layout>
  );

  function RenderPage() {
    if (activePage == "DashHomePage") {
      return <DashHomeInf />;
    }
    if (activePage == "ProductsPage") {
      return <ProductsInf />;
    }
    if (activePage == "InfluencersPage") {
      return <InfluencerInf />;
    }
    if (activePage == "ReportsPage") {
      return <ReportsInf />;
    }
    if (activePage == "CampaignsPage") {
      return <CampaignsInf />;
    }
    if (activePage == "SettingsPage") {
      return <Settings />;
    }
  }

  function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full flex">
        <div className="bg-[#1E2023] w-[20%]">
          <Sidebar setActivePage={setActivePage} activePage={activePage} />
        </div>
        {children}
      </div>
    );
  }
}

export default InfluencerDashComponent;
