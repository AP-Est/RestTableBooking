import { stateHeader, IRegisteredUser, ISignIn } from '../types/types';
import { ServiceRegistration } from './../Utils/registration.service';

export class BaseModel {
    state: string;
    onChangeModelBase: (state: string) => void;

    public registeredUsersService = new ServiceRegistration();

    constructor() {
        this.state = stateHeader.signOutOk;

        this.onChangeModelBase = (state: string) => {
            return undefined;
        };
    }

    loadWindow() {
        console.log('loadWindow');
        this.onChangeModelBase(this.state);
    }

    async createNewUser(registeredUserObject: IRegisteredUser) {
        const MAIN_URL = 'http://localhost:3000';
        try {
            const response = await fetch(MAIN_URL + '/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(registeredUserObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 400) {
                console.log('createNewUser response', response);
                console.log('400');
                this.state = stateHeader.signUpEmailAlreadyUse;
            } else {
                console.log('createNewUser response', response);
                console.log('ok');
                this.state = stateHeader.signUpOk;
                const signInObject = {
                    email: registeredUserObject.email,
                    password: registeredUserObject.password,
                };
                setTimeout(() => this.signInUser(signInObject), 4000);
            }
            this.onChangeModelBase(this.state);
        } catch (err) {
            console.log('createNewUser err', err);
            this.state = stateHeader.signUpError;
            this.onChangeModelBase(this.state);
        }
    }

    async signInUser(signInObject: ISignIn) {
        const MAIN_URL = 'http://localhost:3000';
        try {
            const response = await fetch(MAIN_URL + '/api/auth/signin', {
                method: 'POST',
                body: JSON.stringify(signInObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('signInUser response', response);
            if (response.status === 404) {
                console.log('signInUser response if', response);
                console.log('404');
                this.state = stateHeader.signInUserNotFound;
            } else if (response.status === 401) {
                console.log('signInUser response if', response);
                console.log('401');
                this.state = stateHeader.signInInvalidPassword;
            } else {
                console.log('signInUser response if', response);
                console.log('signInUser ok');
                this.state = stateHeader.signInOk;
                localStorage.clear();
                const data = await response.json();
                const signInUser = JSON.stringify(await data);
                localStorage.setItem('signInUser', signInUser);
                console.log('localStorage signInUser', signInUser);
            }
            this.onChangeModelBase(this.state);
        } catch (err) {
            console.log('signInUser err', err);
            this.state = stateHeader.signInError;
            this.onChangeModelBase(this.state);
        }
    }

    bindChangeModelBase(callback: (state: string) => void) {
        this.onChangeModelBase = callback;
    }
}
