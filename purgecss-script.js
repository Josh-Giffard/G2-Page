const fs = require('fs');
const { PurgeCSS } = require('purgecss');

const contentFiles = ['./booking.html', './businesses.html', './contact-us.html', './index.html', './individual-tax-returns.html', './our-team.html', './privacy-policy.html', './xero-accountants.html'];
const cssFiles = ['./scripts/css/bootstrap.css', './scripts/css/new_style.css', './scripts/css/style.css', './scripts/css/style.min.css'];

let combinedCSS = '';

const runPurge = async () => {
  for (const cssPath of cssFiles) {
    const config = {
      content: contentFiles,
      css: [cssPath]
    };
    const result = await new PurgeCSS().purge(config);
    combinedCSS += result[0].css;
  }
  fs.writeFileSync('./scripts/css/purged.css', combinedCSS, 'utf-8');
};

runPurge();
