const router = require('express').Router()
const {tokenExtractor,isAdmin}=require("../utils/middleware")
const { User,Note,Team} = require('../models')

router.get('/', async (req, res) => {
  const users = await User.findAll(
    /*User.scope('disabled')-->gives users checking disabled*/    
    {
    include: [{
      model: Note,
      attributes: { exclude: ['userId'] }
    }, {
        model: Team,
        attributes: ['name', 'id'],
         through: {
          attributes: []
        }
      }]
  }
  )
  let usersWithNotes=await User.with_notes(0)
  res.json({...users,usersWithNotes})
})

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch(error) {
    return res.status(400).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [{
      model: Note,
      attributes:{exclude:["user_id"]}
    },
     {
        model: Note,
        as: 'marked_notes',
        attributes: { exclude: ['userId']},
        through: {
          attributes: []
       },
        include: {
          model: User,
          attributes: ['name']
        }

      },
    {
        model: Team,
        attributes: ['name', 'id'],
        through: {
          attributes: []
        }
      },]
  })
  if (user) {
   {/*  user.notes.forEach(note => {
  console.log(note.content)
})*/}
 let teams = undefined
  if (req.query.teams==="true") {
    teams = await user.getTeams({
      attributes: ['name'],
      joinTableAttributes: []  
    })
  }
    let notesNumber= await user.number_of_notes()
    res.json({ ...user.toJSON(),notesNumber,teams })
  } else {
    res.status(404).end()
  }
})

router.put('/:username', tokenExtractor, isAdmin, async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.params.username
    }
  })

  if (user) {
    user.disabled = req.body.disabled
    await user.save()
    res.json(user)
  } else {
    res.status(404).end()
  }
})

module.exports = router