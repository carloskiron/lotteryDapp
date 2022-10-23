import { useEffect, useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import CommonView from "./CommonView";

export default function PlayerView({ signer, lotteryService }) {

    return (
        <Container>
            <Row className="justify-content-md-between">
                <Card className="sml-card">
                    <Card.Body>
                        <Card.Title>Buy Tokens</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="sml-card">
                    <Card.Body>
                        <Card.Title>Burn Tokens</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
                <Card className="sml-card col-12">
                    <Card.Body>
                        <Card.Title>Prize Withdraw</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <CommonView signer={signer} lotteryService={lotteryService} />
        </Container>
    );
}