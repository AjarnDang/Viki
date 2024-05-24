import axios from "axios";

export const fetchData = async (context) => {
  try {
    const [bundleRes, skinRes, tierRes] = await Promise.all([
      axios.get("https://valorant-api.com/v1/bundles"),
      axios.get("https://valorant-api.com/v1/weapons/skins"),
      axios.get("https://valorant-api.com/v1/contenttiers"),
    ]);

    if (
      bundleRes.data.status === 200 &&
      skinRes.data.status === 200 &&
      tierRes.data.status === 200
    ) {
      context.bundles = bundleRes.data.data;
      context.skins = skinRes.data.data;
      context.contentTiers = tierRes.data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export const filteredBundles = (bundles) =>
  bundles.filter(
    (item) =>
      item.displayName.includes("Arcane") ||
      item.displayName.includes("Champions") ||
      item.displayName.includes("XERØFANG") ||
      item.displayName.includes("Ignite")
  );

export const vctBundles = (bundles) =>
  bundles.filter((item) => item.displayName.includes("VCT"));

export const matchingBundles = (bundles, skins) => {
  const skinDisplayNames = new Set(skins.map((skin) => skin.displayName));
  return bundles.filter((bundle) => skinDisplayNames.has(bundle.displayName));
};

export const premiumBundles = (bundles) => {
  const premiumBundleName = [
    "RGX 11z Pro",
    "Araxys",
    "Spectrum",
    "Glitchpop",
    "ChronoVoid",
    "Prelude to Chaos",
    "Radiant Entertainment System",
    "Gaia's Vengeance",
    "Elderflame",
    "Imperium",
    "Singularity",
    "Neo Frontier",
    "Primordium",
    "Ruination",
    "Overdrive",
    "Kuronami",
    "Sentinels of Light",
    "Sovereign",
    "Mystbloom",
    "BlastX",
    "Protocol 781-A",
  ];
  return bundles.filter((bundle) =>
    premiumBundleName.includes(bundle.displayName)
  );
};

export const deluxeBundles = (bundles) => {
  const deluxeBundleName = [
    "Xenohunter",
    "Neptune",
    "Origin",
    "Radiant Crisis 001",
    "Forsaken",
    "Soulstrife",
    "Elderflame",
    "Prime",
    "Black.Market",
    "Magepunk",
    "Valiant Hero",
    "Crimsonbeast",
    "Ion",
    "Oni",
    "Cryostasis",
    "Gravitational Uranium Neuroblaster",
    "Reaver",
    "Recon",
    "Prime",
    "Prime//2.0",
  ];
  return bundles.filter((bundle) =>
    deluxeBundleName.includes(bundle.displayName)
  );
};

export const runbackBundles = (bundles) =>
  bundles.filter(
    (item) =>
      item.displayName.includes("Run Back") ||
      item.displayName.includes("Run It Back") ||
      item.displayName.includes("Give Back")
  );

export const exclusiveBundles = (bundles, helpers) => {
  const deluxeBundle = new Set([
    ...helpers.matchingBundles(bundles).map((item) => item.displayName),
    ...helpers.premiumBundles(bundles).map((item) => item.displayName),
    ...helpers.deluxeBundles(bundles).map((item) => item.displayName),
    ...helpers.selectBundles(bundles, helpers).map((item) => item.displayName),
    ...helpers.runbackBundles(bundles).map((item) => item.displayName),
  ]);
  return bundles.filter((item) => !deluxeBundle.has(item.displayName));
};

export const selectBundles = (bundles, helpers) => {
  const selectBundle = new Set([
    ...helpers.filteredBundles(bundles).map((item) => item.displayName),
    ...helpers.vctBundles(bundles).map((item) => item.displayName),
    ...helpers.matchingBundles(bundles).map((item) => item.displayName),
    ...helpers.premiumBundles(bundles).map((item) => item.displayName),
    ...helpers.deluxeBundles(bundles).map((item) => item.displayName),
    ...helpers.runbackBundles(bundles).map((item) => item.displayName),
  ]);

  return bundles.filter((item) => !selectBundle.has(item.displayName));
};

export const allBundles = (bundles, helpers) => {
  const excludedDisplayNames = new Set([
    ...helpers.filteredBundles(bundles).map((item) => item.displayName),
    ...helpers.vctBundles(bundles).map((item) => item.displayName),
    ...helpers.matchingBundles(bundles).map((item) => item.displayName),
  ]);

  return bundles.filter((item) => !excludedDisplayNames.has(item.displayName));
};
