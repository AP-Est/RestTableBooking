import { IRegisteredUser } from '../types/types';
import { ISignIn } from '../types/types';

const MAIN_URL = 'http://localhost:3000';

export class ServiceRegistration {
    // public async getReviews(): Promise<Reviews[]> {
    //     const response = await fetch('http://localhost:3000/api/reviews');
    //     const data = await response.json();
    //     return data;
    // }

    public async createNewUser(registeredUserObject: IRegisteredUser): Promise<IRegisteredUser> {
        console.log('createNewUser');
        const response = await fetch(MAIN_URL + '/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(registeredUserObject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log('createNewUser data', await data);
        return data;
    }

    public async signInUser(signInObject: ISignIn): Promise<ISignIn> {
        const response = await fetch(MAIN_URL + '/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify(signInObject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log('signInUser data', await data);
        return data;
    }
}
