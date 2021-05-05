
// Service is just a straight-up class, no need for decorator
export class LoggingService
{
    logStatusChange(status: string)
    {
        console.log('A server status changed, new status: ' + status);
    }
}