import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIR = 'public/portfolio';
const OUTPUT_DIR = 'public/portfolio';
const WIDTH = 800;
const HEIGHT = 450;

async function optimizeImages() {
  // Get all image files
  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to optimize...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputFileName);

    try {
      await sharp(inputPath)
        .resize(WIDTH, HEIGHT, {
          fit: 'cover',
          position: 'top'
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      // Get file sizes for comparison
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

      console.log(`✓ ${file} → ${outputFileName}`);
      console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err.message);
    }
  }

  console.log('\n✅ Optimization complete!');
  console.log(`\nTo use the new WebP images, update your portfolio.ts to use .webp extensions:`);
  
  // Show the new file names
  const webpFiles = imageFiles.map(f => f.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  console.log('\nNew image paths:');
  webpFiles.forEach(f => console.log(`  /portfolio/${f}`));
}

optimizeImages();
