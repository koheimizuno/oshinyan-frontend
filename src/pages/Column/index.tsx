import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import Title from "../../components/common/Typography/Title";

function Column() {
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="コラムページ" />
        <Title title="推しニャンコラム" />
      </Container>
    </MainLayout>
  );
}

export default Column;
