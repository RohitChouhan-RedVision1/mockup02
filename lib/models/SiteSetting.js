
import mongoose from 'mongoose'
const SiteSettingsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
    },
    mobile2: {
        type: String,
    },
    address: {
        type: String,
    },
    arn: {
        type: String,
    },
    euin: {
        type: String,
    },
    mapurl: {
        type: String,
    },
    description: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
},
    {
        timestamps: true
    })

const SiteSettingsModel = mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);

export default SiteSettingsModel;