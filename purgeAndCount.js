const fs = require('fs');
const { PurgeCSS } = require('purgecss');
const path = require('path');

const contentFiles = ['./booking.html', './businesses.html', './contact-us.html', './index.html', './individual-tax-returns.html', './our-team.html', './privacy-policy.html', './xero-accountants.html'];
const cssFiles = ['./scripts/css/bootstrap.css', './scripts/css/new_style.css', './scripts/css/style.css', './scripts/css/style.min.css'];

const purgeAndCount = async (content, cssPath) => {
  // Count characters in the original file
  const originalContent = fs.readFileSync(cssPath, 'utf-8');
  const originalCharCount = originalContent.length;

  const config = {
    content: content,
    css: [cssPath]
  };

  const result = await new PurgeCSS().purge(config);
  const outputFileName = path.join(__dirname, cssPath.replace('.css', '_temp_purged.css'));
  fs.writeFileSync(outputFileName, result[0].css, 'utf-8');

  // Count characters in the purged file
  const purgedCharCount = result[0].css.length;

  // Calculate the difference
  const difference = originalCharCount - purgedCharCount;

  console.log(`File: ${cssPath}, ${originalCharCount} - ${purgedCharCount} = ${difference}`);

  // Delete temporary file
  fs.unlinkSync(outputFileName);
};

// Run the function for each CSS file
cssFiles.forEach(cssPath => {
  purgeAndCount(contentFiles, cssPath);
});
