module.exports = {
    general: {
        lang: "lang"
    },
    home: {
        hello: "hello",
        content: {
            test: "content"
        }
    },
    pages: {
        login: {
            title: "Log in",
            fields: {
                login: "Username",
                pw: "Password"
            },
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
    errors: {
        emptyField: "Veillez remplir le champ {field}",
        invalidEmail: "Le format d'email est invalide",
        identical: "L'ancien mot de passe est identique au nouveau",
        notIdentical: "Les mots de passe ne sont pas identiques",
        wrongPassword: "L'ancien mot de passe est incorrect",
        wrongCredentials: "Vos identifiants sont incorrects",
        outdatedSubscription: "Votre abonnement est expiré",
        tokenNotFound: "Clef d'inscription introuvable",
        passwordNotFound: "Mot de passe non renseigné",
        userNotFoundWithToken:
            "Utilisateur introuvable avec cette clef d'inscription",
        accountDisabled: "Compte désactivé",
        noDatas: "Pas de données pour les actes selectionnés"
    }
};
