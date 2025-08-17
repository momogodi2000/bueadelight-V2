# 🚀 Guide de Déploiement - BueaDelights

## 📋 Prérequis

### Outils Requis
- **Node.js 18+** installé
- **Git** configuré
- **Compte Vercel** (recommandé) ou autre plateforme
- **Domaine personnalisé** (optionnel)

### Comptes Services
- **WhatsApp Business** configuré
- **Google Analytics** (optionnel)
- **Google My Business** (optionnel)

## 🛠️ Préparation Locale

### 1. Installation des Dépendances
```bash
# Cloner le projet
git clone [repository-url]
cd bueadelights-site

# Installer les dépendances
npm install

# Vérifier l'installation
npm run dev
```

### 2. Configuration des Variables d'Environnement
```bash
# Copier le fichier d'exemple
cp env.example .env.local

# Éditer les variables
nano .env.local
```

**Variables obligatoires :**
```env
VITE_WHATSAPP_NUMBER=237699808260
VITE_BUSINESS_NAME=BueaDelights
VITE_SITE_URL=https://bueadelights.com
```

### 3. Test Local
```bash
# Lancer le serveur de développement
npm run dev

# Tester le build de production
npm run build
npm run preview
```

## 🌐 Déploiement Vercel (Recommandé)

### 1. Installation Vercel CLI
```bash
npm install -g vercel
```

### 2. Connexion à Vercel
```bash
vercel login
```

### 3. Configuration du Projet
```bash
# Initialiser le projet Vercel
vercel

# Suivre les instructions :
# - Link to existing project: No
# - Project name: bueadelights-official
# - Directory: ./
# - Override settings: No
```

### 4. Configuration des Variables d'Environnement
```bash
# Via CLI
vercel env add VITE_WHATSAPP_NUMBER
vercel env add VITE_BUSINESS_NAME
vercel env add VITE_SITE_URL

# Ou via dashboard Vercel
# Settings > Environment Variables
```

### 5. Déploiement
```bash
# Déploiement de développement
vercel

# Déploiement de production
vercel --prod
```

### 6. Configuration du Domaine
```bash
# Ajouter un domaine personnalisé
vercel domains add bueadelights.com

# Configurer les DNS selon les instructions Vercel
```

## 🔧 Configuration Post-Déploiement

### 1. WhatsApp Business Setup
1. **Configurer le profil business** :
   - Logo haute résolution
   - Description : "Cuisine camerounaise authentique à Buea"
   - Adresse : Buea, Southwest Region
   - Horaires : Lun-Dim 8h00-22h00
   - Site web : [URL du site]

2. **Messages automatiques** :
   - Message de bienvenue
   - Message hors horaires
   - Message occupé

### 2. Google My Business
1. **Créer le profil** :
   - Nom : BueaDelights
   - Catégorie : Restaurant
   - Adresse : Buea, Southwest Region
   - Horaires d'ouverture
   - Photos des plats

2. **Vérification** :
   - Carte postale par courrier
   - Ou vérification par téléphone

### 3. Analytics Setup
```bash
# Google Analytics 4
# 1. Créer une propriété GA4
# 2. Ajouter le tracking ID dans .env.local
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Hotjar (optionnel)
VITE_HOTJAR_ID=XXXXXXX
```

## 📱 Configuration PWA

### 1. Génération des Icons
```bash
# Créer les icônes PWA dans public/assets/logo/
# Tailles requises : 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512
```

### 2. Test PWA
1. **Ouvrir Chrome DevTools**
2. **Onglet Application > Manifest**
3. **Vérifier l'installation**
4. **Tester hors ligne**

### 3. Lighthouse Audit
```bash
# Installer Lighthouse CLI
npm install -g lighthouse

# Audit complet
lighthouse https://bueadelights.com --output html --output-path ./lighthouse-report.html
```

## 🔍 Tests et Validation

### 1. Tests Fonctionnels
- [ ] Navigation responsive
- [ ] Menu avec filtres
- [ ] Ajout au panier
- [ ] Intégration WhatsApp
- [ ] PWA installation
- [ ] Mode hors ligne

### 2. Tests Performance
- [ ] Lighthouse Score ≥ 95
- [ ] Core Web Vitals verts
- [ ] Temps de chargement < 2s
- [ ] Images optimisées

### 3. Tests SEO
- [ ] Meta tags complets
- [ ] Schema.org markup
- [ ] Sitemap généré
- [ ] Robots.txt configuré

## 📊 Monitoring

### 1. Vercel Analytics
- **Performance** : Temps de chargement
- **Erreurs** : Logs d'erreur
- **Trafic** : Visiteurs et pages vues

### 2. Google Analytics
- **Audience** : Visiteurs, sessions, pages vues
- **Comportement** : Parcours utilisateur
- **Conversions** : Commandes WhatsApp

### 3. WhatsApp Business API
- **Messages** : Volume et réponses
- **Conversions** : Commandes complétées
- **Temps de réponse** : Performance équipe

## 🔄 Maintenance

### 1. Updates Réguliers
```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit

# Rebuild et redéployer
npm run build
vercel --prod
```

### 2. Backup
```bash
# Sauvegarder les données importantes
# - Configuration .env.local
# - Images et assets
# - Base de données (si applicable)
```

### 3. Monitoring Continu
- **Uptime** : Vérifier la disponibilité
- **Performance** : Surveiller les métriques
- **Erreurs** : Analyser les logs

## 🆘 Dépannage

### Problèmes Courants

#### 1. Build Failed
```bash
# Vérifier les erreurs
npm run build

# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install
```

#### 2. PWA Non Installable
- Vérifier le manifest.json
- Tester avec HTTPS
- Vérifier les icônes

#### 3. WhatsApp Non Fonctionnel
- Vérifier le numéro de téléphone
- Tester le format international
- Vérifier les permissions

#### 4. Images Non Affichées
- Vérifier les URLs des images
- Tester le mapping d'images
- Vérifier les permissions CORS

## 📞 Support

### Contact Technique
- **Email** : [votre-email]
- **WhatsApp** : +237 6 99 80 82 60
- **Documentation** : [lien-docs]

### Ressources Utiles
- [Documentation Vercel](https://vercel.com/docs)
- [PWA Guidelines](https://web.dev/progressive-web-apps/)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)

---

**Version** : 1.0  
**Dernière mise à jour** : Août 2025  
**Maintenu par** : [Votre nom]
