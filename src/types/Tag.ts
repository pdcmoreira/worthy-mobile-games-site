import type { TagType } from "./TagType";

export interface Tag {
  type: TagType;

  value: string;
}

export function tagToString(tag: Tag) {
  return `${tag.type}: ${tag.value}`;
}

export function tagFromString(tagString: string): Tag {
  const match = tagString.match(/^(.+): (.+)$/);

  if (!match) {
    throw new Error("Couldn't load tag from string: " + tagString);
  }

  return {
    type: match[1] as TagType,

    value: match[2],
  };
}
