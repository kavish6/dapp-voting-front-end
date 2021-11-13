/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />
import networkMapping from  "../chain-info/deployments/map.json"
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json"
import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json"
import modi from "../modi.jpg"
import putin from "../putin.jpg"
import { YourWallet } from "./YourWallet/YourWallet";
export type Candidate ={
    image:string
    index: number
    name: string
}
export const Main = () =>{
    // Show token values from the wallet 
    // Get the address of different token
    // Get the balance of the users wallet
    // send the brownie-config  to our src folder
    //send the build folder to our src folder
    const supportedCandidates: Array<Candidate>=[
        {image:putin,
        index:0,
        name:"Putin"},
        {image:modi,
            index:1,
            name:"Modi"}
    ]
    return(<YourWallet supportedCandidates={supportedCandidates}/>)
}