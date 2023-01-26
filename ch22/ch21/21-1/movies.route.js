import express from 'express'

const router = express.Router()

router.route('/').get((req,res) => res.send('2019250059 한민욱 hello world'))

export default router