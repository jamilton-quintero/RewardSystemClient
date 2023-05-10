export class RewardDto {

    id: number;
    pointsToRedeem: number;
    availableRewards: string;
    dailyPointsLimit: number;
    weeklyPointsLimit: number;
    pointsAccumulatedMessage: string;
    redemptionMessage: string;
    pointsRange: number;
    expirationDate: Date;

    constructor(
        id: number,
        pointsToRedeem: number,
        availableRewards: string,
        dailyPointsLimit: number,
        weeklyPointsLimit: number,
        pointsAccumulatedMessage: string,
        redemptionMessage: string,
        pointsRange: number,
        expirationDate: Date
    ) {
        this.id = id;
        this.pointsToRedeem = pointsToRedeem;
        this.availableRewards = availableRewards;
        this.dailyPointsLimit = dailyPointsLimit;
        this.weeklyPointsLimit = weeklyPointsLimit;
        this.pointsAccumulatedMessage = pointsAccumulatedMessage;
        this.redemptionMessage = redemptionMessage;
        this.pointsRange = pointsRange;
        this.expirationDate = expirationDate;
    }
}