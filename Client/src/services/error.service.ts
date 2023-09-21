class ErrorService {
    public static async log(message: string) {
        console.error(message);
    }
}

export default ErrorService.log;