module.exports = {
    general: {
        lang: "langue"
    },
    home: {
        hello: "bonjour",
        content: {
            test: "contenu"
        }
    },
    pages: {
        login: {
            title: "Connexion",
            fields: {
                login: "Nom d'utilisateur",
                pw: "Mot de passe"
            },
            btn: "connexion"
        },
        forgottenPassword: {
            title: "Réinitialiser votre mot de passe",
            infos:
                "Nous vous enverrons les informations dont vous avez besoin.",
            button: "Envoyer un email de réinitialisation de mot de passe",
            success: "Un email vient de vous être envoyé"
        },
        resetPassword: {
            button: "Réinitialiser votre mot de passe",
            userNotFound: "Utilisateur introuvable avec cette adresse email"
        }
    },
    modals: {
        default: {
            title: "Titre modal d'exemple"
        }
    },
    errors: {
        emptyField: "Veillez remplir le champ {{field}}",
        invalidEmail: "Le format d'email est invalide",
        identical: "L'ancien mot de passe est identique au nouveau",
        notIdentical: "Les mots de passe ne sont pas identiques",
        wrongPassword: "L'ancien mot de passe est incorrect",
        wrongCredentials: "Vos identifiants sont incorrects",
        tokenNotFound: "Clef d'inscription introuvable",
        passwordNotFound: "Mot de passe non renseigné",
        userNotFoundWithToken:
            "Utilisateur introuvable avec cette clef d'inscription"
    }
};
