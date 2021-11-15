import { Candidate } from "../Main";
import Box from "@material-ui/core/Box";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import { Tab } from "@material-ui/core";
import { WalletBalance } from "./WalletBalance";
import { VoteStorage } from "./VoteStorage";
interface YourWalletProps {
  supportedCandidates: Array<Candidate>;
}
export const YourWallet = ({ supportedCandidates }: YourWalletProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <h1>Choose Your Candidate!</h1>
        <Box>
          <TabContext value={selectedTokenIndex.toString()}>
            <TabList onChange={handleChange} aria-label="stake form tabs">
              {supportedCandidates.map((candidate, index) => {
                return (
                  <Tab
                    label={candidate.name}
                    value={index.toString()}
                    key={index}
                  />
                );
              })}
            </TabList>
            {supportedCandidates.map((candidate, index) => {
              return (
                <TabPanel value={index.toString()} key={index}>
                  <div>
                    <WalletBalance
                      candidate={supportedCandidates[selectedTokenIndex]}
                    />
                    <VoteStorage
                      candidate={supportedCandidates[selectedTokenIndex]}
                    />
                  </div>
                </TabPanel>
              );
            })}
          </TabContext>
        </Box>
      </Box>
    </div>
  );
};
