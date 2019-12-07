export default {
  _HEADERS: { "Content-Type": "application/json" },
  async request(url, method = "GET", data) {
    const config = {
      method,
      headers: this._HEADERS
    };

    if (method === "POST" || method === "PATCH") {
      config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);
    return await response.json();
  },
  async get(url) {
    try {
      return await this.request(url);
    } catch (e) {
      throw e;
    }
  },
  async post(url, data = {}) {
    try {
      return await this.request(url, "POST", data);
    } catch (e) {
      throw e;
    }
  },
  async patch(url, data = {}) {
    try {
      return await this.request(url, "PATCH", data);
    } catch (e) {
      throw e;
    }
  },
  async delete(url) {
    try {
      return await this.request(url, "DELETE");
    } catch (e) {
      throw e;
    }
  }
};
