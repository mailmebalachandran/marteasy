export const getItemTransformedItemDesc = (item) => {
    let strippedText = item.toString().replace(/(<([^>]+)>)/ig,"");
    return strippedText
}