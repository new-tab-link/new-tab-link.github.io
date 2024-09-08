
// listenActive();
export function listenActive(){
    var hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden':'';
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function () {
        if (!(document as any)[hiddenProperty]) {
            console && console.log('aaaaaaaaaaaaa页面激活', window.location.href);
            document.dispatchEvent(new Event(documentEventTypeDocumentIsShow))
        } else {
            console && console.log('aaaaaaaaaaaaa页面非激活', window.location.href);
            document.dispatchEvent(new Event(documentEventTypeDocumentIsHidden))
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
}

export const documentEventTypeDocumentIsShow = "documentEventTypeDocumentIsShow"
export const documentEventTypeDocumentIsHidden = "documentEventTypeDocumentIsHidden"