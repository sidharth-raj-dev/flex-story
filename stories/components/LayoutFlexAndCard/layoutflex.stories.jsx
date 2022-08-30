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
    }
};

const Template = (args) => (
    <LayoutFlexAndCard
        flex_direction={args.flex_direction}
    />
);

export const Dynamic = Template.bind({});

// making controls

Dynamic.args = {
    flex_direction: "row"
};

export const Default = () => (
    <LayoutFlexAndCard
        flex_direction="row"
    />
);