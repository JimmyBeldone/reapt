/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
    {
        url: "App.js",
        revision: "22a613a2a921a917b41f94d14518b287"
    },
    {
        url: "assets/fonts/fonts.styl",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    },
    {
        url: "assets/img/favicon.ico",
        revision: "fa410b0a513a290d74f77dfb65150072"
    },
    {
        url: "constants/apiRoutes.js",
        revision: "10a70aa97bfdf01ff2cfa0d8f3fb4209"
    },
    {
        url: "constants/globalParams.js",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    },
    {
        url: "constants/router.js",
        revision: "1c8734bbc12c0f148d8231f334620a68"
    },
    {
        url: "index.html",
        revision: "f1f70886a0c080ad68d5e2d62e28ace5"
    },
    {
        url: "index.js",
        revision: "90d51126d13b7aed1dfd05cd53e4f2d4"
    },
    {
        url: "lang/en/index.js",
        revision: "32a20da9e8e56ea15385bc3ffd85f4e7"
    },
    {
        url: "lang/fr/index.js",
        revision: "551f5b5ca4400ed4c72c8a9a979849ef"
    },
    {
        url: "lang/index.js",
        revision: "189b8bba09ece34f2363a7f2deed367b"
    },
    {
        url: "managers/routerManger.js",
        revision: "bf5a73fadfae32f0758bf35bc1845f75"
    },
    {
        url: "middlewares/routerParamsMiddleware.js",
        revision: "ad31239d4f5d2da083808d580118046f"
    },
    {
        url: "providers/AuthProvider.js",
        revision: "3567aa099c8ba256cc2e453d10232071"
    },
    {
        url: "providers/i18nProvider.js",
        revision: "88884b8022078b3b9b0de467a59f4b8c"
    },
    {
        url: "providers/LanguageProvider.js",
        revision: "559f2889bbe710d9b5243ba35a7d4100"
    },
    {
        url: "providers/ModalProvider.js",
        revision: "d53357d90b8e4b9b95b0de026cf68e3b"
    },
    {
        url: "providers/ThemeProvider.js",
        revision: "372a31400807317ff7df4483f8ebe3a6"
    },
    {
        url: "reducers/exempleReducer.js",
        revision: "55f8ff2d70e35fcdef63cba17dff57d8"
    },
    {
        url: "reducers/index.js",
        revision: "1412ef776e74ace53d0de93f5f28210b"
    },
    {
        url: "registerServiceWorker.js",
        revision: "14511aaac36b268ce1af48809e5b74e6"
    },
    {
        url: "Root.js",
        revision: "7bd73ce4e2c353ee77bc1c3fb6d15098"
    },
    {
        url: "routes/index.js",
        revision: "85c71e9cadfe011e106a2583991ff1f9"
    },
    {
        url: "routes/routesPath.js",
        revision: "3d08e090c88d3ebf16cfdaa58c88d0e0"
    },
    {
        url: "routes/RouteWithSubRoutes.js",
        revision: "f037eae915524c9da44f857305ffcb18"
    },
    {
        url: "store/configureStore.js",
        revision: "ce451e58a3abb00840c0df5ff792febb"
    },
    {
        url: "store/configureStoreWithPersist.js",
        revision: "67c1db11745c3a6590ea70b67328129b"
    },
    {
        url: "styles/config/_colors.styl",
        revision: "0a32e081a9f0f0ff6642bd2be1142c8c"
    },
    {
        url: "styles/config/_mixins.styl",
        revision: "8659ed863fe6b495dccab66be6d3c1f7"
    },
    {
        url: "styles/config/_sizes.styl",
        revision: "222baa3b9ea6fb210f70ac3ffcf67a8f"
    },
    {
        url: "styles/global.styl",
        revision: "a1c4bdf51f4c7a3edab9fabf2dd12839"
    },
    {
        url: "styles/styleConfig.js",
        revision: "a024c87bab4e2f87295f995320734f5a"
    },
    {
        url: "styles/vendors/normalize.styl",
        revision: "95d4ff39b6c4319eaf1d493a5559317d"
    },
    {
        url: "styles/vendors/reset.styl",
        revision: "889d39a90fd4a7f9bdb7b067ec096554"
    },
    {
        url: "utils/api.js",
        revision: "3ed13418ee03334ce945cef458b782c7"
    },
    {
        url: "utils/lang.js",
        revision: "2a10934469bcda6f4182f4b760ddf49e"
    },
    {
        url: "views/components/default/AutoSuggestInput/AutoSuggestInput.js",
        revision: "6d8482c11be5938e34fad45f77731760"
    },
    {
        url: "views/components/default/Dropdown/Dropdown.styl",
        revision: "68e22aba121f21ce687f0089be8b32cf"
    },
    {
        url: "views/components/default/Dropdown/index.js",
        revision: "48a0612eb2d8548b9d288bfc444f2c35"
    },
    {
        url: "views/components/default/ErrorBoundary/ErrorBoundary.js",
        revision: "0911420b1c18603fe4a062a986104a26"
    },
    {
        url: "views/components/default/Format/Currency.js",
        revision: "be292c46f1110603a7ba4b92d4b2b2f0"
    },
    {
        url: "views/components/default/Format/DateRelative.js",
        revision: "7d9fd4e45a51dcf421c077ab4744dd73"
    },
    {
        url: "views/components/default/Format/Decimal.js",
        revision: "d78624da1a21cb0b21b2e3faf4413b75"
    },
    {
        url: "views/components/default/Format/FormattedDate.js",
        revision: "40616b6d0d5d0999dfe940f391d55f03"
    },
    {
        url: "views/components/default/Format/Percent.js",
        revision: "f49dbd70f3710f79f3cdf9e481d6b20f"
    },
    {
        url: "views/components/default/InputGroup/InputGroup.js",
        revision: "22dd79896531d77086373b33063ab24b"
    },
    {
        url: "views/components/default/InputGroup/InputGroup.styl",
        revision: "c2034a44f45b0c38afc6d0ea42d846d8"
    },
    {
        url: "views/components/default/LoadingPage/LoadingPage.js",
        revision: "c4d676018f79662dc357402d563331aa"
    },
    {
        url: "views/components/default/Modals/DefaultModal.js",
        revision: "46415ac7ec243ee2ed3671ebaf5988f1"
    },
    {
        url: "views/components/default/Modals/DefaultModal.styl",
        revision: "d8552036a36b962cfdb8433531ae9857"
    },
    {
        url: "views/components/default/Modals/index.js",
        revision: "33b740a838fdcb85fe3674abc6e6379e"
    },
    {
        url: "views/components/default/Modals/Modal.styl",
        revision: "07feab1904ef186905918045ddc95643"
    },
    {
        url: "views/components/default/Modals/ModalContainer/index.js",
        revision: "518419c0bada17fd73bd198c281eaafc"
    },
    {
        url:
            "views/components/default/Modals/ModalContainer/ModalContainer.styl",
        revision: "62c8f3ff7b980ebceaa1ac6a1be508c9"
    },
    {
        url: "views/components/default/Modals/OpenModalBtn/index.js",
        revision: "dd909bd967a457ab383d7bc75e41b5ba"
    },
    {
        url: "views/components/default/Modals/OpenModalBtn/OpenModalBtn.styl",
        revision: "610125a3bf3c1339303eaad821056cde"
    },
    {
        url: "views/components/default/Notification/Notification.js",
        revision: "de0a10c5907e1987096047cb7ac10efe"
    },
    {
        url: "views/components/default/Overlay/index.js",
        revision: "ba21bb02e76616fbd1ff9d9f020151b5"
    },
    {
        url: "views/components/default/Overlay/Overlay.styl",
        revision: "3f352fbc641a8785f3506d141c0b21b1"
    },
    {
        url: "views/components/default/Overlay/OverlayDoc.md",
        revision: "82cef4c7233acd33b9abbcaf2b7e710f"
    },
    {
        url: "views/components/default/Overlay/OverlayTemplate.jsx",
        revision: "7ab12a779d5948f74ce5227230efd539"
    },
    {
        url: "views/components/default/SwitchLangBtn/index.js",
        revision: "47dc8efa53ffdac18799c4db5627c437"
    },
    {
        url: "views/components/default/SwitchLangBtn/SwitchLangBtn.styl",
        revision: "6354cd0e6ce51f52f77c53f6189241d1"
    },
    {
        url: "views/components/default/SwitchThemeBtn/index.js",
        revision: "c3506117b834bf92823c251130d05dbe"
    },
    {
        url: "views/components/default/Tooltip/index.js",
        revision: "41f6ce2e12b4330101d830e305284931"
    },
    {
        url: "views/components/default/Tooltip/tooltip.styl",
        revision: "954b1dc01f1b8894f2e6729955ecb301"
    },
    {
        url: "views/containers/ScrollToTop/index.js",
        revision: "150a98db051d797221abc9fa8337fad2"
    },
    {
        url: "views/features/index.js",
        revision: "ef99ad5dd87d257e1af6f668375d12fd"
    },
    {
        url: "views/features/UserAuth/actions.js",
        revision: "f37e11af7d02f3f5ed0293182fdae42a"
    },
    {
        url: "views/features/UserAuth/components/LoginForm/index.js",
        revision: "0f27acd284499c38ad0333c3e461a4d4"
    },
    {
        url: "views/features/UserAuth/components/LoginForm/LoginForm.styl",
        revision: "56bea1d9fbe2a1f65f58e3676d5b366e"
    },
    {
        url: "views/features/UserAuth/components/LogoutButton/index.js",
        revision: "aa040537a9bd96514271c53f01e92ea3"
    },
    {
        url:
            "views/features/UserAuth/components/LogoutButton/Logoutbutton.styl",
        revision: "e8c7c3a0b5295cd62c9f8af387df1090"
    },
    {
        url: "views/features/UserAuth/config.js",
        revision: "d987e061403de6f50447da04577fe4f5"
    },
    {
        url: "views/features/UserAuth/index.js",
        revision: "214d2a4c9ca6f73e7792940039e91771"
    },
    {
        url: "views/features/UserAuth/reducer.js",
        revision: "1348cd6267e180f33d522a0282d74bcd"
    },
    {
        url: "views/features/UserAuth/types.js",
        revision: "5ca04db857b1ffc918f30ba86498c506"
    },
    {
        url: "views/features/UserAuth/utils.js",
        revision: "47b6fdf751304250e882f1287b4d0cbb"
    },
    {
        url: "views/features/UserData/actions.js",
        revision: "8f6df906e75bcdd5da5bcf05fbe270aa"
    },
    {
        url: "views/features/UserData/components/GetUserParam/index.js",
        revision: "cecaf56d514b8564d3a7132e39176962"
    },
    {
        url: "views/features/UserData/config.js",
        revision: "c81d6f39403015bc06a906840b2817a4"
    },
    {
        url: "views/features/UserData/index.js",
        revision: "654dcc186fd709a00c2aff21a51b00a6"
    },
    {
        url: "views/features/UserData/reducer.js",
        revision: "0f1beaef8288afc7c700b9d4b37f2ea9"
    },
    {
        url: "views/features/UserData/types.js",
        revision: "b980448e61d9b9d619563e8469d3537e"
    },
    {
        url: "views/features/UserData/utils.js",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    },
    {
        url: "views/features/UserPassword/actions.js",
        revision: "3401cca4cf23b7657d3ac530a648d0ac"
    },
    {
        url:
            "views/features/UserPassword/components/ForgottenPassword/ForgottenPassword.styl",
        revision: "ccb244629b3f3848e49610d838896c5e"
    },
    {
        url:
            "views/features/UserPassword/components/ForgottenPassword/index.js",
        revision: "faaba42645bdb6e618f0da0ce29ea625"
    },
    {
        url: "views/features/UserPassword/components/NewPasswordForm/index.js",
        revision: "cc9c94964fca127b5e1b7cc9459cfa89"
    },
    {
        url:
            "views/features/UserPassword/components/NewPasswordForm/NewPasswordForm.styl",
        revision: "a75d7f79336b85a1b6634ac3002fe622"
    },
    {
        url: "views/features/UserPassword/config.js",
        revision: "04d466271326748d7a48bcc9602720c1"
    },
    {
        url:
            "views/features/UserPassword/containers/ChangePasswordContainer/index.js",
        revision: "6da6d08c504116478c25c9024a7bb26c"
    },
    {
        url:
            "views/features/UserPassword/containers/ResettingPasswordContainer/index.js",
        revision: "4fe7e96e447bd77856944368f663e2c4"
    },
    {
        url: "views/features/UserPassword/index.js",
        revision: "2fba772c192e1e5a36c4ced04d91b396"
    },
    {
        url: "views/features/UserPassword/reducer.js",
        revision: "edca0096d960a8e1592eb2003613e935"
    },
    {
        url: "views/features/UserPassword/types.js",
        revision: "9575eacd1bd55a89d9cd48ebb82143ca"
    },
    {
        url: "views/features/UserPassword/utils.js",
        revision: "ef02c55dd80a834a0345c223da264941"
    },
    {
        url: "views/layouts/DefaultLayout.js",
        revision: "85e800d8c7132b52bc9d93b7230ef51a"
    },
    {
        url: "views/layouts/Footer/Footer.js",
        revision: "e13b5cc2bc3d4867f062270147f30e5b"
    },
    {
        url: "views/layouts/Footer/Footer.styl",
        revision: "9b943512a044636520dedceb830f1aa7"
    },
    {
        url: "views/layouts/Header/Header.js",
        revision: "fc690758012c6b49bd263c205b1780ca"
    },
    {
        url: "views/layouts/Header/Header.styl",
        revision: "734e4c2ac82a11421694df1244d4d02e"
    },
    {
        url: "views/layouts/Nav/index.js",
        revision: "a243fffff7d67ed9e0e518cdbb1aa199"
    },
    {
        url: "views/layouts/Nav/Nav.styl",
        revision: "45587f8b6a898b75287b1a06300a617d"
    },
    {
        url: "views/pages/About/About.styl",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
    },
    {
        url: "views/pages/About/index.js",
        revision: "d62c5a1dc70297c9f267f2a037de177a"
    },
    {
        url: "views/pages/Dashboard/index.js",
        revision: "416565807e2eb334d43d5eaafb4878c8"
    },
    {
        url: "views/pages/ForgottenPasswordPage/ForgottenPassword.styl",
        revision: "58f9444f2e71a2ad9ee4d54c53b65a42"
    },
    {
        url: "views/pages/ForgottenPasswordPage/index.js",
        revision: "fa652e65e7715ec448114e539368a9ba"
    },
    {
        url: "views/pages/HomePage/HomePage.styl",
        revision: "4849c316eb18383185bc5d8a43b9bcf9"
    },
    {
        url: "views/pages/HomePage/index.js",
        revision: "4958e8f903482abd68de45f4f0932a65"
    },
    {
        url: "views/pages/Login/index.js",
        revision: "213958125082ee8bcdd573c742eec4a7"
    },
    {
        url: "views/pages/Login/LoginPage.styl",
        revision: "d0402c1dd7c0be5d780ad60690a45274"
    },
    {
        url: "views/pages/NotFound/index.js",
        revision: "9edd43fa3d0c541b83786d6a4fed7475"
    },
    {
        url: "views/pages/NotFound/NotFound.styl",
        revision: "00d7bc2cab6c123ed196b918de173cb0"
    },
    {
        url: "views/pages/ResettingPasswordPage/index.js",
        revision: "82f5650adbe72fd205b358b5ea404c34"
    },
    {
        url: "views/pages/ResettingPasswordPage/ResettingPasswordPage.styl",
        revision: "e788c51bcb215e83e066c39dee42cf7b"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
