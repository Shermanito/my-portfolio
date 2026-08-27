import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import piexif from 'piexifjs';

const INPUT_FILE = 'IMG_0412.jpg';
const OUTPUT_DIR = 'public';
const BASE_NAME = 'sherman-roberts-web-developer-marketing-automation';
// Hero card is 4:3 aspect ratio — use exact dimensions for optimal display
const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 900;

// SEO/AEO metadata to embed into the image file
const METADATA = {
  title: 'Sherman Roberts - Web Developer & Marketing Automation Specialist',
  author: 'Sherman Roberts',
  copyright: 'Sherman Roberts',
  description:
    'Headshot of Sherman Roberts, Web Developer and Marketing Automation Specialist specializing in high-performing web design, local SEO dominance, and automated client acquisition.',
  keywords: [
    'Sherman Roberts',
    'Web Developer',
    'Marketing Automation Specialist',
    'Local SEO',
    'Client Acquisition',
    'High-Performing Web Design',
    'sherm.online',
  ],
};

// XMP packet (Dublin Core + xmpRights)
function buildXmp() {
  const esc = (s) => s.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
  const dcTitle = esc(METADATA.title);
  const dcDesc = esc(METADATA.description);
  const dcSubjects = METADATA.keywords
    .map((k) => `      <dc:subject><rdf:li>${esc(k)}</rdf:li></dc:subject>`)
    .join('\n');

  return `<?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="sherm.online-optimizer">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/"
    xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/">
   <dc:title>
    <rdf:Alt>
     <rdf:li xml:lang="x-default">${dcTitle}</rdf:li>
    </rdf:Alt>
   </dc:title>
   <dc:creator>
    <rdf:Seq>
     <rdf:li>${METADATA.author}</rdf:li>
    </rdf:Seq>
   </dc:creator>
   <dc:rights>
    <rdf:Alt>
     <rdf:li xml:lang="x-default">Copyright ${new Date().getFullYear()} ${METADATA.copyright}. All rights reserved.</rdf:li>
    </rdf:Alt>
   </dc:rights>
   <dc:description>
    <rdf:Alt>
     <rdf:li xml:lang="x-default">${dcDesc}</rdf:li>
    </rdf:Alt>
   </dc:description>
${dcSubjects}
   <xmpRights:Marked>True</xmpRights:Marked>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

// Inject XMP into JPEG as APP1 segment (after SOI)
function injectXmpIntoJpeg(jpegBuffer, xmpBuffer) {
  const SOI = jpegBuffer.slice(0, 2);
  if (SOI[0] !== 0xff || SOI[1] !== 0xd8) {
    throw new Error('Not a valid JPEG');
  }

  const marker = Buffer.from([0xff, 0xe1]);
  const xmpId = Buffer.from('http://ns.adobe.com/xap/1.0/\x00', 'binary');
  const payload = Buffer.concat([xmpId, xmpBuffer]);
  const length = Buffer.alloc(2);
  length.writeUInt16BE(payload.length + 2, 0);

  const app1Segment = Buffer.concat([marker, length, payload]);
  return Buffer.concat([SOI, app1Segment, jpegBuffer.slice(2)]);
}

async function optimizeHeroImage() {
  const inputPath = path.resolve(INPUT_FILE);
  if (!fs.existsSync(inputPath)) {
    console.error(`✗ Input file not found: ${inputPath}`);
    process.exit(1);
  }

  const originalSize = fs.statSync(inputPath).size;
  const xmpBuffer = Buffer.from(buildXmp(), 'utf8');

  const webpOut = path.join(OUTPUT_DIR, `${BASE_NAME}.webp`);
  const jpgOut = path.join(OUTPUT_DIR, `${BASE_NAME}.jpg`);
  const xmpSidecar = path.join(OUTPUT_DIR, `${BASE_NAME}.xmp`);

  console.log(`\nOptimizing hero image: ${INPUT_FILE}`);
  console.log(`  Original size: ${(originalSize / 1024).toFixed(1)}KB`);
  console.log(`  Target: ${TARGET_WIDTH}x${TARGET_HEIGHT} (4:3 aspect ratio)\n`);

  // Step 1: Compress with sharp + embed EXIF
  // WebP: sharp's withExif writes EXIF reliably
  await sharp(inputPath)
    .rotate()
    .resize({ width: TARGET_WIDTH, height: TARGET_HEIGHT, fit: 'cover', position: 'attention' })
    .webp({ quality: 82, effort: 6 })
    .withExif({
      IFD0: {
        Artist: METADATA.author,
        Copyright: `Copyright ${new Date().getFullYear()} ${METADATA.copyright}. All rights reserved.`,
        ImageDescription: METADATA.description,
        Software: 'sherm.online-optimizer',
      },
      Exif: {
        UserComment: 'charset=Ascii ' + METADATA.keywords.join(', '),
      },
    })
    .toFile(webpOut);

  // JPEG: compress first, then inject EXIF (piexifjs) + XMP (APP1)
  const jpgTemp = path.join(OUTPUT_DIR, `${BASE_NAME}.jpg.tmp`);
  await sharp(inputPath)
    .rotate()
    .resize({ width: TARGET_WIDTH, height: TARGET_HEIGHT, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 85, mozjpeg: true, progressive: true })
    .toFile(jpgTemp);

  const jpegBytes = fs.readFileSync(jpgTemp);
  const jpegBinary = jpegBytes.toString('binary');
  const exifBytes = piexif.dump(piexif.load(jpegBinary));
  const jpegWithExif = piexif.insert(exifBytes, jpegBinary);
  const jpegWithExifBuffer = Buffer.from(jpegWithExif, 'binary');
  const jpegFinal = injectXmpIntoJpeg(jpegWithExifBuffer, xmpBuffer);
  fs.writeFileSync(jpgOut, jpegFinal);
  fs.unlinkSync(jpgTemp);

  // Step 2: Write XMP sidecar (for WebP and as a discoverable metadata file)
  fs.writeFileSync(xmpSidecar, xmpBuffer);

  const webpSize = fs.statSync(webpOut).size;
  const jpgSize = fs.statSync(jpgOut).size;

  console.log(`✓ ${BASE_NAME}.webp`);
  console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% smaller)`);
  console.log(`✓ ${BASE_NAME}.jpg`);
  console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(jpgSize / 1024).toFixed(1)}KB (${((1 - jpgSize / originalSize) * 100).toFixed(1)}% smaller)`);
  console.log(`✓ ${BASE_NAME}.xmp (XMP sidecar)`);

  // Verify metadata
  const webpMeta = await sharp(webpOut).metadata();
  console.log(`\nMetadata verification (WebP):`);
  console.log(`  Format: ${webpMeta.format}, Size: ${webpMeta.width}x${webpMeta.height}`);
  console.log(`  Has EXIF: ${Boolean(webpMeta.exif)}`);

  // Verify XMP is in the JPEG
  const jpgCheck = fs.readFileSync(jpgOut);
  console.log(`  XMP in JPG: ${jpgCheck.includes(Buffer.from('dc:title'))}`);

  console.log(`\n✅ Hero image optimization complete!`);
  console.log(`\nGenerated files:`);
  console.log(`  /${BASE_NAME}.webp (primary, with EXIF)`);
  console.log(`  /${BASE_NAME}.jpg (fallback, with EXIF + XMP)`);
  console.log(`  /${BASE_NAME}.xmp (XMP sidecar)`);
}

optimizeHeroImage().catch((err) => {
  console.error('✗ Error:', err);
  process.exit(1);
});
