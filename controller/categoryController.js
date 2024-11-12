const Category = require('../models/categoryModel')

const create = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege) 
    }
}

const read = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}

const update = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}

const categoryDelete = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}

const list = async (req, res) => {
    try {

    } catch (error) { 
        return res.status(500).send(error.massege)
    }
}

const search = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send(error.massege)
    }
}


module.exports = { create, read, update, categoryDelete, search, list }
