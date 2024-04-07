import React from "react";
import CardsActiveCampaigns from "../cards/CardsActiveCampaigns";
import CardsPastCampaigns from "../cards/CardsPastCampaigns";

function PastCampaigns() {
  return (
    <div className="flex flex-col gap-4">
      <CardsPastCampaigns
        campaign="Campaign 1"
        campaigndesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consequatur maxime magnam, ipsum, voluptates odit iusto autem quod, dolorum voluptate sunt suscipit dolor. Maxime, facilis."
        number={"30"}
        balance={"20"}
        total={"200"}
      />
      <CardsPastCampaigns
        campaign="Campaign 2"
        campaigndesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consequatur maxime magnam, ipsum, voluptates odit iusto autem quod, dolorum voluptate sunt suscipit dolor. Maxime, facilis."
        number={"50"}
        balance={"20"}
        total={"200"}
      />
      <CardsPastCampaigns
        campaign="Campaign 3"
        campaigndesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consequatur maxime magnam, ipsum, voluptates odit iusto autem quod, dolorum voluptate sunt suscipit dolor. Maxime, facilis."
        number={"40"}
        balance={"20"}
        total={"200"}
      />
    </div>
  );
}

export default PastCampaigns;
