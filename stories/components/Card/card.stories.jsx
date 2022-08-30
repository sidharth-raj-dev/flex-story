import React from "react";
import Card from "../../../components/card";

export default {
    title: "components/Card",
    component: Card,
};

const config = {
    height: "250px",
    width: "250px",
    border: "1px",
    border_color: "lightblue",
    border_radius: "9px",
    background: "#f5fbfc",
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const Template = (args) => <Card {...args} />;

export const Dynamic = Template.bind({});

Dynamic.args = { 
    styleConfig: config 
};
