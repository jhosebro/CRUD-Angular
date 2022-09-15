import { Router } from 'express';

import GamesController from '../controllers/gamesController';

class gamesRoutes {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/', GamesController.index );
    }
}

const gameRoutes = new gamesRoutes();
export default gameRoutes.router;