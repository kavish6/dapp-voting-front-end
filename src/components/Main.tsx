/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />
import modi from "../modi.jpg"
import putin from "../putin.jpg"
import { YourWallet } from "./VoteBox/VoteBox";
export type Candidate ={
    image:string
    index: number
    name: string
}
export const Main = () =>{

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