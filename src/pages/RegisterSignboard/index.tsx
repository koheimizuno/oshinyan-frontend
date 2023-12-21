import React, { useState } from "react";
import PropTypes from "prop-types";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import SignboardRegisterForm from "../../components/common/SignboardRegisterForm";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

interface TabContainerProps {
  id: number;
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const CustomTab = withStyles({
  root: {
    backgroundColor: "#fff",
    minWidth: "370px",
    color: "#B7B7B7",
    fontSize: "24px",
    borderRadius: "8px 8px 0 0",
  },
  selected: {
    backgroundColor: "#CBB279",
    color: "white",
  },
})(Tab);

const RegisterSignboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <MainLayout>
      <Container>
        <div className="mt-4">
          <PageBar page="未登録看板猫情報募集" />
        </div>
        <div className="mt-[56px] mb-[64px]">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            className="mt-[56px]"
          >
            <CustomTab label="看板猫登録" />
            <CustomTab label="推しニャンアンバサダー募集" />
          </Tabs>
          {tabValue === 0 && (
            <TabContainer id={0}>
              <SignboardRegisterForm />
            </TabContainer>
          )}
          {tabValue === 1 && (
            <TabContainer id={1}>
              <SignboardRegisterForm />
            </TabContainer>
          )}
        </div>
      </Container>
    </MainLayout>
  );
};

export default RegisterSignboard;
