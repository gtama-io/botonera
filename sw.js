importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/audio\\crei-que-eramos-amigos.mp3",
    "revision": "b0e9c63930ef28899a776ebc6c299a05"
  },
  {
    "url": "assets/audio\\mate-mate.mp3",
    "revision": "b0e9c63930ef28899a776ebc6c299a05"
  },
  {
    "url": "assets/audio\\sabes-mi-corazon.mp3",
    "revision": "b0e9c63930ef28899a776ebc6c299a05"
  },
  {
    "url": "assets/css\\botonera.css",
    "revision": "423c44b02728b678e39fc64b8def67a8"
  },
  {
    "url": "assets/data\\audios.json",
    "revision": "134f1bcefe459e656c5e699bb8d24db4"
  },
  {
    "url": "assets/js\\botonera.js",
    "revision": "b6eb60fce76fd893586bb54e7fcaad70"
  },
  {
    "url": "bs-config.json",
    "revision": "fb966d41bf9c3d97aee801577ff60b11"
  },
  {
    "url": "index.html",
    "revision": "68d7a0db32a21e788a23d9bb26b64514"
  },
  {
    "url": "manifest.json",
    "revision": "f3508d91ae53e2f9e971d414094de2b7"
  },
  {
    "url": "package.json",
    "revision": "b6d653a710c7a095d6069ac29c74f2ef"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
