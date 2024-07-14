'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7a802270ec194bdca0346d3ae9d2c4ef",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"favicon.ico": "a74dcf05f937b8f003bf383d05331572",
"index.html": "cc417e132528a55f55c3218d509cf794",
"/": "cc417e132528a55f55c3218d509cf794",
"main.dart.js": "e3fc8785e0c022cbf72f8e43fb329d01",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "77064d693f429dc721f65b2ab91329bc",
"icons/icon-192-maskable.png": "d41a1688f998eedce2ee9d8e88dcfcca",
"icons/icon-512-maskable.png": "1f6dd2e12d4a97f42cc1b4c3d9170e72",
"icons/Icon-512.png": "a131e42af31d06e8efbc673022119bb4",
"manifest.json": "ca7af2a6c961fb3a507ca43314abab96",
"assets/AssetManifest.json": "6bed9e960a8fa9751bb44e05030c9a66",
"assets/NOTICES": "d5ae28eac98eeb60201f5c377f601e4e",
"assets/FontManifest.json": "76b10f6868faaffd8a900c347d52c3f5",
"assets/AssetManifest.bin.json": "6ec9d82e705cc75a362f8a68ed143a78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7887d4a081b149ff78bfd060b355b26",
"assets/fonts/MaterialIcons-Regular.otf": "18900a86256cb7aeaeb11fa41593e031",
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
"assets/assets/images/icons/playstore.png": "f6948c9af645bbaa44dc4a3ec039dd06",
"assets/assets/images/icons/browser.png": "e1549772a4eafe57a7af792968d11ada",
"assets/assets/images/icons/dart.png": "50c670b455512e01281f54f391f79e00",
"assets/assets/images/icons/github_icon.png": "bb04d77a846e6beca811c4be1d8e3442",
"assets/assets/images/icons/android_phone.png": "e057d2959a073f534ad7bc113f867896",
"assets/assets/images/icons/nodejs.png": "005ebb342ef31c7c4ddace32616326a5",
"assets/assets/images/memojies/contact_me_emoji.png": "18ff8dd2adfe0cc56d002b811a77cd71",
"assets/assets/images/memojies/hello_emoji.png": "9ee9fd17bb0b151f7c307f4bf8e0f05e",
"assets/assets/images/memojies/projects_emoji.png": "19fae08f77ba142d2085719bf36b6220",
"assets/assets/images/memojies/about_emoji.png": "d67db7e4c00ad97bc5b867aa1fe657d4",
"assets/assets/images/memojies/career_emoji.png": "eb0ccdf5bfe64da0ad099b0998225bee",
"assets/assets/images/project_logos/no_image.jpg": "667cf59e90e9b7b7a8e91b27552d295b",
"assets/assets/images/project_logos/biomeds.png": "99758359481710c99313502de5f5949e",
"assets/assets/images/project_logos/clubliv.png": "fa193479247d7404529d4f441aaad397",
"assets/assets/images/project_logos/iPulse.png": "6688e2e3e37ea3de2577989dc1c45bd6",
"assets/assets/images/project_logos/coolgix.png": "7a4da06d6d5b9c2b413f198001cd680f",
"assets/assets/images/project_logos/acetaxi.png": "b1312ecc353a7f59414a05cc9496a252",
"assets/assets/fonts/Teko/Teko.ttf": "4d23bd0f4a6b3d230c22cb7d6d26c866",
"assets/assets/fonts/Quicksand/Quicksand.ttf": "191a406a7e852a6a06dd6346733938f8",
"assets/assets/fonts/Kalam/Kalam.ttf": "b3d0cb8286497ecfe76846476495927c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
