/* exported defaults */
function defaults(target, source) {
  for (const x in source) {
    if (!(x in target)) {
      target[x] = source[x];
    }
  }
}
