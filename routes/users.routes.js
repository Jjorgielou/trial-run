const express = require('express')
const router = express.Router()

let users = [
    { id: 1, name: 'Chelsea Oira', email: 'chelseaoira@example.com', role: 'user' },
    { id: 2, name: 'Chrisha Lorraine Oira', email: 'chrishalorraineoira@example.com', role: 'admin' }
]

// GET ALL USERS
router.get('/', (req, res) => {
    res.json({
        success: true,
        data: users
    })
})

// GET USER BY ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id))

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }

    res.json({
        success: true,
        data: user
    })
})


module.exports = router
