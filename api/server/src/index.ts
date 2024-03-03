import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app: express.Express = express();
const port: number = 3000; // You shoud change use port;

app.get('/dockerps', (req: Request, res: Response) => {
    exec('docker ps --format "{{json .}}" | jq -s', (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.send(stdout);
    });
});


app.post('/dockercomposeup', (req: Request, res: Response) => {
    exec(`docker compose -f ${req} up -d`, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.send(stdout);
    });
});

// listen start
app.listen(port, () => {
    console.log(`Server is running at http://express_apiserver:${port}`); 
});
