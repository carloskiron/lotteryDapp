export interface ILotteryService {
    isOwner(signer: any): any;
    ethBalance(signer: any): any;
    startLottery(duration: number, signer: any): any;
    ownerBalance(signer: any): any;
    prizeBalance(signer: any): any;
    ownerWithdraw(amount: number, signer: any): any;
    prizeWithdraw(amount: number, signer: any): any;
    closeLottery(signer: any): any;
    buyTokens(amount: number, signer: any): any;
    burnTokens(amount: number, signer: any): any;
}
