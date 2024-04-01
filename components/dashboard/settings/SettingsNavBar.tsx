import React from "react";
import Items from "./Items";

const SettingsNavBar = (props: any) => {
  return (
    <div id="settingsnav" className="">
      <div className="flex items-center gap-12 text-white">
        <span
          onClick={() => props.setActivePage("AccountPage")}
          className="cursor-pointer"
        >
          <Items
            section_name="Account Setting"
            page_name="account"
            isActive={props.activePage == "AccountPage"}
          />
        </span>
        <span
          onClick={() => props.setActivePage("ProfilePage")}
          className="cursor-pointer"
        >
          <Items
            section_name="Profile Setting"
            page_name="profile"
            isActive={props.activePage == "ProfilePage"}
          />
        </span>
        <span
          onClick={() => props.setActivePage("PaymentPage")}
          className="cursor-pointer"
        >
          <Items
            section_name="Payment & Plans"
            page_name="payment"
            isActive={props.activePage == "PaymentPage"}
          />
        </span>
        <span
          onClick={() => props.setActivePage("NotificationPage")}
          className="cursor-pointer"
        >
          <Items
            section_name="Notification Setting"
            page_name="notification"
            isActive={props.activePage == "NotificationPage"}
          />
        </span>
      </div>
    </div>
  );
};

export default SettingsNavBar;
