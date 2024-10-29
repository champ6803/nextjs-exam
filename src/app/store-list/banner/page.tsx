import React from "react";
import Banner from "@/components/Banner";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Store Management | Banner",
  description:
    "Banner",
};

const BannerPage = () => {
  return (
    <DefaultLayout>
      <Banner />
    </DefaultLayout>
  );
};

export default BannerPage;
