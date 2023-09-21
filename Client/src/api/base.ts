// Base api example
export default class Base {
    protected static url = "/api/base";

    public static async get(): Promise<string> {
        const response = await fetch(this.url);
        return await response.text();
    }
}