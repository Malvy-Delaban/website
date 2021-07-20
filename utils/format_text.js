const regex = /^(.*)$/gm;
const str = process.argv[2];
const subst = `"$1",`;

const result = str.replace(/\"/gm, "\\\"").replace(regex, subst).replace(/ +(?= )/gm,'');
var filtered = JSON.parse(`[${result.slice(0, -1)}]`).filter(function (element) {
    return element.length > 0;
  });
console.log(JSON.stringify(filtered, null, 2));
