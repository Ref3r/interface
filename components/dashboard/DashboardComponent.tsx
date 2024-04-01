"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import DashHome from "./DashHome";
import Products from "./Products";
import Influencers from "./Influencers";
import Reports from "./Reports";
import Campaigns from "./Campaigns";
import Settings from "./Settings";

function DashboardComponent() {
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
      return <DashHome />;
    }
    if (activePage == "ProductsPage") {
      return <Products />;
    }
    if (activePage == "InfluencersPage") {
      return <Influencers />;
    }
    if (activePage == "ReportsPage") {
      return <Reports />;
    }
    if (activePage == "CampaignsPage") {
      return <Campaigns />;
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

export default DashboardComponent;
