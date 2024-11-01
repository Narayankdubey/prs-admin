"use client";
import React, { lazy, } from "react";
import { CustomTabs } from "@/components/general";
import UploadModal from "./components/upload-modal";
import { Button } from "@/components/ui/button";

const CustomerTable = lazy(() => import("./components/customer-table"));
const CustomerStats = lazy(() => import("./components/stats"));

const tabsData = [
  {
    title: "Table",
    value: "table",
    component: CustomerTable,
  },
  {
    title: "Stats",
    value: "stats",
    component: CustomerStats,
  },
];

const CustomerContainer = () => {

  return (
    <div className="p-5">
      <CustomTabs
        data={tabsData}
        action={
          <UploadModal
            trigger={<Button > Upload File</Button>}
          />
        }
      />
    </div>
  );
};

export default CustomerContainer;
