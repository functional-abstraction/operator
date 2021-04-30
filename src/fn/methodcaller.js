export function methodcaller(name, ...args) {
	return (obj) => obj[name](...args);
}
