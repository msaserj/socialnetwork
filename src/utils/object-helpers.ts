
export const updateObjectInArray = (items: any, itemId: number, objPropName: any, newObjProps: any) => {
    return items.map((usr: any) => {
        if (usr[objPropName] === itemId) {
            return {...usr, ...newObjProps}
        }
        return usr;
    })
}