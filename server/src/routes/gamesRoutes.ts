import { Router } from 'express';

class gamesRoutes {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/', (req, res) => res.send('Games'));
    }
}

const gameRoutes = new gamesRoutes();
export default gameRoutes.router;