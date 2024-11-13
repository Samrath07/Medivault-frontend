import apiRequest from "./api"

export const getMedicines = async () => {
    try {
        const data = await apiRequest('/medicines/', 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const getMedicineById = async (id) => {
    try {
        const data = await apiRequest(`/medicines/${id}/`, 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const createMedicine = async (medicineData) => {
    try {
        const data = await apiRequest('/medicines/', 'POST', medicineData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const updateMedicine = async (id, medicineData) => {
    try {
        const data = await apiRequest(`/medicines/${id}/`, 'PUT', medicineData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const partiallyUpdateMedicine = async (id, medicineData) => {
    try {
        const data = await apiRequest(`/medicines/${id}/`, 'PATCH', medicineData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const deleteMedicine = async (id) => {
    try {
        const data = await apiRequest(`/medicines/${id}/`, 'DELETE');
        return data;
    }
    catch (error) {
        throw error;
    }
}
