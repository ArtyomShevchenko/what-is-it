const express = require("express")
const app = express()
const PORT = 3000
const fs = require("fs")
const colors = require("colors")

const multer = require("multer")
const upload = multer({ dest: "./uploads" })

// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded())

app.use(express.urlencoded());
app.use(express.json());

// -------------- sms start ---------------

// install dependencies --npm i twilio

const accountSid = "ACd7d9a795076462aa00d8222242628ad5";
const authToken = "1d842143f08e5ebc63c0e0ce2679a17c";
const smsFrom = "+14308031713"
const smsTo = "+380934877758"
const client = require("twilio")(accountSid, authToken);

// client.messages
//     .create({ body: "Hello from Twilio", from: smsFrom, to: smsTo })
//     .then(message => console.log(message.sid));

// -------------- sms end -----------------

app.route("/")
    .get((req, res, next) => {
        res.send("Server work...")
        next()
    })

app.route("/all")
    .get((req, res, next) => {
        fs.readFile(
            "./server/database.json",
            "utf-8",
            (err, data) => {
                if (err) throw err

                res.send(data)
                next()
            }
        )
    })

app.route("/new-post")
    .post(upload.any(), (req, res, next) => {
        fs.readFile(
            "./server/database.json",
            "utf-8",
            (err, data) => {
                if (err) throw err

                const arr = JSON.parse(data)

                // add id to post
                req.body.id = Number(Date.now())

                // add create time
                req.body.time = Date()

                arr.unshift(req.body)

                fs.writeFile(
                    "./server/database.json",
                    JSON.stringify(arr),
                    (err) => {
                        if (err) throw err
                    }
                )

                res.sendStatus(235)
                next()
            }
        )
    })

app.route("/post/:id")
    .get((req, res, next) => {
        fs.readFile(
            "./server/database.json",
            "utf-8",
            (err, data) => {
                if (err) throw err

                JSON.parse(data).filter(post => {
                    if (post.id == req.params.id) {
                        res.send(post)
                    }
                })
            })
    })

    .post(upload.any(), (req, res, next) => {
        fs.readFile(
            "./server/database.json",
            "utf-8",
            (err, data) => {
                if (err) throw err
                const newData = []

                JSON.parse(data).filter(post => {
                    if (post.id != req.params.id) {
                        newData.push(post)
                    }
                })

                JSON.parse(data).filter(post => {
                    if (post.id == req.params.id) {
                        if (post.comments) {
                            post.comments.push(req.body)
                            newData.push(post)
                        } else {
                            post.comments = Array(req.body)
                            newData.push(post)
                        }
                    }
                })

                fs.writeFile(
                    "./server/database.json",
                    JSON.stringify(newData),
                    (err) => { if (err) throw err }
                )

                res.sendStatus(200)
                next()
            })
    });

app.route("/top")
    .get((req, res, next) => {
        fs.readFile(
            "./server/database.json",
            "utf-8",
            (err, data) => {
                if (err) throw err

                const sortData = JSON.parse(data)
                sortData.sort();

                console.log(sortData)

                res.send(data)
                next()
            }
        )
    })

app.route("/contact")
    .post(upload.any(), (req, res, next) => {
        const userName = req.body.name

        fs.readFile(
            "./server/contact.json",
            "utf-8",
            (err, data) => {
                if (err) console.log(err)

                const file = JSON.parse(data)
                file.push(req.body)

                fs.writeFile(
                    "./server/contact.json",
                    JSON.stringify(file),
                    err => {
                        if (err) console.log(err)
                        console.log(colors.bgGreen(`New contact: ${userName}`))

                        client.messages
                            .create({ body: `User ${userName} left contac!`, from: smsFrom, to: smsTo })
                            .then(message => console.log(message.sid));
                    }
                )
            });

        res.sendStatus(235)
        next()
    })

// .post((req, res, next) => {
//     fs.readFile(
//         "./server/database.json",
//         "utf-8",
//         (err, data) => {
//             if (err) throw err

//             const database = JSON.parse(data)
//             console.log(colors.blue("File database.json is read!"))

//             database.filter((post, index) => {
//                 post.id == req.params.id
//                 if (database[index].comments) {
//                     database[index].comments.push(req.body)
//                     console.log(colors.magenta("Push comment in arr"))
//                 } else {
//                     database[index].comments = [req.body]
//                     console.log(colors.magenta("Add comment in new arr"))
//                 }
//             })

//             fs.writeFile(
//                 "./server/database.json",
//                 JSON.stringify(database),
//                 "utf-8",
//                 err => {
//                     if (err) throw err
//                 }
//             )
//         }
//     )
// })

// app.route("/test/:id")
//     .get((req, res, next) => {
//         res.send("/test/" + req.params.id)
//     })

app.listen(3000, () => console.log(colors.bold.magenta("Server work on ") + colors.blue("==> ") + colors.bgMagenta(`http://localhost:${PORT}`)))