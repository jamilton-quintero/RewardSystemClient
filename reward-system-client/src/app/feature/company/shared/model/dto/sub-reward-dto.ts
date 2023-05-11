export class SubRewardDto {

    id: number;
    pointsToRedeem: number;
    name: string;

    constructor(
        id: number,
        pointsToRedeem: number,
        name: string
    ) {
        this.id = id;
        this.pointsToRedeem = pointsToRedeem;
        this.name = name;
    }
}