import { ethers } from "ethers";
import { ILotteryService } from "./ILotteryService";
import { injectable } from "tsyringe";
import lotteryTokenJSON from "../assets/abi/G2Token.json";
import lotteryJSON from "../assets/abi/G2Lottery.json";

const LOTTERY_TOKEN_ADDRESS = "0x2AD372078F533E36077f7D8745173d319fe7990c"; // LotteryToken contract
const LOTTERY_ADDRESS = "0x98fdf5AB41c6c5442d7Be343a6Ee930E2D12bCa5"; // Lottery contract
const LOTTERY_TOKEN_ABI = lotteryTokenJSON.abi; // MyToken contract ABI
const LOTTERY_ABI = lotteryJSON.abi; // TokenizedBallot contract ABI

@injectable()
export class LotteryService implements ILotteryService {
  // init
  provider: ethers.providers.Provider;
  lotteryTokenContract: ethers.Contract;
  lotteryTokenSignedContract: ethers.Contract;
  lotteryContract: ethers.Contract;
  lotterySignedContract: ethers.Contract;

  constructor() {
    this.provider = ethers.getDefaultProvider("goerli");
    this.lotteryTokenContract = new ethers.Contract(
      LOTTERY_TOKEN_ADDRESS,
      LOTTERY_TOKEN_ABI,
      this.provider
    );
    this.lotteryContract = new ethers.Contract(
      LOTTERY_ADDRESS,
      LOTTERY_ABI,
      this.provider
    );
    /*const private_key = process.env.PRIVATE_KEY;
    const wallet = new ethers.Wallet(private_key, this.provider);
    const signer = wallet.connect(this.provider);
    this.lotteryTokenSignedContract = this.lotteryTokenContract.connect(signer);
    this.lotterySignedContract = this.lotteryContract.connect(signer);*/
  }

  async isOwner(signer: ethers.Signer){
    const owner = await this.lotteryContract.connect(signer).owner();
    return owner === await signer.getAddress();
  }
}
