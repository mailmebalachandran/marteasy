export const getItemTransformedItemDesc = (item) => {
    let strippedText = item.toString().replace(/(<([^>]+)>)/ig,"");
    const MAX_LEN = 21
    const EXTN = "..."
    const NO_DESC = "Description Not Available"
    if(strippedText.length === 0 || strippedText === undefined) {
        return NO_DESC
    }
    if(strippedText.length > MAX_LEN) {
        return strippedText.slice(0, MAX_LEN-3).concat(EXTN)
    }
    return strippedText
}