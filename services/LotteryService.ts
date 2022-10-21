import { ethers } from "ethers";
import { ILotteryService } from "./ILotteryService";
import { injectable } from "tsyringe";

const LOTTERY_TOKEN_ADDRESS = ""; // LotteryToken contract
const LOTTERY_ADDRESS = ""; // Lottery contract
//const LOTTERY_TOKEN_ABI = lotteryTokenJSON.abi; // MyToken contract ABI
//const LOTTERY_ABI = lotteryJSON.abi; // TokenizedBallot contract ABI

@injectable()
export class LotteryService implements ILotteryService {
  // init
  provider: ethers.providers.Provider;
  lotteryTokenContract: ethers.Contract;
  lotteryTokenSignedContract: ethers.Contract;
  lotteryContract: ethers.Contract;
  lotterySignedContract: ethers.Contract;

  constructor() {
    //TODO
  }
}
