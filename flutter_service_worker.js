'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9e0f043ab708f130a3850afba4ee59c0",
".git/config": "d4d807ed4f9fb08f5eb5d5a6e7e3cc71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "73b126fb0deb0092e5d8a8b3a95ba393",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dcd5bc3a4edf385348aa8af7a838cfe7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3c6cdbc62771448c8228946db35ec55",
".git/logs/refs/heads/master": "e3c6cdbc62771448c8228946db35ec55",
".git/logs/refs/remotes/origin/master": "46716171be713a3b4dd3cbe20ea441e5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/ac71b975afa488d3cc05a8ea412ae4b5f3b6fe": "65bd1527f3f120283d30e1454835cb67",
".git/objects/08/d3778584a21072bd7d683a1fd4f9697b7fcb80": "715f2eea3daad1c712746cd3e89f9971",
".git/objects/0a/2b38dbd4926e3d7b2a9c92d195cf9b4bd3922a": "aad4ef150c57557fddc16a4d805a7d1f",
".git/objects/0c/18df3bb321d524a8001d5e4b935e2eda4ec2b7": "ef135c6c633e9ae43741a15242a61472",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/7c8ab2ebb34dcaee74437586a06b9f77ae3ce4": "1271be04c6411a7904f1357504974dc8",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/effc30b094d553853b81474498e54265549023": "7cdb61cb14d6b4dbb4295e717c3ff837",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/903c3b8f9acdfb0b9bcb6877439f69649f9af4": "b9239fee5889c95270b03953c9ad4aad",
".git/objects/17/777f9848da08d93d798c5d617d34de43d35ea8": "48a9aefb7140174e340c75837b92284f",
".git/objects/17/b66402096f1e9de924f314e261b15ff1614af4": "f72bbe1df327d7956e776759ebd703a4",
".git/objects/1a/0268c80b8833e1ce1c0784894e43f5962d5e4b": "2927be19e35a9dfb1ef23a2833554863",
".git/objects/1d/01e29e9e3b89b6376e94a17312cb9a93619ce3": "79ecffecf88d33ca415793ff692ce399",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2d/cd3753299c3da63dcc283f506e4e48106e1fb6": "e9125e770492740f996f42ce9543c8c8",
".git/objects/2e/ab401e7e4706347316ff7a251e09c742783fb3": "088c843dc6744c5e83c38cec99c5593e",
".git/objects/30/f53083774cb1fdae5b672ebce0f69db4dde2f6": "00fbc04cc9cddda874da104eab3755bb",
".git/objects/32/a88f1b2845e1e57de3d00bd5b2ded3910b563d": "8664353b525e69bd97f86b05f65a6e3a",
".git/objects/3a/eb375b3a0c2d672dc42afaac31049408de6d4c": "60246861a00e2edc3fb87d148b52be36",
".git/objects/3c/a08be62fe417b6f9886aeed64bfb3e53f3a700": "faa3401e0866bf1cca4f03a12d479a92",
".git/objects/3e/53498c7968c77401de9daf6a31bdad0743d41b": "49b212757f2d63e7f59e23105c3fdc0c",
".git/objects/40/685d7c06898e47c82d4a2fe769052cc2c4678b": "182ec247d0408b7dc4c72ffe875ceb48",
".git/objects/47/021662529dbb4847c7a0662ce4841a8929b8de": "9b5cdbdb295aef6cd3bab2f899c4b26e",
".git/objects/4b/0ef42471432d7b131d66711b1462c7def00aaf": "8470bf93666d73a7b04994187f2c24ed",
".git/objects/4b/2da8a58c3b96b9f9a5a0ec42880912076255ed": "d2c4416d3fb5f3f9fda1538276f4e527",
".git/objects/4d/62cc255f4fcc21ba86ee3a2e50fb762b0f6d19": "dec57b29a89ae578a71a0f99e034891d",
".git/objects/4f/5a4df0cd256e9a24645b14bfcc410f87ac4e0a": "8f65301d32b23ddd191da68f007c49eb",
".git/objects/50/76e3e43c45d9885f8771f723a5fd5bb21aaf7f": "3fddc3fa52fe1793b499f5a70333f2d8",
".git/objects/51/3b9dd19e4b844490456adebfe47a9fff351b1b": "78c4b860598c55f88144625fb02aab59",
".git/objects/52/f4508b6831e11887bdadc38c50d6b11197cd23": "e4a24d91e1543be391ee456430e696fd",
".git/objects/55/d1ef7f8a670fb05716807e11c806279988fa88": "bab436166dc91776bfcc510eeec72885",
".git/objects/57/1dc5b6c6e8719e84a53da3e5bd9905aa6b83a2": "641de3cb33d6e9832f5f777b6589ab16",
".git/objects/5a/6d88ce563b65a87fffd39e3f5e6d4b20aca3d9": "5442bd29a2de2d0e0b2f2b0ee3972f6b",
".git/objects/5e/ffbe739f66f9f25613f46f3f2a29158513d6e7": "87a0ac73e12d01cd9752fc58d8e696e3",
".git/objects/64/a311be33e74324756ba83f646c64c4d8d51ff9": "7bde55df31dcb3cbf20d00aaf75b6419",
".git/objects/65/dc816d8e5d91660d83e359e4c1e898255986cc": "982fa6fd26e0b5f0c81f7679c2a92754",
".git/objects/69/565bfd6b07d1a0c8f030452e64606b9983f35a": "0706ed734f5ef26a04d2d84c10e07216",
".git/objects/69/e025dca0482c6ba4a77ddf3bb99c9cefb2dfc4": "ea0415e6b3f86fd49c5185d10a4b6c95",
".git/objects/6b/e0ab6968e5279e6659e0b2e923be1cb372fae6": "68ee229ab277a89e3ce1523af060414e",
".git/objects/6d/ad03670b79c42f9a2e686568e402ae9f3b69c4": "3009e10c519c2047979d3a6ca068c2b9",
".git/objects/75/b4848f42be33525459c02dc83907c01c711227": "c3df5857fdf7587f5a9573497f383960",
".git/objects/7c/1f0b14143178b500c22be08ee1ae1293ef49dc": "51961b24df0c7b16859dceb4224131bf",
".git/objects/7e/86669404a38e88a71f2ae2d1dc41e1f1216d78": "63891e89f4433792569a32208b481ee3",
".git/objects/80/5d16e0b9c99b64adf210698b6859f177371d40": "f1d9b9ac09ba4ec94bb180d02a23d113",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/7851246417bd032baa332e842baf82094d27df": "f051c4644275eb6096732537bdad78d2",
".git/objects/83/71bed7f1f526492d52ac0770366b36be6d6940": "772e3b6a023b8c65a2a9bc02baa6a6ea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/40e6a5e43b41e4770b764d7592b5ec3926b1d8": "d4ffadf8253888a23db2c626e28c70b5",
".git/objects/8c/f25de87e23d1ea748cf83875494330d8048aa3": "36684d13f2c52ff8f1eeec52c2c2a4c5",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/d61c247b9fe4ff6826114149e2a6a7235ceb2c": "a7bda601f8b877a6f4285bcda4d59e82",
".git/objects/96/c32c0767b9fc67956b680f528a784d8839d818": "4a56ee83b2a5d440531be67aa3a845af",
".git/objects/98/cc203adaa73fc2e675fa719eb4a5d498fedfd2": "5a933fffc1d67144478bc2bff1abbed7",
".git/objects/99/ac8e0da673d6c13e4d8d6c5bde5aea96885179": "addd20b3bb1a8c30c9122cebbdef93f7",
".git/objects/9b/7dca243fece69461d2008d2dbe3eba2279accb": "b5c9673a5181bacc06edf17d1179a03a",
".git/objects/9c/d0a3330acf479420d5c6c36e0eab694bc3413c": "73664a01f441b64ab2bb917a8f774199",
".git/objects/9e/0a5e89066386e36a1b84d58c18099a884b68b0": "195aa1c7936ab801d963d951dfe8fa28",
".git/objects/a0/a6704463f212bfa1e8b59d70a135d1b6a368b6": "70b08256b5678a9ed18a5f121b2f1ceb",
".git/objects/a4/bb380b60a7b59f6deff6eb193834dae869e703": "2a77e1364bbb1837a9704f9a185adfb4",
".git/objects/ac/7e2a3d24a352ef25976ceafba110a8f8eecea1": "77aabe795f5956d1705061ec6779838d",
".git/objects/b6/cb8fc2345b4ba57a4d00827591e46fdd5b0c99": "0d015297ebc547b1d4e6e58b12822786",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ceb8f026611bf08c77a40bbd95ce9dd9c2e6d1": "237c50a4753091f32e3dfca8c4f768a6",
".git/objects/b9/6d8cfc966530ab8dae567a0b1e3136d538cbb0": "b9524736acc59203607ebd81b7fa5ff2",
".git/objects/bd/3fd6873dfd517b05cc468ef989323681e91f5e": "188c046e2aefcdd82fe926f9776fb9b9",
".git/objects/c0/3c3dacb06d8d624c82871117c257819f84b9b2": "26c5e4039432253ddeb297f50f87e47a",
".git/objects/c3/0e6e09dca3a2aa53f376e0c033c70a4daf9c79": "563ed9b7cafe4a9809aaaccc9ce2d140",
".git/objects/c5/410fdc1ba5e9318b6ab5ef1738adf143a11127": "bd2d39bc2489d6a270ba63096cc6687e",
".git/objects/d0/1279a3b057c1a3ed4da6493473a90edb916608": "2a1893e1d9f6b05f799226a777ec56cb",
".git/objects/d8/f72e2c759cec72a9c6ef574adbc760badb01eb": "a3782be387d88957849dfc9ce1be4b4e",
".git/objects/d9/057da1a9d08eaf3c2094717228f3e71020a0eb": "92402e8f2b65872e21ffc847da0b39f5",
".git/objects/db/486927639ab4737cfd7bcbf752450f5155f99b": "f1a7561b5bfc24d6268d2ee249e32ad2",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e1/5028175bc98d6070199f5d0450b8d64b9d4981": "26824f45266913e1c6bbfa9d87cab8d2",
".git/objects/e2/affb7b850942b11c5ae7478df7b09f73841fe0": "7045e54a3f2b3df7609bb47194b3ce6e",
".git/objects/e5/97b2e6e23d59fcc096be4c3a6c01c8e90aff79": "73bbc479c34daae1144da2a39853fdc5",
".git/objects/e7/96afbc395fc5ae33b7b4c9998ebbf7501c7e09": "ddaae8bdbe2d35dbc0089614fc51da68",
".git/objects/e9/430974715b083fe71f8ef71bd20a14f0b61535": "e7ce1ef3eecae3fe12df90b84d1bfa39",
".git/objects/ef/7bd1f2d45a2c32b31d75f1c27d03e503d00070": "e57490bf31210bbb50ea1a24d8869367",
".git/objects/f1/9fce1f7a536c10a9eab936713afd635543ea73": "570ce3314980c0d54ef073c6bc4af06a",
".git/objects/f7/0192dee2d9e0fe1327fe48f76fccffa73c77b3": "b873c8b145adbb302e880e495495d3ff",
".git/objects/f9/309988aeab3868040d3b322658902098eba27f": "56cc8f7a760e4c1e2ef57c994b973d0f",
".git/objects/fa/3f8964c5345330491bcf4a9e5b5cb41f310c67": "11a653e21c073039e6083240f8a88d85",
".git/objects/fb/8bde06d252890cb9845e8f1f721cca9e15c4b7": "421ad96159691c4cb374448d5c708c2e",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fe/44a80c4127070cc0a0e823e0e39404888a84a1": "3d4f8bb7afdd552afe1d2cd70807498c",
".git/ORIG_HEAD": "6e5496df3684cf845ab217b97c862c07",
".git/refs/heads/master": "0ff52a4c630b6bd3b9740a367ee4ea99",
".git/refs/remotes/origin/master": "0ff52a4c630b6bd3b9740a367ee4ea99",
"assets/AssetManifest.json": "a770e24c4b51490b1d6b98038b2e69f5",
"assets/FontManifest.json": "899dccfe0d46efd9223470b6c9530652",
"assets/fonts/iconfont.ttf": "b87c541a2f6cde5b07dc2017ff3cb063",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/donate_alipay.jpg": "48715ff880baa8ef4c8ccca8d30485b5",
"assets/images/donate_wx.jpg": "923e4f1fe941addf4a8ce72e345e9c2b",
"assets/NOTICES": "0d485e8cbd8e2b824ce47175744e577e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d46a1e9514c19bdb7dc58dd3c123dd40",
"/": "d46a1e9514c19bdb7dc58dd3c123dd40",
"main.dart.js": "cd325c8c8e7bfb736088badf7fdb99c2",
"manifest.json": "d5aea7eacd4d28cd882d6223267bdc5e",
"README.md": "f3262971961b87688f647da5003c08d0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
