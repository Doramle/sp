console.log(`spotify-json-2023.06.13`);
let url = $request.url;
// console.log(`ԭʼurl:${url}`);
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`�滻platform:${url}`);
} else {
    console.log('���账��');
}
$done({
    url
});