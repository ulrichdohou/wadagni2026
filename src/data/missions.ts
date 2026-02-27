import type { Mission, Level } from "./types";

export const weeklyMissions: Mission[] = [
  { id: "share-bilan", title: "Partager le bilan sur WhatsApp", description: "Envoyez le lien à 5 contacts", points: 50, icon: "Share2", actionLabel: "Partager", actionUrl: "#share" },
  { id: "check-registration", title: "Vérifier son inscription électorale", description: "Assurez-vous d'être sur la liste", points: 100, icon: "ClipboardCheck", actionLabel: "Vérifier", actionUrl: "#check" },
  { id: "invite-friends", title: "Inviter 3 amis", description: "Envoyez votre lien personnel", points: 150, icon: "Users", actionLabel: "Inviter", actionUrl: "#invite" },
  { id: "testimony", title: "Partager votre témoignage", description: "Qu'est-ce qui a changé depuis 2016 ?", points: 200, icon: "MessageCircle", actionLabel: "Témoigner", actionUrl: "#testify" },
  { id: "quiz", title: "Quiz bilan", description: "10 questions pour tester vos connaissances", points: 100, icon: "Brain", actionLabel: "Jouer", actionUrl: "#quiz" },
  { id: "decode-rumor", title: "Décoder une rumeur", description: "Lisez et partagez un décodage", points: 75, icon: "Search", actionLabel: "Décoder", actionUrl: "/decodeur" },
];

export const levels: Level[] = [
  { name: "Sympathisant", minPoints: 0, maxPoints: 99, badge: "🌱" },
  { name: "Militant", minPoints: 100, maxPoints: 299, badge: "✊" },
  { name: "Ambassadeur", minPoints: 300, maxPoints: 599, badge: "🎖" },
  { name: "Champion", minPoints: 600, maxPoints: 999, badge: "🏆" },
  { name: "Héros de la Continuité", minPoints: 1000, maxPoints: Infinity, badge: "⭐" },
];
