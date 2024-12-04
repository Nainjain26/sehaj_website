"use client";

import React, { useState } from "react";
import { Tabs, Tab, CardBody, Card } from "@nextui-org/react";
import TierTabs from "../tierTabs";


type PricingOption = {
  period: string;
  price: string;
};

type PricingContent = {
  id: string;
  label: string;
  type: "pricing";
  options: PricingOption[];
};

type DescriptionContent = {
  id: string;
  label: string;
  type: "description";
  description: string;
};

type TierContent = PricingContent | DescriptionContent;

type Tier = {
  id: string;
  label: string;
  content: TierContent[];
};

type TabItem = {
  id: string;
  label: string;
};

 
export default function App() {
    const equityTiers: Tier[] = [
        {
          id: "Basic",
          label: "Basic",
          content: [
            {
              id: "Stock Cash",
              label: "Stock Cash",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "24999 +18%GST" },
                { period: "Half Yearly", price: "44999 +18%GST" },
                { period: "Yearly", price: "79999 +18%GST" },
              ],
            },
            {
              id: " Stock Future",
              label: "Stock Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "24999 +18%GST" },
                { period: "Half Yearly", price: "44999 +18%GST" },
                { period: "Yearly", price: "79999 +18%GST" },
              ],
            },
            {
              id: "Stock Option",
              label: "Stock Option",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "24999 +18%GST" },
                { period: "Half Yearly", price: "44999 +18%GST" },
                { period: "Yearly", price: "79999 +18%GST" },
              ],
            },
            {
              id: "Index Future",
              label: "Index Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "24999 +18%GST" },
                { period: "Half Yearly", price: "44999 +18%GST" },
                { period: "Yearly", price: "79999 +18%GST" },
              ],
            },
            {
              id: "Index Option",
              label: "Index Option",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "24999 +18%GST" },
                { period: "Half Yearly", price: "44999 +18%GST" },
                { period: "Yearly", price: "79999 +18%GST" },
              ],
            },
            {
              id: "Equity combo standard",
              label: "Equity combo standard",
              type: "pricing",
              options: [
                { period: "Monthly", price: "35000 +18%GST" },
                { period: "Quarterly", price: "89999 +18%GST" },
                { period: "Half Yearly", price: "-" },
                { period: "Yearly", price: "-" },
              ],
            },
            {
              id: "  Future STBT/BTST",
              label: "Future STBT/BTST",
              type: "pricing",
              options: [
                { period: "Monthly", price: "21999 +18%GST" },
                { period: "Quarterly", price: "59999 +18%GST" },
                { period: "Half Yearly", price: "99999 +18%GST" },
                { period: "Yearly", price: "-" },
              ],
            },
          ],
        },
        {
          id: "Premium",
          label: "Premium",
          content: [
            {
              id: " Cash Premium",
              label: "Cash Premium",
              type: "pricing",
              options: [
                { period: "Monthly", price: "14999 +18%GST" },
                { period: "Quarterly", price: "41999 +18%GST" },
                { period: "Half Yearly", price: "74999 +18%GST" },
                { period: "Yearly", price: "124999 +18%GST" },
              ],
            },
            {
              id: " Future Premium ",
              label: "Stock Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "14999 +18%GST" },
                { period: "Quarterly", price: "41999 +18%GST" },
                { period: "Half Yearly", price: "74999" },
                { period: "Yearly", price: "124999 +18%GST" },
              ],
            },
            {
              id: " Option Premium",
              label: "Stock Premium",
              type: "pricing",
              options: [
                { period: "Monthly", price: "14999 +18%GST" },
                { period: "Quarterly", price: "41999 +18%GST" },
                { period: "Half Yearly", price: "74999 +18%GST" },
                { period: "Yearly", price: "124999 +18%GST" },
              ],
            },
            {
              id: "Index Future",
              label: "Index Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "27000 +18%GST" },
                { period: "Half Yearly", price: "51000 +18%GST" },
                { period: "Yearly", price: "99999 +18%GST" },
              ],
            },
            {
              id: "Index Option",
              label: "Index Option",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "27000 +18%GST" },
                { period: "Half Yearly", price: "51000 +18%GST" },
                { period: "Yearly", price: "99999 +18%GST" },
              ],
            },
            {
              id: "Equity combo prime",
              label: "Equity combo prime",
              type: "pricing",
              options: [
                { period: "Monthly", price: "44999 +18%GST" },
                { period: "Quarterly", price: "119999 +18%GST" },
                { period: "Half Yearly", price: "-" },
                { period: "Yearly", price: "-" },
              ],
            },
            {
              id: "Positional Combo",
              label: "Positional Combo",
              type: "pricing",
              options: [
                { period: "Monthly", price: "44999 +18%GST" },
                { period: "Quarterly", price: "110000 +18%GST" },
                { period: "Half Yearly", price: "-" },
                { period: "Yearly", price: "-" },
              ],
            },
          ],
        },
        // {
        //   id: "HNI",
        //   label: "HNI",
        //   content: [
        //     {
        //       id: "Stock Cash",
        //       label: "Stock Cash",
        //       type: "pricing",
        //       options: [
        //         { period: "Monthly", price: "51000" },
        //         { period: "Quarterly", price: "125000" },
                
        //       ],
        //     },
        //     {
        //       id: "Stock Future",
        //       label: "Stock Future",
        //       type: "pricing",
        //       options: [
        //         { period: "Monthly", price: "51000" },
        //         { period: "Quarterly", price: "125000" },
               
        //       ],
        //     },
        //     {
        //       id: "Stock Option",
        //       label: "Stock Option",
        //       type: "pricing",
        //       options: [
        //         { period: "Monthly", price: "51000" },
        //         { period: "Quarterly", price: "125000" },
               
        //       ],
        //     },
        //     {
        //       id: "Index Future",
        //       label: "Index Future",
        //       type: "pricing",
        //       options: [
        //         { period: "Monthly", price: "51000" },
        //         { period: "Quarterly", price: "125000" },
        //       ],
        //     },
        //     {
        //       id: "Index Option",
        //       label: "Index Option",
        //       type: "pricing",
        //       options: [
        //         { period: "Monthly", price: "51000" },
        //         { period: "Quarterly", price: "125000" },
        //       ],
        //     },
        //   ],
        // },
      ];
    

  const commodityTiers: Tier[] = [
    {
        id: "Basic",
        label: "Basic",
        content: [
          {
            id: "Base Matels",
            label: "Base Matels",
            type: "pricing",
            options: [
                { period: "Monthly", price: "14999 +18%GST" },
                { period: "Quarterly", price: "41999 +18%GST" },
                { period: "Half Yearly", price: "74999 +18%GST" },
                { period: "Yearly", price: "124999 +18%GST" },
            ],
          },
          {
            id: "Bullions",
            label: "Bullions",
            type: "pricing",
            options: [
                { period: "Monthly", price: "14999 +18%GST" },
                { period: "Quarterly", price: "41999 +18%GST" },
                { period: "Half Yearly", price: "74999 +18%GST" },
                { period: "Yearly", price: "124999 +18%GST" },
            ],
          },
          {
            id: "Energy",
            label: "Energy",
            type: "pricing",
            options: [
                { period: "Monthly", price: "9999 +18%GST" },
                { period: "Quarterly", price: "24999 +18%GST" },
                { period: "Half Yearly", price: "44999 +18%GST" },
                { period: "Yearly", price: "79999 +18%GST" },
            ],
          },
        ],
      },
      {
        id: "Premium",
        label: "Premium",
        content: [
          {
            id: "Base Matels",
            label: "Base Matels",
            type: "pricing",
            options: [
              { period: "Monthly", price: "14999 +18%GST" },
              { period: "Quarterly", price: "41999 +18%GST" },
              { period: "Half Yearly", price: "74999 +18%GST" },
              { period: "Yearly", price: "124999 +18%GST" },
            ],
          },
          {
            id: "Bullions",
            label: "Bullions",
            type: "pricing",
            options: [
              { period: "Monthly", price: "14999 +18%GST" },
              { period: "Quarterly", price: "41999 +18%GST" },
              { period: "Half Yearly", price: "74999 +18%GST" },
              { period: "Yearly", price: "124999 +18%GST" },
            ],
          },
          {
            id: "Energy",
            label: "Energy",
            type: "pricing",
            options: [
              { period: "Monthly", price: "9999 +18%GST" },
              { period: "Quarterly", price: "24999 +18%GST" },
              { period: "Half Yearly", price: "44999 +18%GST" },
              { period: "Yearly", price: "79999 +18%GST" },
            ],
          },
        ],
      },
      // {
      //   id: "HNI",
      //   label: "HNI",
      //   content: [
      //     {
      //       id: "Base Matels",
      //       label: "Base Matels",
      //       type: "pricing",
      //       options: [
      //           { period: "Monthly", price: "51000" },
      //           { period: "Quarterly", price: "125000" },
      //       ],
      //     },
      //     {
      //       id: "Bullions",
      //       label: "Bullions",
      //       type: "pricing",
      //       options: [
      //           { period: "Monthly", price: "51000" },
      //           { period: "Quarterly", price: "125000" },
      //       ],
      //     },
      //     {
      //       id: "Energy",
      //       label: "Energy",
      //       type: "pricing",
      //       options: [
      //           { period: "Monthly", price: "51000" },
      //           { period: "Quarterly", price: "125000" },
      //       ],
      //     },
      //   ],
      // },
  ];


  const [selectedTab, setSelectedTab] = useState<string>("Equity");
  const [selectedTier, setSelectedTier] = useState<string>("Basic"); // Track selected tier

  const tabItems: TabItem[] = [
    { id: "Equity", label: "Equity" },
    { id: "Commodity", label: "Commodity" },
  ];

  const tierItems: TabItem[] = [
    { id: "Basic", label: "Basic" },
    { id: "Premium", label: "Premium" },
    // { id: "HNI", label: "HNI" },
  ];

  return (
    <div className="flex w-full flex-col bg-blue-50">
      <Tabs
        aria-label="Main Tabs"
        items={tabItems}
        className="font-semibold md:text-3xl mt-3 max-w-[1240px] mx-auto"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key.toString())}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <span
                className={`${
                  selectedTab === item.id
                    ? "text-white font-bold border border-blue-600 p-2 md:px-20 rounded-xl bg-blue-400"
                    : "text-black"
                }`}
              >
                {item.label}
              </span>
            }
            className="md:mx-20 md:my-5 text-xl md:text-3xl"
          >
            <Card>
              <CardBody>
                {item.id === "Equity" && (
                  <Tabs
                    aria-label="Tier Tabs"
                    selectedKey={selectedTier}
                    onSelectionChange={(key) => setSelectedTier(key.toString())} 
                  >
                    {tierItems.map((tier) => (
                      <Tab
                        key={tier.id}
                        title={
                          <span
                            className={`${
                              selectedTier === tier.id
                                ? "text-white font-bold border border-blue-600 p-2  rounded-xl bg-blue-500"
                                : "text-black"
                            }`}
                          >
                            {tier.label}
                          </span>
                        }
                      >
                        <TierTabs
                          items={equityTiers.filter((tier) => tier.id === selectedTier)}
                        />
                      </Tab>
                    ))}
                  </Tabs>
                )}
                {item.id === "Commodity" && (
                  <Tabs
                    aria-label="Tier Tabs"
                    selectedKey={selectedTier}
                    onSelectionChange={(key) => setSelectedTier(key.toString())} 
                  >
                    {tierItems.map((tier) => (
                      <Tab
                        key={tier.id}
                        title={
                          <span
                            className={`${
                              selectedTier === tier.id
                                ? "text-white font-bold border border-blue-600 p-2 rounded-xl bg-blue-500"
                                : "text-black"
                            }`}
                          >
                            {tier.label}
                          </span>
                        }
                      >
                        <TierTabs
                          items={commodityTiers.filter((tier) => tier.id === selectedTier)}
                        />
                      </Tab>
                    ))}
                  </Tabs>
                )}
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
