import {Request, Response} from 'express';

import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response){ 
        const games =  await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [req.params.id]);
        if(games.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({text:'El juego no existe'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message:'Juego guardado'})
    }

    public async delete (req: Request, res: Response): Promise<void> {
        await pool.query('DELETE FROM games WHERE id = ?', [req.params.id]);
        res.json({text:'El juego ' + req.params.id + ' ha sido eliminado'})
    }

    public async update (req: Request, res: Response): Promise<void> {
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, req.params.id]);
        res.json({text:'El juego ' + req.params.id + ' ha sido actualizado'})
    }
}

const gamesController = new GamesController();
export default gamesController;