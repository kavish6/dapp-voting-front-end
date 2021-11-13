import {Candidate} from  "../Main"
import { useEthers } from "@usedapp/core"
import {Button,Input,CircularProgress} from "@material-ui/core"
import React,{ useEffect, useState} from "react"
import { GiveVote  } from "../../hooks/GiveVote"
export interface VoteStorageProps{
    candidate:Candidate
}
export const VoteStorage=({candidate}:VoteStorageProps)=>{
    const {account} = useEthers()
    const {image,index, name} =candidate 
    const {voteCandidate,voteState,isChairperson,getWinner,winnerState,showWinner} = GiveVote(index)
    const [buttonState,setButtonState]=useState<boolean>(false)
    const  handleVoteSubmit=()=>{
        voteCandidate(index)
        setButtonState(true)
        // console.log(isChairperson())
        // const amountAsWei= utils.parseEther(amount.toString())
        // return approveAndStake(amountAsWei.toString())
    }   

    const handleGetWinner=()=>{
        getWinner() 
    }
    useEffect(()=>{
      if(winnerState.status==="Success"){
        console.log(showWinner())
        //call any function in which use showWinner to get winner name
      }      
    },[winnerState])
        return(<>
             <Button color="primary" disabled={buttonState} variant="contained"  onClick={handleVoteSubmit} size="large">Vote!!!</Button>
             <div>
             <Button color="primary" disabled={!isChairperson()}  variant="contained"  onClick={handleGetWinner} size="large">GetWinner!!!</Button>                 
             </div>
             </>
             )
}