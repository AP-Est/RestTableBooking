import { IBaseTableOrder } from '../types/types';

const MAIN_URL = 'https://vagon.herokuapp.com';

export class ServiceReviews {
    public async getReviews(): Promise<IBaseTableOrder[]> {
        const response = await fetch(`${MAIN_URL}/api/reserve`);
        const data = await response.json();
        return data;
    }

    public async createNewReview(reviewObject: IBaseTableOrder): Promise<IBaseTableOrder> {
        const response = await fetch(`${MAIN_URL}/api/reserve`, {
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
