import { ethers } from "ethers";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import {container} from "tsyringe";
import { LotteryService } from "../services/LotteryService";

export default function Home() {

   //get the service instance
  const instance = container.resolve(LotteryService);
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
        setIsOwner( await instance.isOwner(provider.getSigner()) );
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
        <Container>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Proposals</Card.Title>
                <Card.Text>
                  Current voting proposals:
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Recent votes</Card.Title>
                <Card.Text>Last on-chain votes:</Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Voting tokens</Card.Title>
                <Card.Text>Request voting tokens</Card.Text>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Vote</Card.Title>
                <Card.Text>Cast your vote!</Card.Text>
                <Button variant="primary" href="#">
                  Vote &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
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
