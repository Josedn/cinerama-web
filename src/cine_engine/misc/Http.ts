export const genericGet = <T>(url: string, doAfter?: () => void): Promise<T> => {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options: RequestInit = {
            method: 'GET',
            mode: 'cors',
            headers,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            }).finally(() => {
                if (doAfter != null) {
                    doAfter();
                }
            });
    });
};

export const genericPost = <T>(url: string, payload: object, doAfter?: () => void): Promise<T> => {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const body = JSON.stringify(payload);

        const options: RequestInit = {
            method: 'POST',
            mode: 'cors',
            headers,
            body
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            }).finally(() => {
                if (doAfter != null) {
                    doAfter();
                }
            });
    });
};