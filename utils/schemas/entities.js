const joi = require('joi')

const collection = joi.object({
    collectionid:    joi.string().max(50).required(),
    collectiontype:  joi.string().max(50),
    entity_entityid: joi.string().max(50)
});


const dataset = joi.object({
    datasetid:   joi.string().max(50).required(),
    datasettype: joi.string().max(10)
});

const digitalentity = joi.object({
    digitalentitytype: joi.string().max(10),
    digitalentityid:   joi.string().max(50).required(),
    accessuri:         joi.string().max(100),
    format:            joi.string().max(100)
});

const entity = joi.object({
    entityid:            joi.string().max(50).required(),
    entitytype:          joi.string().max(15),
    entityremarks:       joi.string().max(50),
    entitycreated:       joi.string().max(20),
    entitypreferredname: joi.string().max(80)
});

const entity_assertion = joi.object({
    entityassertionid:    joi.string().max(50).required(),
    entityassertiontype:  joi.string().max(20),
    entityassertionvalue: joi.string().max(255),
    entity_entityid:      joi.string().max(50).required()
});

const entityevent = joi.object({
    event_eventid:   joi.string().max(50).required(),
    entity_entityid: joi.string().max(50).required()
});


const entityrelationship = joi.object({
    entityrelationshipid:          joi.string().max(30).required(),
    entityrelationshiptype:        joi.string().max(15),
    dependsonentityrelationshipid: joi.string().max(30).required(),
    subjectentityid:               joi.string().max(50).required(),
    objectentityid:                joi.string().max(50).required()
});

const event = joi.object({
    eventid:             joi.string().max(50).required(),
    eventtype:           joi.string().max(50),
    location_locationid: joi.string().max(50).required(),
    event_eventid:       joi.string().max(50).required(),
    protocol_protocolid: joi.string().max(50).required()
});


const eventassertion = joi.object({
    eventassertiontype:         joi.string().max(20).required(),
    eventassertionvalue:        joi.string().max(1200),
    eventassertionvaluenumeric: joi.number(),
    eventassertionunit:         joi.string().max(5),
    eventid:                    joi.string().max(50).required()
});

const identification = joi.object({
    identificationid:         joi.string().max(20).required(),
    identificationtype:       joi.string().max(10),
    taxonformula:             joi.string().max(1),
    verbatimidentification:   joi.string().max(20),
    dateidentified:           joi.string().max(20),
    isacceptedidentification: joi.string().max(1),
    identifiedby:             joi.string().max(30)
});


const identification_assertion = joi.object({
    identificationassertiontype: joi.string().max(20).required(),
    identificationasserionvalue: joi.string().max(10),
    iden_idenid:                 joi.string().max(20).required()
});


const identificationentity = joi.object({
    entityid:         joi.string().max(50).required(),
    identificationid: joi.string().max(20).required()
});


const location = joi.object({
    locationid:          joi.string().max(50).required(),
    location_locationid: joi.string().max(50).required()
});


const organism = joi.object({
    organismscope: joi.string().max(10),
    organismid:    joi.string().max(15).required()
});


const protocol = joi.object({
    protocoltype: joi.string().max(50),
    protocolid:   joi.string().max(50).required()
});


const taxon = joi.object({
    taxonid:           joi.string().max(7).required(),
    parenttaxonid:     joi.string().max(7).required(),
    scientificname:    joi.string().max(20),
    nomenclaturalcode: joi.string().max(5),
    taxonrank:         joi.string().max(7),
    kingdom:           joi.string().max(8),
    genericname:       joi.string().max(20),
    specificepithet:   joi.string().max(20)
});

const taxonassertion = joi.object({
    taxonassertiontype:  joi.string().max(20).required(),
    taxonassertionvalue: joi.string().max(50),
    taxon_taxonid:       joi.string().max(7).required()
});


const taxonidentification = joi.object({
    identificationid: joi.string().max(20).required(),
    taxonid:          joi.string().max(7).required(),
    taxonorder:       joi.string().max(1)
});

module.exports = {
    collection,
    dataset,
    digitalentity,
    entity,
    entity_assertion,
    entityevent,
    entityrelationship,
    event,
    eventassertion,
    identification,
    identification_assertion,
    identificationentity,
    location,
    organism,
    protocol,
    taxon,
    taxonassertion,
    taxonidentification
}