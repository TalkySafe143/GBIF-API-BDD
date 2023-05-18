const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

const cameraUUID = [
    'ff620258-e58f-47ea-8362-b3d6b3e8603d',
    '3ffb9b66-d5a8-402d-b5c7-dd0f3621786a',
    '50381605-d402-4b79-8f06-8b870625c6d0',
    'c0592010-c56c-411a-9830-1213f8c98e56',
    'dafb994e-4c4f-4726-a240-9ffb15aa9052',
    'b045cd74-df2e-498a-8145-1d28e8d10e21',
    'b1e1c654-f7c2-4d31-a6dc-de51adf2e122',
    '1695f71f-b341-4dab-b095-95bbaf4e0096',
    '686bb94e-6fa8-404d-af09-c4cc871c9192',
    '6884e4df-f671-490c-8802-8bdac385cd93',
    '076a2443-b386-4f7c-a612-daed89cd08be',
    'b7b6585a-2217-459b-9941-8654c7685b64',
    'b973ae67-4cfd-4892-b4fc-f498c00ece3e',
    '322273b8-fc1b-4191-ae92-beb97ff54fc8',
    '2a8a8ae5-a34a-46fd-913e-8dbe00da65c7',
    'cefbebfd-63c3-457c-8c70-91f623600980',
    '2fa0ab01-6705-4994-ab87-4df6d96172dd',
    'ebcfc705-25f5-4985-8e1f-f3dfecc9fc56',
    'bab105da-4c6b-41ad-b28c-99e23bb23ae4',
    '592e2fb5-66c4-48bd-82da-30abd2a93b23'
]

const deploymentsUUID = [
    '19eab8db-5d14-4903-81d0-705bb5a80b00',
    '34e04072-910f-4a48-b92e-6c2f1fa678c7',
    '3330f4c8-6cc6-4f1f-ac04-648dd1b8814e',
    '2b515d9b-8829-4252-9962-9aa79260c83e',
    'de0d52d1-33ff-406d-aa7c-94532fc5759b',
    '9ecf7f55-494c-463a-b349-cfeccbf6df69',
    '2592924f-e5bb-4806-9bbb-8019e7715fd0',
    '190e397f-c9bd-49db-9168-6a21ea733e95',
    '6ec1ba32-510b-4efb-9fef-193fbc812b66',
    'a69b7d8b-9437-489e-9e35-0ba1e8091536',
    '759e7da8-88c1-43af-83d6-19507c693b29',
    'b2faa01c-ee47-41b0-9d17-7b05f434f40d',
    '79c57f0a-6c1a-41f5-9d8e-be1e105a6715',
    'f90dd914-f0b7-4d0c-b6cb-9cdff0a98c7e',
    'b0228855-d78e-4054-8c8b-459470e6d6f2',
    'b674aa1b-267e-4d80-a42a-75ed320ac8d4',
    'f9bd9350-cdba-4f1e-94db-788b3d3459fb',
    '67ee2e48-47e8-4827-afac-c6951e397b7a',
    '4ff1e842-1dec-46e5-a77f-caefc7f2e0e7',
    '75c15566-bb1d-4698-9efc-9fd455dabff3'
]

const organismID = [
    '29029',
    '6687',
    '6998',
    '32250',
    '527',
    '22397',
    '1546',
    '5957',
    '23406',
    '30705',
    '258',
    '6933',
    '861',
    '8190',
    '4428',
    '29058',
    '5451',
    '699809',
    '5381',
    '3070552'
];

const taxonKeys = [
    '2484904',
    '2481759',
    '2481139',
    '5231190',
    '9537647',
    '2482593',
    '4135762',
    '2464708',
    '9705453',
    '2492462',
    '5232452',
    '6065824',
    '7429082',
    '2480389',
    '2495455',
    '2484916',
    '2484596',
    '4136422'
]

const i_details = [
    '31376e37-0749-4109-9829-8eaab81bf8a7',
    'c83f7704-ff77-4a3b-8b00-98a633696c06',
    '0bef2efc-81fe-473e-b56c-e372ff932442',
    '6421048e-aadb-410e-b552-e502e7d49db6',
    '8d549ab9-dd7a-40bb-b192-5ee26d4d535c',
    'bbd5567e-c41a-49d3-a1e0-ef32517c8710',
    '5f9345f1-f2e6-4073-bf8f-aaeb55382300',
    '48ce4109-c00d-4ddc-8544-5de23d3c3ada',
    '78f48d23-3f0a-4381-99e6-4caede471272',
    'ddb32be6-a8bb-4ed1-81fc-9150b07c2b15',
    '9d0ea331-571f-4985-8b1a-84e9119ed3e8',
    '60e49888-a5a3-4237-b0ab-4e4ff624b09d',
    'd1539243-0df0-4001-8e34-dea1643dd0db',
    'f1b1ba3b-0e6f-4c66-9255-9c641e6e5cae',
    '7658e32b-6d83-4bf4-89e9-eb4c7ed57b1d',
    '7b7266f1-9338-4b1e-91ca-65feff52580a',
    'ec8f33c0-8511-4858-916e-58c76339ed78',
    'cc655c7f-10b5-4b5c-a9e0-fe507d299a24',
    'bea39869-826c-472f-863b-fafc9706dcf8',
    'ac895b1b-f955-4c4c-af52-09cb97bfc6df'
]

const mediaDetails = [
    '7669da13-f1bb-4a82-a30d-a8738f37f4b8_2495455',
    'c0da2da2-ae9e-4a7f-8ed8-5c815fb5a07d_2495455',
    '3f8bf30b-3181-4318-808d-55015a36e784_2495455',
    '9da2a2d1-4e06-4357-bcee-238091e36710_2495455',
    '3936a5ec-daff-421a-a3e7-a2a342d44cfe_2495455',
    'ea29ba91-3543-432d-ac5f-591b15244843_2495455',
   ' 005d3452-7d8b-4f15-b52c-a842117fc85a_2495455',
    '8a3226fb-9d0b-4769-8107-4d61c29ae443_2495455',
    '42c2f417-bfff-4a83-aaa9-17b30916fdf5_2495455',
    '9d40f809-e144-4bfc-ab12-d71f96e1cbdb_5231190',
    '4754f635-8ec6-47b1-b20f-ea134fb429d6_2495455',
    '9e2eca64-8be1-4747-b760-577a9d47d304_5231190',
    'd7c24c8a-3d25-4ea4-b50e-d6a6dfb44eb0_5231190',
    'fd140798-c9d5-467d-a789-693e360a59d4_5231190',
    'ff49b7f7-c835-4707-9fd2-16bc1a6ea421_5231190',
    'fd196d1b-f3cf-46fe-a5f3-34ea45eaba81_5231190',
    'c971ce91-26e6-403f-afb7-6696e0ee23ca_5231190',
    '27d8e313-b0d7-4ec5-b9a6-23603db922e5_5231190',
    '6b655755-154c-4061-8575-a46960fdc008_5231190',
    'ba254abd-775d-4632-afa9-044cf0d305ee_5231190',
   ' 05e8fc86-65d2-4a04-816d-5ac55c25285c_5231190',
    '67ae35e8-11a4-4536-9712-5822cdaa0617_5231190',
    'bc253afd-0802-4a06-8835-d8fdc82f93fb_5231190',
    'b1ac5deb-b3c4-440f-a9c3-d99bcb8d8cfb_5231190',
    '74f9fced-30b0-4fd8-8e3d-7a0916e97465_5231190',
    'd56e316d-c466-4043-8be5-0c52e7bcb272_5231190',
    '59386afa-3254-493d-b494-20bf6707df75_9537647',
    '9d5019ee-80e0-4573-836d-45dffa338430_9537647',
    'e137840f-8fb7-4589-b3c5-e2bcb0a638d2_9537647',
    '433113f8-a59f-4d1e-a471-0ee9240b05ca_9537647',
    '488b1d3b-1fc7-46b0-819c-876d510a30da_9537647',
    '515f6c29-5b8a-4c2f-befe-bd2fe8fad58b_2481759',
    '174ebdd6-31c8-4de5-8eab-df7e4aa4daff_2481759',
    '6c36c254-2720-4444-aded-b733d072bffb_2481759',
   ' ef3ac716-3715-4c0e-953a-640e7e893e8d_2484916',
    '4cb002d9-0540-42c0-b955-a7fd52698e96_2484916',
    '984cf202-d779-4fca-93c2-d52a98104a8d_2484916',
    '1f6b3d77-cde7-41e8-a571-28a1c2f83b63_2484916',
    'b0038bc4-e0a6-445a-a770-c09013de3e7d_2484916',
    '48a3d093-d234-46a2-85dd-c1bf9051fb44_2484916',
    '3465c4f0-a81e-474a-af9e-eb99bce57b4d_2484916',
    '131b66f8-0573-48cd-bfd1-36f3bcd7219f_2484916',
    '697dbbe4-ff4d-41a7-978f-9b51e276deaf_2484916',
    '382f04f5-0c35-4ff5-b372-7ccbf5121854_9705453',
    '7873382c-6bd3-4bcf-ba1e-6211ea0f9d43_2484916',
    '130a3509-d779-4de6-8566-5c26fb27b3dc_9705453',
    '157c6925-6fe5-4790-99f5-108177773beb_9705453',
    '96e38291-9332-4e7c-b292-fa8777cafbe3_9705453',
    '929aa176-52e7-4096-9d61-461bdd86eaa4_9705453',
    'ecfd1a01-b38e-4b4f-9a21-882df0f66643_9705453',
    'b95c0d1b-5579-4e22-82f3-60ac5de1a5e4_2492462',
    '47bf04a8-1fbd-4084-b397-886b17af0d4b_2492462',
    '081f9471-b6c7-48f4-b32a-93ac9da08e67_2492462',
   ' 4f294fe2-db6a-471b-869d-78ed626bae27_2492462',
    'b155fe74-47f3-4d42-ae6b-6b52d8f0cbe3_2492462',
    'd0add4ad-b815-4c5c-b5e5-dae2ded1a81d_2492462',
    'c6da2557-5504-438a-832f-29d53aba2f00_2481139',
    'a5ad838b-3576-4642-bcb5-3f200876a8cb_2481139',
    'c24a268f-e1da-45c2-a37c-1115d3e6f01c_2481139',
    '741c73c7-e0e3-4b3f-8ff8-9d9417e4eb38_2481139',
    '03ab6b7e-3912-4fd3-8ea7-703d9ec2039e_2481139',
    '4b38c972-365c-4ec8-ab75-fe5270a71e83_6065824',
    'd3e6de9a-dfd7-4606-91b0-e1487dde7c78_2481139',
    '8f94e17e-7b0c-482b-bba2-831d526ccf53_6065824',
    'a7918de9-3220-44d3-886f-4b919cd9dc0b_6065824',
    'ad02de87-8fec-48e7-abfe-11a6c4645259_6065824',
    'aa1ef978-19d0-46de-b617-6fe2bc90f659_7429082',
    'a9e2f944-7789-426f-9fa2-d2e14c1c1112_6065824',
    '7842f55b-a354-40a6-b6d3-3771e0fa9060_7429082',
    '9c126607-cb37-41c6-980e-a9c206716b26_2481139',
    'b78f56c9-2d34-4e14-b5ae-d2d24468df65_7429082',
    '9ab835bc-3225-4842-bdff-a8571af53ee7_7429082'
]

const sequenceId = [
    '1b0cd7b4-711e-43df-a90a-c487ca112796',
    '6e140eb4-5ab6-4dac-bfb9-7ca26a3165b6',
    '3aec3290-f655-4b03-8ce9-8677721e8e23',
    '39cecf62-ba71-409a-998a-5d248103ffcf',
    '693fa176-9b8f-4ea9-baf5-290d672a0e03',
    '7fff167d-d47c-4360-9938-9a12d732c0f7',
    '3e8b5e8e-ed59-4cc3-9a14-76be66dd8367',
    'd0978011-f4f7-4930-8002-7beecb7f49a7',
    'ef615113-1360-42f4-9a70-bfa7bae7f311',
    '97d1bbe9-56e3-43c1-8b9b-61c7b1073c0a',
    'f92cf516-50ec-4714-90c0-ad89bbf53bd5',
    '9c7b46ed-e7a2-485a-a0c2-e5760eb4f699',
    'dff853bb-1dd7-4771-b484-08427c18892e',
    '1d9f422e-2ec3-40e9-a0a0-ebb67d3d3a17',
    'ef764714-8088-4d2c-b31f-2e71d51707e0',
    'f6851a0e-66d6-4662-aefb-496c2cffeaea',
    '6b88f87e-79da-4de7-a3b7-6a9975287ef6',
    'd735edf4-226d-4579-b9d9-68132e48e5dd',
    '335eed8a-a982-4e7e-8774-a4e152c2aff5',
    'fc4e6a54-57f3-439b-abfb-881abf70ff67'
];

const mediaIds = [
    '28eb3944-d004-4e6a-89c2-4b9c7f817b1d',
    '0fd35e49-0571-405c-ac12-a07fa1a16c88',
    '7041952b-046e-43b1-b359-ae5ad08b0a56',
    '9e1765ea-a0dd-433c-8f3d-d98647eda67f',
    '58b584b4-f7e7-4b1b-aed1-a1946fcc70c1',
    'f328d354-86c4-4df2-bdd7-fe0a15acb556',
    'a61f16fb-e84c-4fb5-bc23-2a3d43f37567',
    '32a5f299-c19b-48f3-aaf9-8b8b7119b064',
    'aa6e9e74-d6d0-4c6f-a95d-a014beb37264',
    '3a009a0a-9edf-4f68-835c-4762f4cb25c6',
    '4e15e873-5c73-474b-b989-d29ac8990c83',
    '2240cddf-3d80-49ec-8d98-87a6b0892aa7',
    'af6d8409-ee7b-4412-a48d-e2299ffbf4c7',
    '01f493b0-cfc1-4e6c-822a-5522aa5411d7',
    '679edeaf-ad4c-4829-8f10-9d14c3d22eef',
    'abb1b45a-fc2d-4f8b-85d3-8222adb7301b',
    '67f2b288-65ce-467e-8652-57b6e8337eab',
    'b90c1ec9-ec23-4633-832e-e1440bf38795',
    'be362259-ce9a-4369-92a3-39ad5224b123',
    'fe566e1a-3f26-4277-98cc-52fa4485e9a6'
]

async function x() {
    const r = await fetch('https://api.gbif.org/v1/occurrence/search');
    const data = await r.json();

    data.results.forEach((result, index) => {
        // console.log(`INSERT INTO location(locationid ,decimalLongitude, decimalLatitude, continent, state, province) VALUES('${result.identifier.valueOf()}',${result.decimalLongitude} , ${result.decimalLatitude} , '${result.continent}' ,'${result.stateProvince}' , '${result.stateProvince}');`)
        // console.log(`INSERT INTO Camera_details(cameraId, cameraModel) VALUES('${uuidv4()}', 'Canon camera');`)
        // console.log(`INSERT INTO deployment(installationKey, Location_locationId, Camera_Details_cameraid, issues) VALUES('${uuidv4()}', '${result.identifier}', '${cameraUUID[index]}', '${result.issues.length > 0 ? 'true': 'false' }');`)
        //console.log(`INSERT INTO Organism_details(organismId) VALUES('${!result.organismID ? Math.round(Math.random()*10000) : result.organismID}');`)
        // console.log(`INSERT INTO Taxon_Details(taxonKey, scientificName, kingdom, family, class) VALUES('${result.taxonKey}','${result.scientificName}', '${result.kingdom}', '${result.family}', '${result.class}');`)
        // console.log(`INSERT INTO Identification_Details(basisOfRecord, i_DetailsId) VALUES ('${result.basisOfRecord === 'HUMAN_OBSERVATION' ? "human" : "machine"}', '${uuidv4()}');`)
    })
}

async function media() {
    taxonKeys.forEach(async (key) => {
        const res = await fetch(`https://api.gbif.org/v1/species/${key}/media`)
        const data = await res.json();

        data.results.forEach(result => {
            fs.appendFile('dml.sql', `INSERT INTO Media_Details(identifier, creator, license, rightHolder, format, created, filename) VALUES ('${uuidv4()}_${key}', '${result.rightsHolder}', '${result.license}', '${result.rightsHolder}', '${result.format}', '${result.created}', '${result.identifier}');\n`, (err) => {
                if (err) console.log(err)
            });


            console.log(`INSERT INTO Media_Details(identifier, creator, license, rightHolder, format, created, filename) VALUES ('${uuidv4()}', '${result.rightsHolder}', '${result.license}', '${result.rightsHolder}', '${result.format}', '${result.created}', '${result.identifier}');`)
        })
    })
}

/*
*
* {
    key: 4090315311,
    datasetKey: '6ff8b3b0-ef0f-4f79-a310-5a5615c6aa0b',
    publishingOrgKey: '0c6d40e3-5d96-4a2d-9342-b02833aaa766',
    installationKey: 'b07988d2-1b3d-4fdb-931a-2e852ddac2dd',
    publishingCountry: 'GB',
    protocol: 'EML',
    lastCrawled: '2023-05-05T09:56:10.688+00:00',
    lastParsed: '2023-05-05T10:04:14.067+00:00',
    crawlId: 11,
    hostingOrganizationKey: '0c6d40e3-5d96-4a2d-9342-b02833aaa766',
    extensions: {},
    basisOfRecord: 'HUMAN_OBSERVATION',
    occurrenceStatus: 'PRESENT',
    taxonKey: 2492462,
    kingdomKey: 1,
    phylumKey: 44,
    classKey: 212,
    orderKey: 729,
    familyKey: 9322,
    genusKey: 2492460,
    speciesKey: 2492462,
    acceptedTaxonKey: 2492462,
    scientificName: 'Erithacus rubecula (Linnaeus, 1758)',
    acceptedScientificName: 'Erithacus rubecula (Linnaeus, 1758)',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    order: 'Passeriformes',
    family: 'Muscicapidae',
    genus: 'Erithacus',
    species: 'Erithacus rubecula',
    genericName: 'Erithacus',
    specificEpithet: 'rubecula',
    taxonRank: 'SPECIES',
    taxonomicStatus: 'ACCEPTED',
    iucnRedListCategory: 'LC',
    decimalLongitude: -2.217774,
    decimalLatitude: 52.221364,
    continent: 'EUROPE',
    stateProvince: 'England',
    year: 2023,
    month: 1,
    day: 20,
    eventDate: '2023-01-20T14:21:26',
    issues: [ 'COORDINATE_ROUNDED', 'CONTINENT_DERIVED_FROM_COORDINATES' ],
    lastInterpreted: '2023-05-05T10:04:14.067+00:00',
    license: 'http://creativecommons.org/licenses/by/4.0/legalcode',
    identifiers: [ [Object] ],
    media: [],
    facts: [],
    relations: [],
    gadm: {
      level0: [Object],
      level1: [Object],
      level2: [Object],
      level3: [Object]
    },
    isInCluster: false,
    recordedBy: 'ba03d4b7de757d3b8958c7341afc94a473a9972691a7502c4801f5b357adbddc',
    class: 'Aves',
    countryCode: 'GB',
    recordedByIDs: [],
    identifiedByIDs: [],
    country: 'United Kingdom of Great Britain and Northern Ireland',
    identifier: '00098493-26ed-457a-b040-9fcbc0016607',
    vernacularName: 'European Robin',
    organismID: '30705',
    georeferenceVerificationStatus: 'Verified by data custodian',
    municipality: 'Claines',
    locality: 'Arboretum Community Gardens',
    identificationVerificationStatus: 'Accepted',
    gbifID: '4090315311',
    occurrenceID: '00098493-26ed-457a-b040-9fcbc0016607',
    verbatimIdentification: 'Erithacus rubecula'
  }

*
* */

//x();
//media();

// deploymentsUUID.forEach((key, index) => {
//     fs.appendFile('./Media.sql', `INSERT INTO Media(mediaId, secuenceId, timestamp, Media_Details_identifier, Deployment_installationKey) VALUES('${uuidv4()}', '${uuidv4()}', '${new Date().toString()}', '${mediaDetails[index]}', '${key}');\n`, (err) => {
//         if (err) console.log(err);
//     });
// })

const obsPoss = [
    'animal',
    'blank',
    'unclassified',
    'unknown',
    'vehicle',
    'human'
]

deploymentsUUID.forEach((key, index) => {
    fs.appendFile('./Observations.sql', `INSERT INTO Observation(observationId,observationType, Media_mediaID, DETAILSID, TAXON_DETAILS_TAXONKEY, ORGANISMID, MEDIA_DETAILS_IDENTIFIER, CLASSIFICATIONTIMESTAMP, COUNT, Deployment_installationKey, SECUENCEID) VALUES('${uuidv4()}', '${obsPoss[(Math.round(Math.random()*100) % 6)]}', '${mediaIds[index]}', '${i_details[index]}', '${mediaDetails[index].split("_")[1]}', '${organismID[index]}', '${mediaDetails[index]}', '${new Date().toString()}', '${(Math.round(Math.random()*100) % 2) + 1}', '${key}', '${sequenceId[index]}');\n`, (err) => {
        if (err) console.log(err);
    });
})