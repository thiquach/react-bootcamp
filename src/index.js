import emojipedia from "./emojipedia";

const newDescription = emojipedia.map(function shorten(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newDescription);
