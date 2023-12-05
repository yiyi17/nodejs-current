// node --experimental-permission --allow-fs-read=* --allow-fs-write=* index.js

console.log(process.permission.has('fs.write')); // true
console.log(process.permission.has('fs.read')); // true

console.log(process.permission.has('fs.read')); // true
console.log(
  process.permission.has('fs.read', '/home/rafaelgss/protected-folder'),
); // false
