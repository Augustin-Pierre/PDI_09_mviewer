Doc v1

Documentation pour les devs:

## Mviewer

Pour pouvoir afficher la carte du PNMGL, utiliser **http://localhost/**

# Organisation des fichiers

**NE PAS MODIFIER LES FICHIERS EN DEHORS DU DOSSIER apps**
Si vous devez modifier un fichier en dehors, mettez-le dans `common`

Les fichiers attenants au projet sont présents dans `apps/pnmgl`

Le fichier pour ajouter/enlever des couches est `apps/default.xml`

# Interactions 

Pour pouvoir interagir avec les différentes couches, il faut préciser l'attribut queryable="true" dans l'attribution de la couche dans le fichier `default.xml`


## Géoserveur

# Authentification :
username: admin
mdp : geoserver

Espace de travail: pnmgl

Entrepôts: 
-Entrepôts de test
    - pnmgl:departement: pour effectuer des tests, issus d'un fichier shapefile présent dans apps/pnmgl/data
-Chapitre 6: Usages
    - pnmgl:us_med_PNMGL_parcours_jetski_2023_ofb_ln_4326
    - pnmgl:us_med_PNMGL_cale_de_mise_a_leau_ofb_pt_4326"
    - pnmgl:us_med_PNMGL_chantier_naval_AAMP_pt_L93
    - pnmgl:us_med_PNMGL_plan_balisage_plages_ofb_pol_4326
    - pnmgl:us_med_PNMGL_route_transport_commerce_ofb_ln_4326
    - pnmgl:us_med_PNMGL_sites_plongee_2021_ofb_pt_4326
    - pnmgl:us_med_PNMGL_zones_initiation_jetski_2023_ofb_pol_4326

