"use client";

import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

// Define the PricingOption type
type PricingOption = {
  period: string;
  price: string;
};

// Define the TierContent type
type TierContent = {
  id: string;
  label: string;
  type: "pricing" | "description";
  options?: PricingOption[]; // For pricing data
  description?: string; // For description content
};

// Define the Tier type
type Tier = {
  id: string;
  label: string;
  content: TierContent[];
};

// Define the props for the component
interface TierTabsProps {
  items: Tier[];
}

const TierTabs: React.FC<TierTabsProps> = ({ items }) => {
  const [selectedTier, setSelectedTier] = useState(items[0]?.id || ""); // Set initial selected tier

  return (
    <div className="mt-4">
      <Tabs
        aria-label="Tier Tabs"
        items={items}
        selectedKey={selectedTier}
        onSelectionChange={(key) => setSelectedTier(String(key))}
        className="mb-5"
      >
        {(tier) => (
          <Tab
            key={tier.id}
            title={tier.label}
            className="md:text-3xl text-xl  font-semibold max-w-[1240px] mx-auto"
          >
            <div className="mt-4 ">
              {tier.content.map((contentItem) => (
                <div key={contentItem.id} className="mt-4 ">
                  {contentItem.type === "pricing" ? (
                    <Card className="mb-4">
                      <CardBody>
                        {/* Heading */}
                        <h3 className="md:text-4xl  font-semibold text-blue-700">
                          {contentItem.label}
                        </h3>

                        {/* Pricing Table */}
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full border-collapse border border-gray-300  text-center">
                            <thead>
                              <tr className="bg-blue-300">
                                <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                                  Duration
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                                  Price- ₹(INR )
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                                  Buy Now
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {contentItem.options?.map((option, index) => (
                                <tr key={index}>
                                  <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                                    {option.period}
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                                    {option.price} 
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">
                                   
                                      <Link
                                        href={"/Bank-details"}
                                       className="bg-green-300 text-white px-4 py-2 rounded-lg text-sm md:text-base  hover:bg-blue-600  transition"
                                      >
                                        Pay Now
                                      </Link>
                                   
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardBody>
                    </Card>
                  ) : (
                    <Card className="mb-4">
                      <CardBody>
                        <h3 className="text-xl font-semibold">
                          {contentItem.label}
                        </h3>
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
