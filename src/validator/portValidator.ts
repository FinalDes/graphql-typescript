export class PortValidator {
    public static validate(port: any) {
        let result = false;
        port = parseInt(port, 0);
        if (port > 0 && port < 65535) {
            result = port;
        }
        return result;
    }
}
