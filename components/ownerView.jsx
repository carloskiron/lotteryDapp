import { useEffect, useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import CommonView from "./commonView";

export default function OwnerView({ signer, lotteryService }) {

    return (
        <Container>
            <Row className="justify-content-md-between">
                <Card className="sml-card">
                    <Card.Body>
                        <Card.Title>Start Lottery</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="sml-card">
                    <Card.Body>
                        <Card.Title>Owner Withdraw</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <CommonView signer={signer} lotteryService={lotteryService} />
        </Container>
    );
}