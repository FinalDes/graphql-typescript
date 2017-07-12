export class PortValidator {
    public static validate(port: any, alternative?: number): number {
        let result = alternative ? alternative : -1;
        port = parseInt(port, 10);
        if (port > 0 && port <= 65535) {
            result = port;
        }
        return result;
    }
}
