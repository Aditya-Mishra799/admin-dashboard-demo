export default function hasPermission(requiredPermission, userPermission) {
    let current = userPermission;
    const keys = requiredPermission.split('.');
    for (let key of keys) { 
        if(typeof current !== 'object'){
            return false
        }
        if (typeof current === 'object' && (current[key] === undefined || current[key] === false)) {
            return false;
        }
        current = current[key];
    }
    return true;
}
