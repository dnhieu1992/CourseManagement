module.exports = {
    firstUpperCase: (username)=>{
        const name = username.toLowerCase();
        return name.charAt(0).toUpperCase() + name.slice(1);
    },
    toLowerCase: (str)=>{
        return str.toLowerCase();
    }
}
