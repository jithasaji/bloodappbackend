const donates = require('../Models/donateScheme')
// const users = require('../Models/userSchema')

//insert donatestatus
exports.donateStatus = async (req, res) => {

    try {
        const { hospitalid, donatestatus } = req.body
        console.log("inside donate controller function");
        const personid = req.payload
        const existingUser = await donates.findOne({ hospitalid, personid })
        console.log(hospitalid, personid, donatestatus);

        if (existingUser) {
            console.log(existingUser);
            const updatestatus = await donates.findOneAndUpdate(
                { personid, hospitalid },
                { $set: { donatestatus } },
                { new: true }
            )
            res.status(200).json(updatestatus)
        }
        else {
            const newDonates = new donates({
                personid, hospitalid, donatestatus
            })
            await newDonates.save()

            res.status(200).json(newDonates)

        }
    }
    catch (err) {
        res.status(401).json(`donatestatus API failed!!!${err}`)
    }

}
//getpersondonatestatus

exports.getpersondonateStatus = async (req, res) => {

    try {

        console.log("inside getpersondonatestatus controller function");
        const  personid  = req.payload

        console.log(personid, "jhghjjh");

        const persondonateStatus = await donates.find({ personid })

        if (persondonateStatus) {
            res.status(200).json(persondonateStatus)
        } else {
            res.status(406).json("getpersondonatestatus not found!!!!!")
        }

    }
    catch (err) {
        res.status(401).json(`getpersondonatestatus API failed!!!${err}`)

    }

}
