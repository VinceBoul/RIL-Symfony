# RIL-Symfony

## explications préalables 

Définition 'bundle'

bundle utilisés 

* Doctrine ORM
* Webpack encore bundle
* Knp bundle
> Possibilité d'utiliser d'autres systèmes de base de données 
Mongo / Maria Db etc 
 
Twig : 
* moteur de template php 
* conditions 
* boucles 
* héritage de template 
* filtres / extensions 
* custom twig extensions 

## Projet de recettes 

### Partie 0 - Installation du projet 
vérifier les pré requis demandés par le module

### Partie I - Création d'une entité 

**- Créer l'entité Recette**

Propriétés de l'entité Recette : 

  * Nom
  * Accroche
  * *Difficulté
  * Texte
  * Durée totale
  * Durée préparation
  * *Durée cuisson
  * *Image
  * *Ingrédients

> *facultif 
  
**- Créer les pages du CRUD**

**- Créer plusieurs recette de test**

> Refaire une version à ce niveau dans le git 
> feature/init-entity-props
> faire partir cette feature du master 

* modifier la propriété image pour ça devienne un fichier
* modifier le champ du formulaire
* configurer le dossier des upload 

### Partie II - Templating

**- Installer un framework HTML**
* Montrer les différentes manières 
* Gulp / WebPackencoreBundle / Npm / CDN 
* choix CDN pour aller au plus simple 



**- Styliser la page d'accueil**
* Créer un controller en ligne de commande 
* Nom du controller : SiteController DefaultController 
* Nom de l'action : home / index
**- Améliorer la liste des résultats de recette**
> Ajouter le nombre total de recettes dans la liste

**- Pagination à ajouter sur la liste des recettes**

### Partie III

**- Créer un champ de recherche des recettes (sans auto complétion puis avec)**

**- Créer l'entité *Ingredient***
Propriétés de l'entité Ingredient: 

  * Nom
  * Image

**- Lier l'entité *Ingredient* à l'entité *Recette***

### Partie IV

**- Configurer la connexion utilisateur**

**- Ajouter la propriété *Auteur* à l'entité Recette**

**- Ajouter un système de commentaires**


Notes : 
* [Preprocessors EncoreWebpackBundle](https://symfony.com/doc/current/frontend/encore/css-preprocessors.html)
