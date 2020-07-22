module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === true) {
    return members
      .filter(e => typeof e === "string")
      .map(e => e.trim().toUpperCase())
      .sort()
      .reduce((acc, cur) => (acc += cur[0]), "");
  } else return false;
};