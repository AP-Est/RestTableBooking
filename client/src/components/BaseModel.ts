import { stateHeader, IRegisteredUser, ISignIn } from '../types/types';
export class BaseModel {
    state: string;
    onChangeModelBase: (state: string) => void;

    constructor() {
        this.state = stateHeader.signOutOk;

        this.onChangeModelBase = (state: string) => {
            return undefined;
        };
    }

    loadWindow() {
        const state = localStorage.getItem('state');
        if (state) {
            this.state = state;
        } else {
            this.state = 'signOutOk';
        }
        this.onChangeModelBase(this.state);
    }

    changeStateExit() {
        this.state = 'signOutOk';
        localStorage.setItem('state', 'signOutOk');
        this.onChangeModelBase(this.state);
        localStorage.removeItem('signInUser');
    }

    async createNewUser(registeredUserObject: IRegisteredUser) {
        const MAIN_URL = 'https://vagon.herokuapp.com';
        try {
            const response = await fetch(MAIN_URL + '/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(registeredUserObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 400) {
                this.state = stateHeader.signUpEmailAlreadyUse;
                localStorage.setItem('state', 'signUpEmailAlreadyUse');
            } else {
                this.state = stateHeader.signUpOk;
                localStorage.setItem('state', 'signUpOk');
                const signInObject = {
                    email: registeredUserObject.email,
                    password: registeredUserObject.password,
                };
                setTimeout(() => this.signInUser(signInObject), 4000);
            }
            this.onChangeModelBase(this.state);
        } catch (err) {
            this.state = stateHeader.signUpError;
            this.onChangeModelBase(this.state);
            localStorage.setItem('state', 'signUpError');
        }
    }

    async signInUser(signInObject: ISignIn) {
        const MAIN_URL = 'https://vagon.herokuapp.com';
        try {
            const response = await fetch(MAIN_URL + '/api/auth/signin', {
                method: 'POST',
                body: JSON.stringify(signInObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 404) {
                this.state = stateHeader.signInUserNotFound;
                localStorage.setItem('state', 'signInUserNotFound');
            } else if (response.status === 401) {
                this.state = stateHeader.signInInvalidPassword;
                localStorage.setItem('state', 'signInInvalidPassword');
            } else {
                this.state = stateHeader.signInOk;
                localStorage.clear();
                const data = await response.json();
                const signInUser = JSON.stringify(await data);
                localStorage.setItem('signInUser', signInUser);
                localStorage.setItem('state', 'signInOk');
            }
            this.onChangeModelBase(this.state);
        } catch (err) {
            this.state = stateHeader.signInError;
            localStorage.setItem('state', 'signInError');
            this.onChangeModelBase(this.state);
        }
    }

    bindChangeModelBase(callback: (state: string) => void) {
        this.onChangeModelBase = callback;
    }
}
