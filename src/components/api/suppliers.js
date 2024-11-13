import apiRequest from "./api"

export const getSuppliers = async () => {
    try {
        const data = await apiRequest('/suppliers/', 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const getSupplierById = async (id) => {
    try {
        const data = await apiRequest(`/suppliers/${id}/`, 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const createSupplier = async (supplierData) => {
    try {
        const data = await apiRequest('/suppliers/', 'POST', supplierData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const updateSupplier = async (id, supplierData) => {
    try {
        const data = await apiRequest(`/suppliers/${id}/`, 'PUT', supplierData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const partiallyUpdateSupplier = async (id, supplierData) => {
    try {
        const data = await apiRequest(`/suppliers/${id}/`, 'PATCH', supplierData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const deleteSupplier = async (id) => {
    try {
        const data = await apiRequest(`/suppliers/${id}/`, 'DELETE');
        return data;
    }
    catch (error) {
        throw error;
    }
}
