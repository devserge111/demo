// render.mjs
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Support __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your JSON input file
const jsonPath = path.join(__dirname, 'input.json');

async function createFilesFromJson() {
  try {
    const raw = await fs.readFile(jsonPath, 'utf-8');
    const data = JSON.parse(raw);

    for (const item of data) {
      const { fileName, dir, value } = item;

      const fullDir = path.join(__dirname, dir);
      const filePath = path.join(fullDir, fileName);

      // Create directory if it doesn't exist
      await fs.mkdir(fullDir, { recursive: true });

      // Write file content
      await fs.writeFile(filePath, value, 'utf-8');
      console.log(`✅ Created: ${filePath}`);
    }

    console.log('\n🎉 All files created successfully.');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

createFilesFromJson();