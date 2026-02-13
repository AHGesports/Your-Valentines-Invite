// ============================================================================
// Love Configuration - Personalized for Hannayi! 💕
// ============================================================================

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  yourName: "Arshia",
  partnerName: "Hannayi",

  // === RELATIONSHIP START DATE ===
  // February 16, 2022 - Italy timezone (CET: +01:00)
  relationshipStart: "2022-02-16T00:00:00+01:00",

  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",

  // === HEADLINE AND INTRO ===
  heroHeadline: "To My Dearest Valentine",
  heroSubtext: "I love you more than words can say. my everything, my heart, my soul, my baby girllll.",
  // === PHOTO GALLERY ===
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 4, // Change to 3 if you only have 3 photos/milestones

  // === TIMELINE MILESTONES ===
  // TODO: Update these with your real memories!
  milestones: [
    {
      title: "Our Beginning",
      date: "February 16, 2022",
      description: ""
    },
    {
      title: "A Special Memory",
      date: "TODO: Add date",
      description: "TODO: Write about a favorite memory together..."
    },
    {
      title: "Another Milestone",
      date: "TODO: Add date",
      description: "TODO: Write about another special moment..."
    },
    {
      title: "Right Now",
      date: "February 2026",
      description: "TODO: Write something sweet about your love today..."
    }
  ],

  // === EMAIL CONFIGURATION ===
  yourEmail: "arshia.hemati@gmail.com",
  emailSubject: "My Valentine's Answer 💐",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\nHannayi",

  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine?",
  inviteMessage: "TODO: Add your invitation message here...", // <-- UPDATE THIS
  inviteDate: "February 14, 2026",
  inviteTime: "5:00 PM",
  inviteLocation: "well its a suprise....", // <-- UPDATE THIS
};

export default loveConfig;
