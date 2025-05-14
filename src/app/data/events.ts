export interface EventItem {
    id: number;
    title: string;
    date: string;
    description: string;
    image?: string; // ← ajoute cette ligne
  }
  
  export const EVENTS: EventItem[] = [
    {
      id: 1,
      title: 'Naissance de Napoléon',
      date: '1769-08-15',
      description: 'Naissance de Napoléon Bonaparte à Ajaccio, en Corse.',
      image: 'assets/images/napoleon.jpg',

    },
    {
      id: 2,
      title: 'Révolution Française',
      date: '1789-07-14',
      description: 'Début de la Révolution française avec la prise de la Bastille.',
      image: 'assets/images/revolution.jpeg',
    },
       
    {
      id: 3,
      title: 'Première Guerre Mondiale',
      date: '1914-07-28',
      description: 'Début de la Première Guerre mondiale, un conflit mondial majeur.',
      image: 'assets/images/pgm.jpeg',
    },
    
  ];
  