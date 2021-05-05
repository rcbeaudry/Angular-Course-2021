export class AuthService
{
    // reach out to real service, get login info, whatever

    loggedIn = false;

    isAuthenticated()
    {
        // Put in a fake delay, to make it look like we checked a server
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( ()=>{resolve(this.loggedIn);},800);
            }
        )
        return promise;
    }

    login()
    {
        // Fake
        this.loggedIn = true;
    }

    logout()
    {
        // Fake
        this.loggedIn = false;
    }
}
