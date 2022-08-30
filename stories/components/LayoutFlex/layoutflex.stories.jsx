import React from "react";
import LayoutFlex from "../../../components/layout-flex";

export default {
    title: "components/LayoutFlex",
    component: LayoutFlex,
};

const styleConfig = {
    height: "512px",
    width: "512px",
    display: "flex",
    flex_direction: "row",
    justify_content: "space-between",
    align_items: "center",
    flex_wrap: "nowrap",
    background: "white",
    border: "1px",
    border_color: "lightblue",
    margin_top: "100px",
    margin_left: "100px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const Template = (args) => (
    <LayoutFlex
        styleConfig={args.styleConfig}
    >
    </LayoutFlex>);

export const Dynamic = Template.bind({});

// making controls

Dynamic.args = {
    styleConfig: styleConfig
};

export const Default = () => (
    <LayoutFlex
        styleConfig={styleConfig}
    >
    </LayoutFlex>
);