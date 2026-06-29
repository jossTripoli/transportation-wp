import type { MediaImage } from "./types";

export function getMediaUrl(image?: MediaImage | null): string | undefined {
  return image?.node?.sourceUrl || undefined;
}

export function getMediaAlt(image?: MediaImage | null): string {
  return image?.node?.altText || "";
}