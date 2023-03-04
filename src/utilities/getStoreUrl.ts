import type { Platform } from "@/types/Platform";

// Android URL looks like:
// https://play.google.com/store/apps/details?id=com.hg.bcnw

// iOS URL looks like:
// https://apps.apple.com/us/app/battle-chasers-nightwar/id1455088996

const baseUrlByPlatform = {
  android: "https://play.google.com/store/apps/details?id=",

  ios: "https://apps.apple.com/us/app/",
};

export default (platform: Platform, appId: string) =>
  baseUrlByPlatform[platform] + appId;
