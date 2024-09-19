
export class UrlHeader {
  "access-control-allow-origin": string
  "cache-control": string
  "content-length": string
  "content-type": string
    "date":string
  "etag": string
}

// export type UrlHeader = {"access-control-allow-origin":"*","cache-control":"no-cache","content-length":"2359","content-type":"text/html","etag":"W/\"937-CFZbfwlVR8XNesodR0TVHNelBqk\""}
export function getNowModifyDate(){
    return document.lastModified;
}

export function getLastModifyDate(){
    return getUrlHeaders()?.etag;
}

export function getUrlHeaders():UrlHeader{

    var req = new XMLHttpRequest();
    // @ts-ignore
    req.open('GET', document.location, false);
    req.send(null);
    var hs = req.getAllResponseHeaders();
    let ha = hs.split(/[\n\r]/);
    let headers = new UrlHeader();
    for (let i = 0; i < ha.length; i++) {
        let s = ha[i];
        if(!s)continue;
        let index = s.indexOf(":")
        if(index == -1)continue;
        let name = s.slice(0, index);
        let value = s.slice(index);
        // @ts-ignore
        headers[name] = value.replace(" ", "");
    }
    // console.log("headers are", hs);
    // console.log("headers are", ha);
    // console.log("document is", headers)
    // console.log("date is", JSON.stringify(headers));
    // console.log("html is", document.documentElement.outerHTML)
    return headers;
}
export function compareLastModifyData(){
    const now = getNowModifyDate();
    const remote = getLastModifyDate();
    // console.log(now);
    // console.log(remote)
}