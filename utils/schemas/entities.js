const joi = require('joi')

const camera_details =  joi.object({
    cameraid:    joi.string().max(50).required(),
    cameramodel: joi.string().max(50)
})
const deployment =  joi.object({
    installationkey :        joi.string().max(50 ).required(),
    featuretype  :           joi.string().max(50 ),
    habitat    :             joi.string().max(50 ),
    issues   :               joi.string().max(5 ),
    location_locationid :    joi.string().max(50 ).required(),
    setupby       :          joi.string().max(50 ),
    baituse      :           joi.string().max(5 ),
    deploymentcomments   :   joi.string().max(255 ),
    camera_details_cameraid: joi.string().max(50 ).required()
})
const identification_details =  joi.object({
    basisofrecord: joi.string().max(50).required(),
    i_detailsid :  joi.string().max(50 ).required()
})
const location =  joi.object({
    locationid    :        joi.string().max(50 ).required(),
    decimallatitude   :    joi.number().required(),
    decimallongitude  :    joi.number().required(),
    continent   :          joi.string().max(50 ),
    state       :          joi.string().max(50 ),
    province      :        joi.string().max(50 ),
    locationname  :        joi.string().max(40 ),
    coordinateuncertainty: joi.number()
})
const media =  joi.object({
        mediaid   :                 joi.string().max(50).required(),
        mediatype   :               joi.string().max(50),
        capturemethod   :           joi.string().max(50),
        secuenceid     :            joi.string().max(50).required(),
        timestamp      :            joi.date().required(),
        mediacomments   :           joi.string().max(255 ),
        media_details_identifier:   joi.string().max(50).required(),
        deployment_installationkey: joi.string().max(50 ).required()
})
const media_details =  joi.object({
    identifier:  joi.string().max(50).required(),
    creator  :   joi.string().max(50),
    license  :   joi.string().max(50),
    rightholder: joi.string().max(50),
    format   :   joi.string().max(50),
    created  :  joi.string().max(50),
    filename  :  joi.string().max(55 )
})
const observation =  joi.object({
    observationid    :          joi.string().max(50).required(),
    observationtype   :         joi.string().max(12 ).required(),
    media_mediaid     :         joi.string().max(50).required(),
    detailsid        :          joi.string().max(50 ).required(),
    taxon_details_taxonkey  :   joi.string().max(50).required(),
    organismid            :     joi.string().max(50).required(),
    media_details_identifier :  joi.string().max(50).required(),
    classificationtimestamp  :  joi.date().required(),
    count                  :    joi.number(),
    deployment_installationkey:joi.string().max(50 ).required(),
    secuenceid          :      joi.string().max(50).required()
})
const organism_details =  joi.object({
        organismid: joi.string().max(50).required(),
        animaltype: joi.string().max(50 ),
        lifestage : joi.string().max(8 ),
        sex      :  joi.string().max(6 )
})
const taxon_details = joi.object({
    taxonkey      : joi.string().max(50).required(),
    scientificname: joi.string().max(50),
    kingdom       : joi.string().max(50),
    family        : joi.string().max(50),
    class         : joi.string().max(50)
})
module.exports = {
    camera_details,
    deployment,
    identification_details,
    location,
    media,
    media_details,
    observation,
    organism_details,
    taxon_details
}