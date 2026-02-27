import { Stat, TimelineEvent, Achievement, Department, DecoderItem, Testimonial, Mission, Level } from "./types";

export interface Candidate {
  name: string;
  role: "President" | "Vice-President";
  bio: string;
  image?: string;
}

export interface Duo {
  president: Candidate;
  vicePresident: Candidate;
  vision: string;
  programUrl: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "Rassemblement" | "Conférence" | "Action Sociale" | "Rencontre Citoyenne";
  description: string;
}

export interface VoterInfo {
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
    link?: string;
    linkText?: string;
  }[];
}

export const CANDIDATE_DUO: Duo = {
  president: {
    name: "Romuald Wadagni",
    role: "President",
    bio: "Architecte de la transformation économique du Bénin, engagé pour une prospérité partagée.",
  },
  vicePresident: {
    name: "Mariam Chabi Talata",
    role: "Vice-President",
    bio: "Symbole de la rigueur et de l'engagement social, au service de l'unité nationale.",
  },
  vision: "Bâtir un Bénin moderne, industriel et solidaire sur les fondations de 10 ans de réformes historiques.",
  programUrl: "/programme-wadagni-talata-2026.pdf",
};

export const UPCOMING_MEETINGS: Meeting[] = [
  {
    id: "meeting-1",
    title: "Grande Rencontre Citoyenne - Littoral",
    date: "2026-03-15T15:00:00",
    location: "Palais des Congrès, Cotonou",
    type: "Rassemblement",
    description: "Présentation de la vision 2026-2031 pour le département du Littoral.",
  },
  {
    id: "meeting-2",
    title: "Dialogue avec la Jeunesse",
    date: "2026-03-20T10:00:00",
    location: "Université d'Abomey-Calavi",
    type: "Rencontre Citoyenne",
    description: "Échanges directs sur l'emploi, l'innovation et l'avenir numérique.",
  },
  {
    id: "meeting-3",
    title: "Forum Économique Régional",
    date: "2026-03-25T09:00:00",
    location: "Hôtel de Ville, Parakou",
    type: "Conférence",
    description: "Focus sur l'agrobusiness et le désenclavement du septentrion.",
  },
];

export const VOTER_REGISTRATION_INFO: VoterInfo = {
  title: "Soyez prêt pour le 12 avril 2026",
  description: "Votre vote est votre voix. Assurez-vous d'être correctement inscrit sur la liste électorale.",
  steps: [
    {
      title: "Obtenez votre NPI (ANIP)",
      description: "Le Numéro Personnel d'Identification est indispensable pour toutes vos démarches citoyennes.",
      link: "https://anip.bj",
      linkText: "Vérifier mon NPI",
    },
    {
      title: "Localisez votre Poste de Vote",
      description: "Vérifiez votre centre de vote pour éviter toute surprise le jour du scrutin.",
      link: "https://cei.bj",
      linkText: "Trouver mon poste",
    },
    {
      title: "Rejoignez un Cercle de Mobilisation",
      description: "Encouragez vos proches à s'inscrire et à participer activement.",
    },
  ],
};
