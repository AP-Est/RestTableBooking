import { Reviews } from './../Utils/reviews.interface';

export class ServiceReviews {
    public async getReviews(): Promise<Reviews[]> {
        const response = await fetch('https://vagon.herokuapp.com/api/reviews');
        const data = await response.json();
        return data;
    }

    public async createNewReview(reviewObject: Reviews): Promise<Reviews> {
        const response = await fetch('https://vagon.herokuapp.com/api/reviews', {
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
