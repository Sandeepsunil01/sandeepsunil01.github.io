'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4cbdbec06c0c675892c68029130654ed",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"favicon.ico": "a74dcf05f937b8f003bf383d05331572",
"index.html": "8ff393a2ad1668601f1273005c79bf80",
"/": "8ff393a2ad1668601f1273005c79bf80",
"main.dart.js": "4d13678e12ea93fdd48a47c0715a90e1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-192.png": "77064d693f429dc721f65b2ab91329bc",
"icons/icon-192-maskable.png": "d41a1688f998eedce2ee9d8e88dcfcca",
"icons/icon-512-maskable.png": "1f6dd2e12d4a97f42cc1b4c3d9170e72",
"icons/Icon-512.png": "a131e42af31d06e8efbc673022119bb4",
"manifest.json": "ca7af2a6c961fb3a507ca43314abab96",
"assets/AssetManifest.json": "82c21e567bc857a8a84e965bf2a3f87d",
"assets/NOTICES": "1f60904008d4270b5242f453c9ee70b5",
"assets/FontManifest.json": "76b10f6868faaffd8a900c347d52c3f5",
"assets/AssetManifest.bin.json": "57ea8eb276f122e57356f6f9dc48dbc8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c7aad9a8b28c23e767cd192c6a68b480",
"assets/fonts/MaterialIcons-Regular.otf": "924b0b6db0d6d7347e1d09f97dfeebea",
"assets/assets/images/no_image.jpg": "667cf59e90e9b7b7a8e91b27552d295b",
"assets/assets/images/projects/find_your_dentist/fyd_logo.png": "5cec4692030dc6f508bf012bdd6edfb9",
"assets/assets/images/projects/ipulse/ipulse_1.png": "041792c84ce033bb90a0a0715a40066d",
"assets/assets/images/projects/ipulse/ipulse_3.png": "fc770939f76ae61bd2af44566cd003c0",
"assets/assets/images/projects/ipulse/ipulse_2.png": "9d750522e5c7890c72a2ebe4bc3235dd",
"assets/assets/images/projects/ipulse/ipulse_logo.png": "6688e2e3e37ea3de2577989dc1c45bd6",
"assets/assets/images/projects/coolgix/coolgix_2.png": "eec575b1657e25383863aa9c3aa3de0a",
"assets/assets/images/projects/coolgix/coolgix_logo.png": "17bf52ebed262d7708285efa1deae3f1",
"assets/assets/images/projects/coolgix/coolgix_3.png": "76c08f2c78d6c48a1fcf6e53ab4d93b8",
"assets/assets/images/projects/coolgix/coolgix_1.png": "4cea295f436ca445870eeba9a251e5bd",
"assets/assets/images/projects/coolgix/coolgix_4.png": "00c76307fc12fc003d60242b42294681",
"assets/assets/images/projects/coolgix/coolgix_5.png": "1103e97951ca21e3f314cbc6402cd751",
"assets/assets/images/projects/biomeds/biomeds_1.png": "334bf7467ef676b815bac7ffdb42fb38",
"assets/assets/images/projects/biomeds/biomeds_logo.png": "8152f65d58289e8c63bbd2d5f0bda00a",
"assets/assets/images/projects/biomeds/biomeds_2.png": "4152287534416ab1d559b0ea5d671584",
"assets/assets/images/projects/biomeds/biomeds_3.png": "e75d5c611008c0ae44911259534067cd",
"assets/assets/images/projects/friction/friction_logo.png": "f58f458c650689915517c67bd2ec0dc9",
"assets/assets/images/projects/clubliv/clubliv_5.png": "5ee436cbca6538ddbde5408da7f29233",
"assets/assets/images/projects/clubliv/clubliv_4.png": "d981bcabd970d975e08b23e1b6b3a9a8",
"assets/assets/images/projects/clubliv/clubliv_logo.png": "43c23829ae6618c8574d74b1a4b9e3f8",
"assets/assets/images/projects/clubliv/clubliv_3.png": "0737871087f282088cf3b3d70a6aaf1b",
"assets/assets/images/projects/clubliv/clubliv_2.png": "ce3f1bd81c98f05e864a424f150470ea",
"assets/assets/images/projects/clubliv/clubliv_1.png": "77503394f696e1c20c8a9a30d01e1e53",
"assets/assets/images/projects/cargo_shipping/cargo_shipping_logo.png": "3d3d88b5764d9fa1b9eba29be78806e6",
"assets/assets/images/icons/xcode.png": "f951b6aa2bccf64f29897d8039fc5b9c",
"assets/assets/images/icons/flutter.png": "9fc0b4d1dfad98ee171b492f8851386e",
"assets/assets/images/icons/android_tv.png": "eac2799cad3dd1fda1d598053aaed4e9",
"assets/assets/images/icons/android.png": "3053f5bedb9768be91a27bd3f2778d02",
"assets/assets/images/icons/linkedin_icon.jpg": "1be9352194b16b075fb8606a9cc4ee3e",
"assets/assets/images/icons/figma.png": "8533f7382e06775096dcae47064e2fd6",
"assets/assets/images/icons/appstore.png": "51ad7b3de77999da66d44497b3c614c7",
"assets/assets/images/icons/vscode.png": "70f1cef2686d18a26ae6cc4935ca5956",
"assets/assets/images/icons/android_studio.png": "9ffe11a628fa04e1dc136de7709a0486",
"assets/assets/images/icons/iphone.png": "47bf9221898015634d44e7f98de94b39",
"assets/assets/images/icons/pen_and_paper.png": "b237f611b07aa60e2169cce3c1338e3d",
"assets/assets/images/icons/x_icon.png": "bf163fa6ea311be0928ab0ec8100d081",
"assets/assets/images/icons/web.png": "4c3bde3ebbb7b3ce4ce6cee719284842",
"assets/assets/images/icons/ios.png": "060c08cfefc57dbdb31e910220bc70de",
"assets/assets/images/icons/google-developers.jpg": "fcb5a63a2270036aebd41293169f33f1",
"assets/assets/images/icons/apple-logo.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/images/icons/playstore.png": "f6948c9af645bbaa44dc4a3ec039dd06",
"assets/assets/images/icons/browser.png": "e1549772a4eafe57a7af792968d11ada",
"assets/assets/images/icons/dart.png": "50c670b455512e01281f54f391f79e00",
"assets/assets/images/icons/github_icon.png": "bb04d77a846e6beca811c4be1d8e3442",
"assets/assets/images/icons/android_phone.png": "e057d2959a073f534ad7bc113f867896",
"assets/assets/images/icons/about_icons/childhood.png": "e4edcf888d5c03e5fb81a78175550443",
"assets/assets/images/icons/about_icons/developer.png": "1acb0594034d158fe1a51c372c97b1e2",
"assets/assets/images/icons/about_icons/electronics.png": "f3f81e8261e82e8b3710378a262a3fc6",
"assets/assets/images/icons/about_icons/flutter_dash.png": "db0373b68e26eac775e7c1c262e812de",
"assets/assets/images/icons/nodejs.png": "005ebb342ef31c7c4ddace32616326a5",
"assets/assets/images/memojies/contact_me_emoji.png": "18ff8dd2adfe0cc56d002b811a77cd71",
"assets/assets/images/memojies/hello_emoji.png": "9ee9fd17bb0b151f7c307f4bf8e0f05e",
"assets/assets/images/memojies/achievements_emoji.png": "c704af003860a23ad6a67f199144cbb4",
"assets/assets/images/memojies/projects_emoji.png": "19fae08f77ba142d2085719bf36b6220",
"assets/assets/images/memojies/about_me_page_image.png": "905a329f600d7143f1c6ca9bcde91096",
"assets/assets/images/memojies/about_emoji.png": "d67db7e4c00ad97bc5b867aa1fe657d4",
"assets/assets/images/memojies/career_emoji.png": "eb0ccdf5bfe64da0ad099b0998225bee",
"assets/assets/fonts/Teko/Teko.ttf": "4d23bd0f4a6b3d230c22cb7d6d26c866",
"assets/assets/fonts/Quicksand/Quicksand.ttf": "191a406a7e852a6a06dd6346733938f8",
"assets/assets/fonts/Kalam/Kalam.ttf": "b3d0cb8286497ecfe76846476495927c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
