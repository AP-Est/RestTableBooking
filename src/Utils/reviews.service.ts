import { Reviews } from './../Utils/reviews.interface';

export class ServiceReviews {
    public async getReviews(): Promise<Reviews> {
        const response = await fetch('http://localhost:3000/api/reviews');
        const data = await response.json();
        return data;
    }
}
