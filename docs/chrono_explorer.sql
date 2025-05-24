-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 22 mai 2025 à 15:42
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chrono_explorer`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventId` int DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `message` text,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `isModerated` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `eventId`, `username`, `message`, `date`, `isModerated`) VALUES
(1, 1, 'admin@chrono.fr', 'il était si beau le petit à sa naissance \n', '2025-05-16 18:49:13', 1),
(2, 2, 'admin@chrono.fr', 'wow la france avant la révolution c\'était pas si ouf \n', '2025-05-16 19:10:11', 1),
(6, 25, 'chloedimar@fi.com', 'Hello world', '2025-05-19 13:06:38', 0),
(5, 2, 'silamite@gmail.fr', 'hello center \n', '2025-05-17 12:35:19', 0),
(7, 3, '{\"email\":\"chloedimar@fi.com\",\"username\":\"Chloé\"}', 'guerre meutrière \n', '2025-05-20 13:28:04', 0),
(9, 25, '{\"email\":\"chloedimar@fi.com\",\"username\":\"Chloé\"}', 'Je suis un garçon ', '2025-05-20 14:15:32', 1),
(10, 9, '{\"email\":\"admin@chrono.fr\",\"username\":\"admin\"}', 'Cogito, ergo sum ', '2025-05-21 09:48:52', 0);

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` text,
  `details` text,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `title`, `date`, `description`, `details`, `image`) VALUES
(1, 'Naissance de Napoléon', '1769-08-15', 'Naissance de Napoléon Bonaparte à Ajaccio', 'Napoléon Bonaparte est né le 15 août 1769 à Ajaccio, en Corse, quelques mois après l\'annexion de l\'île par la France.\r\nFils d\'une famille noble corse, il rejoindra l\'armée française, puis gravira les échelons jusqu\'à devenir empereur.\r\nSa naissance marque le début d\'une des figures les plus emblématiques de l\'histoire française', 'napoleon.jpg'),
(2, 'Révolution Française', '1789-07-14', 'Prise de la Bastille', 'Le 14 juillet 1789, le peuple de Paris prend d\'assaut la Bastille, symbole de l\'absolutisme royal. \r\nCet événement marque le début d’un bouleversement profond de la société française : la monarchie est contestée, les privilèges abolis, et les idées des Lumières prennent vie. \r\nLes droits de l’homme et du citoyen seront bientôt proclamés, inspirant d’autres peuples en quête de liberté.\r\n\r\n', 'revolution.jpeg'),
(3, 'Première Guerre mondiale', '1914-07-28', 'Début du conflit', 'Le 28 juillet 1914 marque le début d’un conflit d’une ampleur inédite. La Première Guerre mondiale oppose les grandes puissances en deux blocs : les Alliés et les Puissances centrales.\r\nTranchées, gaz toxiques, artillerie lourde... Le conflit fera plus de 10 millions de morts.\r\nCe cataclysme changera à jamais la carte politique de l’Europe et laissera des traces profondes dans la mémoire collective.\r\n\r\n', 'pgm.jpeg'),
(4, 'Découverte de l’Amérique', '1492-10-12', 'Christophe Colomb atteint les Antilles, marquant le début de la colonisation européenne.', 'Le 12 octobre 1492, Christophe Colomb accoste dans les îles des Caraïbes, croyant avoir atteint l’Asie. \r\nCe moment historique ouvre la voie aux grandes explorations et à la colonisation du Nouveau Monde.\r\nMais cette \"découverte\" aura aussi des conséquences tragiques pour les civilisations autochtones.\r\n\r\n', 'colomb.PNG'),
(5, 'Réforme protestante', '1517-10-31', 'Martin Luther publie ses 95 thèses, divisant le christianisme.', 'En 1517, Martin Luther affiche ses 95 thèses à Wittenberg pour dénoncer les abus de l’Église catholique, notamment la vente des indulgences.\r\nC’est le début d’un schisme religieux majeur en Europe.\r\nLa Réforme va bouleverser la religion, la politique et même la culture des sociétés européennes.\r\n\r\n', 'reformeprotestante.PNG'),
(6, 'Indépendance des États-Unis', '1776-07-04', 'Les 13 colonies américaines déclarent leur indépendance du Royaume-Uni.', 'Le 4 juillet 1776, les 13 colonies américaines déclarent leur indépendance vis-à-vis de la Grande-Bretagne.\r\nInspirée des Lumières, la Déclaration d’indépendance proclame que tous les hommes sont égaux.\r\nC’est la naissance des États-Unis d’Amérique, une république fondée sur les principes de liberté et de souveraineté populaire.\r\n\r\n', 'IndependenceEU.PNG'),
(7, 'Défaite de Napoléon à Waterloo', '1815-06-18', 'Fin du règne napoléonien, retour des monarchies.', 'Le 18 juin 1815, Napoléon est battu à Waterloo par les forces alliées menées par le duc de Wellington et Blücher.\r\nCette défaite marque la fin définitive de l’Empire napoléonien.\r\nNapoléon sera exilé sur l’île de Sainte-Hélène où il terminera ses jours, laissant un héritage politique et militaire immense.\r\n', 'defaitewaterloo.PNG'),
(8, 'Abolition de l’esclavage en France', '1848-04-27', 'Suppression définitive de l’esclavage dans les colonies françaises.', 'Le 27 avril 1848, la Deuxième République abolit l’esclavage dans toutes les colonies françaises.\r\nC’est une victoire pour les mouvements abolitionnistes et une reconnaissance tardive de la dignité des peuples réduits en esclavage.\r\nVictor Schœlcher joue un rôle clé dans cette avancée historique vers la justice et l’égalité.\r\n\r\n', 'abolitionescalvagefrance.PNG'),
(9, 'Révolution russe', '1917-11-07', 'Les bolcheviks renversent le tsar et instaurent un régime communiste.', 'Le 7 novembre 1917, les bolcheviks prennent le pouvoir à Petrograd, renversant le gouvernement provisoire.\r\nMenée par Lénine, cette révolution donne naissance au premier État communiste de l’histoire.\r\nL’Empire russe devient l’Union soviétique, bouleversant l’équilibre politique mondial pour tout le XXe siècle.\r\n\r\n', 'revolutionrusse.PNG'),
(10, 'Seconde Guerre mondiale	', '1939-09-01', 'L’Allemagne envahit la Pologne, déclenchant la Seconde Guerre mondiale', 'Le 1er septembre 1939, l’Allemagne nazie envahit la Pologne, déclenchant un conflit mondial d’une ampleur tragique.\r\nAlliances, conquêtes, Résistance, Shoah… Cette guerre a impliqué plus de 60 pays et causé la mort de 60 millions de personnes.\r\nElle s’achèvera en 1945 par la capitulation du Japon après Hiroshima et Nagasaki, bouleversant définitivement le monde.\r\n\r\n', 'DGM.PNG'),
(11, 'Chute du Mur de Berlin', '1989-11-09', 'Le Mur de Berlin tombe, marquant la fin de la Guerre froide.', 'Le 9 novembre 1989, des milliers de Berlinois se rassemblent et font tomber le Mur qui divisait l’Allemagne depuis 1961.\r\nCe symbole de la Guerre froide s’effondre, marquant la fin de la division Est-Ouest.\r\nC’est le prélude à la réunification de l’Allemagne et à la fin des régimes communistes en Europe de l’Est.\r\n\r\n', 'chutedeberlin.PNG'),
(12, 'Fondation de l’Empire moghol par Akbar', '1556-02-11', 'Akbar monte sur le trône à 13 ans et consolide l’un des plus vastes empires de l’Asie.', 'Le 11 février 1556, Akbar accède au trône à l’âge de 13 ans. Très vite, il étend l’influence moghole sur une grande partie du sous-continent indien.\r\nVisionnaire, il prône la tolérance religieuse et une administration centralisée. Son règne est considéré comme l’âge d’or de l’Empire moghol.\r\n\r\n', 'Akbar.PNG'),
(13, 'Début du règne d’Élisabeth Ire d’Angleterre', '1558-11-17', 'Elle devient reine d’Angleterre et initie une période de prospérité culturelle et politique.', 'Le 17 novembre 1558, Élisabeth monte sur le trône et inaugure une ère de stabilité et de rayonnement culturel pour l’Angleterre.\r\nConnue comme « la Reine Vierge », elle défend son royaume contre l’Invincible Armada et soutient les explorations maritimes.\r\nSon règne marque l’apogée de la Renaissance anglaise.\r\n\r\n', 'elizabeth.PNG'),
(14, 'Massacre de la Saint-Barthélemy', '1572-08-24', 'Début d’un massacre de protestants huguenots à Paris, qui s’étend à d’autres villes.', 'Dans la nuit du 24 août 1572, des milliers de protestants sont assassinés à Paris lors du mariage d’Henri de Navarre et Marguerite de Valois.\r\nCommandité par les autorités royales, ce massacre marque un tournant sanglant dans les guerres de religion françaises.\r\nIl illustre les tensions profondes entre catholiques et protestants.\r\n\r\n', 'Barthelemy.PNG'),
(15, 'Adoption du calendrier grégorien', '1582-10-04', 'Entrée en vigueur du nouveau calendrier instauré par le pape Grégoire XIII.', 'Le 4 octobre 1582, le pape Grégoire XIII décide de réformer le calendrier julien, qui avait accumulé un retard de dix jours.\r\nLe calendrier grégorien devient le nouveau repère temporel en Europe catholique. \r\nAdopté progressivement par le monde entier, il est encore utilisé aujourd’hui.\r\n', 'gregorien.PNG'),
(16, 'Défaite de l’Invincible Armada espagnole', '1588-08-08', 'L’armada espagnole est vaincue par la marine anglaise de Drake et Howard.', 'Le 8 août 1588, la redoutée flotte espagnole, l’Invincible Armada, est vaincue par la marine anglaise.\r\nCette défaite affaiblit durablement l’empire espagnol et consacre la montée en puissance maritime de l’Angleterre.\r\nUn moment charnière dans l’histoire européenne des grandes puissances.\r\n\r\n', 'armada.PNG'),
(17, 'Signature de l’Édit de Nantes', '1598-04-13', 'Henri IV accorde la liberté de culte aux protestants et met fin aux guerres de religion.', 'Le 13 avril 1598, le roi Henri IV accorde la liberté de culte aux protestants en France avec l’Édit de Nantes.\r\nCe compromis historique met fin aux guerres de religion et inaugure une période de relative paix religieuse.\r\nL’édit sera révoqué en 1685, relançant les tensions.\r\n\r\n', 'Nantes.PNG'),
(18, 'Découverte des satellites de Jupiter par Galilée', '1610-01-07', 'Il observe Io, Europe, Ganymède et Callisto, premières lunes découvertes autour d’une autre planète.', 'Le 7 janvier 1610, Galilée observe pour la première fois les quatre lunes principales de Jupiter : Io, Europe, Ganymède et Callisto.\r\nCette découverte remet en cause le géocentrisme et appuie les théories coperniciennes.\r\nC’est une révolution scientifique majeure.\r\n\r\n', 'satelites.PNG'),
(19, 'Assassinat d’Henri IV', '1610-05-14', 'Le roi est poignardé par François Ravaillac à Paris.', 'Le 14 mai 1610, le roi Henri IV est poignardé à Paris par François Ravaillac, un fanatique religieux.\r\nCe meurtre plonge la France dans l’incertitude politique, alors qu’Henri IV avait pacifié le royaume après les guerres de religion.\r\nSa mort marque la fin d’un règne réconciliateur.\r\n', 'assasinat.PNG'),
(20, 'Défenestration de Prague', '1618-05-23', 'Événement déclencheur de la guerre de Trente Ans dans le Saint-Empire romain germanique.', 'Le 23 mai 1618, des nobles protestants jettent deux représentants catholiques par la fenêtre du château de Prague.\r\nCet acte déclenche la guerre de Trente Ans, un des conflits les plus destructeurs de l’Europe moderne.\r\nIl mêle rivalités religieuses, politiques et territoriales.\r\n\r\n', 'defenestration.PNG'),
(21, 'Condamnation de Galilée', '1633-06-22', 'Galilée est jugé hérétique pour avoir soutenu le modèle héliocentrique.', 'Le 22 juin 1633, Galilée est jugé hérétique par l’Inquisition pour avoir défendu l’idée que la Terre tourne autour du Soleil.\r\nContraint à l’abjuration, il continue pourtant ses recherches en secret.\r\nSon procès symbolise la tension entre science et dogmes religieux.\r\n\r\n', 'galileecdn.PNG'),
(22, 'Publication du Discours de la méthode', '1637-06-08', 'Descartes publie ce texte fondamental de la philosophie moderne.', 'Le 8 juin 1637, René Descartes publie un texte fondamental qui va bouleverser la pensée occidentale.\r\n« Je pense, donc je suis » devient une formule universelle, fondant le rationalisme moderne.\r\nC’est le début d’une nouvelle méthode scientifique fondée sur le doute méthodique.\r\n\r\n', 'descartes.PNG'),
(23, 'Début de la guerre civile anglaise', '1642-08-22', 'Le roi Charles Ier lève son armée contre le Parlement : c’est la guerre civile.', 'Le 22 août 1642, le roi Charles Ier lève son armée contre le Parlement.\r\nC’est le début d’une guerre civile qui opposera royalistes et parlementaires pendant plusieurs années.\r\nElle se conclura par l’exécution du roi et l’établissement d’un Commonwealth dirigé par Oliver Cromwell.\r\n\r\n', 'guerreanglaise.PNG'),
(24, 'Début du règne personnel de Louis XIV', '1661-03-10', 'À la mort de Mazarin, Louis XIV prend seul le contrôle du gouvernement français.', 'Le 10 mars 1661, à la mort de Mazarin, Louis XIV prend seul les rênes du pouvoir. \r\nIl incarne l’absolutisme royal et fera de Versailles le centre de son autorité.\r\nSon règne de plus de 70 ans, le plus long de l’histoire de France, laissera une empreinte immense sur la culture, la politique et l’art français.\r\n\r\n', 'Louis.PNG'),
(25, 'Publication des Principia Mathematica', '1687-07-05', 'Newton y expose ses lois physiques fondamentales.', 'Le 5 juillet 1687, Isaac Newton publie les « Principia Mathematica », une œuvre monumentale.\r\nIl y expose ses lois du mouvement et de la gravitation universelle.\r\nCet ouvrage jette les bases de la physique classique et transforme durablement la science moderne.\r\n\r\n', 'Mathematica.PNG'),
(26, 'Mort de Louis XIV', '1715-09-01', 'Le roi meurt à Versailles après 72 ans de règne, laissant le trône à son arrière-petit-fils.', 'Le 1er septembre 1715, Louis XIV meurt après plus de 72 ans de règne — le plus long de l’histoire de France. \r\nConnu comme le Roi-Soleil, il laisse derrière lui un royaume centralisé, un château de Versailles glorieux, mais aussi un peuple épuisé par les guerres et les impôts.\r\nSa disparition marque la fin d’un siècle d’absolutisme flamboyant, et ouvre la voie à une nouvelle ère politique avec la régence de Philippe d’Orléans.', 'mortdelouis.PNG');

-- --------------------------------------------------------

--
-- Structure de la table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventId` int DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `url` text,
  `legend` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eventId` (`eventId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `media`
--

INSERT INTO `media` (`id`, `eventId`, `type`, `url`, `legend`) VALUES
(1, 1, 'texte', '', 'Citation : Impossible n’est pas français.');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(3, 'Chloé', 'chloedimar@fi.com', '@Chloe03'),
(1, 'admin', 'admin@chrono.fr', 'admin');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
