export class ApiClient {
    private apiKey: string;

    constructor() {
        this.apiKey = "8def2320e7486ac76d003497fe22ce5a";
    }

    async fetchFromApi(endpoint: string, options: RequestInit = {}) {
        const response = await fetch(
          `https://fe-sr-challenge.baymark.net/api/${endpoint}`,
          {
            ...options,
            headers: {
              ...options.headers,
              "Content-Type": "application/json",
              'Authorization': `Bearer ${this.apiKey}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        return await response.json()
      }

      async getCustomers() {
          return this.fetchFromApi('customers');
      }

      async getCustomerById(id: string) {
          return this.fetchFromApi(`customers/${id}`);
      }

}
