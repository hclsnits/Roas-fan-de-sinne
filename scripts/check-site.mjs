import { readFileSync } from 'node:fs';

const requiredFiles = ['index.html', 'styles.css'];
const requiredText = ['Roas van de Sinne', 'Sun-Rose Ritual Oil', 'Seasonal letters'];

for (const file of requiredFiles) {
  readFileSync(file, 'utf8');
}

const page = readFileSync('index.html', 'utf8');
for (const text of requiredText) {
  if (!page.includes(text)) {
    throw new Error(`Missing required page text: ${text}`);
  }
}

console.log('Static site files are present and contain the expected brand content.');
