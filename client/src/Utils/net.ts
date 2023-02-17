import { IBaseTableOrder } from '../types/types';

const MAIN_URL = 'http://localhost:3000';

export class ServiceReviews {
    public async getReviews(): Promise<IBaseTableOrder[]> {
        const response = await fetch(`http://localhost:3000/api/reserve`);
        const data = await response.json();
        return data;
    }

    public async createNewReview(reviewObject: IBaseTableOrder): Promise<IBaseTableOrder> {
        const response = await fetch('http://localhost:3000/api/reserve', {
            method: 'POST',
            body: JSON.stringify(reviewObject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    }
}
