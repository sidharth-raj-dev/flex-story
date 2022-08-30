import React from "react";
import LayoutFlexAndCard from "../../../compositions/layout-flex-and-card";

export default {
    title: "compositions/LayoutFlexAndCard",
    component: LayoutFlexAndCard,
    argTypes: {
        flex_direction: {
            options: ["row", "column"],
            control: { type: "radio" },
        },
        justify_content: {
            options: ["flex-start" , "flex-end" , "center" , "space-between" , "space-around" , "space-evenly"],
            control: { type: "radio" },
        },
        align_items: {
            options: ["flex-start" , "flex-end" , "center" , "baseline" , "stretch"],
            control: { type: "radio" },
        },
        flex_wrap: {
            options: ["nowrap", "wrap", "wrap-reverse"],
            control: { type: "radio" },
        },
    }
};

const Template = (args) => (
    <LayoutFlexAndCard
        flex_direction={args.flex_direction}
        justify_content={args.justify_content}
        align_items={args.align_items}
        flex_wrap={args.flex_wrap}
    />
);

export const Dynamic = Template.bind({});

// making controls

Dynamic.args = {
    flex_direction: "row",
    justify_content: "space-around",
    align_items: "center",
    flex_wrap: "nowrap"
};

export const Default = () => (
    <LayoutFlexAndCard
        flex_direction="row"
        justify_content= "space-around"
        align_items="center"
        flex_wrap="nowrap"
    />
);