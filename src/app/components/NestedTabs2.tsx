"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import NestedTabs from "./NestedTabs";

// Define the types
type NestedTabContent = {
  id: string;
  label: string;
  type: "pricing" | "description";
  options?: { period: string; price: string }[];
  description?: string;
};

type Tier = {
  id: string;
  label: string;
  content: NestedTabContent[];
};

type TierTabsProps = {
  items: Tier[];
};

const TierTabs: React.FC<TierTabsProps> = ({ items }) => {
  return (
    <Tabs aria-label="Tiers" items={items} className="font-semibold md:text-3xl mt-10">
      {(item) => (
        <Tab key={item.id} title={item.label}>
          <NestedTabs content={item.content} />
        </Tab>
      )}
    </Tabs>
  );
};

export default TierTabs;

