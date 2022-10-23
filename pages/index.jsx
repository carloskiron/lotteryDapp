import { ethers } from "ethers";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import {container} from "tsyringe";
import OwnerView from "../components/ownerView";
import PlayerView from "../components/playerView";
import { LotteryService } from "../services/LotteryService";

export default function Home() {

   //get the service instance
  const lotteryServiceInstance = container.resolve(LotteryService);
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [isOwner, setIsOwner] = useState(false);

  async function connect() {
    console.info("connecting to metamask");
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
        setIsOwner( await lotteryServiceInstance.isOwner(provider.getSigner()) );
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <Container className="md-container">
      <Head>
        <title>Lottery Dapp</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          Welcome to <a href="#"> awesome lottery</a>
        </h1>
        {isOwner ? <OwnerView signer={signer} lotteryService={lotteryServiceInstance} /> : 
        <PlayerView signer={signer} lotteryService={lotteryServiceInstance} />}
      </Container>
      <footer className="cntr-footer">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="text-secondary">Group 2 - Solidity Bootcamp</span>
        </a>
      </footer>
    </Container>
  );
}
