import { Candidate } from "../Main";
import { useEthers } from "@usedapp/core";
import { Button, Input, CircularProgress, withWidth } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GiveVote } from "../../hooks/GiveVote";
export interface VoteStorageProps {
  candidate: Candidate;
}

// votestate === 'mining'
export const VoteStorage = ({ candidate }: VoteStorageProps) => {
  const { account } = useEthers();
  const { image, index, name } = candidate;
  const {
    voteCandidate,
    voteState,
    isChairperson,
    getWinner,
    winnerState,
    showWinner,
  } = GiveVote(index);
  const [buttonState, setButtonState] = useState<boolean>(false);
  const handleVoteSubmit = () => {
    voteCandidate(index);
    setButtonState(true);
    setButtonClicked("result");
    // console.log(isChairperson())
  };
  const [buttonClicked, setButtonClicked] = useState("");
  const [opendiv, setOpenDiv] = useState(false);
  const handleGetWinner = () => {
    getWinner();
    setButtonClicked("Getting winner....");
    setOpenDiv(true);
  };
  const printWinner = () => {
    // const nameOfwinner = showWinner();
    setButtonClicked(showWinner());
  };
  useEffect(() => {
    if (winnerState.status === "Success") {
      printWinner();
      //call any function in which use showWinner to get winner name
    }
  }, [winnerState]);

  // useEffect(() => {
  //   if (voteState.status !== 'mining') {
  //     setButtonClicked("Voted");
  //   }
  // },[voteState])
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          color="primary"
          disabled={buttonState}
          variant="contained"
          onClick={handleVoteSubmit}
          size="large"
          style={{
            margin: "5px",
          }}
        >
          Vote!!!
        </Button>
        <div>
          <Button
            color="primary"
            variant="contained"
            onClick={handleGetWinner}
            size="large"
          >
            GetWinner!!!
          </Button>
        </div>
      </div>
      {opendiv && (<div
        className="modal"
        style={{
          backgroundColor: "rgba(195, 125, 125,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          width: "500px",
          zIndex: 10,
          position: "absolute",
          top: "40vh",
          borderRadius:"20px"
        }}
      >
        <button type="submit" style={{
            position: "absolute",
            top: ".5rem",
            right: "1.3rem",
            fontSize: "2rem",
            color: "#333",
            cursor: "pointer",
            border: "none",
            background: "none",
        }} onClick={() => setOpenDiv(false)}>X</button>
        <h3>winner : {buttonClicked}</h3>
      </div>)}
    </>
  );
};
