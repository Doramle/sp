console.log(`spotify-json-2023.06.13`);
let url = $request.url;
// console.log(`Ô­Ê¼url:${url}`);
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`Ìæ»»platform:${url}`);
} else {
    console.log('ÎÞÐè´¦Àí');
}
$done({
    url
});
