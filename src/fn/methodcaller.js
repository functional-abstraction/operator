const methodcaller = (name, ...args) => (obj) => obj[name](...args);
export default methodcaller;
