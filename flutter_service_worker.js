'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fe407e93206834e7cffe54063905d022",
"assets/assets/cv/cv.pdf": "44d1b7739e84ec1f9ea8caaf7747f9f2",
"assets/assets/fonts/comfortaa/Comfortaa-Bold.ttf": "281df342e6f73c20ebc6526f130e00b3",
"assets/assets/fonts/comfortaa/Comfortaa-Light.ttf": "d30cea8a3c38eee6a405049e1d8c7c2f",
"assets/assets/fonts/comfortaa/Comfortaa-Medium.ttf": "1a7bfac2b8d70a2726a281786c3894cd",
"assets/assets/fonts/comfortaa/Comfortaa-Regular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/comfortaa/Comfortaa-SemiBold.ttf": "50c5468a51006a4b81d223cc28aa1790",
"assets/assets/fonts/compiler/Fontspring-DEMO-compiler-black.otf": "53422cabdc1f737ccef352f40e74fefc",
"assets/assets/fonts/compiler/Fontspring-DEMO-compiler-blackitalic.otf": "848acb0c74bb013e4919646e47a6b624",
"assets/assets/fonts/compiler/Fontspring-DEMO-compiler-bold.otf": "c6307ab8d1bf63724660107aff7eebef",
"assets/assets/fonts/compiler/Fontspring-DEMO-compiler-extrabold.otf": "d59f264aa89cdbbd19ffa03af3dcbae0",
"assets/assets/fonts/compiler/Fontspring-DEMO-compiler-extrabolditalic.otf": "dbdd3b07a549913ece78f14b166b3227",
"assets/assets/fonts/compiler/Fontspring-DEMO-compilerplain-medium.otf": "5a41e91c321b4e6148f3f7097832a7c1",
"assets/assets/images/dash/dash_articles.png": "c1c489a08abbc8b9c9a8d2bf15b242a8",
"assets/assets/images/dash/dash_contact.png": "530e1339447a0a04f75ebd6ba7afd9af",
"assets/assets/images/dash/dash_home.png": "70570c7ee68d401acab634d8995af98b",
"assets/assets/images/dash/dash_the_guy.png": "797813ac95f75d78b233871309f71a02",
"assets/assets/images/logo/logo.png": "1478d5056dd583d33bddf51674675bed",
"assets/assets/images/logo/stackademic.png": "9d143648940b7ea9b641b05432b63c77",
"assets/assets/images/projects/bmi_check.png": "63410732f90d22eccecfb3ed7a3410cf",
"assets/assets/images/projects/bmi_check_mobile.png": "75fdc4ac01ccbc67635dbf72d21059e3",
"assets/assets/images/projects/cellphone.png": "ca6ffaf854131146f201282dc70072a0",
"assets/assets/images/projects/flutter_logo.png": "f4ad0e5e6509a201dc865848f47b882d",
"assets/assets/images/projects/min_bmi_check.png": "0d2ae8f990ca759ff24dd9805d9c6bc3",
"assets/assets/images/projects/min_plus+.png": "3ecb37a4bc99514b1b3906717cf5a12d",
"assets/assets/images/projects/min_protechtor_gear.png": "90ecad2e4774bd676b51376435187b92",
"assets/assets/images/projects/plus+.png": "ee988a5c64d2171dcaca649d6d7a1cba",
"assets/assets/images/projects/plus+_mobile.png": "0fefcc5abda8f52c2e8ffb2063ebed50",
"assets/assets/images/projects/protechtor_gear.png": "50e8bc747fafcf79c260c7664fc4d01b",
"assets/assets/images/projects/protechtor_gear_mobile.png": "e6d5906bcbf07bd02cf0ce2f2bbf32a4",
"assets/assets/videos/bmi_check.mp4": "cc73c3082527ce0305c89b77faf5a3b2",
"assets/assets/videos/plus+.mp4": "8439954b12e938b83947e43e8c220bc3",
"assets/assets/videos/protechtor_gear.mp4": "b84194d2cabf24e6b21878cf1f608c02",
"assets/FontManifest.json": "bc65de663bbe09b7a66ed0ab9d743042",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "041dfab43d3001f0b40d6b583069f2c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "08d6958965b568173afaf6b8b6e6f7fc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "4c6145ed997e4cd5f65398efdf92603f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5159e7cd35a376415161684fa41b52b7",
"/": "5159e7cd35a376415161684fa41b52b7",
"main.dart.js": "4a438661625a291e52a18ae65722f7a6",
"manifest.json": "aeaba273770e39989b82ef56cff888ff",
"version.json": "8013e3cbd917ef926ba7e3d14a93ca4d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
