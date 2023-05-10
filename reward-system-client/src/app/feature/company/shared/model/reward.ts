export interface Reward {
    pointsToRedeem: number;
    availableRewards: string;
    dailyPointsLimit: number;
    weeklyPointsLimit: number;
    pointsAccumulatedMessage: string;
    redemptionMessage: string;
    pointsRange: number;
    expirationDate: Date;
}
