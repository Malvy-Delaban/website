const regex = /^(.*)$/gm;
const str = process.argv[2];
const subst = `"$1",`;

const result = str.replace(regex, subst).replace("  ", " ");

console.log(JSON.stringify(JSON.parse(`[${result.slice(0, -1)}]`), null, 2));
