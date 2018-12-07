module.exports = {
    general: {
        lang: "lang"
    },
    nav: {
        home: "Home",
        login: "Log In",
        register: "Sign Up",
        about: "About",
        logout: "Log out"
    },
    home: {
        hello: "hello",
        content: {
            test: "content"
        }
    },
    pages: {
        register: {
            title: "Sign Up",
            fields: {
                username: "Username",
                email: "Email",
                password: "Password",
                confirmPass: "Confirm password"
            },
            link: {
                text: "Already have an account?",
                btn: "Log in"
            },
            btn: "sign up"
        },
        login: {
            title: "Log in",
            fields: {
                login: "Email",
                pw: "Password"
            },
            link: "Forgot password ?",
            btn: "Log In"
        },
        forgottenPassword: {
            title: "Reset your password",
            infos:
                "You will receive en email with a link to set your new password",
            button: "Send me an email",
            success: "You just received an email"
        },
        resetPassword: {
            button: "Reset your password",
            userNotFound: "Utilisateur introuvable avec cette adresse email"
        }
    },
    modals: {
        default: {
            title: "Example modal title"
        }
    },
    errors: {
        emptyField: "Field {{field}} is empty",
        invalidEmail: "Invalid mail format",
        identical: "Old password equals new password",
        notIdentical: "Password are not equals",
        wrongPassword: "Incorrect old password",
        wrongCredentials: "Wrong credentials",
        tokenNotFound: "Cannot find token",
        passwordNotFound: "Unregistered password",
        userNotFoundWithToken: "Cannot find any user with this token"
    }
};
