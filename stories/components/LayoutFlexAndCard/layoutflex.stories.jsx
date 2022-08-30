import React from "react";
import LayoutFlexAndCard from "../../../compositions/layout-flex-and-card";

export default {
    title: "compositions/LayoutFlexAndCard",
    component: LayoutFlexAndCard,
};

const styleConfig = {
    layoutFlexStyleConfig: {
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
    },
    cardStyleConfig: {
        height: "100px",
        width: "100px",
        border: "1px",
        border_color: "lightblue",
        border_radius: "9px",
        background: "#f5fbfc",
        margin_top: "0px",
        margin_left: "0px",
        margin_bottom: "0px",
        margin_right: "0px"
    }
};

const Template = (args) => (
    <LayoutFlexAndCard
        styleConfig={args.styleConfig}
    />
);

export const Dynamic = Template.bind({});

// making controls

Dynamic.args = {
    styleConfig: styleConfig
};

export const Default = () => (
    <LayoutFlexAndCard
        styleConfig={styleConfig}
    />
);