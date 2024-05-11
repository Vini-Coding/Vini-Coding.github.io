'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e59604fc0374649f0a4603ae753a269a",
".git/config": "7c0c167704d5b09402833a385880ad75",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "52242389d7906941ddba602b46b0c55c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "115e882765280c7903d35790caf181f1",
".git/logs/refs/heads/main": "112666b2bee47a30a947389647fda6e9",
".git/logs/refs/remotes/origin/main": "d8cfcec1f2024b47d4caa92e9d598932",
".git/objects/00/c2106947df6ca77bd40ec38c2cfa3d3d37cecd": "49b7e1f06cf30cfd9edc730e59cd6fd3",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0e/76ec4317578e9ce20fc92496067ecf47a7b4bf": "62b0e1531186b6853a5e53704f649b08",
".git/objects/0f/de45e1575782b0eae7cee215b9e59a62a1f25f": "3514529d484fa3f340a5579ffb6a10b8",
".git/objects/17/46b9fa037df0ad18a4987f87060488ac058075": "555058a8ec51bfed9621ed399238a7b4",
".git/objects/17/5469b49839f08b4fcb482c60031142adf9b957": "87d1986a6a28662f38c7848662a1f030",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/40f77a6c6021903d5ce6d58a86ac1dbe15b0e1": "82f6e7f80f7545b40fbd340386b8da9b",
".git/objects/1d/c246bea12f530147ff320a07f768c0f4efa996": "46eac92c3b364ff85ea6fa6cce63ec5b",
".git/objects/23/10cd244f25d21db32801494a3f90f2eee48e77": "12162fd7aa83da2857016341405af034",
".git/objects/23/e4f830dcd8f9433a065d86fe3b4f7ca871e532": "714d1eb58c307876a8a7fd5791c70d88",
".git/objects/24/13f4ae942f6cdfe859f2821d4e423a45408935": "dd93f082fd6a39254a96886723ba7da3",
".git/objects/26/3f837aa9f298f4bc28adfd559d52b21bd7de12": "8b92170fdbf5ee52da454cfa7dc00544",
".git/objects/27/a543697dec65fc56f1a6784430bd4eb911d8a6": "65370f8e4a09a8c4a66d379e4b9856f7",
".git/objects/28/421f52bead3f65ace5e2851949407ae1a599da": "8369e597bc45194225fb0097b8574687",
".git/objects/2a/98021e64208553458d146afde3b557bad5424e": "a4400da49e1d77c92bed527c07fed40d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/f8a62240befbaf341550792fbcfee839e3d282": "a04402e0cf3727da5e2548429d1a8989",
".git/objects/2d/ab594afa03ee45f459b17fa1ce05417c4442e0": "7e2ed692861992bbaa830261351b913a",
".git/objects/2e/eb79e49d3c702be10be753c99c7262bbff8eb7": "28c43afb52066dad616cfccd56efbca8",
".git/objects/2f/7673e7f4efa0f7cb453ea8f602b0bda0dadda6": "b70d211851ec6d0615553801ae36bf01",
".git/objects/32/048dfa75a11dcc65653e81c80fc641c233054c": "238d12e5d8a3ade1d314408269a000c5",
".git/objects/33/d63475eafdea0d3542df9bd10902ff97f43965": "aed69dc7173363a4c2691672a3e66e16",
".git/objects/34/4576357db1a10d32ea1d2ef855f70c0c89c8cb": "f695e1f5e39e210658291bc4aeedd1a3",
".git/objects/34/d74a2c138e3d2e24de80be4d438622d8d2eead": "7e5ee6f92b16c6dbc7d398b475d86fd4",
".git/objects/35/7c70a7a3fdb5b7579d1d85010f65492d26e731": "97bd10cbc5a40ac98e863f388afadcdb",
".git/objects/3b/bc6d1c15184a13ccad91538006a01e565e0c3d": "1448083502bd9b5e7b82089ceb0d68a4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/11655d4cbf7f1974bba3ae6b6f43017ff85c64": "ff7b562e1ae454e743fe2547e3e4d50e",
".git/objects/43/352a64d0fd9b55aa22eb2da83c4ba98a9b7eda": "1b2d8c6be29f2ad7eeafd74bc70ba384",
".git/objects/44/caf5f0f43b95c94d9fe1169aea97b53a47b74e": "aecee366b0998cbc89f25fb15d25ba11",
".git/objects/4b/e7b9d6138fb0726134571933df80ecb5c02469": "b9f6ebea9b37689963274a6ec3bf76d8",
".git/objects/4d/a722c70a2a9b562af0d28f361fea737307178d": "6026c89c99253b67784f641b3c81e632",
".git/objects/52/863d15f47b993b447b27e8f4985e6ce5562443": "1a4c905cec9d214f88e3d2baa2e014fa",
".git/objects/54/52c019d84ce3840365bb130023dfdff65428a6": "0c6acc2f32b696e3b09358827883e61a",
".git/objects/5b/30698a0806599dda09243d815ad2c9c56a4abe": "2ea8736d1735acf6ac7699e21d315494",
".git/objects/5b/b1381a2387efbb074484d2b93e82b7204cb265": "6c08d8e5990d6415c9346532856a1b74",
".git/objects/5f/93b2873f95700c3327b1540dfd3a80e9c38f10": "d1e6d333546885cdc9bd931b10f1f67c",
".git/objects/5f/fccc5a2a1bf1fd89b25c7baad921332785bf2a": "e66b583f67b34f0f63866d228a2edd8d",
".git/objects/60/0b952caba37c2d8a61fb3abec599482abdcbdf": "00414e9a7db8c6947d42841e114f0c8c",
".git/objects/6e/c5207b8d4ccd244f605a66b9a579e3770bc87a": "d1d77636b40d2c63156de7d3bd1ea121",
".git/objects/70/c84f3384b3bbb5030a48af6230dba4e7b39a70": "deeca05fc59780e5c0279dbc0319b2bd",
".git/objects/73/ece7bc7446f1b4848814995212e3ccab688ff4": "05bbf1157cba0eb9a9b90268c1024fbf",
".git/objects/76/0f20798e778b1c25c114333dcac119b09949fc": "f74453466f85ff842551717d9ae6e2be",
".git/objects/77/1d1b6c3826ea0d3adf9b1a8a0743174315f1ad": "d5b411e0bd11ac26830a027c63f066a8",
".git/objects/77/3834d586a4001a8dacce6a631e3cf466fc41ad": "4f13c194fed2fb36be97a166106330aa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/cf9cc70f42ddfe3e9fd39948b3db6703efe718": "5897438f6658b93a72fe96723e650ac3",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/4fc3696cde85601c844823c639e6fd409cc92e": "4008cf0624a3f971126a541212d6cc39",
".git/objects/83/534b58f6dbf3e798c0380afbabab545f7c7195": "875b6408e51bf61b04f0735fd2703429",
".git/objects/86/b992a4baf8e72bbdfbd2adda7df3bb8a26b592": "111c0e7f9f1eadc3c5862bef6a8611be",
".git/objects/88/6dce3e549265ed4d4deb652d9aea20e5795577": "5b96368fa1e81a365f87ff162e281ffa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/f63d8209e33b39c6549a47719d296a9b00d148": "de1900890a976f98870b2656ad6f1307",
".git/objects/90/eeaf0644785092f3f7d48f7102271d2c333b32": "6fc4485e4547739e22fd476ad771a97e",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/ef5ae3a0a3c83b1571dcf70cea2327032c7cc0": "750298387d89b8aff000957c4de79598",
".git/objects/93/030e0d5a533839a7bd39ee2525abba651f6c30": "271f97913fe1b7c9d91262076d099b5b",
".git/objects/94/10871c53a30a7dd3e967d5bdbb641a90c9d228": "dea0cf77677e99a1ca85ae2a8ea18715",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/9d4e52af149f8b4aa10ae0bbe7dea809fdfa17": "5d7b4ccb8273073029793f4865fc612a",
".git/objects/a4/4a72d90edd9c2af2798662712a761984405fb4": "24d6d1466c4858149c57b9bacff2f5ce",
".git/objects/a5/4842b8e32b13525071f1fc0861ce57b93c77ad": "9540f45204ea4cc5657f0f553b76c54c",
".git/objects/ab/c4409aa81355ae51d2206ef696b3cdd46d020c": "9723bf66d5769ea1df13ad1cf8af2856",
".git/objects/b0/63dee32527a9d6fe0f5c51244a17153e90f873": "f026939c9756ed53359597795244a536",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/eaa21b964a336ea20e40e733af14a20e8bd6ac": "79f9650001038aa9be0fa2a15d67e954",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c53142e0f4678373422805520ff7cbb221bb8c": "2c262a7141aa36a155f58b8eb5b67800",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/0d4079086c9ede931e0ce2d903ae98a20f893d": "f86e0c1a12d14c2a23fcf4b95a2dfb58",
".git/objects/c3/7cd162dbd767c5e9cf22f42f6240811ead0a0c": "e224cb679060a7b538cbc54a55ac113a",
".git/objects/c8/465c8a91ca701d258a7ce56ff352f4f130cb3c": "b60acdd7ad38010684c50bb4f8b75284",
".git/objects/ca/eb04059455477fcdad7ae6a79118bea5699db3": "d7ff0e85f3a5cb85506533aa443ab3fa",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/7d6df7ce0d94fa7674160123457ff0fc88b4e2": "f9093c3bc05f601e7e0442a5a8e1dce9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/aef9e83be7d39ff6b999152f6f72167b96c94d": "9a867b52286a0e79ef3039ca057b40e4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/92afacf4bb54b7b2e518f1e0f6ba77fb8efd66": "47c3b603d34767626d94ead89c68ac11",
".git/objects/e3/f6b19bfe21e2542cc44673bac6ef6d6ce099c5": "8dbc5563510f3896ce5e74baf7b15cee",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/4de93f18fbf613b994c881170696c654b215cf": "8f601f056fd24229fef2018d9a934dec",
".git/objects/e7/7e61022a54db68fcbb3fa545755f836f71004c": "769fd0630c3ad8a91945b2be08ef9def",
".git/objects/e7/8b4da802654012c5a8528430ddd83f5102336e": "2ec4cb5b4cdb330f0a1e4135308a1c8a",
".git/objects/e7/c17462664db29692cffd885e6925828b87aa0c": "adcd4490907474629f6c0cea8d14a1e8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/d588389ff9bb43e0dfdbf09619c39ae2a2bfe3": "15b444fe5de58ef280da8e33ec017a8b",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/refs/heads/main": "a665d4ae4940f1717c4f40a5ca5ccc58",
".git/refs/remotes/origin/main": "a665d4ae4940f1717c4f40a5ca5ccc58",
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
"index.html": "f4333158dede0b3a23ceaee7011b42ba",
"/": "f4333158dede0b3a23ceaee7011b42ba",
"main.dart.js": "f441f5161301da1ee24f7f0afeacb253",
"manifest.json": "aeaba273770e39989b82ef56cff888ff",
"README.md": "bde8c56f91a5f5d323d29b5678a727d8",
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
