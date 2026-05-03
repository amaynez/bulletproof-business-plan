#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillName = 'bullet-proof-business-plan';
const sourceDir = path.join(__dirname, '..', 'skills', skillName);

const targetPaths = [
  path.join(os.homedir(), '.claude', 'skills', skillName),
  path.join(os.homedir(), '.gemini', 'skills', skillName),
  path.join(os.homedir(), '.cursor', 'skills', skillName),
  path.join(process.cwd(), '.skills', skillName) // Local project option
];

console.log(`🛡️ Installing ${skillName}...`);

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

let installedCount = 0;

targetPaths.forEach(target => {
  try {
    // Only install to global agent paths if they already exist on the system
    const isGlobalPath = target.includes('.claude') || target.includes('.gemini') || target.includes('.cursor');
    if (isGlobalPath && !fs.existsSync(path.dirname(target))) {
        return; 
    }
    
    copyFolderSync(sourceDir, target);
    console.log(`✅ Installed to: ${target}`);
    installedCount++;
  } catch (err) {
    console.error(`❌ Failed to install to ${target}: ${err.message}`);
  }
});

if (installedCount > 0) {
  console.log('\n🚀 Installation complete. Restart your AI agent to activate the skill.');
} else {
  console.log('\n⚠️ No agent directories found. Try running in your project root to install locally.');
}
