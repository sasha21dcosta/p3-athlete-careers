export type GalleryCategory =
  | "Academy"
  | "Tournaments"
  | "Corporate"
  | "Community"
  | "Media";

export type GalleryArchiveItem = {
  /** Stable key — matches filename in public/gallery/p3-archive */
  id: string;
  title: string;
  category: GalleryCategory;
  /** Short caption for home preview cards */
  previewCaption: string;
};

const ARCHIVE_BASE = "/gallery/p3-archive";

const GALLERY_COUNT = 55;

const CATEGORY_CYCLE: GalleryCategory[] = [
  "Tournaments",
  "Corporate",
  "Academy",
  "Media",
];

const CATEGORY_LABEL: Record<GalleryCategory, string> = {
  Tournaments: "Tournaments & championships",
  Corporate: "Corporate indoor games",
  Academy: "Academy & coaching",
  Media: "P3 Sports events",
  Community: "Community programmes",
};

/** User-provided gallery set (p3-gallery-01 … p3-gallery-55) */
const ARCHIVE_ITEMS: GalleryArchiveItem[] = Array.from(
  { length: GALLERY_COUNT },
  (_, i) => {
    const n = i + 1;
    const id = `p3-gallery-${String(n).padStart(2, "0")}`;
    const category = CATEGORY_CYCLE[i % CATEGORY_CYCLE.length];
    return {
      id,
      title: `${CATEGORY_LABEL[category]} — ${n}`,
      category,
      previewCaption: `P3 Sports — photo ${n}`,
    };
  },
);

function archiveSrc(id: string) {
  return `${ARCHIVE_BASE}/${id}.jpg`;
}

export const GALLERY_ARCHIVE = ARCHIVE_ITEMS.map((item) => ({
  ...item,
  src: archiveSrc(item.id),
}));

/** Home page — three-up preview */
export const HOME_GALLERY_PREVIEW_IDS = [
  "p3-gallery-16",
  "p3-gallery-28",
  "p3-gallery-31",
] as const;

export function getHomeGalleryPreview() {
  return HOME_GALLERY_PREVIEW_IDS.map((id) => {
    const photo = GALLERY_ARCHIVE.find((p) => p.id === id);
    if (!photo) throw new Error(`Missing gallery preview id: ${id}`);
    return photo;
  });
}
