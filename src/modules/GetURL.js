class GetURL {

    constructor (url = '', data = '', method = 'POST') {

        this.url = url;
        this.method = method;
        this.body = JSON.stringify(data);
        this.errorRequest = 'Не удалось получить данные от сервера!';

    };

    async request(url = this.url) {
        
        return fetch(url, {
                method: this.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: this.body        
            });
    }

};

export default GetURL;