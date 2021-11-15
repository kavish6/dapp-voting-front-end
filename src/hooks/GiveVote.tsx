import { useEthers, useContractFunction, useContractCall } from "@usedapp/core";
import networkMapping from "../chain-info/deployments/map.json";
import Voting from "../chain-info/contracts/Voting.json";
import { constants, utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useEffect } from "react";
export const GiveVote = (index: number) => {
  const { account } = useEthers();
  const { chainId } = useEthers();
  const { abi } = Voting;
  const votingInterface = new utils.Interface(abi);
  const votingAddress = chainId
    ? networkMapping[String(chainId)]["Voting"][0]
    : constants.AddressZero;
  const votingContract = new Contract(votingAddress, votingInterface);
  const { state: voteState, send: voteSend } = useContractFunction(
    votingContract,
    "vote",
    { transactionName: "vote" }
  );
  const { state: winnerState, send: winnerSend } = useContractFunction(
    votingContract,
    "getWinnerName",
    { transactionName: "get Winner" }
  );
  const voteCandidate = (index: number) => {
    return voteSend(index);
  };
  const [Winner] =
    useContractCall({
      abi: votingInterface,
      address: votingAddress,
      method: "winnerName",
      args: [],
    }) ?? [];
  const getWinner = () => {
    winnerSend();
  };
  const showWinner = () => {
    return Winner;
  };
  const [Chairperson] =
    useContractCall({
      abi: votingInterface,
      address: votingAddress,
      method: "chairperson",
      args: [],
    }) ?? [];
  const isChairperson = () => {
    if (account == Chairperson) return true;
    return false;
  };
  return {
    isChairperson,
    getWinner,
    voteCandidate,
    voteState,
    winnerState,
    showWinner,
  };
};
