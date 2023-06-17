export class RewardDto {
    id: number;
    pointsToRedeem: number;
    name: string;
    multiReward: boolean;
    dailyPointsLimit: number;
    weeklyPointsLimit: number;
    pointsAccumulatedMessage: string;
    redemptionMessage: string;
    pointsRange: number;
    expirationDate: Date;

    constructor(
        id: number,
        pointsToRedeem: number,
        name: string,
        dailyPointsLimit: number,
        weeklyPointsLimit: number,
        pointsAccumulatedMessage: string,
        redemptionMessage: string,
        pointsRange: number,
        expirationDate: Date
    ) {
        this.id = id;
        this.pointsToRedeem = pointsToRedeem;
        this.name = name;
        this.dailyPointsLimit = dailyPointsLimit;
        this.weeklyPointsLimit = weeklyPointsLimit;
        this.pointsAccumulatedMessage = pointsAccumulatedMessage;
        this.redemptionMessage = redemptionMessage;
        this.pointsRange = pointsRange;
        this.expirationDate = expirationDate;
    }
}