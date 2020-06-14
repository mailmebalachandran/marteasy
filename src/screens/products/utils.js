export const getItemTransformedItemDesc = (item) => {
    return item.toString().replace(/(<([^>]+)>)/ig,"")
}