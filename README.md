# Projet PDI 09

L'application produite par l'équipe du PDI 09 est un visualisateur cartographique basé sur l'application OpenSource Mviewer. 

Liens utiles :

- [Site officiel mviewer](https://mviewer.github.io/fr/)
-[Lien vers la documentation(en PDF)]


## Déploiement

Le déploiement se passe en trois étapes :

- Cloner le projet dans le dossier de votre choix
- Copier ce dossier dans le dossier /var/www/ ( ou autres dossiers de déploiement Apache)
  Vous avez maintenant un visualiseur géographique fonctionnel centré sur le Parc du Golfe du Lion.
- Installer le Geoserver. Une partie de la documentaion utilisateur y est dédiée.
- Si vous souhaitez publier vos propres couches/thèmes, modifiez le fichier `apps/default.xml`, en suivant la documentation technique fournie avec le projet


## Fichier apps/default.xml

Le fichier de configuration permet la personnalisation des thèmes/couches du visualiseur ; une configuration par
défaut est fournie dans `apps/default.xml`, vous pouvez le dupliquer et l'adapter à vos besoins en vous aidant de la [documentation.](http://mviewerdoc.readthedocs.io/fr/latest/)
