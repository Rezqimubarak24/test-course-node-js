const db = require('../config')

exports.getHero = (response) => {
    //query data
    const sql = "SELECT * FROM `hero`"
    //execute data
    db.query(sql, (error, result) => {
        if (error) return console.log('error: ', error)
            //response data
        const heroes = {
            title: "MOBILE-LEGEND-HERO-LIST",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('index', { heroes })
        response.end()
    })
}
//input list
exports.getHeroById = (id, response) => {
    const sql = `SELECT * FROM hero WHERE id = '${id}'`
    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        const hero = {
            title: "DATA HERO BY ID",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('heroDetail', { hero })
        response.end()
    })
}
//update from list
exports.updateHeroById = (data, response) => {
    const id = data.id
    const name = data.name
    const role = data.role
    const wr = data.wr
    const pertandingan = data.pertandingan
    const mvp = data.mvp
    const savege = data.savege
    const sql = `UPDATE hero SET name = '${name}', role = '${role}', wr = '${wr}', pertandingan = '${pertandingan}', mvp = '${mvp}', savege = '${savege}' WHERE id = '${id}'`
    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/hero')
        response.end()
    })
}
//add to list
exports.addHero = (data, response) => {
    const name = data.name
    const role = data.role
    const wr = data.wr
    const pertandingan = data.pertandingan
    const mvp  = data.mvp
    const savege = data.savege
    const sql = `INSERT INTO hero (name, role, wr, pertandingan, mvp, savege) VALUES ('${name}', '${role}', '${wr}', '${pertandingan}', '${mvp}', '${savege}')`
    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/hero')
        response.end()
    })
}
//delete from list
exports.removeHero = (id, response) => {
    const sql = `DELETE FROM hero WHERE id='${id}'`
    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/hero')
        response.end()
    })
}