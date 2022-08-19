import httpConf from "./http.config";

const prefix = '/images'

const getImages = () => {
    return httpConf.get(prefix)
};

const postLike = (id) => {
    return httpConf.post(`${prefix}/${id}/likes`)
};

export {
    getImages,
    postLike
}