// src/app/data/event.ts
export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  details?: string; 
  
}

export const EVENTS: EventItem[] = [
  {
     id: 1,
  title: 'Naissance de Napoléon',
  date: '1769-08-15',
  description: 'Naissance de Napoléon Bonaparte à Ajaccio.',
  image: 'napoleon.jpg',
  details: `
    Napoléon Bonaparte est né le 15 août 1769 à Ajaccio, en Corse, quelques mois après l'annexion de l'île par la France.
    Fils d'une famille noble corse, il rejoindra l'armée française, puis gravira les échelons jusqu'à devenir empereur.
    Sa naissance marque le début d'une des figures les plus emblématiques de l'histoire française.`
  },


  {
    id: 2,
    title: 'Révolution Française',
    date: '1789-07-14',
    description: 'Prise de la Bastille',
    image: 'revolution.jpeg',
    details: `
Le 14 juillet 1789, le peuple de Paris prend d'assaut la Bastille, symbole de l'absolutisme royal. 
Cet événement marque le début d’un bouleversement profond de la société française : la monarchie est contestée, les privilèges abolis, et les idées des Lumières prennent vie. 
Les droits de l’homme et du citoyen seront bientôt proclamés, inspirant d’autres peuples en quête de liberté.
`

  },
  {
    id: 3,
    title: 'Première Guerre mondiale',
    date: '1914-07-28',
    description: 'Début du conflit',
    image: 'pgm.jpeg',
    details: `
Le 28 juillet 1914 marque le début d’un conflit d’une ampleur inédite. La Première Guerre mondiale oppose les grandes puissances en deux blocs : les Alliés et les Puissances centrales.
Tranchées, gaz toxiques, artillerie lourde... Le conflit fera plus de 10 millions de morts.
Ce cataclysme changera à jamais la carte politique de l’Europe et laissera des traces profondes dans la mémoire collective.
`

  },
  {
    id: 4,
    title: 'Découverte de l’Amérique',
    date: '1492-10-12',
    description: 'Christophe Colomb atteint les Antilles, marquant la découverte de l’Amérique',
    image: 'colomb.PNG',
    details: `
Le 12 octobre 1492, Christophe Colomb accoste dans les îles des Caraïbes, croyant avoir atteint l’Asie. 
Ce moment historique ouvre la voie aux grandes explorations et à la colonisation du Nouveau Monde.
Mais cette "découverte" aura aussi des conséquences tragiques pour les civilisations autochtones.
`

  },
  {
    id: 5,
    title: 'Réforme protestante',
    date: '1517-10-31',
    description: 'Martin Luther publie ses 95 thèses, divisant le christianisme',
    image: 'reformeprotestante.PNG',
    details: `
En 1517, Martin Luther affiche ses 95 thèses à Wittenberg pour dénoncer les abus de l’Église catholique, notamment la vente des indulgences.
C’est le début d’un schisme religieux majeur en Europe.
La Réforme va bouleverser la religion, la politique et même la culture des sociétés européennes.
`

  },
  {
    id: 6,
    title: 'Indépendance des États-Unis',
    date: '1776-07-04',
    description: 'Les 13 colonies américaines déclarent leur indépendance',
    image: 'IndependenceEU.PNG',
    details: `
Le 4 juillet 1776, les 13 colonies américaines déclarent leur indépendance vis-à-vis de la Grande-Bretagne.
Inspirée des Lumières, la Déclaration d’indépendance proclame que tous les hommes sont égaux.
C’est la naissance des États-Unis d’Amérique, une république fondée sur les principes de liberté et de souveraineté populaire.
`

  },
  {
    id: 7,
    title: 'Défaite de Napoléon à Waterloo',
    date: '1815-06-18',
    description: 'Fin du règne napoléonien, retour des monarchies',
    image: 'defaitewaterloo.PNG',
    details: `
Le 18 juin 1815, Napoléon est battu à Waterloo par les forces alliées menées par le duc de Wellington et Blücher.
Cette défaite marque la fin définitive de l’Empire napoléonien.
Napoléon sera exilé sur l’île de Sainte-Hélène où il terminera ses jours, laissant un héritage politique et militaire immense.
`

  },
  {
    id: 8,
    title: 'Abolition de l’esclavage en France',
    date: '1848-04-27',
    description: 'Suppression définitive de l’esclavage dans les colonies françaises',
    image: 'abolitionescalvagefrance.PNG',
    details: `
Le 27 avril 1848, la Deuxième République abolit l’esclavage dans toutes les colonies françaises.
C’est une victoire pour les mouvements abolitionnistes et une reconnaissance tardive de la dignité des peuples réduits en esclavage.
Victor Schœlcher joue un rôle clé dans cette avancée historique vers la justice et l’égalité.
`

  },
  {
    id: 9,
    title: 'Révolution russe',
    date: '1917-11-07',
    description: 'Les bolcheviks renversent le tsar et instaurent un régime communiste',
    image: 'revolutionrusse.PNG',
    details: `
Le 7 novembre 1917, les bolcheviks prennent le pouvoir à Petrograd, renversant le gouvernement provisoire.
Menée par Lénine, cette révolution donne naissance au premier État communiste de l’histoire.
L’Empire russe devient l’Union soviétique, bouleversant l’équilibre politique mondial pour tout le XXe siècle.
`

  },
  {
    id: 10,
    title: 'Seconde Guerre mondiale',
    date: '1939-09-01',
    description: 'L’Allemagne envahit la Pologne, déclenchant la Seconde Guerre mondiale',
    image: 'DGM.PNG',
    details: `
Le 1er septembre 1939, l’Allemagne nazie envahit la Pologne, déclenchant un conflit mondial d’une ampleur tragique.
Alliances, conquêtes, Résistance, Shoah… Cette guerre a impliqué plus de 60 pays et causé la mort de 60 millions de personnes.
Elle s’achèvera en 1945 par la capitulation du Japon après Hiroshima et Nagasaki, bouleversant définitivement le monde.
`

  },
  {
    id: 11,
    title: 'Chute du Mur de Berlin',
    date: '1989-11-09',
    description: 'Le Mur de Berlin tombe, marquant la fin de la Guerre froide',
    image: 'chutedeberlin.PNG',
    details: `
Le 9 novembre 1989, des milliers de Berlinois se rassemblent et font tomber le Mur qui divisait l’Allemagne depuis 1961.
Ce symbole de la Guerre froide s’effondre, marquant la fin de la division Est-Ouest.
C’est le prélude à la réunification de l’Allemagne et à la fin des régimes communistes en Europe de l’Est.
`

  },
  {
    id: 12,
    title: 'Fondation de l’Empire moghol par Akbar',
    date: '1556-02-11',
    description: 'Akbar monte sur le trône à 13 ans et consolide l’empire moghol',
    image: 'Akbar.PNG',
    details: `
Le 11 février 1556, Akbar accède au trône à l’âge de 13 ans. Très vite, il étend l’influence moghole sur une grande partie du sous-continent indien.
Visionnaire, il prône la tolérance religieuse et une administration centralisée. Son règne est considéré comme l’âge d’or de l’Empire moghol.
`

  },
  {
    id: 13,
    title: 'Début du règne d’Élisabeth Ire d’Angleterre',
    date: '1558-11-17',
    description: 'Elle devient reine d’Angleterre et initie une période prospère',
    image: 'elizabeth.PNG',
    details: `
Le 17 novembre 1558, Élisabeth monte sur le trône et inaugure une ère de stabilité et de rayonnement culturel pour l’Angleterre.
Connue comme « la Reine Vierge », elle défend son royaume contre l’Invincible Armada et soutient les explorations maritimes.
Son règne marque l’apogée de la Renaissance anglaise.
`

  },
  {
    id: 14,
    title: 'Massacre de la Saint-Barthélemy',
    date: '1572-08-24',
    description: 'Début d’un massacre de protestants huguenots à Paris',
    image: 'Barthelemy.PNG',
    details: `
Dans la nuit du 24 août 1572, des milliers de protestants sont assassinés à Paris lors du mariage d’Henri de Navarre et Marguerite de Valois.
Commandité par les autorités royales, ce massacre marque un tournant sanglant dans les guerres de religion françaises.
Il illustre les tensions profondes entre catholiques et protestants.
`

  },
  {
    id: 15,
    title: 'Adoption du calendrier grégorien',
    date: '1582-10-04',
    description: 'Entrée en vigueur du nouveau calendrier instauré par le pape Grégoire XIII',
    image: 'gregorien.PNG',
    details: `
Le 4 octobre 1582, le pape Grégoire XIII décide de réformer le calendrier julien, qui avait accumulé un retard de dix jours.
Le calendrier grégorien devient le nouveau repère temporel en Europe catholique. 
Adopté progressivement par le monde entier, il est encore utilisé aujourd’hui.
`

  },
  {
    id: 16,
    title: 'Défaite de l’Invincible Armada espagnole',
    date: '1588-08-08',
    description: 'L’armada espagnole est vaincue par la marine anglaise',
    image: 'armada.PNG',
    details: `
Le 8 août 1588, la redoutée flotte espagnole, l’Invincible Armada, est vaincue par la marine anglaise.
Cette défaite affaiblit durablement l’empire espagnol et consacre la montée en puissance maritime de l’Angleterre.
Un moment charnière dans l’histoire européenne des grandes puissances.
`

  },
  {
    id: 17,
    title: 'Signature de l’Édit de Nantes',
    date: '1598-04-13',
    description: 'Henri IV accorde la liberté de culte aux protestants',
    image: 'Nantes.PNG',
    details: `
Le 13 avril 1598, le roi Henri IV accorde la liberté de culte aux protestants en France avec l’Édit de Nantes.
Ce compromis historique met fin aux guerres de religion et inaugure une période de relative paix religieuse.
L’édit sera révoqué en 1685, relançant les tensions.
`

  },
  {
    id: 18,
    title: 'Découverte des satellites de Jupiter par Galilée',
    date: '1610-01-07',
    description: 'Galilée observe Io, Europe, Ganymède et Callisto',
    image: 'satelites.PNG',
    details: `
Le 7 janvier 1610, Galilée observe pour la première fois les quatre lunes principales de Jupiter : Io, Europe, Ganymède et Callisto.
Cette découverte remet en cause le géocentrisme et appuie les théories coperniciennes.
C’est une révolution scientifique majeure.
`

  },
  {
    id: 19,
    title: 'Assassinat d’Henri IV',
    date: '1610-05-14',
    description: 'Le roi est poignardé par François Ravaillac à Paris',
    image: 'assasinat.PNG',
    details: `
Le 14 mai 1610, le roi Henri IV est poignardé à Paris par François Ravaillac, un fanatique religieux.
Ce meurtre plonge la France dans l’incertitude politique, alors qu’Henri IV avait pacifié le royaume après les guerres de religion.
Sa mort marque la fin d’un règne réconciliateur.
`

  },
  {
    id: 20,
    title: 'Défenestration de Prague',
    date: '1618-05-23',
    description: 'Événement déclencheur de la guerre de Trente Ans',
    image: 'defenestration.PNG',
    details: `
Le 23 mai 1618, des nobles protestants jettent deux représentants catholiques par la fenêtre du château de Prague.
Cet acte déclenche la guerre de Trente Ans, un des conflits les plus destructeurs de l’Europe moderne.
Il mêle rivalités religieuses, politiques et territoriales.
`

  },
  {
    id: 21,
    title: 'Condamnation de Galilée',
    date: '1633-06-22',
    description: 'Galilée est jugé hérétique pour avoir soutenu le modèle héliocentrique',
    image: 'galileecdn.PNG',
    details: `
Le 22 juin 1633, Galilée est jugé hérétique par l’Inquisition pour avoir défendu l’idée que la Terre tourne autour du Soleil.
Contraint à l’abjuration, il continue pourtant ses recherches en secret.
Son procès symbolise la tension entre science et dogmes religieux.
`

  },
  {
    id: 22,
    title: 'Publication du Discours de la méthode',
    date: '1637-06-08',
    description: 'Descartes publie ce texte fondamental de la philosophie moderne',
    image: 'descartes.PNG',
  },
  {
    id: 23,
    title: 'Début de la guerre civile anglaise',
    date: '1642-08-22',
    description: 'Le roi Charles Ier lève son armée contre le Parlement',
    image: 'guerreanglaise.PNG',
    details: `
Le 8 juin 1637, René Descartes publie un texte fondamental qui va bouleverser la pensée occidentale.
« Je pense, donc je suis » devient une formule universelle, fondant le rationalisme moderne.
C’est le début d’une nouvelle méthode scientifique fondée sur le doute méthodique.
`

  },
  {
    id: 24,
    title: 'Début du règne personnel de Louis XIV',
    date: '1661-03-10',
    description: 'À la mort de Mazarin, Louis XIV prend seul le contrôle du royaume',
    image: 'Louis.PNG',
    details: `
Le 10 mars 1661, à la mort de Mazarin, Louis XIV prend seul les rênes du pouvoir. 
Il incarne l’absolutisme royal et fera de Versailles le centre de son autorité.
Son règne de plus de 70 ans, le plus long de l’histoire de France, laissera une empreinte immense sur la culture, la politique et l’art français.
`

  },
  
  {
    id: 25,
    title: 'Publication des Principia Mathematica',
    date: '1687-07-05',
    description: 'Newton y expose ses lois physiques fondamentales',
    image: 'Mathematica.PNG',
    details: `
Le 5 juillet 1687, Isaac Newton publie les « Principia Mathematica », une œuvre monumentale.
Il y expose ses lois du mouvement et de la gravitation universelle.
Cet ouvrage jette les bases de la physique classique et transforme durablement la science moderne.
`

  },

  {

    id: 26,
    title: 'Mort de Louis XIV',
    date: '1715-08-31',
    description: 'Le roi meurt à Versailles après 72 ans de règne, laissant le trône à son arrière-petit-fils.',
    image: 'mortdelouis.PNG',
     details: `
Le 1er septembre 1715, Louis XIV meurt après plus de 72 ans de règne — le plus long de l’histoire de France. 
Connu comme le Roi-Soleil, il laisse derrière lui un royaume centralisé, un château de Versailles glorieux, mais aussi un peuple épuisé par les guerres et les impôts.
Sa disparition marque la fin d’un siècle d’absolutisme flamboyant, et ouvre la voie à une nouvelle ère politique avec la régence de Philippe d’Orléans.
`

  }

];
