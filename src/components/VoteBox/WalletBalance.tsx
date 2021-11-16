import { formatUnits } from "@ethersproject/units"
import { useEthers ,useTokenBalance} from "@usedapp/core"
import {Candidate} from "../Main"
export interface WalletBalanceProps {
    candidate : Candidate
}
export const WalletBalance = ({candidate}: WalletBalanceProps) => {
    const {image,index, name} =candidate 
    return (<div style={{
    }}>
        <h1>{name}</h1>
        <img style={{height:"400px",width:"auto"}} src={image} alt={`${name}`}/>
    </div>) 
}   