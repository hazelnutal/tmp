const getPingStatus = async (req, res) => {
    try {
        return new Promise((resolve, reject) => {
            resolve(res.status(200).json({ message: 'OK' }));
        });
    } catch(e) {
        throw new Error(e.message)
    }
}

export {
    getPingStatus,
}