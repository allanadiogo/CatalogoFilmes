import { con } from './connection.js';

export async function inserirFilme(filme){
    const comando =
      `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                        VALUES ( ?, ?, ?, ?, ?, ?) `

    const[response] = await con.query(comando, [filme.usuario,filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    filme.id = response.insertId;

    return filme;
}