export const updateObjectInArray = (items, itemProp, requiredProp, newObj) => {
    return items.map(item => {
        if (item[itemProp] === requiredProp) {
            return {...item, ...newObj}
        }
        return item
    })
}
