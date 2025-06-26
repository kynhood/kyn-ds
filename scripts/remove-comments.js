import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// File extensions to process
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'];

// Directories to process
const DIRECTORIES = [
  path.join(__dirname, '..', 'src')
];

// Function to remove comments from a file
function removeCommentsFromFile(filePath) {
  // Skip files in node_modules
  if (filePath.includes('node_modules')) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove single-line comments (// ...)
  let newContent = content.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
  
  // Remove empty lines that might be left after comment removal
  newContent = newContent.split('\n')
    .filter(line => line.trim() !== '')
    .join('\n');

  // Write the file only if content changed
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Processed: ${filePath}`);
  }
}

// Process all files in directories
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      removeCommentsFromFile(fullPath);
    }
  });
}

// Start processing
console.log('Removing comments from files...');
DIRECTORIES.forEach(dir => {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  } else {
    console.warn(`Directory not found: ${dir}`);
  }
});

console.log('Comment removal complete.');
