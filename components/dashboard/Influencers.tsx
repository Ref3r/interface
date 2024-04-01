import React from "react";
import CardsInfluencersForBrands from "../cards/CardsInfluencersForBrands";
import Image from "next/image";

function Influencers() {
  return (
    <div className="w-[98%] flex flex-col pt-10 pb-6 gap-6">
      <div className="text-white flex justify-between">
        <p className="text-3xl font-semibold">Influencers Portfolio</p>
        <div className="w-[40%] flex justify-end">
          <div className="flex justify-center items-center text-white border-white w-[50%] bg-black  rounded-full px-2">
          <Image
            src="/search.svg"
            width="252"
            height="300"
            className="w-[15%]"
            alt="Ref3r logo"
          />
            <input
              type="text"
              placeholder="Search events"
              className="text-white h-[2.5rem] w-[90%] rounded-full border-white bg-black px-2 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-wrap">
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Micheal Wong"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"HiredCharts.svg"}
          name="Yugank"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Rahul"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Ansh"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Kishen"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Saksham"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Saksham"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Saksham"
          description="An example description will go here"
          followers={"45689"}
        />
        <CardsInfluencersForBrands
          image={"/icons/ProfileIcon.svg"}
          name="Saksham"
          description="An example description will go here"
          followers={"45689"}
        />
      </div>
    </div>
  );
}

export default Influencers;
