"use client";

import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

// Define a type for the content structure
type PricingOption = {
  period: string;
  price: string;
};

type TierContent = {
  id: string;
  label: string;
  type: "pricing" | "description";
  options?: PricingOption[]; // Only for pricing
  description?: string; // Only for description
};

// Define a type for the Tier item
type Tier = {
  id: string;
  label: string;
  content: TierContent[];
};

// Props for TierTabs
interface TierTabsProps {
  items: Tier[];
}

const TierTabs: React.FC<TierTabsProps> = ({ items }) => {
  const [selectedTier, setSelectedTier] = useState(items[0]?.id || "");

 
  return (
    <div className="mt-4">
      <Tabs
        aria-label="Tier Tabs"
        items={items}
        selectedKey={selectedTier}
        // onSelectionChange={setSelectedTier}
        className="mb-5"
      >
        {(tier) => (
          <Tab key={tier.id} title={tier.label} className="md:text-3xl text-xl font-semibold max-w-[1240px] mx-auto ">
            <div className="mt-4">
              {tier.content.map((contentItem) => (
                <div key={contentItem.id} className="mt-4 ">
                  {contentItem.type === "pricing" ? (
                    <Card className="mb-4">
                      <CardBody>
                        <h3 className="md:text-4xl font-semibold text-blue-700">{contentItem.label}</h3>
                        <div className="flex flex-wrap gap-4 mx-auto mt-4">
                          {contentItem.options?.map((option, index) => (
                            <div
                              key={index}
                              className="border rounded-3xl p-4 shadow-md bg-green-200 flex-1 min-w-[45%]"
                            >
                              <h4 className="md:text-2xl text-lg font-semibold">{option.period}</h4>
                              <p className="md:text-lg text-sm mt-2">Price: {option.price} + GST</p>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  ) : (
                    <Card className="mb-4">
                      <CardBody>
                        <h3 className="text-xl font-semibold">{contentItem.label}</h3>
                        <p className="mt-2">{contentItem.description}</p>
                      </CardBody>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default TierTabs;
