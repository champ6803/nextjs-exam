import React from "react";
import Items from "@/components/Items";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Store Management | Items",
  description:
    "Items",
};

const ItemsPage = () => {
  return (
    <DefaultLayout>
      <Items />
    </DefaultLayout>
  );
};

export default ItemsPage;
