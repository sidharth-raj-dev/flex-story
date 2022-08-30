import React from "react";
import Card from "./../../components/card";
import LayoutFlex from "./../../components/layout-flex";

// this composition is made of four card component and one layout component 

const cards = [1,2,3,4];

function LayoutFlexAndCard({styleConfig}) {
    return(
        <LayoutFlex styleConfig={styleConfig.layoutFlexStyleConfig}>
            {
                cards.map((number) => <Card styleConfig={styleConfig.cardStyleConfig} key={number}/>)
            }
        </LayoutFlex>
    );
}

export default LayoutFlexAndCard;