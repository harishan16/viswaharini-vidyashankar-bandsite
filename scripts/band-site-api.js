class BandSiteApi {
    constructor (apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment (data) {
        try {
            let url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
            const response = await axios.post(url, data);
            return response;
        } catch(error) {
            console.error(error);
        }
    }    

    async getComments() {
        try {
            let url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
            const response = await axios.get(url);
            return response;
        } catch(error) {
            console.error(error);
        }
    }

    async getShows() {
        try {
            let url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;
            const response = await axios.get(url);
            return response;
        } catch(error) {
            console.log(error);
        }
    }

}


