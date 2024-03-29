import { app } from './app';
import { databaseURL, port } from './config';

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
