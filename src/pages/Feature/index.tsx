import { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";

const Feature = () => {

  return (
    <>
      <MainLayout>
        <Carousel />
        <Container>
          <div className="mt-4">
            <PageBar page="特集"/>
          </div>
          <div className="text-[32px] leading-[43px] mt-4 pb-[14px] border-b border-[#CBB279]">特集（仮）一覧</div>
          <div className="mt-[32px] mb-[56px]">
          <Pagination count={11} defaultPage={6} siblingCount={0} />
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Feature;
