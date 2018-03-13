Simflex
## SIMFLEX
Simflex est un framework html/css/javascript créer pour but de simplifier l'emplacement des éléments sur un site web baser sur les flexbox.


>Simflex 
>--------
> Sim = simple

> flex = flexbox


`Pour utiliser les scss, vous aurez besoin de nodejs et gulpjs`

`npm install`

`npm install gulp -g`


Pour utiliser gulpjs pour le scss utiliser la commande watch

`gulp scss`


Il vous suffit simplement d'ajouter une colonne précise, avoir une hauteur précise ou non et des éléments à placer.

Les colonnes

 - Colonne pour grand écran, moyen et petit.
 - Disponible jusqu'à 24 colonnes.

 La classe à ajouter pour les colonnes est 
 `c = colonne lg= Type d'écran 24 = nombre de colonne utilisé`
 
 Type d'écran
 

 - Large = lg
 - Moyen = md
 - Petit = xs

Gardez ça en tête, car simplement pour beaucoup de classe de **Simflex** ses type d'écran est beaucoup utilisé.

----------


Donc possibilité de customiser exemple :

    <section class="clg12(colonne de 12/24 sur un écran grand)">
	(contenue de la balise HTML)
	<section>
	
## La hauteur

Simplement à vous de la définir.


## Les emplacements

Les emplacements sur une balise HTML est plutôt simple.

- **D'abord on sélectionne la ou l'on souhaite visée dans la balise (top, center, bottom).**

Après on choisis si on veux que l'élément se met a gauche au center ou a droite.

- left, center, right

Ensuite on choisi le type d'écran ( lg, md ,xs ).

Exemple :
 `<section class="top-left_lg center-block_md bottom-right_xs>"
 `
 
 Dans cette exemple nous voyons qu'en écran large celui ci sera placer en haut a gauche, en medium au center et en petite écran en bas a droite.

`Bien sur center-block est different pour la simple est bonne raison de ne pas porter a confusion si c'était center-center( peux toujours changer ) `

`Encore une précision le texte se comporte de la même manière pour le centrer avec center-block_(type d'écran).`


## Le carousel


A venir


-----
J'ai un site provisoire pour Simflex ( sera changer a l'avenir )
` Site en construction`

[Simflex](romaint.promo-5.codeur.online/simflex/)

Si vous voulez me parler pour comprendre certaine chose ou me dire si c'est mal expliqué: [linkedin](linkedin.com/in/romain-tharradin-4a6291159/)

Vous pouvez apporter toute modificaton et je changerais si ça peux être encore plus simple ou des ajouts. 

Bien sur utiliser le plus de flexbox possible, si ce n'est pas possible il faudrais voir si c'est compatible avec le framework.
