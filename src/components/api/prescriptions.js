import apiRequest from "./api"

export const getPrescriptions = async () => {
    try {
        const data = await apiRequest('/prescriptions/', 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const getPrescriptionById = async (id) => {
    try {
        const data = await apiRequest(`/prescriptions/${id}/`, 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const createPrescription = async (prescriptionData) => {
    try {
        const data = await apiRequest('/prescriptions/', 'POST', prescriptionData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const updatePrescription = async (id, prescriptionData) => {
    try {
        const data = await apiRequest(`/prescriptions/${id}/`, 'PUT', prescriptionData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const partiallyUpdatePrescription = async (id, prescriptionData) => {
    try {
        const data = await apiRequest(`/prescriptions/${id}/`, 'PATCH', prescriptionData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const deletePrescription = async (id) => {
    try {
        const data = await apiRequest(`/prescriptions/${id}/`, 'DELETE');
        return data;
    }
    catch (error) {
        throw error;
    }
}
