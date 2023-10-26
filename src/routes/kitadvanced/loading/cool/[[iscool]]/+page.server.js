export function  load({params}) {
    return {
        message : 'This is a messaje',
        cool: params.iscool? true : false,
    }
}
