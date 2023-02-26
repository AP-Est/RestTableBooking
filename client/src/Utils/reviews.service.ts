import { Reviews } from './../Utils/reviews.interface';

export class ServiceReviews {
    public async getReviews(): Promise<Reviews[]> {
        const response = await fetch('http://localhost:3000/api/reviews');
        const data = await response.json();
        return data;
    }

    public async createNewReview(reviewObject: Reviews): Promise<Reviews> {
        const response = await fetch('http://localhost:3000/api/reviews', {
            method: 'POST',
            body: JSON.stringify(reviewObject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        console.log(data.username);
        return data;
    }
}
