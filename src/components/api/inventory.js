import apiRequest from "./api";

export const getInventoryItems = async () => {
    try {
        const data = await apiRequest('/inventory/', 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const getInventoryItemById = async (id) => {
    try {
        const data = await apiRequest(`/inventory/${id}/`, 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const createInventoryItem = async (inventoryData) => {
    try {
        const data = await apiRequest('/inventory/', 'POST', inventoryData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const updateInventoryItem = async (id, inventoryData) => {
    try {
        const data = await apiRequest(`/inventory/${id}/`, 'PUT', inventoryData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const partiallyUpdateInventoryItem = async (id, inventoryData) => {
    try {
        const data = await apiRequest(`/inventory/${id}/`, 'PATCH', inventoryData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const deleteInventoryItem = async (id) => {
    try {
        const data = await apiRequest(`/inventory/${id}/`, 'DELETE');
        return data;
    }
    catch (error) {
        throw error;
    }
}
