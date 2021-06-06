const getPingStatus = async () => {
    try {
        return new Promise((resolve, reject) => {
            resolve({ status: "OK" });
        });
    } catch(e) {
        throw new Error(e.message)
    }
}

export {
    getPingStatus,
}