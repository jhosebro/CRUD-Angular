import { Router } from 'express';

import GamesController from '../controllers/gamesController';

class gamesRoutes {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config() : void {
        this.router.get('/', GamesController.list);
        this.router.get('/:id', GamesController.getOne);
        this.router.post('/', GamesController.create);
        this.router.put('/:id', GamesController.update);
        this.router.delete('/:id', GamesController.delete);
    }
}

const gameRoutes = new gamesRoutes();
export default gameRoutes.router;