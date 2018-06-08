module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{svg,js,map,html}"
  ],
  "swSrc": "public/sw-dev.js",
  "swDest": "public/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
