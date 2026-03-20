/**
 * Premium corporate photography (Unsplash) — shared across marketing pages.
 * q=85 for consistent sharpness on retina displays.
 *
 * Brand assets live in /public/assets/images (served as /assets/images/...).
 */
const q = "q=85";

/** @param {string} file basename under public/assets/images */
export function assetImage(file) {
  return `/assets/images/${encodeURIComponent(file)}`;
}

/** Static scans of user-provided brand & product photography */
export const LOCAL = {
  logo: assetImage("IMG_0081.PNG"),
  /** Product range on metal — retail / catalogue hero */
  lubricantRangeHero: assetImage("IMG_0087.PNG"),
  /** Manufacturing & storage */
  facilityStorage: assetImage("IMG_0090.PNG"),
  facilityFloor: assetImage("IMG_0088.PNG"),
  extraFacility: assetImage("IMG_0089.PNG"),
  /** Bluestreak India Auto — office / counter */
  officeShowroom: assetImage("IMG_0092.PNG"),
};

/** All lubricant & facility stills for gallery grids (order: facilities → bottles → JPEG series) */
export const LUBRICANT_GALLERY = [
  "IMG_0090.PNG",
  "IMG_0088.PNG",
  "IMG_0092.PNG",
  "IMG_0087.PNG",
  "IMG_0089.PNG",
  "IMG_0190.PNG",
  "IMG_0191.PNG",
  "IMG_0192.PNG",
  "IMG_0193.PNG",
  ...Array.from({ length: 15 }, (_, i) => `lubricant (${i + 1}).jpeg`),
].map(assetImage);

/** @param {string} id e.g. photo-xxxx */
function unsplash(id, w, h) {
  return `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&${q}`;
}

export const SITE_IMG = {
  // On-site brand photography
  brandFacility: (_w, _h) => LOCAL.facilityStorage,
  brandOffice: (_w, _h) => LOCAL.officeShowroom,

  // Hero / full-bleed
  heroBoardroom: (w, h) => unsplash("photo-1542744173-8e7e53415bb0", w, h),
  heroOffice: (w, h) => unsplash("photo-1497366811353-6870744d04b2", w, h),
  heroSkyline: (w, h) => unsplash("photo-1486406146926-c627a92ad1ab", w, h),
  heroCityAerial: (w, h) => unsplash("photo-1477959858617-67f85cf4f1df", w, h),
  heroHandshake: (w, h) => unsplash("photo-1560250097-0b93528c311a", w, h),
  heroManufacturing: (_w, _h) => LOCAL.facilityStorage,

  // Automotive & mobility
  showroom: (w, h) => unsplash("photo-1560179707-f14e90ef3623", w, h),
  luxuryVehicle: (w, h) => unsplash("photo-1544636331-e26879cd4d9b", w, h),
  engineDetail: (w, h) => unsplash("photo-1487754180451-c456f719a1fc", w, h),

  // Logistics
  portLogistics: (w, h) => unsplash("photo-1586528116311-ad8dd3c8310d", w, h),

  // Lubricants / industrial — brand photography when available
  lubricantStudio: (_w, _h) => LOCAL.lubricantRangeHero,

  // Legal & fiduciary
  legalCounsel: (w, h) => unsplash("photo-1589829545856-d10d557cf95f", w, h),
  financeMarkets: (w, h) => unsplash("photo-1611974789855-9c2a0a7236a3", w, h),
  strategyPlanning: (w, h) => unsplash("photo-1454165804606-c3d57bc86b40", w, h),
  documentsDesk: (w, h) => unsplash("photo-1450101499163-c8848c66ca85", w, h),
  signingAgreement: (w, h) => unsplash("photo-1521791136064-7986c2920216", w, h),
  estateKeys: (w, h) => unsplash("photo-1560518883-ce09059eeffa", w, h),
  wealthAdvisory: (w, h) => unsplash("photo-1554224155-6726b3ff858f", w, h),
  wealthPreservation: (w, h) => unsplash("photo-1618044733300-9472054094ee", w, h),
  ipInnovation: (w, h) => unsplash("photo-1504384308090-c894fdcc538d", w, h),

  // People & corporate culture
  executiveMeeting: (w, h) => unsplash("photo-1600880292089-90a7e086ee0c", w, h),
  teamCollaboration: (w, h) => unsplash("photo-1522071820081-009f0129c71c", w, h),
  clientConsultation: (w, h) => unsplash("photo-1557804506-669a67965ba0", w, h),
  professionalHandshake: (w, h) => unsplash("photo-1556761175-5973dc0f32e7", w, h),
  diverseTeam: (w, h) => unsplash("photo-1556761175-4b46a572b786", w, h),
  boardroomDiscussion: (w, h) => unsplash("photo-1600880292203-757bb62b4baf", w, h),

  // Trust & global
  fiduciaryTrust: (w, h) => unsplash("photo-1497366216548-37526070297c", w, h),
  charitableImpact: (w, h) => unsplash("photo-1559027615-cd4628902d4a", w, h),
  globalNetwork: (w, h) => unsplash("photo-1526304640581-d334cdbbf45e", w, h),
  civilJustice: (w, h) => unsplash("photo-1505664194779-8beaceb93744", w, h),

  gearMechanism: (w, h) => unsplash("photo-1530046339160-ce3e530c7d2f", w, h),
};
