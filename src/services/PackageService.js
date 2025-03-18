
import requests from "./httpService";

const PackageService = {

    getPackage: async () => {
        return requests.get(`/package`);
    },
    getWebPackage: async () => {
        return requests.get(`/package/web`);
    },
    getPopularPackage: async () => {
        return requests.get(`/package/web/popular`);
    },
    updatePackage: async (id, body) => {
        return requests.patch(`/package/${id}`, body);
    },

    createPackage: async (body) => {

        return requests.post(`/package`, body);
    },
    deletePackage: async (id) => {
        return requests.delete(`/package/${id}`);
    },

}

export default PackageService;