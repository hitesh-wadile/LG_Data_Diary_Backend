const mongoose = require("mongoose");


const activitySchema = new mongoose.Schema({
    activityType: { type: String }, // Type of activity (e.g., Seminar, Workshop, Hackathon, Competition)
    name: { type: String }, 
    date: { type: Date }, 
    organizer: { type: String }, 
    description: { type: String }, 
});


const certificateSchema = new mongoose.Schema({
    name: { type: String }, 
    issueDate: { type: Date }, 
    description: { type: String }, 
    url: { type: String }, 
});


const resumeSchema = new mongoose.Schema({
    title: { type: String },  
    url: { type: String }, 
});


const projectSchema = new mongoose.Schema({
    title: { type: String }, 
    description: { type: String }, 
    skills: [String], 
    startDate: { type: Date }, 
    endDate: { type: Date }, 
    url: { type: String }, 
});

const portfolioSchema = new mongoose.Schema({
    activities: [activitySchema], // Array  of student activities
    certificates: [certificateSchema], // Array of student certificates
    resumes: [resumeSchema], // Array of student resumes
    projects: [projectSchema], // Array of student projects
});


const defaultActivity = {
    activityType: null,
    name: null,
    date: null,
    organizer: null,
    description: null,
};

const defaultCertificate = {
    name: null,
    issueDate: null,
    description: null,
    url: null,
};

const defaultResume = {
    title: null,
    url: null,
};

const defaultProject = {
    title: null,
    description: null,
    skills: [],
    startDate: null,
    endDate: null,
    url: null,
};

const defaultPortfolio = {
    activities: [defaultActivity],
    certificates: [defaultCertificate],
    resumes: [defaultResume],
    projects: [defaultProject],
};

module.exports = mongoose.model("Portfolio", portfolioSchema);
module.exports.defaultPortfolio = defaultPortfolio;


