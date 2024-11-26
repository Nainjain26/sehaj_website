"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import Link from "next/link";


type PricingOption = {
  period: string;
  price: string;
};

type ContentItem = {
  id: string;
  label: string;
  type: "pricing" | "description";
  options?: PricingOption[];
  description?: string;
};

type NestedTabsProps = {
  content: ContentItem[];
};

const NestedTabs: React.FC<NestedTabsProps> = ({ content }) => {
  return (
    <Tabs aria-label="Options" className="mt-5">
      {content.map((item) => (
        <Tab key={item.id} title={item.label} className="text-3xl font-semibold">
          <Card>
            <CardBody>
              {item.type === "pricing" ? (
                <div className="flex">

                  {item.options?.map((option, index) => (
                    <div
                      key={index}
                      className="ml-20 border-solid rounded-3xl p-10 shadow-2xl bg-green-100"
                    >
                      <h1 className="text-3xl text-green-700">{option.period}</h1>
                      <p className="text-2xl pt-3">{option.price} +GST</p>
                      <p className="mt-10">
                        {/* <Link
                          href="/Buy-now"
                          className="border rounded-3xl bg-blue-400 text-white text-3xl p-2"
                        >
                          Buy Now
                        </Link> */}
                      </p>
                    </div>
                  ))}
                </div>
                
              ) : (
                <p>{item.description}</p>
              )}

              
            </CardBody>
          </Card>
        </Tab>
      ))}
    </Tabs>
  );
};

export default NestedTabs;
