import React from "react";
import Card from "../../../components/card";

export default {
    title: "components/Card",
    component: Card,
};

const defaultConfig = {
    height: "250px",
    width: "250px",
    border: "0px",
    border_color: "#aaaaaa",
    border_radius: "9px",
    background: "#ff9090",
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};

export const Gradient = () => <Card 
    styleConfig={{
        ...defaultConfig, 
        background: "linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%)"}}
/>;

export const Default = () => <Card styleConfig={defaultConfig}/>;