 # Guide de Contribution

Bienvenue dans ce dépôt ! Ce document explique les conventions et le workflow à suivre pour collaborer efficacement sur ce projet.

## 🌳 Workflow de branches (GitHub Flow)

La branche principale du projet est la branche `main`. 
**Règle d'or : Il est strictement interdit de pousser (push) du code directement sur la branche `main`.**

Pour toute modification, veuillez suivre ces étapes :

1. Mettez à jour votre version locale de `main` : `git pull origin main`
2. Créez une branche dédiée à partir de `main`.
3. Développez et validez (commit) vos changements sur cette branche.
4. Poussez (push) la branche sur le dépôt distant.
5. Ouvrez une Pull Request (PR) vers `main`.

## 🏷️ Nomenclature des branches

Afin de garder un historique clair, le nom des branches doit décrire l'intention du développement. Utilisez les préfixes suivants, en anglais et en minuscules, séparés par des tirets :

*   `feat/nom-de-la-fonctionnalite` : Pour l'ajout d'une nouvelle fonctionnalité.
*   `fix/nom-du-bug` : Pour la correction d'un bug.
*   `docs/nom-de-la-doc` : Pour la rédaction ou la modification de documentation.
*   `chore/nom-de-la-tache` : Pour les tâches de maintenance, la CI, ou la configuration (ex: `chore/setup-actions`).

*Exemple : `feat/formulaire-login` ou `fix/erreur-calcul-panier`*

## 📝 Conventions de Commits

Nous utilisons les [Conventional Commits](https://www.conventionalcommits.org/). Vos messages de commit doivent être clairs et suivre ce format : `type: description courte`

Types autorisés :
*   `feat:` (nouvelle fonctionnalité)
*   `fix:` (correction de bug)
*   `docs:` (documentation)
*   `style:` (formatage, point-virgule manquant, etc.)
*   `refactor:` (refactorisation du code)
*   `test:` (ajout ou modification de tests)
*   `chore:` (mise à jour de dépendances, configuration)

*Exemple : `feat: ajout du bouton de déconnexion`*

## 🔄 Processus de Pull Request (PR)

Pour qu'une Pull Request soit fusionnée (mergée) dans `main`, elle doit obligatoirement remplir les conditions suivantes :

1.  **L'intégration continue (CI) doit passer :** Les tests et le linter configurés via GitHub Actions doivent être au vert.
2.  **Approbation requise :** La PR doit être relue et approuvée par au moins 1 autre membre de l'équipe (Review).
3.  **Nettoyage :** Une fois la PR fusionnée, la branche de développement doit être supprimée pour garder le dépôt propre.