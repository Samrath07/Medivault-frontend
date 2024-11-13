import apiRequest from "./api"

export const getCustomers = async () => {
    try {
        const data = await apiRequest('/customers/', 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const getCustomerById = async (id) => {
    try {
        const data = await apiRequest(`/customers/${id}/`, 'GET');
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const createCustomer = async (customerData) => {
    try {
        const data = await apiRequest('/customers/', 'POST', customerData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const updateCustomer = async (id, customerData) => {
    try {
        const data = await apiRequest(`/customers/${id}/`, 'PUT', customerData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const partiallyUpdateCustomer = async (id, customerData) => {
    try {
        const data = await apiRequest(`/customers/${id}/`, 'PATCH', customerData);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const deleteCustomer = async (id) => {
    try {
        const data = await apiRequest(`/customers/${id}/`, 'DELETE');
        return data;
    }
    catch (error) {
        throw error;
    }
}
