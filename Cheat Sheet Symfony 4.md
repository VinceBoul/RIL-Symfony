# Symfony 4 - Fiche de rappel 

## Pré-requis

* Serveur Apache Local ( WAMP, MAMP, XAMP)
* PHP version: 7.1.3 ou plus
* IDE : Sublim Text / Visual Code / PHPStorm / WebStorm
* Composer [Lien de téléchargement](https://getcomposer.org/download/)
* Interface de ligne de commandes

## Création du projet 

Pour installer le projet, utiliser l'installeur de packages `composer`.

`composer create-project symfony/website-skeleton my-project`

## Lancement du site en local
Pour simuler le site sur votre environnement local, lancer les commandes suivantes : 

Se placer dans le répertoire projet : `cd my-project`

Lancer le serveur : `php bin/console server:run`

Vous pouvez désormais accéder à votre site local via l'URL `127.0.0.1:8000` (Cette adresse peut différer selon votre machine).

## Vérification des pré requis pour Symfony
Composer vous permet d'installer de nombreuses librairies, et entre autre **Symfony Requirements Checker**.
Cette librairie ajoute un fichier `check.php` dans le dossier `public/` de votre projet.

Lancer la commande suivante pour installer la librairie : 
```
composer require symfony/requirements-checker
```

Rendez vous ensuite sur votre local à l'adresse `127.0.0.1:8000/check.php`.
Vous aurez alors un listing des corrections à appliquer à votre environnement local, pour être dans des conditions optimales pour développer votre site.

## Création de la base de données

### Configuration de la BdD
Vous devez d'abord vous rendre dans le fichier `.env` à la racine du projet, et saisir les paramètres de connexion à votre BdD locale.

```
DATABASE_URL="mysql://user_name:password@localhost_url:mysql_port/database_name"
```

### Initialisation de la BdD

Une fois la configuration prête, lancer la commande suivante, qui va créer votre BdD : 

```
php bin/console doctrine:database:create
```
> Si une erreur se produit, vérifiez à nouveau les paramètres saisies pour la constante `DATABASE_URL`

Rendez-vous ensuite sur votre interface de base de données locale, pour vérifier qu'elle a bien été créé.

## Création d'une entité

Les entités sont des classes PHP qui vont vous permettre de mettre en place la logique de votre site.
_Exemple_ : Pour faire un site de réservations de voitures, vous allez probablement créer les entités suivantes : 

* Voiture
* Loueur
* Devis
* Facture
* Assurance
* etc...

> Les entités que vous allez créer vont dépendre de la conception que vous voulez mettre en oeuvre.

### Génération de la classe PHP
Pour créer une entité, utiliser la commande suivante :
```
php bin/console make:entity
```

Votre ligne de commande vous demandera alors plusieurs renseignements :
* Nom de la classe de l'entité
* Les propriétés de l'entité

Lorsque vous avez terminé d'ajouter les propriétés de votre entité, vous pourrez retrouver la classe générée dans le dossier `src/Entity`.

### Créations des tables SQL pour vos entités

Maintenant que la classe a été créé, il faut créer la table SQL correspondante.
La console Symfony va continuer à nous aider sur ce point.

#### Génération des fichiers de migration

Pour créer les tables SQL correspondantes, il faut d'abord générer des fichiers de migrations, via la commande suivante :
```
 php bin/console make:migration 
```
*Pour en savoir plus sur le bundle DoctrineMigrationsBundle, rendez-vous [ici](https://symfony.com/doc/current/bundles/DoctrineMigrationsBundle/index.html)*

Cela va créer des classes PHP _versionnées_ contenant les requêtes SQL pour créer la structure des entités en BdD.
Ces classes se trouvent dans le répertoire `src/Migrations`.

#### Mise à jour de la BdD

Pour mettre à jour la BdD, lancer la commande suivante : 
```
php bin/console doctrine:migrations:migrate
``` 
> Remarque : Vous devez avoir initialisé votre base de données pour pouvoir lancer la commande suivante

## Générer un CRUD *(Create / Read / Update / Delete)*

> Remarque : Pour générer une structure dite "CRUD", vous devez avoir créé au moins une entité

La commande suivante permet de générer un CRUD : 
> Vous devrez spécifier l'entité d'origine du CRUD
```
php bin/console make:crud  
```

