module.exports = {
    general: {
        lang: "langue"
    },
    nav: {
        home: "Accueil",
        login: "Connexion",
        register: "Inscription",
        about: "À Propos",
        logout: "Deconnexion"
    },
    home: {
        hello: "bonjour",
        content: {
            test: "contenu"
        }
    },
    pages: {
        register: {
            title: "Inscription",
            fields: {
                username: "Nom",
                email: "Email",
                password: "Mot de passe",
                confirmPass: "Confirmer le mot de passe"
            },
            link: {
                text: "Déjà inscrit ?",
                btn: "Se connecter"
            },
            btn: "s'inscrire"
        },
        login: {
            title: "Connexion",
            fields: {
                login: "Email",
                pw: "Mot de passe"
            },
            link: "Mot de passe oublié ?",
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
