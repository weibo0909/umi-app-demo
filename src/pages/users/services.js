import request from '../../../utils/request';

export function fetch({page}) {
    return request(`/api/users?page=${page}&limit=${10}`);
}

export function remove(id) {
    return request(`/api/users/${id}`, {
        method: 'DELETE'
    });
}

export function patch(id, values) {
    return request(`/api/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(values)
    });
}

export function create(values) {
    return request('/api/users', {
        method: 'POST',
        body: JSON.stringify(values)
    });
}
