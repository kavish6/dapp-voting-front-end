import { formatUnits } from "@ethersproject/units"
import { useEthers ,useTokenBalance} from "@usedapp/core"
import {Candidate} from "../Main"
// import { BalanceMsg } from "../../components/BalanceMsg"
export interface WalletBalanceProps {
    candidate : Candidate
}
export const WalletBalance = ({candidate}: WalletBalanceProps) => {
    const {image,index, name} =candidate 
    // const {account} = useEthers()
    // const tokenBalance =useTokenBalance(address,account)
    // const formattedTokenBalance: number= tokenBalance ? parseFloat(formatUnits(tokenBalance,18)):0
    return (<div style={{
    }}>
        <h1>{name}</h1>
        <img style={{height:"400px",width:"auto"}} src={image} alt={`${name}`}/>
    </div>) 
}   