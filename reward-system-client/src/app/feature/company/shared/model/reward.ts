export interface Reward {
    pointsToRedeem: number;
    name: string;
    dailyPointsLimit: number;
    weeklyPointsLimit: number;
    pointsAccumulatedMessage: string;
    redemptionMessage: string;
    pointsRange: number;
    expirationDate: Date;
}
