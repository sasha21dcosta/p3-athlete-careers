export type GalleryCategory =
  | "Academy"
  | "Tournaments"
  | "Corporate"
  | "Community"
  | "Media";

export type GalleryArchiveItem = {
  /** Stable key (archive filename without extension) */
  id: string;
  title: string;
  category: GalleryCategory;
  /** Short caption for home preview cards */
  previewCaption: string;
};

const ARCHIVE_BASE = "/gallery/p3-archive";

/** Photos sourced from the official P3 Sports gallery */
const ARCHIVE_ITEMS: GalleryArchiveItem[] = [
  {
    id: "Image52b",
    title: "Press conference — P3 Sports in the spotlight",
    category: "Media",
    previewCaption: "Media spotlight — P3 archive",
  },
  {
    id: "Image51b",
    title: "Jatindra Nath Ghosh Memorial Ranking TT Championship welcome",
    category: "Tournaments",
    previewCaption: "Championship welcome — P3 archive",
  },
  {
    id: "Image50b",
    title: "Championship awards — trophy presentation",
    category: "Tournaments",
    previewCaption: "A moment of recognition — P3 archive",
  },
  {
    id: "Image49b",
    title: "Winners — 5th P3 Sports Corporate Indoor Games 2018",
    category: "Corporate",
    previewCaption: "Corporate champions — P3 archive",
  },
  {
    id: "Image48b",
    title: "Corporate tournament winners on stage",
    category: "Corporate",
    previewCaption: "Celebrating sporting moments — P3 archive",
  },
  {
    id: "Image47b",
    title: "Table tennis rally — tournament action",
    category: "Tournaments",
    previewCaption: "At the table — P3 archive",
  },
  {
    id: "Image46b",
    title: "Finals night at the championship table",
    category: "Tournaments",
    previewCaption: "Finals night — P3 archive",
  },
  {
    id: "Image45b",
    title: "Doubles match under tournament lights",
    category: "Tournaments",
    previewCaption: "Doubles action — P3 archive",
  },
  {
    id: "Image44b",
    title: "Academy players during match play",
    category: "Academy",
    previewCaption: "Academy match play — P3 archive",
  },
  {
    id: "Image43b",
    title: "Coaching cues from the sidelines",
    category: "Academy",
    previewCaption: "Sideline coaching — P3 archive",
  },
  {
    id: "Image42b",
    title: "Warm-up before the draw",
    category: "Tournaments",
    previewCaption: "Pre-tournament warm-up — P3 archive",
  },
  {
    id: "Image40b",
    title: "Corporate league team huddle",
    category: "Corporate",
    previewCaption: "Team huddle — P3 archive",
  },
  {
    id: "Image39b",
    title: "Medal ceremony — corporate indoor games",
    category: "Corporate",
    previewCaption: "Medal ceremony — P3 archive",
  },
  {
    id: "Image38b",
    title: "Junior batch friendly match",
    category: "Academy",
    previewCaption: "Juniors in action — P3 archive",
  },
  {
    id: "Image37b",
    title: "Weekend academy session",
    category: "Academy",
    previewCaption: "Weekend academy — P3 archive",
  },
  {
    id: "Image36b",
    title: "Community open day at the tables",
    category: "Community",
    previewCaption: "Community open day — P3 archive",
  },
  {
    id: "Image35b",
    title: "Women in sports — community match",
    category: "Community",
    previewCaption: "Community match — P3 archive",
  },
  {
    id: "Image33b",
    title: "Inter-corporate championship crowd",
    category: "Corporate",
    previewCaption: "Championship crowd — P3 archive",
  },
  {
    id: "Image32b",
    title: "Award stage — P3 Sports Management",
    category: "Tournaments",
    previewCaption: "On the podium — P3 archive",
  },
  {
    id: "Image31b",
    title: "Trophy presentation to corporate winners",
    category: "Corporate",
    previewCaption: "Trophy handover — P3 archive",
  },
  {
    id: "Image30b",
    title: "Singles semi-final rally",
    category: "Tournaments",
    previewCaption: "Semi-final rally — P3 archive",
  },
  {
    id: "Image29b",
    title: "Academy footwork drills",
    category: "Academy",
    previewCaption: "Footwork drills — P3 archive",
  },
  {
    id: "Image28b",
    title: "School outreach programme",
    category: "Community",
    previewCaption: "School outreach — P3 archive",
  },
  {
    id: "Image27b",
    title: "Corporate sports day finals",
    category: "Corporate",
    previewCaption: "Sports day finals — P3 archive",
  },
  {
    id: "Image26b",
    title: "Ranking tournament — opening ceremony",
    category: "Tournaments",
    previewCaption: "Opening ceremony — P3 archive",
  },
  {
    id: "Image25b",
    title: "Team captains at the draw",
    category: "Tournaments",
    previewCaption: "The draw — P3 archive",
  },
  {
    id: "Image24b",
    title: "P3 academy group photo",
    category: "Academy",
    previewCaption: "Academy group — P3 archive",
  },
  {
    id: "Image23b",
    title: "Training camp intensity session",
    category: "Academy",
    previewCaption: "Training camp — P3 archive",
  },
  {
    id: "Image22b",
    title: "Corporate doubles champions",
    category: "Corporate",
    previewCaption: "Doubles champions — P3 archive",
  },
  {
    id: "Image21b",
    title: "Championship banner unveiling",
    category: "Tournaments",
    previewCaption: "Banner unveiling — P3 archive",
  },
  {
    id: "Image19b",
    title: "Volunteers and officials on duty",
    category: "Community",
    previewCaption: "Event crew — P3 archive",
  },
  {
    id: "Image18b",
    title: "Kids clinic — first serves",
    category: "Academy",
    previewCaption: "Kids clinic — P3 archive",
  },
  {
    id: "Image17b",
    title: "Masters friendly match",
    category: "Community",
    previewCaption: "Masters friendly — P3 archive",
  },
  {
    id: "Image16b",
    title: "Corporate team celebration",
    category: "Corporate",
    previewCaption: "Team celebration — P3 archive",
  },
  {
    id: "Image14b",
    title: "Night session at the academy",
    category: "Academy",
    previewCaption: "Night session — P3 archive",
  },
  {
    id: "Image13b",
    title: "Ranking ladder match",
    category: "Tournaments",
    previewCaption: "Ranking match — P3 archive",
  },
  {
    id: "Image12b",
    title: "P3 Circle community meet-up",
    category: "Community",
    previewCaption: "P3 Circle meet-up — P3 archive",
  },
  {
    id: "Image10b",
    title: "Corporate league opening match",
    category: "Corporate",
    previewCaption: "League opener — P3 archive",
  },
  {
    id: "Image08b",
    title: "Academy coaches with players",
    category: "Academy",
    previewCaption: "Coaches & players — P3 archive",
  },
  {
    id: "Image07b",
    title: "Tournament table setup",
    category: "Tournaments",
    previewCaption: "Table setup — P3 archive",
  },
  {
    id: "Image06b",
    title: "Award keepsakes and medals",
    category: "Tournaments",
    previewCaption: "Medals & keepsakes — P3 archive",
  },
  {
    id: "Image04b",
    title: "Corporate participation trophy display",
    category: "Corporate",
    previewCaption: "Trophy display — P3 archive",
  },
  {
    id: "Image03b",
    title: "Early P3 tournament snapshot",
    category: "Tournaments",
    previewCaption: "Early tournament — P3 archive",
  },
  {
    id: "Image02b",
    title: "Academy beginnings — training hall",
    category: "Academy",
    previewCaption: "Training hall — P3 archive",
  },
  {
    id: "Image11b",
    title: "Community doubles evening",
    category: "Community",
    previewCaption: "Doubles evening — P3 archive",
  },
];

function archiveSrc(id: string) {
  return `${ARCHIVE_BASE}/${id}.jpg`;
}

export const GALLERY_ARCHIVE = ARCHIVE_ITEMS.map((item) => ({
  ...item,
  src: archiveSrc(item.id),
}));

/** Home page — three-up preview (matches official gallery highlights) */
export const HOME_GALLERY_PREVIEW_IDS = ["Image47b", "Image48b", "Image50b"] as const;

export function getHomeGalleryPreview() {
  return HOME_GALLERY_PREVIEW_IDS.map((id) => {
    const photo = GALLERY_ARCHIVE.find((p) => p.id === id);
    if (!photo) throw new Error(`Missing gallery preview id: ${id}`);
    return photo;
  });
}
