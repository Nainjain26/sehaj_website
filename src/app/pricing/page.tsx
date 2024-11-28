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
              id: "Stock Case",
              label: "Stock Case",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999" },
                { period: "Quarterly", price: "27000" },
                { period: "Half Yearly", price: "510000" },
                { period: "Yearly", price: "99999" },
              ],
            },
            {
              id: " Stock Future",
              label: "Stock Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999" },
                { period: "Quarterly", price: "27000" },
                { period: "Half Yearly", price: "510000" },
                { period: "Yearly", price: "99999" },
              ],
            },
            {
              id: "Stock Option",
              label: "Stock Option",
              type: "pricing",
              options: [
                { period: "Monthly", price: "9999" },
                { period: "Quarterly", price: "27000" },
                { period: "Half Yearly", price: "510000" },
                { period: "Yearly", price: "99999" },
              ],
            },
          ],
        },
        {
          id: "Premium",
          label: "Premium",
          content: [
            {
              id: "Stock Case",
              label: "Stock Case",
              type: "pricing",
              options: [
                { period: "Monthly", price: "15000" },
                { period: "Quarterly", price: "42000" },
                { period: "Half Yearly", price: "75000" },
                { period: "Yearly", price: "1250000" },
              ],
            },
            {
              id: "Stock Future",
              label: "Stock Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "15000" },
                { period: "Quarterly", price: "42000" },
                { period: "Half Yearly", price: "75000" },
                { period: "Yearly", price: "1250000" },
              ],
            },
            {
              id: " Stock Option",
              label: "Stock Option",
              type: "pricing",
              options: [
                { period: "Monthly", price: "15000" },
                { period: "Quarterly", price: "42000" },
                { period: "Half Yearly", price: "75000" },
                { period: "Yearly", price: "1250000" },
              ],
            },
          ],
        },
        {
          id: "HNI",
          label: "HNI",
          content: [
            {
              id: "Stock Case",
              label: "Stock Case",
              type: "pricing",
              options: [
                { period: "Monthly", price: "51000" },
                { period: "Quarterly", price: "125000" },
                
              ],
            },
            {
              id: "Stock Future",
              label: "Stock Future",
              type: "pricing",
              options: [
                { period: "Monthly", price: "51000" },
                { period: "Quarterly", price: "125000" },
               
              ],
            },
            {
              id: "Stock Option",
              label: "Stock Option",
              type: "pricing",
              options: [
                { period: "Monthly", price: "51000" },
                { period: "Quarterly", price: "125000" },
               
              ],
            },
          ],
        },
      ];
    

  const commodityTiers: Tier[] = [
    {
        id: "Basic",
        label: "Basic",
        content: [
          {
            id: "EQ Combo",
            label: "EQ Combo",
            type: "pricing",
            options: [
                { period: "Monthly", price: "9999" },
                { period: "Quarterly", price: "27000" },
                { period: "Half Yearly", price: "510000" },
                { period: "Yearly", price: "99999" },
            ],
          },
          {
            id: "Index Future",
            label: "Index Future",
            type: "pricing",
            options: [
                { period: "Monthly", price: "9999" },
                { period: "Quarterly", price: "27000" },
                { period: "Half Yearly", price: "510000" },
                { period: "Yearly", price: "99999" },
            ],
          },
          {
            id: "Index Option",
            label: "Index Option",
            type: "pricing",
            options: [
                { period: "Monthly", price: "9999" },
                { period: "Quarterly", price: "27000" },
                { period: "Half Yearly", price: "510000" },
                { period: "Yearly", price: "99999" },
            ],
          },
        ],
      },
      {
        id: "Premium",
        label: "Premium",
        content: [
          {
            id: "Stock Case",
            label: "Stock Case",
            type: "pricing",
            options: [
                { period: "Monthly", price: "15000" },
                { period: "Quarterly", price: "42000" },
                { period: "Half Yearly", price: "75000" },
                { period: "Yearly", price: "1250000" },
            ],
          },
          {
            id: "Index Future",
            label: "Index Future",
            type: "pricing",
            options: [
                { period: "Monthly", price: "15000" },
                { period: "Quarterly", price: "42000" },
                { period: "Half Yearly", price: "75000" },
                { period: "Yearly", price: "1250000" },
            ],
          },
          {
            id: "Index Option",
            label: "Index Option",
            type: "pricing",
            options: [
                { period: "Monthly", price: "15000" },
                { period: "Quarterly", price: "42000" },
                { period: "Half Yearly", price: "75000" },
                { period: "Yearly", price: "1250000" },
            ],
          },
        ],
      },
      {
        id: "HNI",
        label: "HNI",
        content: [
          {
            id: "Stock Case",
            label: "Stock Case",
            type: "pricing",
            options: [
                { period: "Monthly", price: "51000" },
                { period: "Quarterly", price: "125000" },
            ],
          },
          {
            id: "Index Future",
            label: "Index Future",
            type: "pricing",
            options: [
                { period: "Monthly", price: "51000" },
                { period: "Quarterly", price: "125000" },
            ],
          },
          {
            id: "Index Option",
            label: "Index Option",
            type: "pricing",
            options: [
                { period: "Monthly", price: "51000" },
                { period: "Quarterly", price: "125000" },
            ],
          },
        ],
      },
  ];


  const [selectedTab, setSelectedTab] = useState<string>("Equity");

  const tabItems: TabItem[] = [
    { id: "Equity", label: "Equity" },
    { id: "Commodity", label: "Commodity" },
  ];
   

  return (
    <div className="flex w-full flex-col bg-blue-50">
      <Tabs
        aria-label="Main Tabs"
        items={tabItems}
        className="font-semibold md:text-3xl mt-8 max-w-[1240px] mx-auto"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key.toString())}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <span
                className={`${
                  selectedTab === item.id ? "text-white font-bold border border-blue-600 p-2 rounded-xl bg-blue-400" : "text-black"
                }`}
              >
                {item.label}
              </span>
            }
            className="md:mx-20 md:my-5 text-xl md:text-3xl"
          >
            <Card>
              <CardBody>
                {item.id === "Equity" && <TierTabs items={equityTiers}  />}
                {item.id === "Commodity" && <TierTabs items={commodityTiers} />}
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}