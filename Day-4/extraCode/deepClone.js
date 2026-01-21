const userConfig = {
  theme: "dark",
  permissions: { admin: false, editor: true },
  recentFiles: ["file1.txt", "file2.txt"]
};

const updateConfig = structuredClone(userConfig);
updateConfig.permissions.admin=true;
updateConfig.recentFiles.push("file3.txt");

console.log(userConfig);
console.log(updateConfig);

