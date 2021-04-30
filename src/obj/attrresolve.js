
export function attrresolve (obj, attr) {

	var parts, i, len, name;

	parts = attr.split(".");

	len = parts.length;

    for (i = 0; i < len; ++i) {
    	name = parts[i];
        obj = obj[name];
    }

    return obj;

}

