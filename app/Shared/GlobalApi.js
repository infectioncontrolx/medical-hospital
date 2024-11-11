const { default: axios } = require("axios");

const getGooglePlace = (category, radius, lat, lng, excludes) => {
    const queryParams = {
        category: category,
        radius: radius,
        lat: lat,
        lng: lng
    };

    if (excludes && excludes.length > 0) {
        queryParams.exclude = excludes.join(',');
    }

    const queryString = Object.keys(queryParams)
        .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
        .join('&');

    return axios.get(`/api/nearby?${queryString}`);
};

export default{
    getGooglePlace
}